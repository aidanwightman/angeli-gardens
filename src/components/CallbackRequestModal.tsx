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
import { MessageCircle, Mail } from "lucide-react";

const CLIENT_WHATSAPP = "447542973733";
const CLIENT_EMAIL = "Angeligardens1@gmail.com";

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

function buildMessage(phone: string, preferredTime: string, reason: string): string {
  return (
    `New callback request from the Angeli Gardens website\n\n` +
    `Phone: +44 ${phone}\n` +
    `Preferred callback time: ${formatPreferredTime(preferredTime)}\n` +
    `Reason: ${reason}`
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CallbackRequestModal({ open, onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");
  const [sent, setSent] = useState(false);

  const phoneNorm = normalisePhone(phone);
  const isValid =
    phoneNorm !== null &&
    preferredTime !== "" &&
    reason.trim().length >= 5;

  function handleWhatsApp() {
    if (!isValid || !phoneNorm) return;
    const msg = buildMessage(phoneNorm, preferredTime, reason.trim());
    window.open(
      `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  function handleEmail() {
    if (!isValid || !phoneNorm) return;
    const msg = buildMessage(phoneNorm, preferredTime, reason.trim());
    const subject = encodeURIComponent(`New callback request — +44 ${phoneNorm}`);
    const body = encodeURIComponent(msg);
    window.open(`mailto:${CLIENT_EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
  }

  function handleClose() {
    setPhone("");
    setPreferredTime("");
    setReason("");
    setSent(false);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-md">
        {sent ? (
          <div className="py-6 text-center space-y-4">
            <div className="text-5xl">✓</div>
            <DialogHeader>
              <DialogTitle>Message on its way!</DialogTitle>
              <DialogDescription>
                Thanks — your message is on its way. We'll be in touch.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="mt-4">Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>We're currently out of hours — schedule a callback</DialogTitle>
              <DialogDescription>
                Leave your number and a quick note and we'll call you back.
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
                <Label htmlFor="cb-time">Preferred callback time</Label>
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
                <Label htmlFor="cb-reason">Reason / message</Label>
                <Textarea
                  id="cb-reason"
                  placeholder="e.g. Garden tidy-up quote for a 3-bed semi"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                {reason && reason.trim().length < 5 && (
                  <p className="text-xs text-destructive">Please add a little more detail</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  className="flex-1 gap-2"
                  disabled={!isValid}
                  onClick={handleWhatsApp}
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  disabled={!isValid}
                  onClick={handleEmail}
                >
                  <Mail size={18} />
                  Send by email
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
