import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import CallButton from "./CallButton";

export default function FloatingCallButton() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <CallButton
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
    >
      <Phone size={24} />
      <span className="sr-only">Call us</span>
    </CallButton>
  );
}
