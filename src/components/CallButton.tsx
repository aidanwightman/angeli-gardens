import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { shouldShowCallback } from "@/lib/businessHours";
import CallbackRequestModal from "./CallbackRequestModal";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export default function CallButton({ children, className, variant, size }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const classes =
    variant || size
      ? cn(buttonVariants({ variant, size }), className)
      : className;

  // In business hours → dial straight through, no interruption
  if (!shouldShowCallback()) {
    return (
      <a href="tel:07542973733" className={classes}>
        {children}
      </a>
    );
  }

  // Out of hours → clicking goes straight to callback modal
  return (
    <>
      <button
        type="button"
        className={classes}
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
      <CallbackRequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
