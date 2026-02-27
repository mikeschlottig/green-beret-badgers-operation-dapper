export interface SquadMember {
  id: string;
  name: string;
  callsign: string;
  role: string;
  specialty: string;
  stats: {
    power: number;
    speed: number;
    stealth: number;
  };
  image: string;
}
export const SQUAD_MEMBERS: SquadMember[] = [
  {
    id: "1",
    name: "Brock 'Heavy' McBadger",
    callsign: "VANGUARD",
    role: "Heavy Weapons",
    specialty: "Demolitions",
    stats: { power: 95, speed: 40, stealth: 20 },
    image: "https://images.unsplash.com/photo-1590634159396-7019864225d3?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Sly 'Ghost' Badgerington",
    callsign: "SHADOW",
    role: "Recon",
    specialty: "Cyber Infiltration",
    stats: { power: 30, speed: 90, stealth: 98 },
    image: "https://images.unsplash.com/photo-1590634159396-7019864225d3?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Major 'Hawk' Striker",
    callsign: "DEATHBLOW",
    role: "Sniper",
    specialty: "Long Range Eliminations",
    stats: { power: 60, speed: 75, stealth: 85 },
    image: "https://images.unsplash.com/photo-1590634159396-7019864225d3?q=80&w=400&h=500&auto=format&fit=crop"
  }
];
export const COMMANDER_PROFILE = {
  name: "G. 'Dapper' Kong",
  rank: "Supreme Commander",
  callsign: "SILVERBACK",
  bio: "A strategic genius who rose from the deep jungles of guerilla warfare. Known for his impeccable three-piece suits and ruthless tactical efficiency. Kong leads the Green Beret Badgers with an iron fist in a velvet glove.",
  status: "CLASSIFIED",
  image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=600&h=800&auto=format&fit=crop"
};
export const OPERATIONS_LOG = [
  {
    id: "OP-44",
    title: "Operation: Neon Sunset",
    location: "Neo-Tokyo Industrial Zone",
    result: "SUCCESS",
    summary: "Neutralized renegade AI cluster. Data retrieval 100%."
  },
  {
    id: "OP-45",
    title: "Operation: Arctic Fox",
    location: "Svalbard Vault",
    result: "SUCCESS",
    summary: "Prevented unauthorized biomass extraction. No casualties."
  },
  {
    id: "OP-46",
    title: "Operation: Desert Mirage",
    location: "Sahara Sector 7",
    result: "IN PROGRESS",
    summary: "Infiltrating underground bunker complex."
  }
];