import React, { useState, useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}
export function GlitchText({ text, className, as: Component = "span" }: GlitchTextProps) {
  return (
    <Component className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 text-[#FF3333] opacity-0 group-hover:opacity-100 group-hover:animate-glitch translate-x-[3px] translate-y-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 text-[#003B00] opacity-0 group-hover:opacity-100 group-hover:animate-glitch -translate-x-[3px] -translate-y-[2px]">
        {text}
      </span>
    </Component>
  );
}
export function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span className="animate-blink bg-terminal-green ml-1 inline-block w-2 h-4 align-middle" />
    </span>
  );
}
type TacticalButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: React.ReactNode;
  variant?: "default" | "alert";
};
export function TacticalButton({
  children,
  className,
  variant = "default",
  ...props
}: TacticalButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-6 py-2 font-mono uppercase tracking-widest border-2 transition-all duration-200 overflow-hidden group",
        variant === "default"
          ? "border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          : "border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white shadow-[0_0_10px_rgba(255,51,51,0.2)] hover:shadow-[0_0_20px_rgba(255,51,51,0.4)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 -translate-y-full group-hover:animate-scanline-scroll pointer-events-none opacity-0 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}