import React from "react";
import { motion } from "framer-motion";
import { SQUAD_MEMBERS } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
export function SquadRoster() {
  return (
    <section id="roster" className="py-24 bg-terminal-dim/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display uppercase tracking-tighter mb-2 italic">Active Roster</h2>
          <div className="h-1 w-24 bg-terminal-green mx-auto mb-4" />
          <p className="text-terminal-green/60 uppercase text-xs tracking-widest">Elite Operatives Currently Deployed</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SQUAD_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-none border-2 border-terminal-green/30 bg-background hover:border-terminal-green transition-colors group overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-2xs uppercase text-terminal-green font-bold">Callsign</div>
                    <div className="text-xl font-display tracking-widest">{member.callsign}</div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase">{member.name}</h3>
                    <p className="text-2xs text-terminal-green/60 uppercase">{member.role} / {member.specialty}</p>
                  </div>
                  <div className="space-y-3 pt-2">
                    {Object.entries(member.stats).map(([key, val]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-2xs uppercase">
                          <span>{key}</span>
                          <span>{val}%</span>
                        </div>
                        <Progress value={val} className="h-1 bg-terminal-dim" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}