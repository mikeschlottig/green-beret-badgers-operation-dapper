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
  },
  {
    id: "4",
    name: "Kat 'Claw' Squirrel",
    callsign: "RAZOR",
    role: "Heavy Assault",
    specialty: "CQC Specialist",
    stats: { power: 88, speed: 70, stealth: 82 },
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Rocky 'Pilot' Raccoon",
    callsign: "STRATOS",
    role: "Aerial Specialist",
    specialty: "HALO Insertion",
    stats: { power: 45, speed: 95, stealth: 78 },
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=400&h=500&auto=format&fit=crop"
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
export const PORTFOLIO_ITEMS = [
  {
    id: "OP-44",
    title: "Neon Sunset",
    location: "Neo-Tokyo Industrial Zone",
    result: "SUCCESS",
    summary: "Neutralized renegade AI cluster. Data retrieval 100%.",
    objectives: ["Infiltrate Server Farm", "Extract Core Logic", "Disable Auto-Turrets"],
    metrics: { stealth: "94%", casualties: "0", data: "12TB" }
  },
  {
    id: "OP-45",
    title: "Arctic Fox",
    location: "Svalbard Vault",
    result: "SUCCESS",
    summary: "Prevented unauthorized biomass extraction. No casualties.",
    objectives: ["Secure Vault Entrance", "Neutralize Extraction Drill", "Evacuate Civilians"],
    metrics: { stealth: "72%", casualties: "0", precision: "99%" }
  },
  {
    id: "OP-46",
    title: "Desert Mirage",
    location: "Sahara Sector 7",
    result: "IN PROGRESS",
    summary: "Infiltrating underground bunker complex.",
    objectives: ["Locate Hidden Facility", "Identify High Value Target", "Await Strike Order"],
    metrics: { stealth: "PENDING", casualties: "N/A", data: "N/A" }
  }
];
export const OPERATIONS_LOG = PORTFOLIO_ITEMS;
export const TESTIMONIALS = [
  {
    id: "1",
    source: "REDACTED // World Leader",
    text: "When diplomacy failed, the Badgers succeeded in under 4 minutes. Impeccable results.",
    signal: 98
  },
  {
    id: "2",
    source: "CEO // Neo-Tokyo Tech",
    text: "Our data was compromised beyond hope. Shadow and the recon team recovered it before we even finished our board meeting.",
    signal: 85
  }
];