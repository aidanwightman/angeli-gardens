import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { Phone, CalendarClock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CallbackRequestModal from "./CallbackRequestModal";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export default function CallButton({ children, className, variant, size }: Props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const classes =
    variant || size
      ? cn(buttonVariants({ variant, size }), className)
      : className;

  return (
    <>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <button type="button" className={classes}>
            {children}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-1.5" align="start" sideOffset={6}>
          <a
            href="tel:07542973733"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-md hover:bg-muted text-sm font-medium transition-colors"
            onClick={() => setPopoverOpen(false)}
          >
            <Phone size={15} className="text-primary shrink-0" />
            Call: 07542 973733
          </a>
          <button
            type="button"
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md hover:bg-muted text-sm font-medium transition-colors text-left"
            onClick={() => {
              setPopoverOpen(false);
              setModalOpen(true);
            }}
          >
            <CalendarClock size={15} className="text-primary shrink-0" />
            Schedule a callback
          </button>
        </PopoverContent>
      </Popover>

      <CallbackRequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
