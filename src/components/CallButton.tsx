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
  const [open, setOpen] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (shouldShowCallback()) {
      e.preventDefault();
      setOpen(true);
    }
  }

  const classes =
    variant || size
      ? cn(buttonVariants({ variant, size }), className)
      : className;

  return (
    <>
      <a href="tel:07542973733" className={classes} onClick={handleClick}>
        {children}
      </a>
      <CallbackRequestModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
