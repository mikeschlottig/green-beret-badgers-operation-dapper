import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
export function TerminalRecruiter() {
  const [history, setHistory] = useState<string[]>(["SYSTEM BOOT COMPLETE...", "ESTABLISHING ENCRYPTED LINK...", "TYPE 'HELP' FOR COMMANDS."]);
  const [input, setInput] = useState("");
  const [isTerminated, setIsTerminated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTerminated) return;
    const cmd = input.toLowerCase().split(" ");
    const newHistory = [...history, `> ${input}`];
    switch (cmd[0]) {
      case "help":
        newHistory.push("AVAILABLE COMMANDS: HELP, STATUS, ENLIST [EMAIL], CLEAR, EXIT");
        break;
      case "status":
        newHistory.push("UNIT_STATUS: 100% OPERATIONAL", "OPERATIVES_ACTIVE: 7", "CURRENT_THREAT_LEVEL: OMEGA");
        break;
      case "enlist":
        if (cmd[1] && cmd[1].includes("@")) {
          newHistory.push(`INITIATING ENLISTMENT FOR: ${cmd[1]}...`, "UPLOADING BIOMETRICS...", "ACCESS GRANTED.");
          toast.success("TRANSMISSION_SUCCESS", { description: "You are now in the system, Operative." });
          setTimeout(() => {
            setHistory(prev => [...prev, "CONNECTION TERMINATED BY COMMANDER.", "SESSION CLOSED."]);
            setIsTerminated(true);
          }, 1500);
        } else {
          newHistory.push("ERROR: INVALID IDENTIFIER. USAGE: ENLIST [EMAIL]");
        }
        break;
      case "clear":
        setHistory(["TERMINAL BUFFER CLEARED."]);
        setInput("");
        return;
      default:
        newHistory.push(`COMMAND NOT RECOGNIZED: ${cmd[0]}`);
    }
    setHistory(newHistory);
    setInput("");
  };
  return (
    <div className="w-full max-w-3xl mx-auto h-[400px] bg-black border-2 border-terminal-green p-4 font-mono text-sm flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
      {/* Matrix Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: 500 }}
            transition={{ duration: 3 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
            className="absolute text-[10px]"
            style={{ left: `${i * 10}%` }}
          >
            {Array.from({ length: 20 }).map(() => Math.floor(Math.random() * 2)).join("\n")}
          </motion.div>
        ))}
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 mb-4 no-scrollbar scroll-smooth">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith("ERROR") ? "text-alert-red" : "text-terminal-green"}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="relative flex items-center gap-2">
        <span className="text-terminal-bright font-bold">#</span>
        <input
          autoFocus
          disabled={isTerminated}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-terminal-bright placeholder:text-terminal-dim caret-terminal-green uppercase"
          placeholder={isTerminated ? "" : "INPUT_COMMAND_"}
        />
        {isTerminated && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center border border-alert-red text-alert-red font-bold animate-pulse">
            [LINK_SEVERED]
          </div>
        )}
      </form>
    </div>
  );
}