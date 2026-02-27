import React from "react";
import { Link } from "react-router-dom";
import { GlitchText } from "@/components/ui/retro-effects";
import { Shield, Radio, Terminal, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
const NAV_LINKS = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-terminal-green/30 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-mono text-xs md:text-sm">
        <div className="flex items-center gap-4">
          <Terminal className="text-terminal-green animate-pulse" size={20} />
          <Link to="/">
            <GlitchText text="GBB_SYS_v2.0" className="font-bold tracking-tighter text-terminal-green" as="h1" />
          </Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 uppercase">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-terminal-bright transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 px-3 py-1 border border-terminal-green/20 bg-terminal-dim/20 rounded">
            <Radio size={14} className="text-terminal-green" />
            <span className="text-terminal-green animate-blink">STATUS: ONLINE</span>
          </div>
        </div>
        {/* Mobile Access */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-2xs opacity-50 uppercase font-mono">Location</div>
            <div className="font-mono text-xs">35.6895° N, 139.6917° E</div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-terminal-green">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-terminal-green/30 text-terminal-green">
              <SheetHeader>
                <SheetTitle className="text-terminal-green font-display uppercase tracking-widest">
                  Secure Access
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 pt-12 uppercase font-mono tracking-widest">
                <Link to="/" className="hover:text-white transition-colors text-lg border-b border-terminal-green/10 pb-2">Home</Link>
                {NAV_LINKS.map((link) => (
                  <Link key={link.path} to={link.path} className="hover:text-white transition-colors text-lg border-b border-terminal-green/10 pb-2">
                    {link.name}
                  </Link>
                ))}
                <div className="mt-auto pt-8 flex items-center gap-2 opacity-50">
                  <Shield size={16} />
                  <span className="text-2xs">ENCRYPTION: ACTIVE</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Shield size={24} className="hidden md:block text-terminal-green opacity-80" />
        </div>
      </div>
    </nav>
  );
}