import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const CLIENT_WHATSAPP = "447542973733";

const defaultMessage = encodeURIComponent(
  "Hi Angeli Gardens, I'd like a free quote for my garden please."
);

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  message?: string;
}

const WhatsAppButton = ({
  children = "Chat on WhatsApp",
  className,
  variant = "outline",
  size = "default",
  message = defaultMessage,
}: WhatsAppButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={`flex items-center gap-2 ${className || ""}`}
      asChild
    >
      <a
        href={`https://wa.me/${CLIENT_WHATSAPP}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-5 w-5" />
        {children}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
