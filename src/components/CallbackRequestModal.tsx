import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Send } from "lucide-react";

const CLIENT_WHATSAPP = "447542973733";
const CLIENT_EMAIL = "Angeligardens1@gmail.com";
// Whoever picks up the WhatsApp / inbox — the message is addressed to them by name.
const CLIENT_FIRST_NAME = "Marley";

type Channel = "whatsapp" | "email";

function getMinDatetime(): string {
  const now = new Date();
  // Round up to next hour
  now.setMinutes(0, 0, 0);
  now.setHours(now.getHours() + 1);
  // If before 08:00, snap to 08:00
  if (now.getHours() < 8) now.setHours(8);
  // If at or after 20:00, move to next day 08:00
  if (now.getHours() >= 20) {
    now.setDate(now.getDate() + 1);
    now.setHours(8);
  }
  // Format for datetime-local (YYYY-MM-DDTHH:MM)
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:00`;
}

function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  // Strip leading 44 or 0
  const stripped = digits.startsWith("44")
    ? digits.slice(2)
    : digits.startsWith("0")
    ? digits.slice(1)
    : digits;
  if (stripped.length < 9 || stripped.length > 11) return null;
  return stripped;
}

// Group the national number so it's readable when the client copies it down.
// Only the shapes we can be sure of are grouped; anything else is left alone
// rather than risk splitting it in a misleading place.
function formatPhoneForDisplay(national: string): string {
  if (national.length !== 10) return national;
  // London and other 2x area codes: 20 7946 0018
  if (national.startsWith("2")) {
    return `${national.slice(0, 2)} ${national.slice(2, 6)} ${national.slice(6)}`;
  }
  // Mobiles and most geographic numbers: 7700 900123
  return `${national.slice(0, 4)} ${national.slice(4)}`;
}

function formatPreferredTime(value: string): string {
  if (!value) return value;
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(value));
  } catch {
    return value;
  }
}

// Written in the customer's own voice — it arrives from their WhatsApp account,
// so a form dump would read oddly. Only the phone number is required, so the
// optional lines are left out entirely rather than sent through as empty ones.
function buildMessage(phone: string, preferredTime: string, reason: string): string {
  const lines = [
    `Hi ${CLIENT_FIRST_NAME}, I've just submitted a callback request through the Angeli Gardens website.`,
    "",
    `My number is: +44 ${formatPhoneForDisplay(phone)}`,
  ];
  if (preferredTime) {
    lines.push(`Best time to call: ${formatPreferredTime(preferredTime)}`);
  }
  if (reason) lines.push(`What it's about: ${reason}`);
  lines.push("", "Please give me a call when you get a chance. Thanks!");
  return lines.join("\n");
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CallbackRequestModal({ open, onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");
  const [handedOffTo, setHandedOffTo] = useState<Channel | null>(null);

  const phoneNorm = normalisePhone(phone);
  const isValid = phoneNorm !== null;

  function openWhatsApp() {
    if (!phoneNorm) return;
    const msg = buildMessage(phoneNorm, preferredTime, reason.trim());
    window.open(
      `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setHandedOffTo("whatsapp");
  }

  function openEmail() {
    if (!phoneNorm) return;
    const msg = buildMessage(phoneNorm, preferredTime, reason.trim());
    const subject = encodeURIComponent(
      `New callback request — +44 ${formatPhoneForDisplay(phoneNorm)}`
    );
    // Navigate rather than window.open: a mailto: in a new tab leaves a blank
    // tab behind on iOS Safari once the mail app takes over.
    window.location.href = `mailto:${CLIENT_EMAIL}?subject=${subject}&body=${encodeURIComponent(msg)}`;
    setHandedOffTo("email");
  }

  function handleClose() {
    setPhone("");
    setPreferredTime("");
    setReason("");
    setHandedOffTo(null);
    onClose();
  }

  const onWhatsApp = handedOffTo === "whatsapp";

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-md">
        {handedOffTo ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Send size={26} />
            </div>
            <DialogHeader>
              <DialogTitle>Almost there — press send</DialogTitle>
              <DialogDescription>
                {onWhatsApp
                  ? "WhatsApp should now be open with your message ready. Press send there and we'll call you back."
                  : "Your email app should now be open with the message ready. Press send there and we'll call you back."}
              </DialogDescription>
            </DialogHeader>

            {/* Nothing has actually been sent yet, so both a retry and a
                switch to the other channel stay available. */}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                className="gap-2"
                onClick={onWhatsApp ? openWhatsApp : openEmail}
              >
                {onWhatsApp ? <MessageCircle size={18} /> : <Mail size={18} />}
                {onWhatsApp ? "Reopen WhatsApp" : "Reopen email"}
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={onWhatsApp ? openEmail : openWhatsApp}
              >
                {onWhatsApp ? <Mail size={18} /> : <MessageCircle size={18} />}
                {onWhatsApp ? "Send by email instead" : "Send on WhatsApp instead"}
              </Button>
              <Button variant="ghost" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>We're currently out of hours — schedule a callback</DialogTitle>
              <DialogDescription>
                Leave your number and we'll call you back.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-2">
              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="cb-phone">Phone number</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                    +44
                  </span>
                  <Input
                    id="cb-phone"
                    type="tel"
                    placeholder="7700 900123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
                {phone && phoneNorm === null && (
                  <p className="text-xs text-destructive">
                    Enter a valid UK number (9–11 digits after country code)
                  </p>
                )}
              </div>

              {/* Preferred time */}
              <div className="space-y-1">
                <Label htmlFor="cb-time">
                  Preferred callback time{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="cb-time"
                  type="datetime-local"
                  min={getMinDatetime()}
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                />
              </div>

              {/* Reason */}
              <div className="space-y-1">
                <Label htmlFor="cb-reason">
                  Anything we should know?{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="cb-reason"
                  placeholder="e.g. Garden tidy-up quote for a 3-bed semi"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 gap-2"
                    disabled={!isValid}
                    onClick={openWhatsApp}
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                    disabled={!isValid}
                    onClick={openEmail}
                  >
                    <Mail size={18} />
                    Send by email
                  </Button>
                </div>
                {/* Said before the handoff, while it can still change what they do. */}
                <p className="text-xs text-muted-foreground text-center">
                  Opens with your message already written — you just press send.
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
