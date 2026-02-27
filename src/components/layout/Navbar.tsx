import React from "react";
import { Link } from "react-router-dom";
import { GlitchText } from "@/components/ui/retro-effects";
import { Shield, Radio, Terminal, Menu } from "lucide-react";
import { SystemHUD } from "@/components/layout/SystemHUD";
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
    <nav className="fixed top-0 left-0 w-full z-50">
      <SystemHUD />
      <div className="w-full border-b border-terminal-green/30 bg-background/60 backdrop-blur-xl h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between font-mono text-xs md:text-sm">
        <div className="flex items-center gap-4">
          <Terminal className="text-terminal-green animate-pulse" size={20} />
          <Link to="/" className="flex items-center">
            <GlitchText text="GBB_SYS_v2.0" className="font-bold tracking-tighter text-terminal-green" as="h1" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 uppercase">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-terminal-bright transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 px-3 py-1 border border-terminal-green/20 bg-terminal-dim/20 rounded">
            <Radio size={14} className="text-terminal-green animate-pulse" />
            <span className="text-terminal-green animate-blink">STATUS: ONLINE</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] opacity-50 uppercase font-mono leading-none">Location</div>
            <div className="font-mono text-xs text-terminal-green">35.6895° N, 139.6917° E</div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-terminal-green hover:bg-terminal-dim/20 transition-colors">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-terminal-green/30 text-terminal-green p-0 w-80">
              <div className="p-6 h-full flex flex-col">
                <SheetHeader className="mb-12">
                  <SheetTitle className="text-terminal-green font-display uppercase tracking-widest text-left">
                    Secure Access
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 uppercase font-mono tracking-widest">
                  <Link to="/" className="hover:bg-terminal-dim/20 p-4 transition-colors text-lg border-b border-terminal-green/10">Home</Link>
                  {NAV_LINKS.map((link) => (
                    <Link key={link.path} to={link.path} className="hover:bg-terminal-dim/20 p-4 transition-colors text-lg border-b border-terminal-green/10">
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto p-4 border border-terminal-green/20 bg-terminal-dim/10 rounded flex items-center gap-3">
                  <Shield size={16} className="text-terminal-green/60" />
                  <span className="text-[10px] font-mono opacity-50 tracking-tighter uppercase">ENCRYPTION_STATUS: ACTIVE_ALPHA</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Shield size={24} className="hidden md:block text-terminal-green opacity-80" />
        </div>
      </div>
      </div>
    </nav>
  );
}