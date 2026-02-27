import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const MAP_NODES = [
  { id: "OP-44", x: 820, y: 320, name: "Neo-Tokyo" },
  { id: "OP-45", x: 480, y: 120, name: "Svalbard" },
  { id: "OP-46", x: 520, y: 450, name: "Sahara Sector 7" },
  { id: "HQ-01", x: 220, y: 280, name: "Base Alpha" },
];
export function TacticalMap() {
  return (
    <TooltipProvider>
      <div className="relative w-full aspect-[16/9] bg-terminal-dim/5 border border-terminal-green/20 overflow-hidden group">
        {/* Radar Sweep Effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,65,0.1)_90deg,transparent_91deg)]"
          />
        </div>
        <svg viewBox="0 0 1000 600" className="w-full h-full opacity-40">
          {/* Minimal World Outlines (Simplified Paths) */}
          <path
            d="M150,200 L200,180 L250,220 L300,200 L350,250 L320,350 L250,400 L150,380 Z M500,150 L550,130 L600,160 L620,250 L580,350 L500,320 Z M800,280 L850,260 L900,300 L880,400 L820,420 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-terminal-green/30"
          />
          {/* Animated Connections */}
          <motion.path
            d="M220,280 Q400,200 820,320 M220,280 Q350,150 480,120 M220,280 Q370,350 520,450"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="text-terminal-green/20"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Operation Nodes */}
          {MAP_NODES.map((node) => {
            const op = PORTFOLIO_ITEMS.find(p => p.id === node.id);
            return (
              <foreignObject key={node.id} x={node.x - 10} y={node.y - 10} width="20" height="20">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative w-full h-full cursor-crosshair">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-terminal-green rounded-full opacity-20"
                      />
                      <div className="absolute inset-[6px] bg-terminal-green rounded-full shadow-terminal" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black border-terminal-green text-terminal-green font-mono text-[10px] rounded-none p-2">
                    <div className="font-bold border-b border-terminal-green/30 mb-1">NODE_{node.id}</div>
                    <div>LOC: {node.name}</div>
                    {op && <div className="text-white mt-1">STATUS: {op.result}</div>}
                  </TooltipContent>
                </Tooltip>
              </foreignObject>
            );
          })}
        </svg>
        {/* HUD Elements */}
        <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/60">
          Global_Tracking_Active<br />
          Sat_Link: Established
        </div>
      </div>
    </TooltipProvider>
  );
}