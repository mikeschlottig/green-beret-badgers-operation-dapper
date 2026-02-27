import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export function SystemHUD() {
  const [metrics, setMetrics] = useState({ cpu: 42, mem: 68, net: 124 });
  const [intel, setIntel] = useState("SATELLITE LINK STABLE // SCANNING SECTOR 4...");
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 20) + 30,
        mem: Math.floor(Math.random() * 10) + 60,
        net: Math.floor(Math.random() * 200) + 50,
      });
    }, 3000);
    const intelLines = [
      "SATELLITE LINK STABLE // SCANNING SECTOR 4...",
      "INCOMING ENCRYPTED BURST FROM VANGUARD...",
      "NEO-TOKYO GRID ANOMALY DETECTED...",
      "EXTRACTION TEAM STANDING BY IN SAHARA...",
      "GLOBAL THREAT LEVEL: STABLE-MODERATE..."
    ];
    let i = 0;
    const intelInterval = setInterval(() => {
      i = (i + 1) % intelLines.length;
      setIntel(intelLines[i]);
    }, 8000);
    return () => {
      clearInterval(interval);
      clearInterval(intelInterval);
    };
  }, []);
  return (
    <div className="w-full bg-black/90 border-b border-terminal-green/40 h-8 flex items-center px-4 font-mono text-[8px] md:text-[10px] uppercase tracking-tighter gap-8 overflow-hidden">
      <div className="flex items-center gap-4 shrink-0 border-r border-terminal-green/20 pr-4">
        <span className="text-terminal-green/40 italic">SYS_HEALTH:</span>
        <div className="flex gap-3">
          <span className="flex gap-1">CPU <span className="text-terminal-green font-bold">{metrics.cpu}%</span></span>
          <span className="flex gap-1">MEM <span className="text-terminal-green font-bold">{metrics.mem}%</span></span>
          <span className="flex gap-1">LINK <span className="text-terminal-green font-bold">{metrics.net}ms</span></span>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden flex items-center">
        <motion.div
          key={intel}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-terminal-green whitespace-nowrap"
        >
          <span className="text-alert-red mr-2">● LIVE_INTEL:</span>
          {intel}
        </motion.div>
      </div>
      <div className="hidden sm:flex items-center gap-4 shrink-0 border-l border-terminal-green/20 pl-4">
        <span className="text-terminal-green/40 italic">GEO_COORD:</span>
        <span className="text-white font-bold">35.6895N / 139.6917E</span>
      </div>
    </div>
  );
}