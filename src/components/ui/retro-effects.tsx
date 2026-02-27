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
      <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px] translate-y-[1px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch -translate-x-[2px] -translate-y-[1px]">
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
      setDisplayed(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
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
export function TacticalButton({
  children,
  className,
  variant = "default",
  ...props
}: HTMLMotionProps<"button"> & { variant?: "default" | "alert" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-6 py-2 font-mono uppercase tracking-widest border-2 transition-colors overflow-hidden group",
        variant === "default"
          ? "border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background"
          : "border-alert-red text-alert-red hover:bg-alert-red hover:text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
      {/* Scanline hover effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 -translate-y-full group-hover:animate-scanline-scroll pointer-events-none opacity-0 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}