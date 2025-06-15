import { useRef } from "react";
import GenerateElement from "../GenerateElement";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const titleRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLElement>(null);

  return (
    <header className={`w-full pb-4 ${className}`}>
      <GenerateElement
        as="h1"
        className="text-2xl font-semibold text-velvet"
        ref={titleRef}
        delay={0.25}
      >
        TRUSTED BY TRADERS
      </GenerateElement>
      <GenerateElement
        as="div"
        className="text-2xl font-semibold text-white"
        ref={subtitleRef}
        delay={0.5}
      >
        PROVEN BY RESULTS
      </GenerateElement>
    </header>
  );
}
