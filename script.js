// ==============================================================
// Echoes  -  City of the Unknown
// Created by Christopher Davidson
// ==============================================================
// DATA
// ==============================================================
const BDATA = [
  {
    id: "keep", name: "Iron Keep", icon: "\u{1F3F0}", color: "#c8a97e",
    lore: "The seat of power. Everything rises from this stone.",
    max: 5, unlock: 1, grid: 12, shape: "castle",
    costs: [
      { s: 0, w: 0, e: 0, t: 0 },
      { s: 80, w: 60, e: 10, t: 8 },
      { s: 200, w: 150, e: 30, t: 18 },
      { s: 400, w: 300, e: 80, t: 35 },
      { s: 800, w: 600, e: 200, t: 70 }
    ],
    bonuses: ["Start", "Unlocks Barracks & Farm", "+1 Builder slot", "Unlocks Archive & Tower", "Max troops +50"]
  },
  {
    id: "barracks", name: "Barracks", icon: "\u{2694}\u{FE0F}", color: "#e8907c",
    lore: "Where common men become soldiers.",
    max: 4, unlock: 1, grid: 7, shape: "box",
    costs: [
      { s: 60, w: 40, e: 0, t: 5 },
      { s: 150, w: 100, e: 20, t: 12 },
      { s: 300, w: 220, e: 60, t: 25 },
      { s: 600, w: 450, e: 150, t: 50 }
    ],
    bonuses: ["+5 troops/min", "+12 troops/min", "+22 troops/min", "+40 troops/min"]
  },
  {
    id: "farm", name: "Ancient Farm", icon: "\u{1F33E}", color: "#9aca7a",
    lore: "Seeds that remember a lost world.",
    max: 4, unlock: 1, grid: 17, shape: "low",
    costs: [
      { s: 40, w: 60, e: 0, t: 4 },
      { s: 100, w: 150, e: 10, t: 10 },
      { s: 220, w: 300, e: 35, t: 22 },
      { s: 450, w: 600, e: 100, t: 48 }
    ],
    bonuses: ["+2 wood/s", "+4 wood/s", "+7 wood/s", "+12 wood/s"]
  },
  {
    id: "quarry", name: "Stone Quarry", icon: "\u{26CF}\u{FE0F}", color: "#b0a888",
    lore: "The stone here hums when nobody is watching.",
    max: 4, unlock: 1, grid: 6, shape: "box",
    costs: [
      { s: 50, w: 30, e: 0, t: 5 },
      { s: 120, w: 80, e: 10, t: 11 },
      { s: 260, w: 180, e: 40, t: 22 },
      { s: 520, w: 360, e: 110, t: 46 }
    ],
    bonuses: ["+3 stone/s", "+6 stone/s", "+10 stone/s", "+16 stone/s"]
  },
  {
    id: "archive", name: "Void Archive", icon: "\u{1F4DA}", color: "#8a9fe8",
    lore: "The fragments of truth are stored here. Dangerous.",
    max: 4, unlock: 2, grid: 2, shape: "tower",
    costs: [
      { s: 100, w: 80, e: 30, t: 15 },
      { s: 250, w: 180, e: 80, t: 28 },
      { s: 500, w: 400, e: 180, t: 55 },
      { s: 1000, w: 800, e: 400, t: 110 }
    ],
    bonuses: ["+1 essence/s", "Lore fragments revealed", "+3 essence/s", "Secret chapters unlock"]
  },
  {
    id: "market", name: "Shadow Market", icon: "\u{1F4B0}", color: "#e8d07c",
    lore: "Trade in things not always visible.",
    max: 4, unlock: 2, grid: 16, shape: "wide",
    costs: [
      { s: 80, w: 100, e: 15, t: 10 },
      { s: 200, w: 250, e: 50, t: 22 },
      { s: 420, w: 500, e: 130, t: 44 },
      { s: 850, w: 1000, e: 300, t: 95 }
    ],
    bonuses: ["Resource trade active", "Trade ratios improve", "+20% all resources", "Rare essence trades"]
  },
  {
    id: "tower", name: "Void Tower", icon: "\u{1F5FC}", color: "#b8d4e8",
    lore: "It sees across timelines.",
    max: 3, unlock: 3, grid: 1, shape: "spire",
    costs: [
      { s: 200, w: 150, e: 80, t: 28 },
      { s: 500, w: 380, e: 200, t: 60 },
      { s: 1000, w: 750, e: 450, t: 130 }
    ],
    bonuses: ["Reveals enemy raids early", "Scout enemy strength", "Predict raid outcomes"]
  },
  {
    id: "wall", name: "Ancient Wall", icon: "\u{1F9F1}", color: "#a09070",
    lore: "Built to keep something in, not out.",
    max: 3, unlock: 3, grid: 18, shape: "wall",
    costs: [
      { s: 300, w: 200, e: 40, t: 24 },
      { s: 700, w: 450, e: 120, t: 52 },
      { s: 1400, w: 900, e: 300, t: 115 }
    ],
    bonuses: ["+15% raid defense", "+30% defense", "Raid damage halved"]
  },
  {
    id: "temple", name: "Pale Temple", icon: "\u{1F52E}", color: "#d8e8f0",
    lore: "Prophecies written in future tense.",
    max: 3, unlock: 4, grid: 3, shape: "dome",
    costs: [
      { s: 400, w: 300, e: 150, t: 44 },
      { s: 900, w: 700, e: 350, t: 88 },
      { s: 1800, w: 1400, e: 800, t: 190 }
    ],
    bonuses: ["+2 essence/s", "Heroes gain +20% XP", "Unlock hero special skills"]
  },
  {
    id: "forge", name: "Iron Forge", icon: "\u{2699}\u{FE0F}", color: "#e8a07c",
    lore: "Runs on something older than fire.",
    max: 3, unlock: 4, grid: 19, shape: "ind",
    costs: [
      { s: 350, w: 250, e: 120, t: 40 },
      { s: 800, w: 600, e: 280, t: 82 },
      { s: 1600, w: 1200, e: 650, t: 175 }
    ],
    bonuses: ["Heroes +3 ATK", "Troops +10 power", "Forge legendary gear"]
  },
  // ---- late buildings: one unlocks with each castle tier from 6 to 10 ----
  {
    id: "echowell", name: "Echo Well", icon: "\u{1F30A}", color: "#7fd8d0",
    lore: "Drop a stone in and you hear it land years ago.",
    max: 3, unlock: 6, grid: 11, shape: "tower",
    costs: [
      { s: 2000, w: 1500, e: 600, t: 120 },
      { s: 4000, w: 3000, e: 1200, t: 240 },
      { s: 7000, w: 5500, e: 2200, t: 420 }
    ],
    bonuses: ["+4 essence/s", "+8 essence/s", "+14 essence/s"]
  },
  {
    id: "reliquary", name: "Reliquary", icon: "\u{1F3FA}", color: "#c08ae8",
    lore: "Every relic in it has been found twice.",
    max: 3, unlock: 7, grid: 13, shape: "dome",
    costs: [
      { s: 3000, w: 2500, e: 1000, t: 180 },
      { s: 6000, w: 5000, e: 2000, t: 300 },
      { s: 10000, w: 8500, e: 3500, t: 480 }
    ],
    bonuses: ["+2 relics/min", "+4 relics/min", "+7 relics/min"]
  },
  {
    id: "beacon", name: "Pathfinder's Beacon", icon: "\u{1F9ED}", color: "#e8c07c",
    lore: "A light the wastes have never managed to put out.",
    max: 3, unlock: 8, grid: 8, shape: "spire",
    costs: [
      { s: 5000, w: 4000, e: 1500, t: 240 },
      { s: 9000, w: 7500, e: 3000, t: 420 },
      { s: 15000, w: 12000, e: 5000, t: 600 }
    ],
    bonuses: ["Expeditions 12% faster", "Expeditions 24% faster", "Expeditions 36% faster"]
  },
  {
    id: "hall", name: "Hall of Ancestors", icon: "\u{1F3DB}\u{FE0F}", color: "#d8c8a0",
    lore: "Statues of everyone who ever led this city. Some of them have your face.",
    max: 3, unlock: 9, grid: 14, shape: "wide",
    costs: [
      { s: 8000, w: 6000, e: 2500, t: 300 },
      { s: 14000, w: 11000, e: 4500, t: 540 },
      { s: 22000, w: 18000, e: 7500, t: 780 }
    ],
    bonuses: ["Heroes +6% HP & ATK", "Heroes +12% HP & ATK", "Heroes +18% HP & ATK"]
  },
  {
    id: "observatory", name: "Star Observatory", icon: "\u{1F52D}", color: "#9ab8f0",
    lore: "It charts the stars that haven't risen yet.",
    max: 3, unlock: 10, grid: 10, shape: "dome",
    costs: [
      { s: 12000, w: 10000, e: 4000, t: 360 },
      { s: 20000, w: 17000, e: 7000, t: 600 },
      { s: 32000, w: 27000, e: 11000, t: 900 }
    ],
    bonuses: ["+12% all production", "+24% all production", "+36% all production"]
  }
];
const HEROES = [
  { id: "commander", name: "Iron Commander", icon: "\u{2694}\u{FE0F}", class: "Warrior", atk: 8, def: 7, spd: 6, level: 1, xp: 0, xpMax: 100, special: "Shield Wall  -  Block 50% damage for 2 rounds", rarity: "Rare" },
  { id: "mystic", name: "Pale Mystic", icon: "\u{1F52E}", class: "Mage", atk: 10, def: 4, spd: 9, level: 1, xp: 0, xpMax: 100, special: "Void Rift  -  Deal 2x damage, skip next action", rarity: "Epic" },
  { id: "rogue", name: "Ember Rogue", icon: "\u{1F56F}\u{FE0F}", class: "Assassin", atk: 12, def: 3, spd: 10, level: 1, xp: 0, xpMax: 80, special: "Ambush  -  Triple damage if enemy attacked last", rarity: "Rare" }
];
const RARITY_COLOR = { Common: "#a09070", Rare: "#8a9fe8", Epic: "#c08ae8", Legendary: "#e8c07c" };
const QUESTS = [
  { id: "q1", title: "First Stones", desc: "Upgrade any building to Level 2", goal: 1, type: "upgrade_any", reward: { stone: 100, wood: 80, essence: 0 }, xp: 20 },
  { id: "q2", title: "Raise an Army", desc: "Train 20 troops", goal: 20, type: "troops", reward: { stone: 0, wood: 0, essence: 15 }, xp: 30 },
  { id: "q3", title: "Stone Hoards", desc: "Accumulate 500 stone", goal: 500, type: "stone", reward: { stone: 0, wood: 150, essence: 10 }, xp: 25 },
  { id: "q4", title: "First Raid", desc: "Complete your first raid", goal: 1, type: "raids", reward: { stone: 200, wood: 150, essence: 30 }, xp: 50 },
  { id: "q5", title: "Knowledge Seeker", desc: "Build the Void Archive", goal: 1, type: "build_archive", reward: { stone: 0, wood: 0, essence: 50 }, xp: 40 },
  { id: "q6", title: "City Builder", desc: "Have 5 buildings built", goal: 5, type: "buildings_built", reward: { stone: 300, wood: 250, essence: 20 }, xp: 60 },
  { id: "q7", title: "Hero's Journey", desc: "Level up any hero", goal: 1, type: "hero_level", reward: { stone: 100, wood: 100, essence: 40 }, xp: 45 },
  { id: "q8", title: "Fortified", desc: "Upgrade Keep to Level 3", goal: 3, type: "keep_level", reward: { stone: 0, wood: 0, essence: 80 }, xp: 70 },
  { id: "q9", title: "Into the Wastes", desc: "Complete 3 expeditions", goal: 3, type: "expeditions", reward: { stone: 150, wood: 150, essence: 30 }, xp: 40 },
  { id: "q10", title: "Echo Hunter", desc: "Recover 3 lost echoes", goal: 3, type: "lore", reward: { stone: 0, wood: 0, essence: 100 }, xp: 80 }
];
// group = the enemies you fight (types are in ENEMY_TYPES, battle section)
const RAID_ENEMIES = [
  { name: "Void Scavengers", icon: "\u{1F441}\u{FE0F}", group: ["scavenger", "scavenger", "scavenger"], reward: { stone: 80, wood: 60, essence: 10 }, xpReward: 25, difficulty: "Easy" },
  { name: "Ruin Guardians", icon: "\u{1F5FF}", group: ["guardian", "scavenger", "guardian"], reward: { stone: 150, wood: 120, essence: 25 }, xpReward: 45, difficulty: "Medium" },
  { name: "Ember Warlords", icon: "\u{1F525}", group: ["imp", "warlord", "imp"], reward: { stone: 250, wood: 200, essence: 50 }, xpReward: 70, difficulty: "Hard" },
  { name: "Ancient Horror", icon: "\u{1F311}", group: ["wisp", "horror", "wisp"], reward: { stone: 400, wood: 350, essence: 100 }, xpReward: 120, difficulty: "Elite" }
];
const RAID_MIN_TROOPS = [5, 15, 25, 40];
const RAID_COLORS = ["#7aca8a", "#e8d07c", "#e8907c", "#8a9fe8"];
// ==============================================================
// EXPEDITIONS  -  regions in the wastes, hero specialties, lore
// ==============================================================
// base = seconds for a SPD 6 hero; loot = [min, max] per resource
const REGIONS = [
  {
    id: "outskirts", name: "Ashen Outskirts", icon: "\u{1F3DA}\u{FE0F}", color: "#b0a888",
    unlock: 1, base: 60, danger: 0, xp: 15, lore: 0.12,
    loot: { stone: [40, 80], wood: [30, 60], relics: [1, 2] },
    desc: "Collapsed homes at the edge of the light. Safe, if you don't linger."
  },
  {
    id: "library", name: "Sunken Library", icon: "\u{1F4DC}", color: "#8a9fe8",
    unlock: 2, base: 120, danger: 1, xp: 30, lore: 0.25,
    loot: { wood: [40, 80], essence: [10, 25], relics: [2, 4] },
    desc: "Shelves drowned in black water. The books are still dry."
  },
  {
    id: "desert", name: "Glass Desert", icon: "\u{1F3DC}\u{FE0F}", color: "#e8d07c",
    unlock: 3, base: 240, danger: 2, xp: 50, lore: 0.2,
    loot: { stone: [150, 260], essence: [15, 30], relics: [3, 6] },
    desc: "Sand fused to glass by something that fell from the sky."
  },
  {
    id: "rift", name: "The Hollow Rift", icon: "\u{1F573}\u{FE0F}", color: "#c08ae8",
    unlock: 4, base: 480, danger: 3, xp: 90, lore: 0.4,
    loot: { essence: [40, 80], relics: [6, 10] },
    desc: "The crack in the sky touches the ground here."
  },
  // ---- the Far Reach: one region per castle tier, 6 to 10 ----
  {
    id: "bells", name: "The Drowned Bells", icon: "\u{1F514}", color: "#7fd8d0",
    unlock: 6, base: 720, danger: 3, xp: 140, lore: 0.35,
    loot: { stone: [500, 900], essence: [120, 220], relics: [8, 14] },
    desc: "A bell tower sank into the marsh. It still rings on the hour, underwater."
  },
  {
    id: "orchard", name: "The Cinder Orchard", icon: "\u{1F342}", color: "#e8907c",
    unlock: 7, base: 900, danger: 3, xp: 200, lore: 0.35,
    loot: { wood: [1200, 2000], essence: [180, 300], relics: [10, 16] },
    desc: "Trees of ash that still bear fruit. The fruit is warm."
  },
  {
    id: "spires", name: "The Inverted Spires", icon: "\u{1F30C}", color: "#9ab8f0",
    unlock: 8, base: 1100, danger: 4, xp: 280, lore: 0.4,
    loot: { stone: [2000, 3200], essence: [300, 500], relics: [14, 22] },
    desc: "Towers that hang from the clouds, roots up, windows down."
  },
  {
    id: "bonetide", name: "The Bone Tide", icon: "\u{1F9B4}", color: "#e8dcc0",
    unlock: 9, base: 1350, danger: 4, xp: 380, lore: 0.45,
    loot: { wood: [3000, 4500], essence: [500, 800], relics: [18, 28] },
    desc: "A white sea that comes in twice a day and leaves nothing behind."
  },
  {
    id: "firstcity", name: "The First City", icon: "\u{1F3DB}\u{FE0F}", color: "#e8c07c",
    unlock: 10, base: 1600, danger: 5, xp: 500, lore: 0.6,
    loot: { stone: [5000, 8000], wood: [5000, 8000], essence: [900, 1400], relics: [26, 40] },
    desc: "The city you are building, already finished, already empty."
  }
];
const HERO_SPECIALTY = {
  commander: { label: "Hauler", desc: "+40% loot, safest in danger" },
  mystic: { label: "Seer", desc: "+50% essence, better odds of finding echoes" },
  rogue: { label: "Scout", desc: "+50% relics" }
};
// recovered in order, one fragment of the mystery at a time
const LORE = [
  "The first stones were not quarried. They were returned.",
  "Every keep on this cliff was built on the ruins of the one before it. There have been eleven.",
  "The Archive's oldest page is written in your handwriting.",
  "The scavengers do not hunt. They are searching for someone who left.",
  "The Wall's mortar is mixed with ash from a city that has not burned yet.",
  "In the Rift, sound arrives before the thing that makes it.",
  "The Temple's prophecies all stop on the same day. No one has checked the date.",
  "You have done this before. The city remembers how it ended.",
  "The bells in the marsh ring for every keep that fell. They have never stopped.",
  "The orchard's trees were planted by people who knew the city would burn. They planted anyway.",
  "In the Spires the windows face down, so the dead can watch the living.",
  "The Bone Tide is not water. It is everyone who tried to leave.",
  "The First City has your Keep in it. The door is already open.",
  "Each time the city falls, it falls a little more slowly.",
  "The twelfth keep is the first one that remembered all the others."
];
const OFFLINE_CAP = 8 * 3600; // max seconds of catch-up while away (Long Memory adds more)
const offlineCap = () => OFFLINE_CAP + memRank("longmemory") * 4 * 3600;
// faster heroes return sooner (Rogue ~29% faster than Commander)
function expDuration(h, r) {
  return Math.round(((r.base * 10) / (4 + h.spd)) * expSpeed());
}
function successChance(h, r) {
  if (r.danger === 0) return 1;
  const c = 1 - r.danger * 0.18 + (h.def + h.level * 2) * 0.015 + (h.id === "commander" ? 0.15 : 0);
  return Math.max(0.3, Math.min(0.98, c));
}
const DAILY_REWARDS = [
  { day: 1, icon: "\u{1FAA8}", label: "100 Stone", grant: { stone: 100 } },
  { day: 2, icon: "\u{1FAB5}", label: "80 Wood", grant: { wood: 80 } },
  { day: 3, icon: "\u{2697}\u{FE0F}", label: "30 Essence", grant: { essence: 30 } },
  { day: 4, icon: "\u{2694}\u{FE0F}", label: "10 Troops", grant: { troops: 10 } },
  { day: 5, icon: "\u{1F396}\u{FE0F}", label: "Hero XP x2", grant: { heroXp: true } },
  { day: 6, icon: "\u{1F48E}", label: "200 All Res", grant: { stone: 200, wood: 200, essence: 50 } },
  { day: 7, icon: "\u{2728}", label: "Legendary!", grant: { stone: 500, wood: 400, essence: 150, troops: 20 } }
];
// building levels needed for each castle level (index = next level - 1).
// From level 5 on, every castle level also raises building caps, so these stay reachable.
const CASTLE_THRESHOLDS = [0, 4, 10, 20, 32, 43, 56, 69, 83, 98];
const CASTLE_MAX = 10;
const CASTLE_LORE = [
  "",
  "Barracks and Farm unlocked. Build your first army.",
  "Archive and Market revealed. The truth begins to surface.",
  "Void Tower rises. Something watches back.",
  "Temple and Forge. The city awakens to its purpose.",
  "The city stands complete. Now the real mystery begins. Every building can now be raised past its limit.",
  "The Ashen Throne. The Echo Well opens, and the road east into the Far Reach unseals. The city can now fall and be reborn.",
  "Starfall Hold. Stone falls upward around the spire. The Reliquary and the Cinder Orchard await.",
  "The Echoing Spires. The keeps that stood here before you return as ghosts. The Beacon and the Inverted Spires await.",
  "The Rift Crown. A ring of light circles the highest tower. The Hall of Ancestors and the Bone Tide await.",
  "The Remembered City. Nothing above you but the sky. The Observatory and the First City await."
];
// ==============================================================
// STATE
// ==============================================================
let S = {
  castleLevel: 1,
  audio: { music: 0.7, sfx: 0.8, mode: 0 }, // mode: 0 all on, 1 effects only, 2 muted
  echoes: 0, echoesEarned: 0, lives: 1, memories: {}, bestEndless: 0, // Echo Rebirth
  res: { stone: 200, wood: 150, essence: 40, troops: 0, relics: 0, gold: 0 },
  troopCap: 50,
  lore: [],
  items: { draught: 3, ember: 1 },
  world: { opened: [], keys: {} },
  trip: null,
  research: {},
  weakSeen: {},
  descents: 0,
  bestDepth: 0,
  expeditions: 0,
  lastSeen: Date.now(),
  dailyDate: "",
  buildings: {},
  totalLevels: 0,
  quests: {},
  heroes: JSON.parse(JSON.stringify(HEROES)),
  selectedHero: 0,
  raids: 0,
  dailyDay: 1,
  dailyClaimed: false,
  upgradesTotal: 0
};
BDATA.forEach((b) => {
  S.buildings[b.id] = { level: 0, upgrading: false, timer: 0, timerMax: 0 };
});
S.buildings["keep"].level = 1;
S.buildings["quarry"].level = 1;
S.totalLevels = 2;
QUESTS.forEach((q) => {
  S.quests[q.id] = { progress: 0, claimed: false };
});
S.heroes.forEach((h) => (h.exp = null));
// older saves don't have the expedition fields yet
function migrateSave() {
  if (S.res.relics === undefined) S.res.relics = 0;
  if (!Array.isArray(S.lore)) S.lore = [];
  if (!S.items) S.items = { draught: 3, ember: 1 };
  if (!S.world) S.world = { opened: [], keys: {} };
  if (!S.research) S.research = {};
  if (!S.weakSeen) S.weakSeen = {};
  if (S.res.gold === undefined) S.res.gold = 0;
  if (S.expeditions === undefined) S.expeditions = 0;
  if (S.dailyDate === undefined) S.dailyDate = "";
  S.heroes.forEach((h) => {
    if (h.exp === undefined) h.exp = null;
  });
  QUESTS.forEach((q) => {
    if (!S.quests[q.id]) S.quests[q.id] = { progress: 0, claimed: false };
  });
}
// ==============================================================
// FX HELPERS  (floating text, spark bursts)
// ==============================================================
const $ = (id) => document.getElementById(id);
// ---------- frame timing ----------
// Each animation loop gets its own clock. clock(now) returns dt, where
// 1.0 = one frame at 60fps, so per-frame movement is multiplied by dt and
// runs at the same speed on 60/120/144Hz screens. Gaps over 250ms (tab
// hidden, loop paused) count as a single frame instead of a big jump.
const FRAME_CLOCKS = [];
function frameClock() {
  let last = 0;
  const clock = (now) => {
    const gap = last ? now - last : 16.667;
    last = now;
    return gap > 250 ? 1 : Math.min(gap / 16.667, 3);
  };
  clock.reset = () => (last = 0);
  FRAME_CLOCKS.push(clock);
  return clock;
}
document.addEventListener("visibilitychange", () => FRAME_CLOCKS.forEach((c) => c.reset()));
// true while a full-screen view hides the city
const cityCovered = () => ["world", "combat-modal", "forge"].some((id) => $(id) && $(id).classList.contains("open"));
function floatText(el, text, cls = "") {
  if (!el) return;
  const r = el.getBoundingClientRect();
  const f = document.createElement("div");
  f.className = "float-txt " + cls;
  f.textContent = text;
  f.style.left = r.left + r.width / 2 + "px";
  f.style.top = (cls.includes("down") ? r.bottom : r.top) + "px";
  $("fx-layer").appendChild(f);
  setTimeout(() => f.remove(), 1350);
}
function burst(x, y, color = "#c8a97e", n = 16) {
  const layer = $("fx-layer");
  for (let i = 0; i < n; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    const a = Math.random() * Math.PI * 2;
    const d = 30 + Math.random() * 70;
    s.style.setProperty("--dx", Math.cos(a) * d + "px");
    s.style.setProperty("--dy", Math.sin(a) * d - 20 + "px");
    s.style.left = x + "px";
    s.style.top = y + "px";
    s.style.background = color;
    s.style.boxShadow = `0 0 6px ${color}`;
    s.style.animationDelay = Math.random() * 0.08 + "s";
    layer.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}
function burstAt(el, color, n) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, color, n);
}
function retrigger(el, cls) {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}
// ==============================================================
// BACKGROUND CANVAS  (sky, moon, castle silhouette, fog, embers)
// ==============================================================
const CASTLE_TIERS = ["Ruined Keep", "Timber Keep", "Stone Bastion", "Iron Fortress", "Void Citadel", "Ashen Throne", "Starfall Hold", "Echoing Spires", "Rift Crown", "The Remembered City"];
const castleTier = () => Math.max(1, Math.min(CASTLE_MAX, S.castleLevel || 1));
// ---------- late-game scaling helpers ----------
const bLevel = (id) => (S.buildings[id] ? S.buildings[id].level : 0);
// from castle level 5, each castle level lets every building go one level higher
const capBonus = (b) => Math.max(0, (S.castleLevel || 1) - Math.max(4, b.unlock));
const bMax = (b) => b.max + capBonus(b);
// storage grows with the castle so late costs stay affordable
const resCap = () => [9999, 9999, 9999, 9999, 9999, 14999, 24999, 39999, 59999, 99999][castleTier() - 1];
// per-level output table; levels past the table grow 35% each
function lvRate(arr, lv) {
  if (lv <= 0) return 0;
  if (lv <= arr.length) return arr[lv - 1];
  return arr[arr.length - 1] * Math.pow(1.35, lv - arr.length);
}
// costs past the hand-made table grow 45% a level (time 30%)
function bCost(b, lv) {
  let c = b.costs[lv];
  if (!c) {
    const last = b.costs[b.costs.length - 1], k = lv - (b.costs.length - 1), g = Math.pow(1.45, k), cap = resCap();
    const r = (v) => Math.min(cap, Math.round((v * g) / 10) * 10);
    c = { s: r(last.s), w: r(last.w), e: r(last.e), t: Math.round(last.t * Math.pow(1.3, k)) };
  }
  return { ...c, t: Math.max(1, Math.round(c.t * (1 - 0.1 * memRank("masons")))) };
}
// levels past a building's original max ("overcharged" levels)
const overLevels = () => BDATA.reduce((a, b) => a + Math.max(0, bLevel(b.id) - b.max), 0);
// every bonus that multiplies stone, wood and essence
function prodMult() {
  return 1 + (bLevel("market") >= 3 ? 0.2 : 0) + 0.12 * bLevel("observatory") + 0.02 * overLevels() + 0.15 * memRank("bedrock");
}
function calcTroopCap() {
  const k = bLevel("keep");
  return 50 + (k >= 5 ? 50 : 0) + Math.max(0, k - 5) * 25;
}
const expSpeed = () => Math.max(0.3, 1 - 0.12 * bLevel("beacon") - 0.1 * memRank("swift"));
const heroPower = () => 1 + 0.06 * bLevel("hall") + 0.06 * memRank("veteran");
// adds loot without ever lowering a stockpile that's already above the cap;
// relics and gold carry across lives, so they get the highest cap
function addCapped(obj, k, v) {
  const cur = obj[k] || 0, cap = k === "relics" || k === "gold" ? 99999 : resCap();
  obj[k] = Math.max(cur, Math.min(cur + v, cap));
}
const fmtRate = (x) => (x >= 10 ? Math.round(x) : Math.round(x * 10) / 10);
// what each level of a building does, including overcharged levels
function bonusText(b, lv) {
  if (lv <= 0) return " - ";
  if (b.id === "beacon") return `Expeditions ${Math.min(70, 12 * lv)}% faster`;
  if (b.id === "hall") return `Heroes +${6 * lv}% HP & ATK`;
  if (b.id === "observatory") return `+${12 * lv}% all production`;
  if (b.bonuses[lv - 1]) return b.bonuses[lv - 1];
  const k = lv - b.max;
  const per = { quarry: "stone", farm: "wood", archive: "essence", temple: "essence", barracks: "troop", echowell: "essence", reliquary: "relic" };
  if (per[b.id]) return `Overcharged: +${Math.round((Math.pow(1.35, k) - 1) * 100)}% ${per[b.id]} output`;
  if (b.id === "keep") return `Overcharged: max troops +${25 * k}`;
  if (b.id === "wall") return `Overcharged: raid defense +${50 + 10 * k}%`;
  if (b.id === "forge") return `Overcharged: heroes +${3 + 2 * k} ATK`;
  return `Overcharged: +${2 * k}% all production`;
}
(function () {
  const cv = $("city-bg");
  const ctx = cv.getContext("2d");
  let t = 0, w = 0, h = 0, dt = 1;
  const clock = frameClock();
  let stars = [], embers = [], shoot = null;
  const newEmber = (init) => ({
    x: Math.random() * w,
    y: init ? Math.random() * h : h + 10,
    vy: 0.25 + Math.random() * 0.6,
    vx: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.6 + 0.4,
    wob: Math.random() * 6.28,
    v: Math.random() < 0.25
  });
  function resize() {
    w = cv.width = cv.offsetWidth;
    h = cv.height = cv.offsetHeight;
    stars = Array.from({ length: 90 }, () => ({
      x: Math.random(), y: Math.random() * 0.5,
      r: Math.random() * 1.1 + 0.3, p: Math.random() * 6.28, s: 0.01 + Math.random() * 0.03
    }));
    embers = Array.from({ length: 45 }, () => newEmber(true));
  }
  window.addEventListener("resize", resize);
  resize();
  // ---------- the castle: five tiers that rebuild as the castle levels up ----------
  // all castle coordinates are in "units": x from the castle's center,
  // y upward from its base as negative numbers; s converts units to pixels
  const SIL = "#0a0705", RIM = "rgba(210,140,80,0.5)", WOOD = "#24170d";
  let C = { cx: 0, by: 0, s: 1 };
  function blk(x, top, wd, col = SIL) {
    const { cx, by, s } = C;
    ctx.fillStyle = col;
    ctx.fillRect(cx + x * s, by + top * s, wd * s, -top * s);
    // warm rim light on the side facing the horizon glow
    ctx.fillStyle = RIM;
    ctx.fillRect(cx + x * s, by + top * s, Math.max(1, 1.2 * s), -top * s);
  }
  // a short chimney stack sitting at "top" (not a full-height column)
  function stack(x, top, wd, ht = 12) {
    const { cx, by, s } = C;
    ctx.fillStyle = SIL;
    ctx.fillRect(cx + x * s, by + (top - ht + 2) * s, wd * s, ht * s);
  }
  function crenels(x0, x1, top, step = 8) {
    const { cx, by, s } = C;
    ctx.fillStyle = SIL;
    for (let i = x0; i < x1 - 2; i += step) ctx.fillRect(cx + i * s, by + (top - 4) * s, 4 * s, 4 * s);
  }
  function tri(x, top, wd, ht, col = SIL) {
    const { cx, by, s } = C;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(cx + x * s, by + top * s);
    ctx.lineTo(cx + (x + wd / 2) * s, by + (top - ht) * s);
    ctx.lineTo(cx + (x + wd) * s, by + top * s);
    ctx.fill();
  }
  function banner(x, top, len, color, t) {
    const { cx, by, s } = C;
    const wave = Math.sin(t * 0.06 + x) * 2.5;
    ctx.fillStyle = SIL;
    ctx.fillRect(cx + x * s, by + (top - 12) * s, Math.max(1, 0.8 * s), 12 * s);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx + x * s, by + (top - 12) * s);
    ctx.lineTo(cx + (x + len) * s, by + (top - 10 + wave * 0.3) * s);
    ctx.lineTo(cx + x * s, by + (top - 7) * s);
    ctx.fill();
  }
  function windowsLit(list, t) {
    const { cx, by, s } = C;
    ctx.save();
    ctx.shadowColor = "#ffb060";
    ctx.shadowBlur = 8;
    list.forEach(([wx, wy], i) => {
      const f = 0.6 + Math.sin(t * 0.08 + i * 1.7) * 0.2 + Math.sin(t * 0.31 + i) * 0.08;
      ctx.fillStyle = `rgba(255,190,110,${f})`;
      ctx.fillRect(cx + (wx - 1.5) * s, by + wy * s, 3 * s, 5 * s);
    });
    ctx.restore();
  }
  function glowAt(x, y, r, color) {
    const { cx, by, s } = C;
    const gx = cx + x * s, gy = by + y * s;
    const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r * s);
    g.addColorStop(0, color);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(gx - r * s, gy - r * s, r * 2 * s, r * 2 * s);
  }
  // each tier: draw(t) paints it; smoke = chimney spots; walls = guard walkways;
  // ground = range where workers walk; torches = flickering lights
  const TIER_ART = [
    {
      // 1: Ruined Keep
      smoke: [[-38, -3]], walls: [], ground: [-62, 30], workers: 2,
      draw(t) {
        const { cx, by, s } = C;
        blk(-18, -58, 36);
        // jagged broken top of the keep
        ctx.fillStyle = SIL;
        ctx.beginPath();
        ctx.moveTo(cx - 18 * s, by - 58 * s);
        [[-12, -70], [-6, -62], [0, -74], [7, -64], [12, -68], [18, -60]].forEach(([x, y]) => ctx.lineTo(cx + x * s, by + y * s));
        ctx.lineTo(cx + 18 * s, by - 58 * s);
        ctx.fill();
        blk(-62, -16, 30);
        tri(-36, -16, 10, 6);
        [[30, 3], [38, 2], [44, 4]].forEach(([x, r]) => {
          ctx.fillStyle = SIL;
          ctx.beginPath();
          ctx.arc(cx + x * s, by - r * 0.6 * s, r * s, Math.PI, 0);
          ctx.fill();
        });
        // scaffolding against the keep
        ctx.strokeStyle = "#3a2818";
        ctx.lineWidth = Math.max(1, 0.8 * s);
        ctx.beginPath();
        for (let x = 20; x <= 32; x += 6) {
          ctx.moveTo(cx + x * s, by);
          ctx.lineTo(cx + x * s, by - 54 * s);
        }
        for (let y = -12; y >= -54; y -= 14) {
          ctx.moveTo(cx + 18 * s, by + y * s);
          ctx.lineTo(cx + 32 * s, by + y * s);
        }
        ctx.stroke();
        tri(52, 0, 18, 13, "#120c08");
        tri(68, 0, 14, 10, "#120c08");
        const f = 0.8 + Math.sin(t * 0.3) * 0.15 + Math.random() * 0.05;
        glowAt(-38, -3, 22 * f, `rgba(255,150,70,${0.45 * f})`);
        ctx.fillStyle = `rgba(255,210,140,${f})`;
        ctx.fillRect(cx - 39.5 * s, by - 5 * s, 3 * s, 4 * s);
        windowsLit([[-8, -40], [6, -48], [-2, -24]], t);
      }
    },
    {
      // 2: Timber Keep
      smoke: [[10, -108], [-52, -3]], walls: [], ground: [-70, 70], workers: 3, lookout: [52, -44],
      draw(t) {
        const { cx, by, s } = C;
        blk(-20, -82, 40);
        tri(-24, -82, 48, 22, "#1a110a");
        stack(8, -98, 5);
        // palisade of sharpened stakes
        ctx.fillStyle = WOOD;
        for (let x = -80; x <= 76; x += 4) {
          if (x > -24 && x < 22) continue;
          const ht = 16 + ((x * 7) % 5);
          ctx.fillRect(cx + x * s, by - ht * s, 3.2 * s, ht * s);
          ctx.beginPath();
          ctx.moveTo(cx + x * s, by - ht * s);
          ctx.lineTo(cx + (x + 1.6) * s, by - (ht + 4) * s);
          ctx.lineTo(cx + (x + 3.2) * s, by - ht * s);
          ctx.fill();
        }
        // wooden watchtower
        ctx.fillStyle = WOOD;
        [46, 58].forEach((x) => ctx.fillRect(cx + x * s, by - 44 * s, 2 * s, 44 * s));
        ctx.fillRect(cx + 43 * s, by - 46 * s, 20 * s, 4 * s);
        tri(42, -46, 22, 10, "#1a110a");
        // forge fire by the gate
        const f = 0.8 + Math.sin(t * 0.25) * 0.15 + Math.random() * 0.05;
        glowAt(-52, -4, 20 * f, `rgba(255,140,60,${0.4 * f})`);
        windowsLit([[-10, -70], [10, -70], [-10, -48], [10, -48], [0, -30], [0, -58]], t);
      }
    },
    {
      // 3: Stone Bastion
      smoke: [[14, -126]], walls: [[-68, 68, -22]], ground: [-80, 80], workers: 3,
      draw(t) {
        blk(-70, -22, 140);
        crenels(-70, 70, -22);
        blk(-50, -62, 22);
        blk(28, -62, 22);
        crenels(-50, -28, -62);
        crenels(28, 50, -62);
        tri(-52, -62, 26, 22);
        tri(26, -62, 26, 22);
        blk(-22, -92, 44);
        tri(-22, -92, 44, 38);
        stack(12, -116, 4);
        banner(0, -130, 12, "#c8a97e99", C.t);
        // gate
        const { cx, by, s } = C;
        ctx.fillStyle = "rgba(255,170,90,0.25)";
        ctx.beginPath();
        ctx.ellipse(cx, by - 6 * s, 6 * s, 9 * s, 0, Math.PI, 0);
        ctx.fill();
        windowsLit([[-6, -52], [6, -52], [-38, -30], [38, -30], [-14, -28], [14, -28], [0, -76], [-38, -50], [38, -50]], t);
      }
    },
    {
      // 4: Iron Fortress
      smoke: [[-32, -98], [24, -126]], walls: [[-92, -58, -26], [58, 92, -26], [-35, 35, -46]], ground: [-100, 100], workers: 4,
      torches: [[-75, -30], [75, -30], [-45, -50], [45, -50], [-12, -8], [12, -8]],
      draw(t) {
        blk(-95, -26, 190);
        crenels(-95, 95, -26);
        blk(-92, -56, 20);
        blk(72, -56, 20);
        tri(-94, -56, 24, 20);
        tri(70, -56, 24, 20);
        blk(-38, -46, 76);
        crenels(-38, 38, -46);
        blk(-55, -88, 22);
        blk(33, -88, 22);
        tri(-57, -88, 26, 26);
        tri(31, -88, 26, 26);
        blk(-26, -116, 52);
        crenels(-26, 26, -116);
        tri(-18, -116, 36, 40);
        stack(-32, -88, 4);
        stack(22, -116, 4);
        banner(0, -156, 14, "#8a2a1acc", C.t);
        banner(-44, -114, 10, "#8a2a1aaa", C.t);
        banner(44, -114, 10, "#8a2a1aaa", C.t);
        const { cx, by, s } = C;
        ctx.fillStyle = "rgba(255,170,90,0.3)";
        ctx.beginPath();
        ctx.ellipse(cx, by - 8 * s, 8 * s, 12 * s, 0, Math.PI, 0);
        ctx.fill();
        windowsLit([[-12, -100], [12, -100], [-12, -80], [12, -80], [0, -62], [-44, -74], [44, -74], [-44, -58], [44, -58], [-82, -42], [82, -42], [-24, -36], [24, -36], [0, -90], [0, -36]], t);
      }
    },
    {
      // 5: Void Citadel
      smoke: [[-118, -20], [128, -18], [-40, -114], [36, -114]], walls: [[-108, -72, -30], [72, 108, -30], [-40, 40, -60]], ground: [-150, 150], workers: 6,
      torches: [[-90, -34], [90, -34], [-50, -64], [50, -64], [-14, -10], [14, -10]],
      beacon: [0, -196],
      draw(t) {
        const { cx, by, s } = C;
        const A = C.accent || ACCENTS[5]; // tiers 6-10 recolor the citadel's lights
        // the town at the citadel's feet
        [[-150, 14], [-136, 18], [-122, 12], [118, 16], [132, 12], [146, 18]].forEach(([x, ht]) => {
          blk(x, -ht, 12, "#0c0806");
          tri(x - 1, -ht, 14, 7, "#0c0806");
        });
        stack(-120, -14, 3, 8);
        stack(126, -12, 3, 8);
        windowsLit([[-145, -9], [-131, -11], [-117, -7], [123, -10], [137, -8], [151, -11]], t);
        blk(-110, -30, 220);
        crenels(-110, 110, -30);
        blk(-108, -70, 22);
        blk(86, -70, 22);
        tri(-110, -70, 26, 24);
        tri(84, -70, 26, 24);
        blk(-42, -60, 84);
        crenels(-42, 42, -60);
        blk(-64, -104, 24);
        blk(40, -104, 24);
        tri(-66, -104, 28, 32);
        tri(38, -104, 28, 32);
        // flying buttresses
        ctx.strokeStyle = SIL;
        ctx.lineWidth = 3 * s;
        ctx.beginPath();
        ctx.moveTo(cx - 52 * s, by - 96 * s);
        ctx.quadraticCurveTo(cx - 40 * s, by - 132 * s, cx - 24 * s, by - 136 * s);
        ctx.moveTo(cx + 52 * s, by - 96 * s);
        ctx.quadraticCurveTo(cx + 40 * s, by - 132 * s, cx + 24 * s, by - 136 * s);
        ctx.stroke();
        blk(-26, -140, 52);
        crenels(-26, 26, -140);
        blk(-12, -168, 24);
        tri(-12, -168, 24, 26);
        stack(-42, -104, 4);
        stack(34, -104, 4);
        banner(-52, -136, 10, A.banner, C.t);
        banner(52, -136, 10, A.banner, C.t);
        ctx.fillStyle = `rgba(${A.rgb},0.3)`;
        ctx.beginPath();
        ctx.ellipse(cx, by - 9 * s, 9 * s, 14 * s, 0, Math.PI, 0);
        ctx.fill();
        // the void beacon: a pulsing light at the top of the great spire
        const p = 0.7 + Math.sin(t * 0.05) * 0.3;
        const bx = cx, byy = by - 196 * s;
        const beam = ctx.createLinearGradient(bx, byy, bx, byy - 260 * s);
        beam.addColorStop(0, `rgba(${A.rgb},${0.25 * p * (A.beam || 1)})`);
        beam.addColorStop(1, `rgba(${A.rgb},0)`);
        ctx.fillStyle = beam;
        ctx.beginPath();
        ctx.moveTo(bx - 3 * s, byy);
        ctx.lineTo(bx - 14 * (A.beam || 1) * s, byy - 260 * s);
        ctx.lineTo(bx + 14 * (A.beam || 1) * s, byy - 260 * s);
        ctx.lineTo(bx + 3 * s, byy);
        ctx.fill();
        glowAt(0, -196, 30 * p * (A.beam || 1), `rgba(${A.rgb},${0.55 * p})`);
        ctx.fillStyle = `rgba(${A.core},${0.8 + 0.2 * p})`;
        ctx.beginPath();
        ctx.arc(bx, byy, 3 * s, 0, Math.PI * 2);
        ctx.fill();
        windowsLit([[-8, -124], [8, -124], [-8, -104], [8, -104], [0, -154], [-52, -90], [52, -90], [-52, -74], [52, -74], [-96, -56], [96, -56], [-96, -42], [96, -42], [-28, -48], [28, -48], [-14, -48], [14, -48], [0, -82], [-8, -86], [8, -86], [-70, -20], [70, -20], [-40, -20], [40, -20]], t);
      }
    }
  ];
  // ---------- tiers 6-10: the citadel keeps growing ----------
  // each tier keeps everything from the tiers before it and adds its own crown
  function highTier(tier) {
    const base = TIER_ART[4];
    return {
      smoke: base.smoke,
      walls: base.walls,
      ground: [-150, 150],
      workers: 6 + (tier - 5),
      torches: [...base.torches, [-132, -112], [130, -112]],
      beacon: base.beacon,
      draw(t) {
        const { cx, by, s } = C;
        if (tier >= 10) drawAurora(t);
        if (tier >= 8) echoSpires(t);
        if (tier >= 6) throneTowers(t);
        C.accent = ACCENTS[tier];
        base.draw(t);
        C.accent = null;
        if (tier >= 6) throneHorns();
        if (tier >= 7) fallingStars(t, tier);
        if (tier >= 9) riftCrown(t);
      }
    };
  }
  // 6 Ashen Throne: two great watchtowers with braziers, horns on the spire
  function throneTowers(t) {
    [[-146, 22], [124, 22]].forEach(([x, wd], i) => {
      blk(x, -108, wd);
      crenels(x, x + wd, -108, 6);
      tri(x - 2, -108, wd + 4, 18);
      const f = 0.75 + Math.sin(t * 0.21 + i * 2) * 0.15 + Math.random() * 0.1;
      glowAt(x + wd / 2, -130, 26 * f, `rgba(255,120,60,${0.5 * f})`);
    });
    windowsLit([[-135, -90], [-135, -70], [135, -90], [135, -70], [-135, -50], [135, -50]], t);
  }
  function throneHorns() {
    const { cx, by, s } = C;
    ctx.fillStyle = SIL;
    [-1, 1].forEach((d) => {
      ctx.beginPath();
      ctx.moveTo(cx + d * 12 * s, by - 168 * s);
      ctx.quadraticCurveTo(cx + d * 30 * s, by - 178 * s, cx + d * 26 * s, by - 204 * s);
      ctx.quadraticCurveTo(cx + d * 20 * s, by - 182 * s, cx + d * 6 * s, by - 176 * s);
      ctx.fill();
    });
  }
  // 7 Starfall Hold: broken stone drifting upward around the spire
  function fallingStars(t, tier) {
    const { cx, by, s } = C;
    const A = ACCENTS[tier];
    for (let i = 0; i < 7; i++) {
      const a = t * 0.004 + i * 0.9;
      const x = Math.cos(a) * (60 + (i % 3) * 18);
      const y = -150 - ((i * 23 + t * 0.12) % 110);
      const r = 3 + (i % 3) * 1.6;
      glowAt(x, y + r, r * 3, `rgba(${A.rgb},0.22)`);
      ctx.fillStyle = SIL;
      ctx.beginPath();
      ctx.moveTo(cx + (x - r) * s, by + y * s);
      ctx.lineTo(cx + x * s, by + (y - r * 1.3) * s);
      ctx.lineTo(cx + (x + r) * s, by + (y - r * 0.2) * s);
      ctx.lineTo(cx + (x + r * 0.4) * s, by + (y + r) * s);
      ctx.fill();
    }
  }
  // 8 Echoing Spires: twin spires, and pale echoes of them drifting up
  function echoSpires(t) {
    const { cx, by, s } = C;
    [-82, 70].forEach((x, i) => {
      blk(x, -150, 12);
      tri(x - 2, -150, 16, 44);
      for (let k = 0; k < 2; k++) {
        const ph = ((t * 0.006 + k * 0.5 + i * 0.25) % 1);
        ctx.strokeStyle = `rgba(140,240,225,${0.35 * (1 - ph)})`;
        ctx.lineWidth = Math.max(1, 0.8 * s);
        const lift = ph * 40;
        ctx.strokeRect(cx + x * s, by + (-150 - lift) * s, 12 * s, 40 * s);
      }
    });
    windowsLit([[-76, -130], [-76, -110], [76, -130], [76, -110]], t);
  }
  // 9 Rift Crown: a slow ring of light around the highest tower
  function riftCrown(t) {
    const { cx, by, s } = C;
    const y = by - 182 * s, rx = 48 * s, ry = 10 * s;
    ctx.save();
    ctx.shadowColor = "#c08ae8";
    ctx.shadowBlur = 12;
    ctx.strokeStyle = "rgba(200,150,255,0.55)";
    ctx.lineWidth = Math.max(1, 1.4 * s);
    ctx.beginPath();
    ctx.ellipse(cx, y, rx, ry, -0.12, 0, Math.PI * 2);
    ctx.stroke();
    for (let i = 0; i < 10; i++) {
      const a = t * 0.01 + (i / 10) * Math.PI * 2;
      const px = cx + Math.cos(a) * rx, py = y + Math.sin(a) * ry - Math.cos(a) * rx * 0.12;
      ctx.fillStyle = `rgba(240,220,255,${0.4 + 0.4 * (Math.sin(a) > 0 ? 1 : 0.3)})`;
      ctx.fillRect(px - 1.2 * s, py - 1.2 * s, 2.4 * s, 2.4 * s);
    }
    ctx.restore();
  }
  // 10 The Remembered City: an aurora hangs over everything
  function drawAurora(t) {
    const { cx, by, s } = C;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    [["255,210,120", 0], ["140,240,225", 1.7], ["200,150,255", 3.1]].forEach(([rgb, o], k) => {
      const g = ctx.createLinearGradient(0, by - 330 * s, 0, by - 200 * s);
      g.addColorStop(0, `rgba(${rgb},0)`);
      g.addColorStop(0.5, `rgba(${rgb},0.16)`);
      g.addColorStop(1, `rgba(${rgb},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      for (let x = -260; x <= 260; x += 10) {
        const y = -270 - k * 18 + Math.sin(x * 0.02 + t * 0.01 + o) * 16;
        x === -260 ? ctx.moveTo(cx + x * s, by + y * s) : ctx.lineTo(cx + x * s, by + y * s);
      }
      for (let x = 260; x >= -260; x -= 10) ctx.lineTo(cx + x * s, by + (-210 - k * 18 + Math.sin(x * 0.02 + t * 0.01 + o + 0.6) * 12) * s);
      ctx.fill();
    });
    ctx.restore();
  }
  const ACCENTS = {
    5: { banner: "#5a6ad0aa", rgb: "160,180,255", core: "230,236,255" },
    6: { banner: "#c0402aaa", rgb: "255,140,80", core: "255,226,200" },
    7: { banner: "#d8d090aa", rgb: "255,236,170", core: "255,250,230" },
    8: { banner: "#5fc8bcaa", rgb: "140,240,225", core: "225,255,250" },
    9: { banner: "#a060e0aa", rgb: "200,140,255", core: "245,230,255", beam: 1.3 },
    10: { banner: "#e8c07caa", rgb: "255,210,120", core: "255,248,225", beam: 1.7 }
  };
  [6, 7, 8, 9, 10].forEach((n) => TIER_ART.push(highTier(n)));
  // ---------- life around the castle ----------
  let castleLife = { tier: 0, workers: [], guards: [], smoke: [], flies: [], sparks: [], anim: null };
  function rebuildLife(tier) {
    const art = TIER_ART[tier - 1];
    const [g0, g1] = art.ground;
    castleLife.workers = Array.from({ length: art.workers }, (_, i) => ({
      x: g0 + Math.random() * (g1 - g0), dir: Math.random() < 0.5 ? -1 : 1,
      v: 0.08 + Math.random() * 0.06, carry: i % 2 === 0, pause: 0, ph: Math.random() * 6
    }));
    castleLife.guards = art.walls.map(([a, b, y]) => ({ a, b, y, x: a + Math.random() * (b - a), dir: 1, v: 0.05, pause: 0, ph: 0 }));
    castleLife.tier = tier;
  }
  // a tiny walking silhouette; feet at (x, y) in pixels
  function drawWalker(x, y, s, dir, ph, opt = {}) {
    const sc = s * (opt.size || 1);
    const step = Math.sin(ph) * 1.6 * sc;
    ctx.strokeStyle = "#050302";
    ctx.fillStyle = "#050302";
    ctx.lineWidth = Math.max(1, 1.1 * sc);
    ctx.beginPath();
    ctx.moveTo(x, y - 4 * sc);
    ctx.lineTo(x - step, y);
    ctx.moveTo(x, y - 4 * sc);
    ctx.lineTo(x + step, y);
    ctx.stroke();
    ctx.fillRect(x - 1.4 * sc, y - 9 * sc, 2.8 * sc, 5.5 * sc);
    ctx.beginPath();
    ctx.arc(x, y - 10.4 * sc, 1.5 * sc, 0, Math.PI * 2);
    ctx.fill();
    if (opt.carry) ctx.fillRect(x - 2 * sc + dir * sc, y - 14.6 * sc, 4 * sc, 2.6 * sc);
    if (opt.spear) {
      ctx.beginPath();
      ctx.moveTo(x + dir * 2 * sc, y - 1 * sc);
      ctx.lineTo(x + dir * 2 * sc, y - 16 * sc);
      ctx.stroke();
    }
    if (opt.torch) {
      const tx = x - dir * 2.4 * sc, ty = y - 11 * sc;
      const f = 0.75 + Math.random() * 0.25;
      const g = ctx.createRadialGradient(tx, ty, 0, tx, ty, 9 * sc * f);
      g.addColorStop(0, `rgba(255,170,80,${0.7 * f})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(tx - 10 * sc, ty - 10 * sc, 20 * sc, 20 * sc);
      ctx.fillStyle = `rgba(255,230,160,${f})`;
      ctx.fillRect(tx - 0.6 * sc, ty - 1.4 * sc, 1.2 * sc, 1.6 * sc);
    }
  }
  function updateLife(t) {
    const { cx, by, s } = C;
    const tier = castleTier();
    const art = TIER_ART[tier - 1];
    const building = BDATA.some((b) => S.buildings[b.id].upgrading);
    // smoke drifts up and leans with the wind
    art.smoke.forEach(([x, y], i) => {
      if (Math.random() < 0.18 * dt)
        castleLife.smoke.push({ x: cx + x * s, y: by + y * s, vx: 0.12 + Math.random() * 0.1, vy: -(0.25 + Math.random() * 0.15), r: 1.5 * s, life: 1 });
    });
    castleLife.smoke = castleLife.smoke.filter((p) => (p.life -= 0.006 * dt) > 0);
    castleLife.smoke.forEach((p) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.r += 0.035 * s * dt;
      ctx.fillStyle = `rgba(70,62,58,${0.16 * p.life})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    // wall torches
    (art.torches || []).forEach(([x, y], i) => {
      const f = 0.7 + Math.sin(t * 0.2 + i * 1.3) * 0.15 + Math.random() * 0.1;
      glowAt(x, y, 10 * f, `rgba(255,150,70,${0.55 * f})`);
    });
    // guards patrol the walkways, pausing now and then
    castleLife.guards.forEach((g) => {
      if (g.pause > 0) g.pause -= dt;
      else {
        g.x += g.dir * g.v * dt;
        g.ph += 0.12 * dt;
        if (g.x < g.a || g.x > g.b) {
          g.dir *= -1;
          g.x = Math.max(g.a, Math.min(g.b, g.x));
          g.pause = 60 + Math.random() * 120;
        } else if (Math.random() < 0.002 * dt) g.pause = 80 + Math.random() * 100;
      }
      drawWalker(cx + g.x * s, by + g.y * s, s * 0.9, g.dir, g.pause > 0 ? 0 : g.ph, { spear: true, torch: true });
    });
    if (art.lookout) drawWalker(cx + art.lookout[0] * s + 6 * s, by + art.lookout[1] * s, s * 0.9, -1, 0, { spear: true, torch: true });
    // workers haul stone back and forth (more of them while something is being built)
    const [g0, g1] = art.ground;
    const active = castleLife.workers.length + (building ? 0 : 0);
    castleLife.workers.forEach((w, i) => {
      if (i >= active) return;
      if (w.pause > 0) w.pause -= dt;
      else {
        w.x += w.dir * w.v * (building ? 1.6 : 1) * dt;
        w.ph += 0.15 * dt;
        if (w.x < g0 || w.x > g1) {
          w.dir *= -1;
          w.carry = !w.carry;
          w.pause = 40 + Math.random() * 80;
        }
      }
      drawWalker(cx + w.x * s, by + 2 * s, s, w.dir, w.pause > 0 ? 0 : w.ph, { carry: w.carry });
    });
    // hammer sparks while an upgrade is under construction
    if (building && Math.random() < 0.08 * dt) {
      const sx = cx + (g0 + Math.random() * (g1 - g0)) * 0.5 * s;
      for (let k = 0; k < 6; k++) castleLife.sparks.push({ x: sx, y: by - (4 + Math.random() * 20) * s, vx: (Math.random() - 0.5) * 2, vy: -Math.random() * 2, life: 1 });
    }
    castleLife.sparks = castleLife.sparks.filter((p) => (p.life -= 0.04 * dt) > 0);
    castleLife.sparks.forEach((p) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 0.08 * dt;
      ctx.fillStyle = `rgba(255,${180 + Math.random() * 60},90,${p.life})`;
      ctx.fillRect(p.x, p.y, 1.6, 1.6);
    });
  }
  function drawFireflies(t) {
    if (!castleLife.flies.length)
      castleLife.flies = Array.from({ length: 16 }, () => ({ x: Math.random(), y: 0.62 + Math.random() * 0.3, a: Math.random() * 6, b: Math.random() * 6 }));
    ctx.globalCompositeOperation = "lighter";
    castleLife.flies.forEach((f, i) => {
      f.a += 0.013 * dt;
      f.b += 0.017 * dt;
      f.x += Math.sin(f.a) * 0.0006 * dt;
      f.y += Math.cos(f.b) * 0.0004 * dt;
      if (f.x < 0) f.x = 1;
      if (f.x > 1) f.x = 0;
      const on = Math.max(0, Math.sin(t * 0.04 + i * 2.3));
      if (on < 0.05) return;
      const x = f.x * w, y = f.y * h;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
      g.addColorStop(0, `rgba(210,255,140,${0.7 * on})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(x - 6, y - 6, 12, 12);
    });
    ctx.globalCompositeOperation = "source-over";
  }
  // draws the castle, playing a rising rebuild animation after a level-up
  function drawCastle(cx, by, s, t) {
    C = { cx, by, s, t };
    const tier = castleTier();
    if (castleLife.tier !== tier) {
      if (castleLife.tier) castleLife.anim = { from: castleLife.tier, p: 0, start: performance.now() };
      rebuildLife(tier);
    }
    const a = castleLife.anim;
    if (a) {
      a.p = Math.min(1, (performance.now() - a.start) / 2200); // time-based: same speed on any device
      const ht = (a.p * 280 + 10) * s;
      // old castle above the rising line, new castle below it
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, w, by - ht);
      ctx.clip();
      TIER_ART[a.from - 1].draw(t);
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, by - ht, w, ht + 4);
      ctx.clip();
      TIER_ART[tier - 1].draw(t);
      ctx.restore();
      // dust along the rising edge
      for (let k = 0; k < 3; k++) {
        ctx.fillStyle = `rgba(200,170,130,${0.3 * Math.random()})`;
        ctx.fillRect(cx + (Math.random() - 0.5) * 220 * s, by - ht + Math.random() * 6, 2, 2);
      }
      if (a.p >= 1) castleLife.anim = null;
    } else TIER_ART[tier - 1].draw(t);
  }

  function draw(now) {
    requestAnimationFrame(draw);
    // paused while the world map, a battle or the Forge covers the city;
    // the clock resets so it resumes smoothly instead of jumping
    if (cityCovered() || document.hidden) {
      clock.reset();
      return;
    }
    dt = clock(now || performance.now());
    if (!w || !h) { resize(); }
    ctx.clearRect(0, 0, w, h);
    // Sky
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.7);
    sky.addColorStop(0, "#08060f");
    sky.addColorStop(0.5, "#140e10");
    sky.addColorStop(1, "#241809");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.7);
    // Stars
    stars.forEach((st) => {
      const p = Math.sin(t * st.s + st.p) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(st.x * w, st.y * h, st.r * (0.7 + p * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230,215,180,${0.2 + p * 0.6})`;
      ctx.fill();
    });
    // Shooting star
    if (!shoot && Math.random() < 0.004 * dt) shoot = { x: Math.random() * w * 0.7, y: Math.random() * h * 0.2, life: 1 };
    if (shoot) {
      const len = 70;
      const g = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x - len, shoot.y - len * 0.4);
      g.addColorStop(0, `rgba(255,240,210,${shoot.life})`);
      g.addColorStop(1, "transparent");
      ctx.strokeStyle = g; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x - len, shoot.y - len * 0.4); ctx.stroke();
      shoot.x += 7 * dt; shoot.y += 2.8 * dt; shoot.life -= 0.02 * dt;
      if (shoot.life <= 0) shoot = null;
    }
    // Moon
    const mx = w * 0.82, my = h * 0.16, mr = Math.max(14, Math.min(w, h) * 0.05);
    const mg = ctx.createRadialGradient(mx, my, mr * 0.5, mx, my, mr * 5);
    mg.addColorStop(0, "rgba(232,220,192,0.18)");
    mg.addColorStop(1, "transparent");
    ctx.fillStyle = mg; ctx.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);
    ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2); ctx.fillStyle = "#e8dcc0"; ctx.fill();
    ctx.beginPath(); ctx.arc(mx - mr * 0.35, my - mr * 0.15, mr * 0.92, 0, Math.PI * 2); ctx.fillStyle = "rgba(20,14,16,0.55)"; ctx.fill();
    // Void crack (now with glow + branches)
    const cp = Math.sin(t * 0.012) * 0.4 + 0.6;
    ctx.save();
    ctx.shadowColor = "#8a9fe8"; ctx.shadowBlur = 14 * cp;
    ctx.strokeStyle = `rgba(150,170,240,${cp * 0.35})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(w * 0.36, h * 0.03);
    ctx.quadraticCurveTo(w * 0.41, h * 0.16, w * 0.39, h * 0.3);
    ctx.moveTo(w * 0.395, h * 0.14); ctx.lineTo(w * 0.43, h * 0.19);
    ctx.moveTo(w * 0.39, h * 0.22); ctx.lineTo(w * 0.36, h * 0.27);
    ctx.stroke();
    ctx.restore();
    // Mountains
    [["#151008", 0.6, 0.12], ["#1e1508", 0.52, 0.09], ["#2a1e10", 0.46, 0.07]].forEach(([col, yb, yr], i) => {
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 3) {
        const nx = (x / w) * 3 + t * (0.0002 + i * 0.0001);
        ctx.lineTo(x, h * yb - h * yr * (Math.sin(nx * 2.1 + i) * 0.4 + Math.sin(nx * 5 + i * 1.3) * 0.25 + Math.sin(nx * 9 + i * 0.7) * 0.12));
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = col;
      ctx.fill();
    });
    // Horizon glow
    const hg = ctx.createRadialGradient(w / 2, h * 0.6, 0, w / 2, h * 0.6, w * 0.5);
    hg.addColorStop(0, "#e8a05c22");
    hg.addColorStop(1, "transparent");
    ctx.fillStyle = hg;
    ctx.fillRect(0, h * 0.3, w, h * 0.5);
    // Castle (tiered) silhouette
    const cs = Math.max(0.7, Math.min(w, h) / 300) * (castleTier() >= 8 ? 0.84 : castleTier() >= 4 ? 0.9 : 1);
    // warm halo behind the castle so its silhouette stands out from the hills
    const halo = ctx.createRadialGradient(w / 2, h * 0.66 - 70 * cs, 0, w / 2, h * 0.66 - 70 * cs, 210 * cs);
    halo.addColorStop(0, "rgba(232,160,92,0.22)");
    halo.addColorStop(0.6, "rgba(232,140,80,0.08)");
    halo.addColorStop(1, "transparent");
    ctx.fillStyle = halo;
    ctx.fillRect(w / 2 - 210 * cs, h * 0.66 - 280 * cs, 420 * cs, 300 * cs);
    drawCastle(w / 2, h * 0.66, cs, t);
    // Ground
    const gr = ctx.createLinearGradient(0, h * 0.65, 0, h);
    gr.addColorStop(0, "#120d08");
    gr.addColorStop(1, "#070504");
    ctx.fillStyle = gr;
    ctx.fillRect(0, h * 0.65, w, h * 0.35);
    // warm light spilling from the gate onto the ground, so the workers read
    const gl = ctx.createRadialGradient(w / 2, h * 0.67, 0, w / 2, h * 0.67, 170 * cs);
    gl.addColorStop(0, "rgba(232,150,80,0.20)");
    gl.addColorStop(1, "transparent");
    ctx.fillStyle = gl;
    ctx.fillRect(w / 2 - 170 * cs, h * 0.6, 340 * cs, 200 * cs);
    // workers, guards, smoke, torches, sparks
    updateLife(t);
    // Drifting fog
    for (let i = 0; i < 3; i++) {
      const fx = (Math.sin(t * 0.0012 + i * 2.1) * 0.35 + 0.5) * w;
      const fy = h * (0.6 + i * 0.1);
      const fg = ctx.createRadialGradient(fx, fy, 0, fx, fy, w * 0.45);
      fg.addColorStop(0, "rgba(170,150,125,0.07)");
      fg.addColorStop(1, "transparent");
      ctx.fillStyle = fg;
      ctx.fillRect(0, fy - w * 0.45, w, w * 0.9);
    }
    drawFireflies(t);
    // Embers
    ctx.globalCompositeOperation = "lighter";
    embers.forEach((e, i) => {
      e.y -= e.vy * dt; e.wob += 0.03 * dt;
      e.x += (e.vx + Math.sin(e.wob) * 0.3) * dt;
      const fade = Math.min(1, e.y / (h * 0.4));
      const a = (0.4 + Math.sin(t * 0.1 + i) * 0.25) * fade;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fillStyle = e.v ? `rgba(138,159,232,${a})` : `rgba(240,150,90,${a})`;
      ctx.shadowColor = e.v ? "#8a9fe8" : "#f09050";
      ctx.shadowBlur = 6;
      ctx.fill();
      if (e.y < -10 || e.x < -10 || e.x > w + 10) embers[i] = newEmber(false);
    });
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    t += dt;
  }
  draw();
})();
// ==============================================================
// RESOURCE TICK
// ==============================================================
function getRates() {
  const m = prodMult();
  const sr = (1 + lvRate([3, 6, 10, 16], bLevel("quarry"))) * m;
  const wr = lvRate([2, 4, 7, 12], bLevel("farm")) * m;
  const er = (lvRate([1, 1, 3, 3], bLevel("archive")) + lvRate([2, 2, 2], bLevel("temple")) + lvRate([4, 8, 14], bLevel("echowell"))) * m;
  const tr = lvRate([5, 12, 22, 40], bLevel("barracks"));
  const rr = lvRate([2, 4, 7], bLevel("reliquary")) / 60; // relics per second
  return { sr, wr, er, tr, rr };
}
// gains are batched and shown as floating "+N" under each resource chip
const gainAcc = { stone: 0, wood: 0, essence: 0, troops: 0 };
let tickCount = 0;
setInterval(() => {
  const { sr, wr, er, tr, rr } = getRates();
  const before = { ...S.res };
  const cap = resCap();
  S.troopCap = calcTroopCap();
  S.res.stone = Math.min(S.res.stone + sr, Math.max(cap, S.res.stone));
  S.res.wood = Math.min(S.res.wood + wr, Math.max(cap, S.res.wood));
  S.res.essence = Math.min(S.res.essence + er, Math.max(cap, S.res.essence));
  if (rr) addCapped(S.res, "relics", rr);
  if (tr > 0 && S.res.troops < S.troopCap) {
    S.res.troops = Math.min(S.res.troops + tr / 60, S.troopCap);
    updateQuestProgress("troops", Math.floor(S.res.troops));
  }
  Object.keys(gainAcc).forEach((k) => (gainAcc[k] += S.res[k] - before[k]));
  if (++tickCount % 3 === 0) showGains();
  // Tick upgrade timers
  BDATA.forEach((b) => {
    const bs = S.buildings[b.id];
    if (!bs.upgrading || bs.timer <= 0) return;
    bs.timer--;
    if (bs.timer <= 0) {
      bs.upgrading = false;
      bs.level++;
      S.totalLevels++;
      S.upgradesTotal++;
      notify(`${b.name} upgraded to Lv.${bs.level}!`, "success");
      const tile = document.querySelector(`#bmap [data-id="${b.id}"]`);
      burstAt(tile, b.color, 22);
      floatText(tile, `Lv ${bs.level}!`, "gold");
      checkCastleLevel();
      updateQuestProgress("upgrade_any", S.upgradesTotal);
      if (b.id === "keep") updateQuestProgress("keep_level", bs.level);
      if (b.id === "archive") updateQuestProgress("build_archive", 1);
      updateQuestProgress("buildings_built", builtCount());
    }
  });
  updateRatesUI();
  renderBmap();
  updateCP();
  tickExpeditions();
  refreshPanel();
  S.lastSeen = Date.now();
}, 1000);
function showGains() {
  if (W.open || $("combat-modal").classList.contains("open") || $("forge").classList.contains("open")) return; // keep full screens clean
  [["stone", "r-stone"], ["wood", "r-wood"], ["essence", "r-ess"], ["troops", "r-troops"]].forEach(([k, id]) => {
    const n = Math.floor(gainAcc[k] || 0);
    if (n >= 1) {
      const chip = $(id).closest(".res");
      floatText(chip, `+${n}`, "down");
      retrigger(chip, "gain");
      gainAcc[k] -= n;
    }
  });
}
function builtCount() {
  return BDATA.filter((b) => S.buildings[b.id].level > 0).length;
}
// ==============================================================
// OFFLINE PROGRESS  (catch up on resources + timers while away)
// ==============================================================
function processOffline(sec) {
  sec = Math.floor(Math.min(sec, offlineCap()));
  if (sec < 10) return;
  const { sr, wr, er, tr, rr } = getRates();
  const before = { ...S.res };
  const cap = resCap();
  S.troopCap = calcTroopCap();
  S.res.stone = Math.min(S.res.stone + sr * sec, Math.max(cap, S.res.stone));
  S.res.wood = Math.min(S.res.wood + wr * sec, Math.max(cap, S.res.wood));
  S.res.essence = Math.min(S.res.essence + er * sec, Math.max(cap, S.res.essence));
  if (rr) addCapped(S.res, "relics", rr * sec);
  if (tr > 0) S.res.troops = Math.min(S.res.troops + (tr / 60) * sec, S.troopCap);
  const finished = [];
  BDATA.forEach((b) => {
    const bs = S.buildings[b.id];
    if (!bs.upgrading) return;
    bs.timer -= sec;
    if (bs.timer <= 0) {
      bs.timer = 0;
      bs.upgrading = false;
      bs.level++;
      S.totalLevels++;
      S.upgradesTotal++;
      finished.push(b.name);
    }
  });
  const gains = ["stone", "wood", "essence", "troops"]
    .map((k) => [k, Math.floor(S.res[k] - before[k])])
    .filter(([, v]) => v > 0)
    .map(([k, v]) => `+${v} ${k}`);
  S.awayReport = { sec, gains, finished };
}
function fmtAway(sec) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}
// ==============================================================
// ANIMATED RESOURCE COUNTERS  (numbers roll instead of jumping)
// ==============================================================
const RES_KEYS = [["stone", "r-stone"], ["wood", "r-wood"], ["essence", "r-ess"], ["relics", "r-relic"], ["gold", "r-gold"], ["troops", "r-troops"]];
const shown = {}, lastTarget = {};
const counterClock = frameClock();
function animateCounters(now) {
  const dt = counterClock(now || performance.now());
  const ease = 1 - Math.pow(1 - 0.12, dt); // same glide speed at any frame rate
  RES_KEYS.forEach(([k, id]) => {
    const target = Math.floor(S.res[k]);
    const el = $(id);
    if (shown[k] === undefined) shown[k] = target;
    if (lastTarget[k] !== undefined && target < lastTarget[k]) retrigger(el.closest(".res"), "spend");
    lastTarget[k] = target;
    const d = target - shown[k];
    shown[k] = Math.abs(d) < 0.5 ? target : shown[k] + d * ease;
    const txt = String(Math.round(shown[k]));
    if (el.textContent !== txt) el.textContent = txt; // only touch the DOM when the number changes
  });
  requestAnimationFrame(animateCounters);
}
// ==============================================================
// BUILDING MAP
// ==============================================================
const slotSig = {};
function canAffordNext(b) {
  const c = bCost(b, S.buildings[b.id].level);
  return !!c && S.res.stone >= c.s && S.res.wood >= c.w && S.res.essence >= c.e;
}
function pipsHtml(b, level) {
  // long bars (overcharged buildings) shrink to fit; the gold pips are the original levels
  const max = bMax(b);
  return `<div class="bnode-pips${max > 6 ? " many" : ""}">${Array.from({ length: max }, (_, i) => `<i class="pip${i < level ? " on" : ""}${i >= b.max ? " over" : ""}"></i>`).join("")}</div>`;
}
function renderBmap() {
  const map = $("bmap");
  // 5x4 = 20 slots
  if (map.children.length === 0) {
    for (let i = 0; i < 20; i++) {
      const slot = document.createElement("div");
      slot.className = "bnode empty";
      slot.dataset.slot = i;
      slot.style.setProperty("--d", `-${((i * 0.73) % 3.4).toFixed(2)}s`);
      map.appendChild(slot);
    }
  }
  BDATA.forEach((b) => {
    const slot = map.querySelector(`[data-slot="${b.grid}"]`);
    if (!slot) return;
    const bs = S.buildings[b.id];
    const locked = b.unlock > S.castleLevel;
    const maxed = bs.level >= bMax(b);
    const upgrading = bs.upgrading;
    const built = bs.level > 0;
    const ready = !locked && !maxed && !upgrading && canAffordNext(b);
    const sel = S.selectedBuilding === b.id;
    // only rebuild the tile's markup when something visible changes,
    // so the idle animations keep running smoothly
    const sig = [locked, bs.level, upgrading, ready, sel].join("|");
    if (slotSig[b.id] !== sig) {
      slotSig[b.id] = sig;
      slot.dataset.id = b.id;
      slot.style.setProperty("--bc", b.color);
      slot.className =
        "bnode" +
        (built ? " built" : " unbuilt") +
        (locked ? " locked" : "") +
        (upgrading ? " upgrading" : "") +
        (sel ? " selected" : "") +
        (ready ? " ready" : "") +
        (maxed ? " maxed" : "");
      slot.onclick = locked ? null : () => openBuildingModal(b.id);
      const lvTxt = locked
        ? `Castle Lv ${b.unlock}`
        : upgrading
        ? built ? `Building Lv ${bs.level + 1}` : "Building..."
        : built ? (maxed ? "MAX" : `Lv ${bs.level}`) : "Build";
      slot.innerHTML = `
        <div class="bnode-glow"></div>
        ${built
          ? `<div class="bnode-icon">${b.icon}</div>`
          : `<div class="bnode-icon ghost">${locked ? "\u{1F512}" : "+"}</div>`}
        <div class="bnode-name">${locked ? "???" : b.name}</div>
        ${built ? pipsHtml(b, bs.level) : ""}
        <div class="bnode-lv">${lvTxt}</div>
        <div class="bnode-bar"><div class="bnode-fill"></div></div>
        <div class="bnode-timer"></div>
        ${ready ? `<div class="bnode-ready" title="Upgrade affordable">\u{25B2}</div>` : ""}`;
    }
    const pct = upgrading
      ? Math.round((1 - bs.timer / bs.timerMax) * 100)
      : built ? (bs.level / bMax(b)) * 100 : 0;
    const fill = slot.querySelector(".bnode-fill");
    fill.style.width = pct + "%";
    fill.style.background = upgrading ? "#8a9fe8" : maxed ? "#7aca8a" : b.color;
    slot.querySelector(".bnode-timer").textContent = upgrading ? `${bs.timer}s` : "";
  });
  $("castle-badge").textContent = `\u{1F3F0} LV.${S.castleLevel}`;
  $("castle-badge").title = `${CASTLE_TIERS[castleTier() - 1]}  -  tap for the Altar of Memory`;
  $("castle-badge").classList.toggle("can-rebirth", S.castleLevel >= 6);
  document.querySelector(".res-cap").textContent = `/${S.troopCap}`;
}
function updateRatesUI() {
  const r = getRates();
  $("rr-stone").textContent = `+${fmtRate(r.sr)}`;
  $("rr-wood").textContent = `+${fmtRate(r.wr)}`;
  $("rr-ess").textContent = `+${fmtRate(r.er)}`;
}
function updateCP() {
  const prev = CASTLE_THRESHOLDS[S.castleLevel - 1] || 0;
  if (S.castleLevel >= CASTLE_MAX) {
    $("cp-fill").style.width = "100%";
    $("cp-pct").textContent = "MAX";
    $("cp-txt").textContent = "CASTLE COMPLETE  -  TAP THE BADGE TO BE REBORN";
    return;
  }
  const next = CASTLE_THRESHOLDS[S.castleLevel];
  const pct = Math.min(100, ((S.totalLevels - prev) / (next - prev)) * 100);
  $("cp-fill").style.width = pct + "%";
  $("cp-pct").textContent = Math.floor(pct) + "%";
  $("cp-txt").textContent = `CASTLE ADV: ${S.totalLevels - prev}/${next - prev}`;
}
// ==============================================================
// BUILDING MODAL
// ==============================================================
let modalBuildingId = null;
function openBuildingModal(id) {
  const b = BDATA.find((x) => x.id === id);
  const bs = S.buildings[id];
  if (!b) return;
  S.selectedBuilding = id;
  modalBuildingId = id;
  const built = bs.level > 0;
  const maxed = bs.level >= bMax(b);
  const nextLv = bs.level + 1;
  const cost = maxed ? null : bCost(b, bs.level);
  const statsHtml = `
    <div class="mstat"><div class="mstat-l">LEVEL</div><div class="mstat-v">${built ? bs.level : " - "}</div><div class="mstat-n">${maxed ? "MAXED" : `-> ${nextLv}`}</div></div>
    <div class="mstat"><div class="mstat-l">BONUS</div><div class="mstat-v" style="font-size:10px;line-height:1.3">${built ? bonusText(b, bs.level) : " - "}</div><div class="mstat-n">${maxed ? "" : bonusText(b, nextLv)}</div></div>`;
  let reqHtml = "";
  if (!maxed && !bs.upgrading && cost) {
    const rows = [
      ["\u{1FAA8} Stone", cost.s, S.res.stone],
      ["\u{1FAB5} Wood", cost.w, S.res.wood],
      ["\u{2697}\u{FE0F} Essence", cost.e, S.res.essence],
      ["\u{23F1} Time", `${cost.t}s`, null]
    ];
    reqHtml = rows
      .map(([l, n, h]) => {
        const ok = h === null || h >= n;
        const bar = h !== null && n > 0
          ? `<div class="req-bar"><i class="${ok ? "" : "short"}" style="width:${Math.min(100, (h / n) * 100)}%"></i></div>`
          : "";
        return `<div class="req-row"><span>${l}</span><span class="${h !== null ? (ok ? "ok" : "no") : ""}">${n}${h !== null ? ` / ${Math.floor(h)}` : ""}</span>${bar}</div>`;
      })
      .join("");
  } else if (maxed)
    reqHtml = `<div style="font-size:12px;color:#555;padding:8px 0;font-style:italic">${S.castleLevel < CASTLE_MAX ? `At its limit for now. Raise the castle to Lv ${Math.max(S.castleLevel + 1, 5)} to build higher.` : "Fully upgraded."}</div>`;
  else if (bs.upgrading) {
    const rc = rushCost(bs);
    reqHtml = `<div style="font-size:12px;color:var(--void);padding:8px 0;font-style:italic">Upgrading... ${bs.timer}s remaining.</div>
      <button class="rs-buy" style="width:100%;padding:9px" ${S.res.gold >= rc ? "" : "disabled"} onclick="rushUpgrade('${id}')">\u{1FA99} Rush it for ${rc} gold</button>`;
  }
  const canAfford = cost && S.res.stone >= cost.s && S.res.wood >= cost.w && S.res.essence >= cost.e;
  const btnLabel = !built ? "\u{1F528} Build" : "^ Upgrade";
  const box = $("modal-box");
  box.style.setProperty("--bc", b.color);
  box.innerHTML = `
    <div class="modal-head">
      <div class="modal-icon">${b.icon}</div>
      <div>
        <div class="modal-title">${b.name}</div>
        <div class="modal-sub">${maxed ? `Level ${bs.level}  -  Maxed` : bs.upgrading ? `Upgrading to Level ${nextLv}` : built ? `Level ${bs.level} -> ${nextLv}` : "Not yet built"}</div>
        ${pipsHtml(b, bs.level)}
      </div>
    </div>
    <div class="modal-lore">${b.lore}</div>
    <div class="modal-stats">${statsHtml}</div>
    <div class="section-label">Requirements</div>
    ${reqHtml}
    ${id === "archive" ? researchHtml() : ""}
    <div class="modal-actions">
      <button class="mbtn ${canAfford && !maxed && !bs.upgrading ? "mbtn-gold" : "mbtn-ghost"}" id="modal-upg-btn" ${maxed || bs.upgrading || !canAfford ? "disabled" : ""} onclick="doUpgrade('${id}')">${maxed ? "\u{2713} Maxed" : bs.upgrading ? "\u{23F3} Upgrading" : btnLabel}</button>
      <button class="mbtn mbtn-ghost" onclick="closeModal()">\u{2715} Close</button>
    </div>`;
  $("modal").classList.add("open");
  renderBmap();
}
// gold from Descents finishes construction early
function rushCost(bs) {
  return Math.max(1, Math.ceil(bs.timer / 3));
}
function rushUpgrade(id) {
  const bs = S.buildings[id];
  if (!bs || !bs.upgrading) return;
  const cost = rushCost(bs);
  if (S.res.gold < cost) return;
  S.res.gold -= cost;
  bs.timer = 1;
  notify(`Workers rush the job for ${cost} gold.`, "success");
  closeModal();
}
function closeModal() {
  S.selectedBuilding = null;
  $("modal").classList.remove("open");
  renderBmap();
}
function doUpgrade(id) {
  const b = BDATA.find((x) => x.id === id);
  const bs = S.buildings[id];
  if (!b || bs.upgrading || bs.level >= bMax(b)) return;
  const cost = bCost(b, bs.level);
  if (!cost) return;
  if (S.res.stone < cost.s || S.res.wood < cost.w || S.res.essence < cost.e) {
    notify("Not enough resources!", "error");
    return;
  }
  S.res.stone -= cost.s;
  S.res.wood -= cost.w;
  S.res.essence -= cost.e;
  bs.upgrading = true;
  bs.timer = cost.t;
  bs.timerMax = cost.t;
  notify(`${b.name} upgrading... ${cost.t}s`, "info");
  burstAt($("modal-upg-btn"), b.color, 12);
  closeModal();
}
// ==============================================================
// CASTLE LEVEL
// ==============================================================
function checkCastleLevel() {
  const needed = CASTLE_THRESHOLDS[S.castleLevel];
  if (!needed || S.totalLevels < needed) return;
  S.castleLevel++;
  const unlocked = BDATA.filter((b) => b.unlock === S.castleLevel).map((b) => b.name);
  $("lu-lv").textContent = `LEVEL ${S.castleLevel}`;
  $("lu-msg").textContent = `Your keep becomes the ${CASTLE_TIERS[castleTier() - 1]}. ${CASTLE_LORE[S.castleLevel - 1] || ""}`;
  $("lu-unlocks").innerHTML = unlocked.length
    ? `<div class="section-label">NEW BUILDINGS</div>` +
      unlocked.map((n) => `<div style="padding:6px 10px;border:1px solid var(--goldb);border-radius:2px;font-family:'Cinzel',serif;font-size:10px;color:var(--gold);background:var(--goldf)">\u{2728} ${n}</div>`).join("")
    : "";
  $("levelup").classList.add("open");
  setTimeout(() => {
    burst(window.innerWidth / 2, window.innerHeight * 0.4, "#c8a97e", 36);
    burst(window.innerWidth / 2, window.innerHeight * 0.4, "#fff8e0", 14);
  }, 250);
  updateCP();
}
function closeLevelUp() {
  $("levelup").classList.remove("open");
  renderBmap();
}
// ==============================================================
// TABS
// ==============================================================
let currentTab = "quests";
function switchTab(tab, el) {
  currentTab = tab;
  document.querySelectorAll(".ptab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  renderPanel();
}
// skip DOM writes when nothing changed, so hover states and animations don't flicker
function setPanel(c, html) {
  if (c._last === html) return;
  c._last = html;
  c.innerHTML = html;
}
function renderPanel() {
  const c = $("panel-content");
  if (currentTab === "quests") renderQuests(c);
  else if (currentTab === "heroes") renderHeroes(c);
  else if (currentTab === "raid") renderRaid(c);
  else if (currentTab === "explore") renderExplore(c);
  panelSig = panelState();
  patchPanel();
}
// ---------- targeted panel refresh ----------
// Runs every second. Numbers that tick on their own (quest progress, troop
// count) are patched in place. The panel is only rebuilt when its layout
// would change (a quest completes, a raid unlocks, a hero levels...), so a
// tap never lands on a button that's being swapped out mid-press.
let panelSig = "";
function panelState() {
  const heroes = S.heroes.map((h) => [h.name, h.level, h.xp, h.atk, h.def, h.spd, h.exp ? h.exp.region + (h.exp.done ? "!" : "") : ""].join(":")).join(",");
  const base = [currentTab, S.castleLevel, S.selectedHero, heroes].join("|");
  if (currentTab === "quests") return base + "|" + QUESTS.map((q) => (S.quests[q.id].claimed ? "c" : getQuestProgress(q) >= q.goal ? "d" : "a")).join("");
  if (currentTab === "raid") return base + "|" + JSON.stringify(S.items) + "|" + RAID_MIN_TROOPS.map((m) => (Math.floor(S.res.troops) >= m ? 1 : 0)).join("");
  if (currentTab === "explore") return base + "|" + S.lore.length;
  return base;
}
function setText(el, txt) {
  if (el && el.textContent !== txt) el.textContent = txt;
}
function patchPanel() {
  const c = $("panel-content");
  if (currentTab === "quests")
    c.querySelectorAll("[data-quest]").forEach((card) => {
      const q = QUESTS.find((x) => x.id === card.dataset.quest);
      if (!q) return;
      const prog = getQuestProgress(q);
      const fill = card.querySelector(".q-fill");
      const w = Math.min(100, (prog / q.goal) * 100) + "%";
      if (fill && fill.style.width !== w) fill.style.width = w;
      setText(card.querySelector("[data-q-count]"), `${prog}/${q.goal}`);
    });
  else if (currentTab === "raid") setText(c.querySelector("[data-troops]"), String(Math.floor(S.res.troops)));
}
function refreshPanel() {
  if (panelState() !== panelSig) renderPanel();
  else patchPanel();
}
// ==============================================================
// QUESTS
// ==============================================================
function getQuestProgress(q) {
  switch (q.type) {
    case "upgrade_any": return Math.min(S.upgradesTotal, q.goal);
    case "troops": return Math.min(Math.floor(S.res.troops), q.goal);
    case "stone": return Math.min(Math.floor(S.res.stone), q.goal);
    case "raids": return Math.min(S.raids, q.goal);
    case "build_archive": return S.buildings.archive.level > 0 ? 1 : 0;
    case "buildings_built": return Math.min(builtCount(), q.goal);
    case "hero_level": return S.heroes.some((h) => h.level > 1) ? 1 : 0;
    case "keep_level": return Math.min(S.buildings.keep.level, q.goal);
    case "expeditions": return Math.min(S.expeditions || 0, q.goal);
    case "lore": return Math.min((S.lore || []).length, q.goal);
    default: return 0;
  }
}
function updateQuestProgress(type, val) {
  QUESTS.forEach((q) => {
    if (q.type === type) S.quests[q.id].progress = Math.min(val, q.goal);
  });
  const ready = QUESTS.filter((q) => getQuestProgress(q) >= q.goal && !S.quests[q.id].claimed).length;
  const badge = $("quest-badge");
  if (badge) badge.style.display = ready > 0 ? "inline-block" : "none";
  if (currentTab === "quests") refreshPanel();
}
function renderQuests(c) {
  // claimable first, active next, claimed last
  const rank = (q) => (S.quests[q.id].claimed ? 2 : getQuestProgress(q) >= q.goal ? 0 : 1);
  const list = [...QUESTS].sort((a, b) => rank(a) - rank(b));
  let html = '<div class="section-label">Active Quests</div>';
  list.forEach((q) => {
    const prog = getQuestProgress(q);
    const done = prog >= q.goal;
    const claimed = S.quests[q.id].claimed;
    const pct = Math.min(100, (prog / q.goal) * 100);
    const rewardStr = Object.entries(q.reward).filter(([, v]) => v > 0).map(([k, v]) => `+${v} ${k}`).join(", ");
    html += `
      <div class="quest-card ${done && !claimed ? "complete" : ""} ${claimed ? "claimed" : ""}" data-quest="${q.id}" ${done && !claimed ? `onclick="claimQuest('${q.id}', this)"` : ""}>
        <div class="q-title">${q.title}</div>
        <div class="q-desc">${q.desc}</div>
        <div class="q-progress"><div class="q-fill" style="width:${pct}%"></div></div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:10px;color:#666" data-q-count>${prog}/${q.goal}</span>
          ${claimed
            ? `<span style="font-size:10px;color:var(--green)">\u{2713} Claimed</span>`
            : done
            ? `<button class="q-claim">CLAIM +${q.xp}XP</button>`
            : `<span class="q-reward">${rewardStr}</span>`}
        </div>
      </div>`;
  });
  setPanel(c, html);
}
function claimQuest(qid, el) {
  const q = QUESTS.find((x) => x.id === qid);
  if (!q || S.quests[qid].claimed || getQuestProgress(q) < q.goal) return;
  S.quests[qid].claimed = true;
  if (el) {
    burstAt(el, "#7aca8a", 18);
    floatText(el, `+${q.xp} XP`, "void");
  }
  Object.entries(q.reward).forEach(([k, v]) => {
    if (S.res[k] !== undefined) S.res[k] += v;
  });
  addHeroXP(S.selectedHero, q.xp);
  notify(`Quest complete! ${Object.entries(q.reward).filter(([, v]) => v > 0).map(([k, v]) => `+${v} ${k}`).join(", ")}`, "reward");
  updateQuestProgress("", 0);
  renderPanel();
}
// ==============================================================
// HEROES
// ==============================================================
function addHeroXP(idx, xp) {
  const h = S.heroes[idx];
  if (!h) return;
  h.xp += xp;
  while (h.xp >= h.xpMax) {
    h.xp -= h.xpMax;
    h.level++;
    h.atk += 2;
    h.def += 1;
    h.xpMax = Math.floor(h.xpMax * (h.level <= 8 ? 1.5 : 1.22)); // gentler past Lv 8 so the late game keeps leveling
    notify(`${h.name} reached Level ${h.level}!`, "success");
    burst(window.innerWidth - 140, 120, "#8a9fe8", 20);
    updateQuestProgress("hero_level", 1);
  }
}
function renderHeroes(c) {
  let html = '<div class="section-label">Your Heroes</div>';
  S.heroes.forEach((h, i) => {
    const xpPct = Math.round((h.xp / h.xpMax) * 100);
    const rc = RARITY_COLOR[h.rarity] || "#8a9fe8";
    html += `
      <div class="hero-card ${S.selectedHero === i ? "selected" : ""}" style="--rc:${rc}" onclick="selectHero(${i})">
        <div class="hero-avatar">${heroSprite(h)}</div>
        <div class="hero-info">
          <div class="hero-name">${h.name}${h.champion ? ` <span class="champ-tag">CHAMPION</span>` : ""}</div>
          <div class="hero-class"><span class="rarity">${h.rarity.toUpperCase()}</span>  -  ${h.class}  -  Lv.${h.level}</div>
          ${h.exp
            ? `<div class="hero-away">${h.exp.done
                ? `\u{2728} Back from ${regionById(h.exp.region).name}  -  collect in Explore`
                : `\u{1F9ED} Exploring ${regionById(h.exp.region).name}  -  <span data-exp-t="${i}"></span>`}</div>`
            : ""}
          <div class="hero-stats">
            <div class="hstat">ATK <span>${h.atk}</span></div>
            <div class="hstat">DEF <span>${h.def}</span></div>
            <div class="hstat">SPD <span>${h.spd}</span></div>
          </div>
          <div class="hero-xp-bar"><div class="hero-xp-fill" style="width:${xpPct}%"></div></div>
          <div style="font-size:9px;color:#555;margin-top:2px">XP ${h.xp}/${h.xpMax}</div>
        </div>
      </div>`;
  });
  const sel = S.heroes[S.selectedHero];
  html += `
    <div class="divider"></div>
    <div class="section-label">Skills  -  ${sel.name}</div>
    ${(SKILLS[sel.id] || [])
      .map((s) => `<div class="skill-row"><div><b>${s.name}</b><span>${s.mp} MP</span></div>${s.desc}</div>`)
      .join("")}
    <div class="skill-hint">The highlighted hero receives quest and daily-reward XP.</div>`;
  setPanel(c, html);
  updateExpTimers();
}
function selectHero(i) {
  S.selectedHero = i;
  renderPanel();
}
// ==============================================================
// RAID
// ==============================================================
function renderRaid(c) {
  const troopCount = Math.floor(S.res.troops);
  const partyCount = S.heroes.filter((h) => !h.exp).length;
  let html = `
    <div class="section-label">Raid Targets</div>
    <div style="font-size:12px;font-style:italic;color:#777;margin-bottom:10px;line-height:1.5">
      Every hero at the keep fights together. Heroes out exploring stay behind.
    </div>
    <div class="leader-row">
      <span>Party</span>
      ${S.heroes.map((h) => `<span class="leader-chip ${h.exp ? "off" : "on"}" title="${h.name}${h.exp ? " (exploring)" : ""}">${heroSprite(h)}</span>`).join("")}
      <span style="margin-left:auto">Troops <b data-troops style="color:var(--gold);font-family:'Cinzel',serif">${troopCount}</b></span>
    </div>
    <div class="supplies">${Object.entries(ITEMS).map(([k, it]) => `<span title="${it.desc}">${it.icon} ${it.name} <b>x${S.items[k] || 0}</b></span>`).join("")}</div>
    ${partyCount ? "" : `<div class="leader-warn">Every hero is out in the wastes. Wait for someone to return.</div>`}`;
  RAID_ENEMIES.forEach((e, i) => {
    const minTroops = RAID_MIN_TROOPS[i];
    const canRaid = troopCount >= minTroops && partyCount > 0;
    const diffColor = RAID_COLORS[i];
    const rewardStr = Object.entries(e.reward).map(([k, v]) => `+${v} ${k}`).join(", ");
    html += `
      <div class="raid-card ${canRaid ? "" : "locked"}" style="--dc:${diffColor}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div>
            <span class="raid-icon" style="animation-delay:-${i * 0.7}s">${e.icon}</span>
            <span style="font-family:'Cinzel',serif;font-size:11px;color:var(--stone);margin-left:6px">${e.name}</span>
          </div>
          <span style="font-family:'Cinzel',serif;font-size:9px;color:${diffColor};border:1px solid ${diffColor}44;padding:2px 7px;border-radius:1px">${e.difficulty}</span>
        </div>
        <div class="raid-foes">${e.group.map((k) => `<span title="${ENEMY_TYPES[k].name}">${ENEMY_TYPES[k].icon}</span>`).join("")}<em>${e.group.length} foes</em></div>
        <div style="font-size:10px;color:var(--green);margin-bottom:8px">${rewardStr}  -  +${e.xpReward} XP each</div>
        <button class="raid-btn" ${canRaid ? `onclick="startRaid(${i})"` : "disabled"}>
          ${canRaid ? `\u{2694}\u{FE0F} RAID (${minTroops} troops)` : !partyCount ? `\u{1F9ED} Party away` : `\u{1F512} Need ${minTroops} troops`}
        </button>
      </div>`;
  });
  setPanel(c, html);
}
// ==============================================================
// EXPLORE  -  dispatch heroes into the wastes
// ==============================================================
function fmtTime(s) {
  s = Math.max(0, Math.ceil(s));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
  return h ? `${h}h ${String(m).padStart(2, "0")}m` : `${m}:${String(x).padStart(2, "0")}`;
}
function lootString(loot) {
  return Object.entries(loot).filter(([, v]) => v > 0).map(([k, v]) => `+${v} ${k}`).join(", ");
}
const regionById = (id) => REGIONS.find((r) => r.id === id);
function rand(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}
function rollExpedition(h, r) {
  const safe = Math.random() < successChance(h, r);
  const loot = {};
  Object.entries(r.loot).forEach(([k, [a, b]]) => {
    let v = rand(a, b);
    if (h.id === "commander") v *= 1.4;
    if (h.id === "mystic" && k === "essence") v *= 1.5;
    if (h.id === "rogue" && k === "relics") v *= 1.5;
    v *= 1 + (h.level - 1) * 0.1;
    if (!safe) v *= 0.5;
    loot[k] = Math.max(1, Math.round(v));
  });
  let lore = null;
  const unheard = LORE.map((_, i) => i).filter((i) => !S.lore.includes(i));
  const chance = r.lore + (h.id === "mystic" ? 0.15 : 0);
  if (safe && unheard.length && Math.random() < chance) lore = unheard[0];
  return { safe, loot, lore, draught: safe && Math.random() < 0.2, xp: safe ? r.xp : Math.round(r.xp / 2) };
}
function sendExpedition(i, rid, el) {
  const h = S.heroes[i];
  if (W.open && W.party.includes(i)) {
    notify(`${h.name} is out walking the wastes with the party.`, "error");
    return;
  }
  const r = regionById(rid);
  if (!h || !r || h.exp || r.unlock > S.castleLevel) return;
  const now = Date.now();
  h.exp = { region: rid, start: now, end: now + expDuration(h, r) * 1000, done: false };
  burstAt(el, r.color, 12);
  notify(`${h.name} sets out for ${r.name}`, "info");
  saveGame(true);
  renderPanel();
}
function collectExpedition(i, el) {
  const h = S.heroes[i];
  if (!h || !h.exp || !h.exp.done) return;
  const r = regionById(h.exp.region);
  const res = rollExpedition(h, r);
  Object.entries(res.loot).forEach(([k, v]) => addCapped(S.res, k, v));
  if (res.draught) S.items.draught = (S.items.draught || 0) + 1;
  h.exp = null;
  S.expeditions++;
  burstAt(el, r.color, 22);
  floatText(el, `+${res.xp} XP`, "void");
  addHeroXP(i, res.xp);
  const found = lootString(res.loot) + (res.draught ? ", +1 Healing Draught" : "");
  notify(
    res.safe ? `${h.name} returns: ${found}` : `${h.name} returns wounded: ${found}`,
    res.safe ? "reward" : "error",
    4500
  );
  updateQuestProgress("expeditions", S.expeditions);
  if (res.lore !== null) {
    S.lore.push(res.lore);
    updateQuestProgress("lore", S.lore.length);
    setTimeout(() => showLore(res.lore), 600);
  }
  updateExpBadge();
  saveGame(true);
  renderPanel();
}
// called every second: marks finished runs, updates countdowns in place
function tickExpeditions() {
  const now = Date.now();
  let changed = false;
  S.heroes.forEach((h) => {
    if (h.exp && !h.exp.done && now >= h.exp.end) {
      h.exp.done = true;
      changed = true;
      notify(`${h.name} has returned from ${regionById(h.exp.region).name}!`, "reward");
    }
  });
  if (changed) {
    updateExpBadge();
    renderPanel();
  }
  updateExpTimers();
}
function updateExpTimers() {
  const now = Date.now();
  S.heroes.forEach((h, i) => {
    if (!h.exp || h.exp.done) return;
    const pct = Math.min(100, ((now - h.exp.start) / (h.exp.end - h.exp.start)) * 100);
    document.querySelectorAll(`[data-exp-t="${i}"]`).forEach((e) => (e.textContent = fmtTime((h.exp.end - now) / 1000)));
    document.querySelectorAll(`[data-exp-bar="${i}"]`).forEach((e) => (e.style.width = pct + "%"));
  });
}
function updateExpBadge() {
  const b = $("exp-badge");
  if (b) b.style.display = S.heroes.some((h) => h.exp && h.exp.done) ? "inline-block" : "none";
}
function renderExplore(c) {
  let html = `<div class="section-label">Expedition Party</div>`;
  S.heroes.forEach((h, i) => {
    const rc = RARITY_COLOR[h.rarity] || "#8a9fe8";
    const spec = HERO_SPECIALTY[h.id] || { label: "", desc: "" };
    let right, bar = "";
    if (!h.exp) right = `<span class="exp-st home">At the keep</span>`;
    else if (h.exp.done) right = `<button class="exp-collect" onclick="collectExpedition(${i}, this)">Collect</button>`;
    else {
      right = `<span class="exp-st away">${regionById(h.exp.region).icon} <span data-exp-t="${i}"></span></span>`;
      bar = `<div class="exp-bar"><i data-exp-bar="${i}"></i></div>`;
    }
    html += `
      <div class="exp-hero ${h.exp ? (h.exp.done ? "ready" : "away") : ""}" style="--rc:${rc}">
        <div class="hero-avatar sm">${heroSprite(h)}</div>
        <div class="exp-hero-info">
          <div class="hero-name">${h.name}</div>
          <div class="exp-spec" title="${spec.desc}">${spec.label}  -  SPD ${h.spd}  -  Lv.${h.level}</div>
          ${bar}
        </div>
        ${right}
      </div>`;
  });
  html += `<div class="divider"></div><div class="section-label">The Wastes</div>`;
  REGIONS.forEach((r) => {
    const locked = r.unlock > S.castleLevel;
    const danger = r.danger ? "\u{2620}".repeat(r.danger) : "Safe";
    html += `<div class="region ${locked ? "locked" : ""}" style="--dc:${r.color}">
      <div class="region-head">
        <span class="raid-icon">${locked ? "\u{1F512}" : r.icon}</span>
        <div>
          <div class="region-name">${locked ? "???" : r.name}</div>
          <div class="region-meta">${locked ? `Unlocks at Castle Lv ${r.unlock}` : `${danger}  -  ${Math.round(r.lore * 100)}% echo chance`}</div>
        </div>
      </div>`;
    if (!locked) {
      const lootTxt = Object.entries(r.loot).map(([k, [a, b]]) => `${a}-${b} ${k}`).join(", ");
      html += `<div class="region-desc">${r.desc}</div>
        <div class="region-loot">${lootTxt}  -  +${r.xp} XP</div>
        <div class="region-send">${S.heroes
          .map((h, i) => {
            if (h.exp) return `<button class="send-btn" disabled>${h.icon} away</button>`;
            const odds = Math.round(successChance(h, r) * 100);
            return `<button class="send-btn" title="Send ${h.name}  -  ${odds}% safe return" onclick="sendExpedition(${i}, '${r.id}', this)">${h.icon} ${fmtTime(expDuration(h, r))}${r.danger ? `<em>${odds}%</em>` : ""}</button>`;
          })
          .join("")}</div>`;
    }
    html += `</div>`;
  });
  html += `<div class="divider"></div><div class="section-label">Recovered Echoes  -  ${S.lore.length}/${LORE.length}</div>`;
  LORE.forEach((t, i) => {
    html += S.lore.includes(i)
      ? `<div class="echo found">\u{201C}${t}\u{201D}</div>`
      : `<div class="echo">an echo not yet heard</div>`;
  });
  setPanel(c, html);
  updateExpTimers();
}
function showLore(idx) {
  $("lore-kicker").textContent = `ECHO RECOVERED  -  ${S.lore.length}/${LORE.length}`;
  $("lore-text").textContent = `\u{201C}${LORE[idx]}\u{201D}`;
  $("lore-pop").classList.add("open");
}
function closeLore() {
  $("lore-pop").classList.remove("open");
}
// ==============================================================
// PARTY BATTLE ENGINE  -  side-view, turn-based
// WARDS: every enemy has a ward count and hidden weaknesses. Hitting a
//   weakness reveals it (remembered forever) and strips one ward. At 0
//   the enemy BREAKS: it loses its turns this round and next, and takes
//   double damage until its wards return.
// SURGE: heroes start with 1 surge point and gain 1 per round (max 5),
//   unless they surged the round before. Spend up to 3 on an action:
//   +1 attack hit per point, or +50% skill power per point.
// ==============================================================
const DMG_TYPES = {
  blade: { icon: "\u{2694}\u{FE0F}", name: "Blade" },
  pierce: { icon: "\u{1F5E1}\u{FE0F}", name: "Pierce" },
  void: { icon: "\u{1F300}", name: "Void" },
  fire: { icon: "\u{1F525}", name: "Fire" }
};
const ATTACK_TYPE = { commander: "blade", mystic: "void", rogue: "pierce" };
const ENEMY_TYPES = {
  scavenger: { name: "Void Scavenger", icon: "\u{1F441}\u{FE0F}", hp: 34, atk: 7, def: 1, spd: 8, wards: 2, weak: ["blade", "fire"] },
  guardian: { name: "Ruin Guardian", icon: "\u{1F5FF}", hp: 80, atk: 10, def: 6, spd: 3, wards: 4, weak: ["pierce", "void"] },
  imp: { name: "Ember Imp", icon: "\u{1F525}", hp: 38, atk: 9, def: 2, spd: 11, wards: 2, weak: ["void", "pierce"] },
  warlord: { name: "Ember Warlord", icon: "\u{1F479}", hp: 150, atk: 15, def: 6, spd: 6, wards: 5, weak: ["void", "blade"] },
  wisp: { name: "Void Wisp", icon: "\u{1F47B}", hp: 36, atk: 10, def: 3, spd: 12, wards: 3, weak: ["fire", "blade"] },
  horror: { name: "Ancient Horror", icon: "\u{1F311}", hp: 320, atk: 19, def: 9, spd: 5, wards: 7, weak: ["fire", "pierce"], boss: true, aoe: "Abyssal Wail" },
  warden: { name: "Ash Warden", icon: "\u{1F9DF}", hp: 185, atk: 12, def: 5, spd: 5, wards: 5, weak: ["void", "pierce"], boss: true, aoe: "Cinder Sweep" }
};
const SKILLS = {
  commander: [
    { id: "cleave", name: "Cleave", mp: 5, target: "allEnemies", type: "blade", desc: "Strike every enemy for 70%" },
    { id: "brand", name: "Brand Strike", mp: 6, target: "enemy", type: "fire", desc: "A burning blow for 150%" },
    { id: "shieldwall", name: "Shield Wall", mp: 6, target: "self", desc: "Party takes half damage until your next turn", noSurge: true }
  ],
  mystic: [
    { id: "rift", name: "Void Rift", mp: 7, target: "enemy", type: "void", desc: "200% damage that ignores armor" },
    { id: "hex", name: "Ember Hex", mp: 7, target: "allEnemies", type: "fire", desc: "Fire washes over every enemy for 60%" },
    { id: "mend", name: "Mend", mp: 5, target: "ally", desc: "Heal an ally for 40% HP" }
  ],
  rogue: [
    { id: "flurry", name: "Flurry", mp: 6, target: "enemy", type: "blade", desc: "Three quick cuts for 45% each (surge adds cuts)" },
    { id: "ambush", name: "Ambush", mp: 5, target: "enemy", type: "pierce", desc: "300% on wounded or broken foes, 150% otherwise" },
    { id: "pilfer", name: "Pilfer", mp: 3, target: "enemy", type: "pierce", desc: "Light hit that steals relics" }
  ]
};
const ITEMS = {
  draught: { name: "Healing Draught", icon: "\u{1F9EA}", target: "ally", desc: "Restore 40% HP" },
  ember: { name: "Ember of Return", icon: "\u{1FAB6}", target: "koAlly", desc: "Revive a fallen ally at 30% HP" }
};
const SURGE_MAX = 5, SURGE_SPEND = 3;
let B = null;
const battleUnits = () => [...B.heroes, ...B.enemies];
const unitById = (uid) => battleUnits().find((u) => u.uid === uid);
const activeUnit = () => (B && B.active ? unitById(B.active) : null);
function heroBattleStats(h) {
  const fl = bLevel("forge");
  const forge = fl > 0 ? 3 + Math.max(0, fl - 3) * 2 : 0;
  const pw = heroPower(); // Hall of Ancestors + Veteran's Echo
  return {
    hp: Math.round((70 + h.level * 12 + (h.vit || 0) * 6) * (1 + 0.08 * rank("hardy")) * pw),
    mp: (h.id === "mystic" ? 16 : 10) + h.level * 2 + 2 * rank("wells") + (h.mpBonus || 0),
    atk: Math.round((h.atk + forge) * pw),
    def: h.def,
    spd: h.spd
  };
}
function startRaid(idx) {
  const party = championFirst(S.heroes.map((h, i) => i).filter((i) => !S.heroes[i].exp));
  if (!party.length) {
    notify("Every hero is out exploring.", "error");
    return;
  }
  const minTroops = RAID_MIN_TROOPS[idx];
  if (Math.floor(S.res.troops) < minTroops) return;
  S.res.troops = Math.max(0, S.res.troops - minTroops);
  const enc = RAID_ENEMIES[idx];
  startBattle({
    kind: "raid", title: "RAID", name: enc.name, group: enc.group,
    reward: enc.reward, xpReward: enc.xpReward, troops: minTroops, party,
    scene: idx === 3 ? "rift" : "wastes",
    intro: `The party marches on the ${enc.name}!`
  });
}
// o: { kind, title, name, group, reward, xpReward, troops, party, hpState, toPack, lootTo,
//      bonusItem, scale, fatigue, boons, scene, intro, onClose }
function startBattle(o) {
  const heroes = o.party.map((i) => {
    const h = S.heroes[i];
    const st = heroBattleStats(h);
    const saved = o.hpState && o.hpState[i];
    const hp = saved ? Math.min(st.hp, saved.hp) : st.hp;
    const mp = saved ? Math.min(st.mp, saved.mp) : st.mp;
    return {
      uid: "h" + i, side: "hero", hi: i, id: h.id, name: h.name, icon: h.icon,
      hp, maxHp: st.hp, mp, maxMp: st.mp, atk: st.atk, def: st.def, spd: st.spd,
      guard: false, ko: hp <= 0, sp: 1, noGain: false
    };
  });
  const counts = {}, seen = {};
  o.group.forEach((k) => (counts[k] = (counts[k] || 0) + 1));
  const enemies = o.group.map((k, j) => {
    const t = ENEMY_TYPES[k];
    seen[k] = (seen[k] || 0) + 1;
    const hp = Math.round(t.hp * (o.scale || 1));
    return {
      uid: "e" + j, side: "enemy", key: k,
      name: counts[k] > 1 ? `${t.name} ${String.fromCharCode(64 + seen[k])}` : t.name,
      icon: t.icon, hp, maxHp: hp, atk: Math.round(t.atk * (o.scale || 1)), def: Math.round(t.def * Math.sqrt(o.scale || 1)), spd: t.spd,
      wards: t.wards, maxWards: t.wards, weak: t.weak, broken: false, brokenUntil: 0,
      boss: !!t.boss, aoe: t.aoe || "Crushing Blow", ko: false, acts: 0
    };
  });
  B = {
    o, heroes, enemies, round: 1, queue: [], active: null,
    phase: "anim", menu: "main", pending: null, surge: 0,
    log: [`\u{2694}\u{FE0F} ${o.intro || "Enemies appear!"}`],
    pops: [], fx: [], shake: [], quake: false, shieldWall: false,
    banner: "", bannerSeq: 0, shownBanner: 0,
    troops: o.troops || 0, stolen: 0, over: false, won: false,
    boons: o.boons || [], firstCrit: (o.boons || []).includes("firstlight"),
    scene: o.scene || (o.kind === "descent" || o.kind === "boss" ? "ruins" : "wastes"),
    wallBonus: bLevel("wall") > 0 ? (bLevel("wall") <= 3 ? [1.15, 1.3, 1.5][bLevel("wall") - 1] : 1.5 + 0.1 * (bLevel("wall") - 3)) : 1
  };
  if (o.fatigue && o.fatigue < 1) B.log.push(`\u{1F62E}\u{200D}\u{1F4A8} The party is ${o.fatigue <= 0.75 ? "exhausted" : "weary"}: -${Math.round((1 - o.fatigue) * 100)}% damage.`);
  if (hasBoon("shieldash")) {
    B.shieldWall = true;
    B.log.push("\u{1F6E1}\u{FE0F} Shield of Ash: the party starts behind a Shield Wall.");
  }
  buildBattleStage();
  $("combat-modal").classList.add("open");
  renderBattle();
  setTimeout(startRound, 800);
}
function startRound() {
  if (!B || B.over) return;
  if (B.round > 1)
    B.heroes.forEach((h) => {
      if (h.ko) return;
      if (h.noGain) h.noGain = false;
      else h.sp = Math.min(SURGE_MAX, h.sp + 1);
    });
  B.queue = battleUnits()
    .filter((u) => !u.ko)
    .map((u) => ({ uid: u.uid, init: u.spd + Math.random() * 4 }))
    .sort((a, b) => b.init - a.init)
    .map((x) => x.uid);
  nextTurn();
}
function nextTurn() {
  if (!B || B.over || checkBattleEnd()) return;
  while (B.queue.length) {
    const u = unitById(B.queue.shift());
    if (!u || u.ko) continue;
    if (u.side === "enemy" && u.broken) {
      B.log.push(`\u{1F4AB} ${u.name} is broken and cannot act.`);
      continue;
    }
    beginTurn(u);
    return;
  }
  endRound();
}
function beginTurn(u) {
  B.active = u.uid;
  B.surge = 0;
  if (u.side === "hero") {
    u.guard = false;
    if (u.id === "commander") B.shieldWall = false;
    B.phase = "choose";
    B.menu = "main";
    renderBattle();
  } else {
    B.phase = "enemy";
    renderBattle();
    setTimeout(() => enemyAct(u), 750);
  }
}
function endRound() {
  const foes = B.enemies.filter((e) => !e.ko);
  // your troops join in at the end of every round
  if (B.troops > 0 && foes.length) {
    const t = foes[rand(0, foes.length - 1)];
    const d = Math.max(1, Math.round(B.troops * 0.3) + rand(0, 3) - Math.floor(t.def * 0.3)) * (t.broken ? 2 : 1);
    hurt(t, d);
    B.fx.push({ uid: t.uid, type: "troops" });
    B.log.push(`\u{1F6E1}\u{FE0F} Your troops strike ${t.name} for ${d}.`);
  }
  // broken enemies recover once their stun has run out
  B.enemies.forEach((e) => {
    if (e.broken && !e.ko && B.round >= e.brokenUntil) {
      e.broken = false;
      e.wards = e.maxWards;
      B.pops.push({ uid: e.uid, txt: "WARDS RESTORED", cls: "void" });
    }
  });
  if (!B.heroes.some((h) => h.id === "commander" && !h.ko)) B.shieldWall = false;
  B.round++;
  B.active = null;
  renderBattle();
  if (checkBattleEnd()) return;
  setTimeout(startRound, 750);
}
// ---------- damage ----------
function dmgCalc(att, target, mult = 1, pierce = false) {
  const base = att.atk + rand(0, 4);
  let d = Math.round(base * mult - (pierce ? 0 : target.def * 0.5));
  d = Math.max(1, d);
  if (att.side === "hero") {
    if (hasBoon("cinder")) d = Math.round(d * 1.2);
    if (B.o.fatigue) d = Math.max(1, Math.round(d * B.o.fatigue));
    if (B.firstCrit) {
      B.firstCrit = false;
      d *= 2;
      B.pops.push({ uid: att.uid, txt: "CRITICAL!", cls: "void" });
    }
  } else if (hasBoon("stoneskin")) d = Math.max(1, Math.round(d * 0.85));
  if (target.side === "hero") {
    if (target.guard) d = Math.ceil(d / 2);
    if (B.shieldWall) d = Math.ceil(d / 2);
    d = Math.max(1, Math.floor(d / B.wallBonus));
  }
  return d;
}
function knowsWeak(key, type) {
  return !!(S.weakSeen && S.weakSeen[key] && S.weakSeen[key].includes(type));
}
// one hit of a typed attack: weakness, wards, break and damage
function strike(att, t, mult, type, pierce = false) {
  if (!t || t.ko) return 0;
  const wasBroken = t.broken;
  let d = dmgCalc(att, t, mult, pierce);
  const weak = t.side === "enemy" && type && t.weak.includes(type);
  if (weak) {
    d = Math.round(d * 1.3);
    if (!knowsWeak(t.key, type)) {
      S.weakSeen[t.key] = [...(S.weakSeen[t.key] || []), type];
      B.log.push(`\u{1F441}\u{FE0F} ${t.name} is weak to ${DMG_TYPES[type].name}!`);
    }
    if (!t.broken) {
      t.wards = Math.max(0, t.wards - 1);
      if (t.wards === 0) breakEnemy(t);
    }
  }
  if (wasBroken) d *= 2;
  hurt(t, d, weak);
  B.fx.push({ uid: t.uid, type: type || "blade" });
  return d;
}
function breakEnemy(t) {
  t.broken = true;
  t.brokenUntil = B.round + 1;
  B.queue = B.queue.filter((uid) => uid !== t.uid);
  B.pops.push({ uid: t.uid, txt: "BREAK!", cls: "break" });
  B.quake = true;
  B.log.push(`\u{1F4A5} ${t.name}'s wards shatter! BREAK!`);
}
function hurt(u, d, weak) {
  u.hp = Math.max(0, u.hp - d);
  const heavy = d >= u.maxHp * 0.2;
  B.pops.push({ uid: u.uid, txt: `${weak ? "WEAK " : ""}-${d}`, cls: (heavy ? "big " : "") + (weak ? "weak" : "") });
  B.shake.push(u.uid);
  if (heavy) B.quake = true;
  if (u.hp <= 0 && !u.ko) {
    u.ko = true;
    if (u.side === "enemy") u.broken = false;
    B.log.push(`\u{1F480} ${u.name} falls!`);
  }
}
function healUnit(u, amt) {
  const before = u.hp;
  u.hp = Math.min(u.maxHp, u.hp + amt);
  B.pops.push({ uid: u.uid, txt: `+${Math.round(u.hp - before)}`, cls: "heal" });
}
function announce(text) {
  B.banner = text;
  B.bannerSeq++;
}
// ---------- surge ----------
function surgeAdj(d) {
  const h = activeUnit();
  if (!h || B.phase !== "choose") return;
  B.surge = Math.max(0, Math.min(Math.min(SURGE_SPEND, h.sp), B.surge + d));
  renderBattle();
}
function takeSurge(h) {
  const n = Math.min(B.surge, h.sp);
  h.sp -= n;
  if (n) {
    h.noGain = true;
    B.pops.push({ uid: h.uid, txt: `SURGE x${n}`, cls: "surge" });
  }
  B.surge = 0;
  return n;
}
// ---------- player commands ----------
function battleMenu(m) {
  B.menu = m;
  renderBattle();
}
function chooseAction(a) {
  const h = activeUnit();
  if (!h || B.phase !== "choose") return;
  if (a === "attack") {
    B.pending = { kind: "attack", target: "enemy" };
    B.phase = "target";
    renderBattle();
  } else if (a === "defend") {
    B.surge = 0;
    h.guard = true;
    h.mp = Math.min(h.maxMp, h.mp + 3);
    B.pops.push({ uid: h.uid, txt: "GUARD +3 MP", cls: "void" });
    B.log.push(`\u{1F6E1} ${h.name} braces for impact.`);
    afterHeroAction();
  }
}
function skillCost(s) {
  return s.id === "cleave" && hasBoon("embercleave") ? s.mp - 2 : s.mp;
}
function chooseSkill(id) {
  const h = activeUnit();
  if (!h || B.phase !== "choose") return;
  const s = SKILLS[h.id].find((x) => x.id === id);
  if (!s || h.mp < skillCost(s)) return;
  if (s.target === "self" || s.target === "allEnemies") runSkill(h, s, null);
  else {
    B.pending = { kind: "skill", skill: s, target: s.target };
    B.phase = "target";
    renderBattle();
  }
}
function chooseItem(k) {
  if (!B || B.phase !== "choose" || !(S.items[k] > 0)) return;
  B.pending = { kind: "item", item: k, target: ITEMS[k].target };
  B.phase = "target";
  renderBattle();
}
function cancelTarget() {
  B.pending = null;
  B.phase = "choose";
  renderBattle();
}
function isValidTarget(u) {
  const t = B.pending && B.pending.target;
  if (t === "enemy") return u.side === "enemy" && !u.ko;
  if (t === "ally") return u.side === "hero" && !u.ko;
  if (t === "koAlly") return u.side === "hero" && u.ko;
  return false;
}
function hasTargets(t) {
  if (t === "koAlly") return B.heroes.some((h) => h.ko);
  return true;
}
function pickTarget(uid) {
  if (!B || B.phase !== "target") return;
  const u = unitById(uid);
  if (!u || !isValidTarget(u)) return;
  const h = activeUnit();
  const p = B.pending;
  B.pending = null;
  if (p.kind === "attack") {
    const n = takeSurge(h);
    const type = ATTACK_TYPE[h.id] || "blade";
    let total = 0, hits = 0;
    for (let i = 0; i <= n && !u.ko; i++) {
      total += strike(h, u, 1, type);
      hits++;
    }
    if (n) announce(`${hits}-Hit Attack`);
    B.log.push(`${DMG_TYPES[type].icon} ${h.name} hits ${u.name}${hits > 1 ? ` ${hits} times` : ""} for ${total}.`);
    if (hasBoon("thirst")) h.mp = Math.min(h.maxMp, h.mp + 1);
  } else if (p.kind === "skill") {
    runSkill(h, p.skill, u);
    return;
  } else if (p.kind === "item") {
    B.surge = 0;
    useItem(p.item, u);
  }
  afterHeroAction();
}
function runSkill(h, s, target) {
  h.mp -= skillCost(s);
  const n = s.noSurge ? ((B.surge = 0), 0) : takeSurge(h);
  const pow = 1 + 0.5 * n;
  announce(s.name);
  if (s.id === "shieldwall") {
    B.shieldWall = true;
    B.heroes.filter((x) => !x.ko).forEach((x) => B.pops.push({ uid: x.uid, txt: "SHIELDED", cls: "void" }));
    B.log.push(`\u{1F6E1} ${h.name} raises a Shield Wall!`);
  } else if (s.id === "cleave" || s.id === "hex") {
    const base = s.id === "cleave" ? (hasBoon("embercleave") ? 1 : 0.7) : 0.6;
    const hits = B.enemies.filter((e) => !e.ko).map((e) => strike(h, e, base * pow, s.type));
    B.log.push(`${DMG_TYPES[s.type].icon} ${s.name} sweeps the enemy line (${hits.join(", ")}).`);
  } else if (s.id === "brand") {
    const d = strike(h, target, 1.5 * pow, "fire");
    B.log.push(`\u{1F525} Brand Strike sears ${target.name} for ${d}.`);
  } else if (s.id === "rift") {
    const d = strike(h, target, 2 * pow, "void", true);
    B.quake = true;
    B.log.push(`\u{1F300} Void Rift tears into ${target.name} for ${d}!`);
  } else if (s.id === "mend") {
    if (hasBoon("echomend")) {
      B.heroes.filter((x) => !x.ko).forEach((x) => healUnit(x, Math.round(x.maxHp * 0.3 * pow)));
      B.log.push(`\u{2728} ${h.name}'s Mend echoes through the whole party.`);
    } else {
      healUnit(target, Math.round(target.maxHp * 0.4 * pow));
      B.log.push(`\u{2728} ${h.name} mends ${target.name}'s wounds.`);
    }
  } else if (s.id === "flurry") {
    let total = 0, hits = 0;
    for (let i = 0; i < 3 + n && !target.ko; i++) {
      total += strike(h, target, 0.45, "blade");
      hits++;
    }
    B.log.push(`\u{2694}\u{FE0F} Flurry: ${hits} cuts on ${target.name} for ${total}.`);
  } else if (s.id === "ambush") {
    const mult = hasBoon("instinct") || target.broken || target.hp < target.maxHp * 0.5 ? 3 : 1.5;
    const d = strike(h, target, mult * pow, "pierce");
    if (mult === 3) B.quake = true;
    B.log.push(`\u{1F5E1}\u{FE0F} Ambush! ${d} damage to ${target.name} (${mult}x).`);
  } else if (s.id === "pilfer") {
    strike(h, target, 0.6, "pierce");
    const k = (target.boss ? rand(3, 5) : rand(1, 3)) + n;
    B.stolen += k;
    B.pops.push({ uid: h.uid, txt: `+${k} \u{1F3FA}`, cls: "void" });
    B.log.push(`\u{1FA99} ${h.name} lifts ${k} relics from ${target.name}.`);
  }
  afterHeroAction();
}
function useItem(k, target) {
  S.items[k] = Math.max(0, (S.items[k] || 0) - 1);
  announce(ITEMS[k].name);
  if (k === "draught") {
    healUnit(target, Math.round(target.maxHp * (rank("medicine") ? 0.55 : 0.4)));
    B.log.push(`\u{1F9EA} ${target.name} drinks a Healing Draught.`);
  } else if (k === "ember") {
    target.ko = false;
    target.hp = 0;
    healUnit(target, Math.round(target.maxHp * 0.3));
    B.log.push(`\u{1FAB6} ${target.name} rises from the ashes!`);
  }
}
function afterHeroAction() {
  B.phase = "anim";
  B.menu = "main";
  renderBattle();
  setTimeout(nextTurn, 800);
}
// ---------- enemy turns ----------
function enemyAct(e) {
  if (!B || B.over || e.ko || e.broken) return nextTurn();
  const alive = B.heroes.filter((h) => !h.ko);
  if (!alive.length) return nextTurn();
  e.acts++;
  if (e.boss && e.acts % 3 === 0) {
    announce(e.aoe);
    B.log.push(`\u{1F311} ${e.name} unleashes ${e.aoe}!`);
    alive.forEach((h) => {
      hurt(h, dmgCalc(e, h, 0.6));
      B.fx.push({ uid: h.uid, type: "enemy" });
    });
    B.quake = true;
  } else {
    // mostly random, sometimes goes for the weakest hero
    const t = Math.random() < 0.4 ? alive.reduce((a, b) => (a.hp < b.hp ? a : b)) : alive[rand(0, alive.length - 1)];
    const d = dmgCalc(e, t);
    hurt(t, d);
    B.fx.push({ uid: t.uid, type: "enemy" });
    B.log.push(`\u{1F4A5} ${e.name} hits ${t.name} for ${d}.`);
  }
  renderBattle();
  setTimeout(nextTurn, 700);
}
function checkBattleEnd() {
  if (!B || B.over) return true;
  if (B.enemies.every((e) => e.ko)) {
    finishBattle(true);
    return true;
  }
  if (B.heroes.every((h) => h.ko)) {
    finishBattle(false);
    return true;
  }
  return false;
}
function finishBattle(won) {
  B.over = true;
  B.won = won;
  B.phase = "over";
  B.active = null;
  const o = B.o;
  const gains = [];
  // world battles send loot to the pack; raids pay out at once
  const dest = o.lootTo || (o.toPack ? W.pack : S.res);
  if (won) {
    Object.entries(o.reward || {}).forEach(([k, v]) => {
      if (!v) return;
      addCapped(dest, k, v);
      gains.push(`+${v} ${k}`);
    });
    if (B.stolen) {
      dest.relics = (dest.relics || 0) + B.stolen;
      gains.push(`+${B.stolen} relics`);
    }
    if (o.kind === "raid") {
      S.items.draught = (S.items.draught || 0) + 1;
      gains.push("+1 draught");
    }
    if (o.bonusItem) {
      S.items[o.bonusItem] = (S.items[o.bonusItem] || 0) + 1;
      gains.push(`+1 ${ITEMS[o.bonusItem].name}`);
    }
    const xpMul = S.buildings.temple.level >= 2 ? 1.2 : 1;
    B.heroes.forEach((u) => addHeroXP(u.hi, Math.round(o.xpReward * (u.ko ? 0.5 : 1) * xpMul)));
    if (o.kind === "raid") {
      S.raids++;
      updateQuestProgress("raids", S.raids);
    }
    B.log.push(`\u{2728} VICTORY!`);
  } else {
    B.log.push(o.kind === "raid" ? `\u{1F480} The party is defeated and retreats to the keep.` : `\u{1F480} The party collapses...`);
  }
  if (o.hpState) B.heroes.forEach((u) => (o.hpState[u.hi] = { hp: u.hp, mp: u.mp }));
  renderBattle();
  const box = $("combat-box");
  const banner = document.createElement("div");
  banner.className = "combat-banner " + (won ? "win" : "lose");
  const where = o.lootTo ? "  (run loot)" : o.toPack ? "  (in your pack)" : "";
  banner.innerHTML = won
    ? `VICTORY<span>${gains.join("  ")}${where}  -  +${o.xpReward} XP each</span>`
    : o.kind === "raid"
    ? `DEFEAT<span>Your troops are lost. The heroes limp home.</span>`
    : `DEFEAT<span>Carried home. You keep ${Math.round(packKeep() * 100)}% of your pack.</span>`;
  box.appendChild(banner);
  if (won)
    setTimeout(() => {
      burstAt(banner, "#c8a97e", 32);
      burstAt(banner, "#7aca8a", 14);
    }, 200);
  saveGame(true);
}
function closeCombat() {
  $("combat-modal").classList.remove("open");
  renderBmap();
  renderPanel();
  if (B && B.o.onClose) {
    B.o.onClose(B.won);
    return;
  }
  notify(B && B.won ? "Raid complete!" : "The party retreats to the keep.", B && B.won ? "success" : "error");
}
// ---------- battle stage (HD-2D style side view) ----------
function hpColor(p) {
  return p > 50 ? "#5aaa5a" : p > 25 ? "#e8d07c" : "#e87c7c";
}
// seeded random so a scene paints the same way every frame
function seeded(seed) {
  let s = seed >>> 0 || 1;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
// draws into a reduced-size canvas, then scales it back up: a cheap blur
// that works on every browser (iOS Safari has no canvas filter support)
function softLayer(main, w, h, factor, draw) {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w / factor));
  c.height = Math.max(1, Math.round(h / factor));
  const x = c.getContext("2d");
  x.scale(1 / factor, 1 / factor);
  draw(x);
  main.imageSmoothingEnabled = true;
  main.drawImage(c, 0, 0, w, h);
}
const SCENES = {
  wastes: { sky: ["#141a33", "#4a2f45", "#d8874f"], sun: "rgba(255,190,110,", far: "#3b2a3a", mid: "#24181a", ground: ["#5a3c26", "#1c120c"], haze: "rgba(230,150,90,", ember: [255, 170, 90] },
  rift: { sky: ["#0d0b1f", "#2e1d4a", "#8a5cc8"], sun: "rgba(180,140,255,", far: "#2a1e40", mid: "#170f22", ground: ["#3a2a48", "#100b16"], haze: "rgba(160,120,240,", ember: [170, 150, 255] },
  ruins: { wall: "#2b231c", ground: ["#3e3126", "#120d09"], ember: [255, 190, 120] }
};
function paintScene(kind, w, h, horizon) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  const r = seeded(kind.length * 977 + 13);
  const sc = SCENES[kind];
  if (kind === "ruins") {
    // back wall of a vaulted hall, softened for depth
    softLayer(ctx, w, h, 4, (x) => {
      x.fillStyle = "#17110d";
      x.fillRect(0, 0, w, h);
      const bw = 46, bh = 22;
      for (let y = 0; y < horizon; y += bh)
        for (let xx = -((y / bh) % 2) * (bw / 2); xx < w; xx += bw) {
          x.fillStyle = `rgb(${38 + r() * 14},${30 + r() * 10},${24 + r() * 8})`;
          x.fillRect(xx + 1, y + 1, bw - 2, bh - 2);
        }
      // arches
      for (let i = 0; i < 4; i++) {
        const ax = w * (0.15 + i * 0.25);
        x.fillStyle = "#0b0807";
        x.beginPath();
        x.moveTo(ax - w * 0.07, horizon);
        x.lineTo(ax - w * 0.07, horizon * 0.45);
        x.quadraticCurveTo(ax, horizon * 0.15, ax + w * 0.07, horizon * 0.45);
        x.lineTo(ax + w * 0.07, horizon);
        x.fill();
      }
    });
    // pillars with torches
    softLayer(ctx, w, h, 2, (x) => {
      for (let i = 0; i < 5; i++) {
        const px = w * (0.02 + i * 0.245);
        const g = x.createLinearGradient(px, 0, px + w * 0.05, 0);
        g.addColorStop(0, "#3a2e24");
        g.addColorStop(0.5, "#57463a");
        g.addColorStop(1, "#2a2019");
        x.fillStyle = g;
        x.fillRect(px, 0, w * 0.05, horizon + 6);
      }
    });
    // floor flagstones in perspective
    const fg = ctx.createLinearGradient(0, horizon, 0, h);
    fg.addColorStop(0, sc.ground[0]);
    fg.addColorStop(1, sc.ground[1]);
    ctx.fillStyle = fg;
    ctx.fillRect(0, horizon, w, h - horizon);
    ctx.strokeStyle = "rgba(0,0,0,0.35)";
    ctx.lineWidth = 1;
    const vx = w / 2;
    for (let i = -12; i <= 12; i++) {
      ctx.beginPath();
      ctx.moveTo(vx + i * w * 0.02, horizon);
      ctx.lineTo(vx + i * w * 0.16, h);
      ctx.stroke();
    }
    for (let k = 1; k < 9; k++) {
      const y = horizon + (h - horizon) * Math.pow(k / 9, 1.8);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    // god ray from a high window
    ctx.globalCompositeOperation = "lighter";
    const ray = ctx.createLinearGradient(w * 0.55, 0, w * 0.4, h);
    ray.addColorStop(0, "rgba(255,220,170,0.16)");
    ray.addColorStop(1, "rgba(255,220,170,0)");
    ctx.fillStyle = ray;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, 0);
    ctx.lineTo(w * 0.62, 0);
    ctx.lineTo(w * 0.55, h);
    ctx.lineTo(w * 0.28, h);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  } else {
    // sky
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, sc.sky[0]);
    sky.addColorStop(0.6, sc.sky[1]);
    sky.addColorStop(1, sc.sky[2]);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, horizon + 2);
    const sun = ctx.createRadialGradient(w * 0.62, horizon * 0.95, 0, w * 0.62, horizon * 0.95, w * 0.45);
    sun.addColorStop(0, sc.sun + "0.55)");
    sun.addColorStop(1, sc.sun + "0)");
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, w, horizon + 2);
    if (kind === "rift") {
      ctx.strokeStyle = "rgba(220,200,255,0.8)";
      ctx.lineWidth = 3;
      ctx.shadowColor = "#b090ff";
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.moveTo(w * 0.42, 0);
      ctx.lineTo(w * 0.46, horizon * 0.25);
      ctx.lineTo(w * 0.43, horizon * 0.45);
      ctx.lineTo(w * 0.48, horizon * 0.7);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    // distant mountains: heavily softened
    softLayer(ctx, w, h, 6, (x) => {
      x.fillStyle = sc.far;
      x.beginPath();
      x.moveTo(0, horizon);
      for (let i = 0; i <= 40; i++) x.lineTo((w * i) / 40, horizon - horizon * (0.18 + r() * 0.22) * Math.abs(Math.sin(i * 0.5)));
      x.lineTo(w, horizon);
      x.fill();
    });
    // mid-ground dead trees and spires
    softLayer(ctx, w, h, 2.5, (x) => {
      x.fillStyle = sc.mid;
      x.strokeStyle = sc.mid;
      for (let i = 0; i < 14; i++) {
        const tx = r() * w, th = horizon * (0.25 + r() * 0.35);
        x.lineWidth = 3 + r() * 4;
        x.beginPath();
        x.moveTo(tx, horizon + 4);
        x.lineTo(tx + (r() - 0.5) * 10, horizon - th);
        x.stroke();
        x.lineWidth = 2;
        for (let b = 0; b < 3; b++) {
          const by = horizon - th * (0.4 + r() * 0.5);
          x.beginPath();
          x.moveTo(tx, by);
          x.lineTo(tx + (r() - 0.5) * 50, by - 18 - r() * 20);
          x.stroke();
        }
      }
    });
    // ground
    const g = ctx.createLinearGradient(0, horizon, 0, h);
    g.addColorStop(0, sc.ground[0]);
    g.addColorStop(1, sc.ground[1]);
    ctx.fillStyle = g;
    ctx.fillRect(0, horizon, w, h - horizon);
    for (let i = 0; i < 500; i++) {
      const y = horizon + Math.pow(r(), 1.6) * (h - horizon);
      const s = 1 + ((y - horizon) / (h - horizon)) * 3;
      ctx.fillStyle = `rgba(${r() < 0.5 ? "0,0,0" : "255,220,170"},${0.06 + r() * 0.08})`;
      ctx.fillRect(r() * w, y, s * 2, s * 0.6);
    }
    // horizon haze
    const hz = ctx.createLinearGradient(0, horizon - 40, 0, horizon + 60);
    hz.addColorStop(0, sc.haze + "0)");
    hz.addColorStop(0.5, sc.haze + "0.28)");
    hz.addColorStop(1, sc.haze + "0)");
    ctx.fillStyle = hz;
    ctx.fillRect(0, horizon - 40, w, 100);
    // light shafts
    ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < 3; i++) {
      const sx = w * (0.55 + i * 0.12);
      const sh = ctx.createLinearGradient(sx, 0, sx - w * 0.2, h);
      sh.addColorStop(0, sc.sun + "0.10)");
      sh.addColorStop(1, sc.sun + "0)");
      ctx.fillStyle = sh;
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx + w * 0.04, 0);
      ctx.lineTo(sx - w * 0.12, h);
      ctx.lineTo(sx - w * 0.22, h);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  }
  // lit clearing where the fight happens
  const cl = ctx.createRadialGradient(w * 0.5, horizon + (h - horizon) * 0.45, 0, w * 0.5, horizon + (h - horizon) * 0.45, w * 0.55);
  cl.addColorStop(0, "rgba(255,210,150,0.10)");
  cl.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = cl;
  ctx.fillRect(0, horizon, w, h - horizon);
  // blurred foreground: grass, rocks or pillar bases framing the edges
  softLayer(ctx, w, h, 7, (x) => {
    x.fillStyle = "#070505";
    if (kind === "ruins") {
      x.fillRect(-w * 0.02, 0, w * 0.09, h);
      x.fillRect(w * 0.93, 0, w * 0.1, h);
      x.fillRect(0, h * 0.94, w, h * 0.06);
    } else {
      for (let i = 0; i < 70; i++) {
        const gx = r() * w, gh = h * (0.04 + r() * 0.1);
        x.beginPath();
        x.moveTo(gx - 6, h + 2);
        x.lineTo(gx + (r() - 0.5) * 30, h - gh);
        x.lineTo(gx + 6, h + 2);
        x.fill();
      }
      x.beginPath();
      x.ellipse(w * 0.04, h * 0.97, w * 0.12, h * 0.07, 0, 0, Math.PI * 2);
      x.fill();
    }
  });
  // vignette + tilt-shift darkening at top and bottom
  const vg = ctx.createRadialGradient(w / 2, h * 0.55, Math.min(w, h) * 0.3, w / 2, h * 0.55, Math.max(w, h) * 0.75);
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(1, "rgba(0,0,0,0.7)");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
  return c;
}
let stageLoopOn = false;
function buildBattleStage() {
  const box = $("combat-box");
  box.className = "combat-box stage";
  box.innerHTML = `
    <canvas id="bt-bg"></canvas>
    <div class="bt-field" id="bt-field"></div>
    <div class="bt-grade bt-grade-${B.scene}"></div>
    <div class="bt-actor" id="bt-actor"></div>
    <div class="bt-order" id="bt-order"></div>
    <div class="bt-party" id="bt-party"></div>
    <div class="bt-banner" id="bt-banner"></div>
    <div class="bt-log" id="bt-log"></div>
    <div class="bt-cmd" id="bt-cmd"></div>`;
  B.stage = { scene: null, w: 0, h: 0, parts: [] };
  if (!stageLoopOn) {
    stageLoopOn = true;
    requestAnimationFrame(stageLoop);
  }
}
function stageGeom() {
  const box = $("combat-box");
  const w = box.clientWidth, h = box.clientHeight;
  const portrait = h > w * 1.1;
  // feet of the units live between top and bottom (as % of height)
  return { w, h, portrait, top: portrait ? 34 : 44, bottom: portrait ? 60 : 76, horizon: h * (portrait ? 0.3 : 0.4) };
}
const stageClock = frameClock();
function stageLoop(t) {
  if (!B || !$("combat-modal").classList.contains("open") || !$("bt-bg")) {
    stageLoopOn = false;
    stageClock.reset(); // next battle starts with a clean clock
    return;
  }
  const cv = $("bt-bg");
  const g = stageGeom();
  const st = B.stage;
  if (!st.scene || st.w !== g.w || st.h !== g.h) {
    st.w = g.w;
    st.h = g.h;
    cv.width = g.w;
    cv.height = g.h;
    st.scene = paintScene(B.scene, g.w, g.h, g.horizon);
    st.parts = Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), v: 0.0006 + Math.random() * 0.0016, r: 0.6 + Math.random() * 1.8, p: Math.random() * 6 }));
  }
  const ctx = cv.getContext("2d");
  ctx.drawImage(st.scene, 0, 0);
  const sec = t / 1000;
  const col = SCENES[B.scene].ember;
  ctx.globalCompositeOperation = "lighter";
  if (B.scene === "ruins")
    for (let i = 0; i < 5; i++) {
      // flickering torches on the pillars
      const tx = g.w * (0.045 + i * 0.245), ty = g.horizon * 0.55;
      const f = 0.75 + Math.sin(sec * 9 + i * 2) * 0.12 + Math.sin(sec * 23 + i) * 0.08;
      const tg = ctx.createRadialGradient(tx, ty, 0, tx, ty, 90 * f);
      tg.addColorStop(0, `rgba(255,170,80,${0.5 * f})`);
      tg.addColorStop(1, "rgba(255,120,40,0)");
      ctx.fillStyle = tg;
      ctx.fillRect(tx - 100, ty - 100, 200, 200);
      ctx.fillStyle = `rgba(255,230,160,${0.9 * f})`;
      ctx.beginPath();
      ctx.ellipse(tx, ty, 3, 6 * f, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  const dt = stageClock(t);
  st.parts.forEach((p) => {
    p.y -= (B.scene === "ruins" ? p.v * 0.3 : p.v) * dt;
    p.p += 0.02 * dt;
    if (p.y < -0.02) {
      p.y = 1.02;
      p.x = Math.random();
    }
    const a = (0.35 + Math.sin(p.p * 3) * 0.25) * Math.min(1, p.y * 2);
    ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${a})`;
    ctx.beginPath();
    ctx.arc((p.x + Math.sin(p.p) * 0.01) * g.w, p.y * g.h, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalCompositeOperation = "source-over";
  requestAnimationFrame(stageLoop);
}
function battleSpriteKey(u) {
  return u.side === "hero" ? u.id : u.key;
}
function positions(g) {
  const at = (x, rel) => ({ x, y: g.top + rel * (g.bottom - g.top) });
  const heroes = g.portrait ? [at(66, 0.15), at(78, 0.5), at(89, 0.85)] : [at(70, 0.15), at(79, 0.5), at(88, 0.85)];
  const n = B.enemies.length;
  const bossIdx = B.enemies.findIndex((e) => e.boss);
  let foes;
  if (bossIdx >= 0 && n === 3) {
    const side = g.portrait ? [at(14, 0.05), at(16, 0.95)] : [at(13, 0.05), at(15, 0.95)];
    foes = [];
    let k = 0;
    B.enemies.forEach((e, i) => (foes[i] = i === bossIdx ? at(g.portrait ? 36 : 32, 0.55) : side[k++]));
  } else {
    const sets = {
      1: [at(28, 0.55)],
      2: [at(20, 0.25), at(32, 0.8)],
      3: g.portrait ? [at(14, 0.1), at(34, 0.5), at(16, 0.95)] : [at(16, 0.1), at(32, 0.5), at(18, 0.95)]
    };
    foes = sets[n] || sets[3];
  }
  return { heroes, foes };
}
function spriteScale(g) {
  return Math.max(2, Math.min(5, Math.min(g.w / (g.portrait ? 130 : 230), g.h / 170)));
}
function pipHtml(n, max, reserved = 0) {
  let s = "";
  for (let i = 0; i < max; i++) s += `<i class="${i < n - reserved ? "on" : i < n ? "rsv" : ""}"></i>`;
  return `<span class="pips">${s}</span>`;
}
function unitHtml(u, pos, scale, now) {
  const tgt = B.phase === "target" && isValidTarget(u);
  const act = B.active === u.uid;
  const key = battleSpriteKey(u);
  const img = spriteCanvas(key);
  const cls = ["bu", u.side, u.ko ? "ko" : "", act ? "acting" : "", tgt ? "targetable" : "", u.broken ? "broken" : "", u.boss ? "boss" : "", B.shake.includes(u.uid) ? "shake" : "", u.side === "hero" && act && B.surge ? "surge s" + B.surge : ""].join(" ");
  const flip = u.side === "hero";
  const sz = img ? `width:${(img.width / img.dens) * scale}px;height:${(img.height / img.dens) * scale}px` : "";
  const body = img
    ? `<img class="px bu-spr" src="${litURL(key, B.scene, flip)}" style="${sz}" alt=""><img class="px bu-glow" src="${litURL(key, B.scene, flip, true)}" style="${sz}" alt="">`
    : `<div class="bu-emoji" style="font-size:${scale * 14}px">${u.icon}</div>`;
  let info = "";
  if (u.side === "enemy" && !u.ko) {
    const p = (u.hp / u.maxHp) * 100;
    info = `<div class="bu-info">
      <div class="bu-wards"><span class="ward ${u.broken ? "off" : ""}">${u.broken ? "\u{2715}" : u.wards}</span>${u.weak
        .map((t) => (knowsWeak(u.key, t) ? `<i class="wk known" title="${DMG_TYPES[t].name}">${DMG_TYPES[t].icon}</i>` : `<i class="wk">?</i>`))
        .join("")}</div>
      ${u.broken ? `<div class="bu-broken">BROKEN</div>` : ""}
      <div class="bu-hp"><i style="width:${p}%"></i></div>
      <div class="bu-name">${u.name}</div></div>`;
  }
  const delay = -((now / 1000 + (u.uid.charCodeAt(1) || 0) * 0.37) % 2.6);
  return `<div class="${cls}" data-uid="${u.uid}" style="left:${pos.x}%;top:${pos.y}%;z-index:${Math.round(pos.y)}" ${tgt ? `onclick="pickTarget('${u.uid}')"` : ""}>
    ${tgt ? `<div class="bu-mark">\u{25BC}</div>` : ""}
    <div class="bu-body" style="animation-delay:${delay.toFixed(2)}s">${body}</div>${info}</div>`;
}
function miniSprite(u) {
  const key = battleSpriteKey(u);
  return spriteCanvas(key) ? `<img class="px" src="${spriteURL(key)}" alt="">` : u.icon;
}
function partyPanelHtml() {
  return B.heroes
    .map((u) => {
      const p = (u.hp / u.maxHp) * 100;
      const prev = u.prevPct ?? p;
      u.prevPct = p;
      const act = B.active === u.uid;
      const res = act ? B.surge : 0;
      const st = (u.guard ? " \u{1F6E1}" : "") + (B.shieldWall && !u.ko ? " \u{1F530}" : "");
      return `<div class="bp-row ${act ? "on" : ""} ${u.ko ? "ko" : ""}">
        <div class="bp-top"><b>${u.name}${st}</b>${pipHtml(u.sp, SURGE_MAX, res)}</div>
        <div class="bp-stat"><em>HP</em><div class="bp-bar"><div class="c-hp-lag" style="width:${prev}%" data-w="${p}"></div><div class="c-hp-fill" style="width:${prev}%;background:${hpColor(p)}" data-w="${p}"></div></div><span>${Math.ceil(u.hp)}<small>/${u.maxHp}</small></span></div>
        <div class="bp-stat mp"><em>MP</em><div class="bp-bar"><div class="bp-mp" style="width:${(u.mp / u.maxMp) * 100}%"></div></div><span>${u.mp}<small>/${u.maxMp}</small></span></div>
      </div>`;
    })
    .join("");
}
function surgeCtlHtml(a) {
  if (!a.sp) return `<div class="surge-ctl dim"><span class="lbl">Surge</span><span class="sv">none banked</span></div>`;
  const can = Math.min(SURGE_SPEND, a.sp);
  let pips = "";
  for (let i = 0; i < can; i++) pips += `<i class="${i < B.surge ? "sel" : "avail"}"></i>`;
  return `<div class="surge-ctl"><span class="lbl">Surge</span>
    <button onclick="surgeAdj(-1)" ${B.surge ? "" : "disabled"}>\u{2212}</button>
    <span class="pips big">${pips}</span>
    <button onclick="surgeAdj(1)" ${B.surge < can ? "" : "disabled"}>+</button>
    <span class="sv">${B.surge ? `x${B.surge}` : "off"}</span></div>`;
}
function battleMenuHtml() {
  const a = activeUnit();
  if (B.phase === "over")
    return `<div class="cmd-list one"><button class="cmd-btn gold" onclick="closeCombat()">${B.won ? "\u{1F3C6} Claim Victory" : "\u{1F480} Retreat"}</button></div>`;
  if (B.phase === "target") {
    const what = B.pending.kind === "attack" ? "Attack" : B.pending.kind === "skill" ? B.pending.skill.name : ITEMS[B.pending.item].name;
    return `<div class="cmd-head"><b>${what}</b><span>Choose a target</span></div><div class="cmd-list one"><button class="cmd-btn" onclick="cancelTarget()">\u{21A9} Cancel</button></div>`;
  }
  if (B.phase === "enemy" && a) return `<div class="cmd-head enemy"><b>${a.name}</b><span>is acting...</span></div>`;
  if (B.phase !== "choose" || !a) return `<div class="cmd-head dim"><span>...</span></div>`;
  const head = `<div class="cmd-head"><b>${a.name}</b>${surgeCtlHtml(a)}</div>`;
  const back = `<button class="cmd-btn back" onclick="battleMenu('main')">\u{21A9} Back</button>`;
  const n = B.surge;
  let body;
  if (B.menu === "skills") {
    body = SKILLS[a.id]
      .map((s) => {
        const t = s.type ? DMG_TYPES[s.type].icon + " " : "";
        const boost = n && !s.noSurge ? ` <em>${s.id === "flurry" ? `+${n} cuts` : `+${n * 50}%`}</em>` : "";
        return `<button class="cmd-btn skill" ${a.mp < skillCost(s) ? "disabled" : ""} onclick="chooseSkill('${s.id}')"><span>${t}${s.name}${boost}</span><small>${s.desc}</small><b>${skillCost(s)} MP</b></button>`;
      })
      .join("") + back;
  } else if (B.menu === "items") {
    body = Object.entries(ITEMS)
      .map(([k, it]) => {
        const c = S.items[k] || 0;
        return `<button class="cmd-btn skill" ${c < 1 || !hasTargets(it.target) ? "disabled" : ""} onclick="chooseItem('${k}')"><span>${it.icon} ${it.name}</span><small>${it.desc}</small><b>x${c}</b></button>`;
      })
      .join("") + back;
  } else {
    const at = ATTACK_TYPE[a.id];
    body = `
      <button class="cmd-btn" onclick="chooseAction('attack')">${DMG_TYPES[at].icon} Attack${n ? ` <em>x${n + 1} hits</em>` : ""}</button>
      <button class="cmd-btn" onclick="battleMenu('skills')">\u{2728} Skills</button>
      <button class="cmd-btn" onclick="chooseAction('defend')">\u{1F6E1} Defend</button>
      <button class="cmd-btn" onclick="battleMenu('items')">\u{1F9EA} Items</button>`;
  }
  return head + `<div class="cmd-list ${B.menu !== "main" ? "sub" : ""}">${body}</div>`;
}
function renderBattle() {
  const box = $("combat-box");
  if (!box || !$("bt-field")) return;
  const g = stageGeom();
  const scale = spriteScale(g);
  const now = performance.now();
  const pos = positions(g);
  $("bt-field").innerHTML =
    B.enemies.map((u, i) => unitHtml(u, pos.foes[i], u.boss ? scale * 1.1 : scale, now)).join("") +
    B.heroes.map((u, i) => unitHtml(u, pos.heroes[i] || pos.heroes[2], scale, now)).join("");
  const a = activeUnit();
  $("bt-actor").innerHTML = a
    ? `<div class="act-dia ${a.side}">${miniSprite(a)}</div><div class="act-txt"><small>${B.o.title || "BATTLE"}  -  ROUND ${B.round}</small><b>${a.name}</b></div>`
    : `<div class="act-txt"><small>${B.o.title || "BATTLE"}</small><b>Round ${B.round}</b></div>`;
  const order = [a, ...B.queue.map(unitById)].filter((u) => u && !u.ko).slice(0, 7);
  $("bt-order").innerHTML = order.length ? `<small>THIS ROUND</small>${order.map((u, i) => `<span class="od ${u.side} ${i === 0 && a ? "now" : ""}">${miniSprite(u)}</span>`).join("")}` : "";
  $("bt-party").innerHTML = partyPanelHtml();
  $("bt-cmd").innerHTML = battleMenuHtml();
  // keep the phone turn-order strip just above the command panel, whatever its height
  box.style.setProperty("--cmdh", $("bt-cmd").offsetHeight + "px");
  $("bt-log").innerHTML = B.log.slice(-2).map((l) => `<div>${l}</div>`).join("");
  if (B.bannerSeq !== B.shownBanner) {
    B.shownBanner = B.bannerSeq;
    const bn = $("bt-banner");
    bn.textContent = B.banner;
    retrigger(bn, "show");
  }
  const bars = box.querySelectorAll("[data-w]");
  requestAnimationFrame(() => requestAnimationFrame(() => bars.forEach((f) => (f.style.width = f.dataset.w + "%"))));
  // damage numbers rise from the unit, one after another for multi-hits
  const seenPop = {};
  B.pops.forEach((p) => {
    const host = box.querySelector(`.bu[data-uid="${p.uid}"] .bu-body`);
    if (!host) return;
    const k = (seenPop[p.uid] = (seenPop[p.uid] || 0) + 1) - 1;
    const d = document.createElement("div");
    d.className = "dmg-pop " + (p.cls || "");
    d.textContent = p.txt;
    d.style.marginLeft = (k ? (k % 2 ? 34 : -34) : 0) + Math.random() * 10 - 5 + "px";
    d.style.marginTop = k * 16 + "px";
    d.style.animationDelay = k * 0.22 + "s";
    d.style.animationFillMode = "both";
    host.appendChild(d);
  });
  B.fx.forEach((f, i) => {
    const host = box.querySelector(`.bu[data-uid="${f.uid}"] .bu-body`);
    if (!host) return;
    const s = document.createElement("div");
    s.className = "fx-slash t-" + f.type;
    s.style.setProperty("--rot", `${-40 + Math.random() * 80}deg`);
    s.style.animationDelay = i * 0.07 + "s";
    host.appendChild(s);
  });
  B.pops = [];
  B.fx = [];
  B.shake = [];
  if (B.quake) {
    retrigger(box, "quake");
    B.quake = false;
  }
}
window.addEventListener("resize", () => B && $("combat-modal").classList.contains("open") && renderBattle());
// ==============================================================
// WORLD MAP  -  walk the party across the wastes and into ruins
// ==============================================================
// world:  ^ mountain  ~ black water  T dead tree  = road  . plains
//         , ash fields  w marsh  g glass dunes  v rift scar
//         C city gate  S ash fountain (heals)  1-4 region entrances
// ruins:  # wall  . floor  E exit  c chest  k key  D locked door
//         L echo (lore)  W warden (boss)  R relic cache
const WORLD_MAPS = {
  world: {
    name: "The Wastes",
    start: [1, 9],
    rows: [
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
      "^^,,,T,,,^^^^~~~~www2wwww^^^^^^^^^^^^^^^^^^^^^^^^",
      "^,,1,,,,,,^^~~wwwwwwwwwww~^^^^^^^^^oo^^^^xxx^^^^^",
      "^,,=,,T,,,^~~wwww=wwTwwww~~^^^^^^^ooooii^xxx^^^^^",
      "^T,=,,,,,,.~wwww==wwwwwww~~^^^^bbbooToiiixxTfff^^",
      "^,,=,,,,....~ww=wwwwTwww~~~^^^bbbTooooi7ixxxfffT^",
      "^^,=,.......===ww~~~~~~~~~~^^^bb5booooiiixxxff9f^",
      "^..=.......==..~~~~^^^^vvvvv^^bbbbooToiiTxxxffff^",
      "^..=......=....~~^^^vvvvvvvvv^bbbbooooiiixxxffff^",
      "C==========......=====vvv4vvv===================^",
      "^...T....=.....S..=^^^vvvvvvv^bbbbooooiiixxxffff^",
      "^........=..T.....=^^^^vvvvv^^bTbboooTiiixxxfTff^",
      "^..T.....=........=^^^^^^^^^^^bbTbooooiSiTxxffff^",
      "^^.......=..T.....=gggggg^^^^^bbbbo6ooiiixxxTfff^",
      "^^^..T...=...^^^..=ggggggg^^^^^bbbooooTiix8xfff^^",
      "^^^^.....=======..=gg3ggg^^^^^^^^^Toooiiixxx^^^^^",
      "^^^^^...T...T..=====gggggg^^^^^^^^oooo^^^xxx^^^^^",
      "^^^^^^..........^^^ggggggg^^^^^^^^^^^^^^^xx^^^^^^",
      "^^^^^^^^^^^^^^^^^^^^gggg^^^^^^^^^^^^^^^^^^^^^^^^^",
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
    ]
  },
  outskirts: {
    name: "Ashen Outskirts: The Ruins",
    start: [2, 1],
    fog: true,
    rows: [
      "######################",
      "#E.....#.....#.......#",
      "#......#.....#..L....#",
      "#..c...#..#..#.......#",
      "#............D...###.#",
      "#......#..#..#.......#",
      "####.###.....#.......#",
      "#......#######.#####.#",
      "#......#.....#.#R..#.#",
      "#...........k#.#...#.#",
      "#......#.....#.#...#.#",
      "##.#####.....#.##W##.#",
      "#......#######.......#",
      "#..c...#######.......#",
      "######################"
    ]
  }
};
const ZONES = {
  ".": { name: "Dust Plains", rate: 0.03, tier: "ash", danger: 0 },
  ",": { name: "Ash Fields", rate: 0.08, tier: "ash", danger: 0 },
  "=": { name: "Old Road", rate: 0, danger: 0 },
  w: { name: "Sunken Marsh", rate: 0.09, tier: "marsh", danger: 1 },
  g: { name: "Glass Dunes", rate: 0.1, tier: "dunes", danger: 2 },
  v: { name: "Rift Scar", rate: 0.11, tier: "rift", danger: 3 },
  // the Far Reach, east of the Rift Scar; each band unseals with a castle tier
  b: { name: "Bellmire", rate: 0.1, tier: "bells", danger: 3, unlock: 6 },
  o: { name: "Cinder Orchard", rate: 0.11, tier: "orchard", danger: 3, unlock: 7 },
  i: { name: "Inverted Spires", rate: 0.11, tier: "spires", danger: 4, unlock: 8 },
  x: { name: "Bone Tide", rate: 0.12, tier: "bone", danger: 4, unlock: 9 },
  f: { name: "The First City", rate: 0.12, tier: "city", danger: 5, unlock: 10 }
};
// which castle level opens each column band of the Far Reach (x = map column)
const REACH_BANDS = [[30, 6], [34, 7], [38, 8], [41, 9], [44, 10]];
function reachUnlock(x) {
  let lv = 0;
  REACH_BANDS.forEach(([x0, l]) => x >= x0 && (lv = l));
  return lv;
}
const ENCOUNTERS = {
  ash: { groups: [["scavenger"], ["scavenger", "scavenger"]], loot: { stone: [10, 25], wood: [10, 20] }, xp: 8, intro: "Something stirs in the ash..." },
  marsh: { groups: [["scavenger", "guardian"], ["guardian"], ["scavenger", "scavenger", "scavenger"]], loot: { wood: [20, 40], essence: [3, 8] }, xp: 16, intro: "Shapes rise from the black water..." },
  dunes: { groups: [["imp", "imp"], ["imp", "scavenger", "imp"]], loot: { stone: [40, 70], essence: [5, 12] }, xp: 26, intro: "The glass sings. Embers swarm!" },
  rift: { groups: [["wisp", "wisp"], ["wisp", "imp", "wisp"]], loot: { essence: [12, 25], relics: [1, 2] }, xp: 40, intro: "The sky splits open above you..." },
  ruins: { groups: [["scavenger", "scavenger"], ["guardian"], ["scavenger", "guardian"]], loot: { stone: [20, 40], wood: [15, 30], relics: [0, 1] }, xp: 12, intro: "Something waits in the dark..." },
  // Far Reach: familiar foes, grown stronger (scale multiplies their HP and attack)
  bells: { scale: 2.2, scene: "rift", groups: [["wisp", "guardian", "wisp"], ["guardian", "guardian"], ["wisp", "wisp", "wisp"]], loot: { stone: [120, 220], essence: [25, 45], relics: [1, 3] }, xp: 60, intro: "A bell tolls under the water. Something answers it." },
  orchard: { scale: 3, scene: "wastes", groups: [["imp", "imp", "imp"], ["imp", "warlord"], ["guardian", "imp", "guardian"]], loot: { wood: [250, 400], essence: [35, 60], relics: [2, 3] }, xp: 85, intro: "Embers shake loose from the ash trees and take shape." },
  spires: { scale: 3.8, scene: "rift", groups: [["wisp", "wisp", "guardian"], ["horror"], ["guardian", "wisp", "guardian"]], loot: { stone: [450, 700], essence: [60, 100], relics: [2, 4] }, xp: 115, intro: "Something climbs down from the hanging towers." },
  bone: { scale: 5.4, scene: "wastes", groups: [["warden", "scavenger"], ["scavenger", "scavenger", "scavenger"], ["guardian", "warden"]], loot: { wood: [700, 1100], essence: [100, 160], relics: [3, 5] }, xp: 150, intro: "The white tide pulls back and leaves something standing." },
  city: { scale: 5.6, scene: "ruins", groups: [["warlord", "horror"], ["warden", "warlord"], ["guardian", "horror", "guardian"]], loot: { stone: [1200, 1900], wood: [1200, 1900], essence: [180, 280], relics: [4, 7] }, xp: 200, intro: "The empty streets of the First City are not empty." }
};
const ENTRANCES = { 1: "outskirts", 2: "library", 3: "desert", 4: "rift", 5: "bells", 6: "orchard", 7: "spires", 8: "bonetide", 9: "firstcity" };
const BLOCKED = new Set(["^", "~", "T", "#"]);
const DONE_TILES = "ckRLDW"; // become plain floor once used
let W = { open: false, pack: {} };
let worldLoopOn = false;
const worldMap = () => WORLD_MAPS[W.map];
const tileId = (x, y) => `${W.map}:${x},${y}`;
const isDone = (x, y) => S.world.opened.includes(tileId(x, y));
function markDone(x, y) {
  const id = tileId(x, y);
  if (!S.world.opened.includes(id)) S.world.opened.push(id);
}
function rawTile(x, y) {
  const r = worldMap().rows[y];
  return r && r[x] !== undefined ? r[x] : W.map === "world" ? "^" : "#";
}
function tileAt(x, y) {
  const t = rawTile(x, y);
  return DONE_TILES.includes(t) && W.map !== "world" && isDone(x, y) ? "." : t;
}
// ---------- open / close ----------
function openWorld() {
  if (W.open) return;
  const party = championFirst(S.heroes.map((h, i) => i).filter((i) => !S.heroes[i].exp));
  if (!party.length) {
    notify("Every hero is out exploring. Wait for someone to return.", "error");
    return;
  }
  const hpState = {};
  party.forEach((i) => {
    const st = heroBattleStats(S.heroes[i]);
    hpState[i] = { hp: st.hp, mp: st.mp };
  });
  const [sx, sy] = WORLD_MAPS.world.start;
  W = {
    open: true, map: "world", x: sx, y: sy, px: sx, py: sy, face: 1,
    party, hpState, pack: {}, trail: [], grace: 4, busy: false,
    seen: new Set(), entryReturn: null, warned: {}
  };
  S.trip = W.pack;
  $("world").classList.add("open");
  applyViewMode();
  resizeWorld();
  updateWorldUI();
  worldToast("The gates open onto the wastes.");
  if (!worldLoopOn) {
    worldLoopOn = true;
    requestAnimationFrame(worldLoop);
  }
}
function leaveWorld(defeated) {
  if (!W.open) return;
  if (W.map !== "world" && !defeated) {
    worldToast("Find the exit first.");
    return;
  }
  const got = lootString(W.pack);
  Object.entries(W.pack).forEach(([k, v]) => addCapped(S.res, k, v));
  W.open = false;
  S.trip = null;
  $("world").classList.remove("open");
  if (defeated) notify(`Carried home by your troops. You kept ${got || "nothing"}.`, "error", 5000);
  else notify(got ? `The party returns home with ${got}` : "The party returns home.", "reward", 4500);
  saveGame(true);
  renderPanel();
  renderBmap();
}
// ---------- movement ----------
function tryMove(dx, dy) {
  if (!W.open || W.busy) return;
  if ($("combat-modal").classList.contains("open") || $("lore-pop").classList.contains("open") || $("descent").classList.contains("open")) return;
  if (Math.abs(W.px - W.x) > 0.12 || Math.abs(W.py - W.y) > 0.12) return; // still stepping
  // sprites face right by default; on the diamond grid "up" and "right" both head screen-right
  if (isoOn()) W.face = dx > 0 || dy < 0 ? 1 : -1;
  else if (dx) W.face = dx;
  const nx = W.x + dx, ny = W.y + dy;
  const t = tileAt(nx, ny);
  if (BLOCKED.has(t)) return;
  if (W.map === "world" && reachUnlock(nx) > S.castleLevel) {
    const z = Object.values(ZONES).find((q) => q.unlock === reachUnlock(nx));
    worldToast(`\u{1F512} ${z ? z.name : "The Far Reach"} is sealed. Reach Castle Lv ${reachUnlock(nx)}.`);
    return;
  }
  if (!stepInto(t, nx, ny)) return;
  W.trail.unshift([W.x, W.y]);
  W.trail.length = Math.min(W.trail.length, W.party.length - 1);
  W.x = nx;
  W.y = ny;
  revealFog();
  afterStep(t, nx, ny);
  updateWorldUI();
}
// returns false when the tile should not be walked onto
function stepInto(t, x, y) {
  if (W.map === "world") {
    if (t === "C") {
      leaveWorld();
      return false;
    }
    if (ENTRANCES[t]) {
      const r = regionById(ENTRANCES[t]);
      if (r.unlock > S.castleLevel) worldToast(`\u{1F512} ${r.name} is sealed. Reach Castle Lv ${r.unlock}.`);
      else if (WORLD_MAPS[r.id] || DESCENTS[r.id]) showChoice(r.id);
      else worldToast(`${r.icon} ${r.name}: the way in is still buried. (Next dungeon, coming soon)`);
      return false;
    }
    return true;
  }
  if (t === "E") {
    exitDungeon();
    return false;
  }
  if (t === "D") {
    if (!S.world.keys[W.map]) {
      worldToast("\u{1F512} A heavy door, rusted shut. There must be a key somewhere.");
      return false;
    }
    markDone(x, y);
    worldToast("\u{1F5DD}\u{FE0F} The rusted key turns. The door groans open.");
    return true;
  }
  if (t === "W") {
    startBoss(x, y);
    return false;
  }
  return true;
}
function afterStep(t, x, y) {
  if (W.map === "world") {
    const z = ZONES[t];
    if (t === "S") {
      restParty();
      worldToast("\u{26F2} The ash fountain restores your party.");
      return;
    }
    if (z && z.danger && !W.warned[t]) {
      W.warned[t] = true;
      worldToast(`${"\u{2620}".repeat(z.danger)} ${z.name}: dangerous ground.`);
    }
    if (z && z.rate) rollEncounter(z.tier, z.rate);
    return;
  }
  if (t === "c") {
    markDone(x, y);
    const loot = { stone: rand(30, 60), wood: rand(25, 50), relics: rand(1, 2) };
    addToPack(loot);
    let msg = `\u{1F4E6} Chest: ${lootString(loot)}`;
    if (Math.random() < 0.3) {
      S.items.draught++;
      msg += ", +1 Healing Draught";
    }
    worldToast(msg);
  } else if (t === "k") {
    markDone(x, y);
    S.world.keys[W.map] = true;
    worldToast("\u{1F5DD}\u{FE0F} You found a Rusted Key. It must open something nearby.");
  } else if (t === "R") {
    markDone(x, y);
    const loot = { relics: rand(6, 9), essence: rand(20, 40) };
    addToPack(loot);
    S.items.ember = (S.items.ember || 0) + 1;
    worldToast(`\u{1F3FA} Relic cache: ${lootString(loot)}, +1 Ember of Return`);
    burst(window.innerWidth / 2, window.innerHeight / 2, "#c08ae8", 30);
  } else if (t === "L") {
    markDone(x, y);
    const unheard = LORE.map((_, i) => i).filter((i) => !S.lore.includes(i));
    if (unheard.length) {
      S.lore.push(unheard[0]);
      updateQuestProgress("lore", S.lore.length);
      showLore(unheard[0]);
    } else worldToast("The echo here has already been heard.");
  } else if (t === ".") {
    rollEncounter("ruins", 0.06);
  }
  saveGame(true);
}
function addToPack(loot) {
  Object.entries(loot).forEach(([k, v]) => {
    if (v > 0) W.pack[k] = (W.pack[k] || 0) + v;
  });
}
function restParty() {
  W.party.forEach((i) => {
    const st = heroBattleStats(S.heroes[i]);
    W.hpState[i] = { hp: st.hp, mp: st.mp };
  });
}
function enterDungeon(id) {
  W.entryReturn = [W.x, W.y];
  W.map = id;
  const [sx, sy] = worldMap().start;
  W.x = W.px = sx;
  W.y = W.py = sy;
  W.trail = [];
  W.seen = new Set();
  W.grace = 3;
  revealFog();
  worldToast(`You enter ${worldMap().name}.`);
  updateWorldUI();
}
function exitDungeon() {
  W.map = "world";
  [W.x, W.y] = W.entryReturn || WORLD_MAPS.world.start;
  W.px = W.x;
  W.py = W.y;
  W.trail = [];
  W.grace = 2;
  worldToast("Back out into the wastes.");
  updateWorldUI();
}
function revealFog() {
  if (!worldMap().fog) return;
  for (let dy = -3; dy <= 3; dy++)
    for (let dx = -3; dx <= 3; dx++) if (dx * dx + dy * dy <= 10) W.seen.add(`${W.x + dx},${W.y + dy}`);
}
// ---------- battles in the world ----------
function rollEncounter(tier, rate) {
  if (W.grace > 0) {
    W.grace--;
    return;
  }
  if (Math.random() >= rate) return;
  const e = ENCOUNTERS[tier];
  const reward = {};
  Object.entries(e.loot).forEach(([k, [a, b]]) => {
    const v = rand(a, b);
    if (v > 0) reward[k] = v;
  });
  launchWorldBattle({
    kind: "wild", title: "ENCOUNTER", name: "wild foes", scene: e.scene || (tier === "rift" ? "rift" : tier === "ruins" ? "ruins" : "wastes"), scale: e.scale || 1,
    group: e.groups[rand(0, e.groups.length - 1)], reward, xpReward: e.xp, intro: e.intro
  });
}
function startBoss(x, y) {
  W.pendingBoss = [x, y];
  launchWorldBattle({
    kind: "boss", title: "BOSS", name: "the Ash Warden", scene: "ruins",
    group: ["scavenger", "warden", "scavenger"],
    reward: { stone: 100, essence: 30, relics: 4 }, xpReward: 60, bonusItem: "ember",
    intro: "The Ash Warden rises from the cinders!"
  });
}
function launchWorldBattle(opts) {
  W.busy = true;
  retrigger($("w-flash"), "on");
  setTimeout(() => {
    startBattle({ ...opts, party: W.party, hpState: W.hpState, toPack: true, onClose: worldBattleClosed });
  }, 450);
}
function worldBattleClosed(won) {
  W.busy = false;
  W.grace = 4;
  if (!won) {
    // Albion-style risk: half of what you carry is lost
    Object.keys(W.pack).forEach((k) => (W.pack[k] = Math.floor(W.pack[k] * packKeep())));
    W.pendingBoss = null;
    leaveWorld(true);
    return;
  }
  if (W.pendingBoss) {
    markDone(...W.pendingBoss);
    W.pendingBoss = null;
    worldToast("The Ash Warden crumbles to cinders. The way to the cache is open.");
    saveGame(true);
  }
  updateWorldUI();
}
// ---------- heroes away on expeditions walk the roads ----------
const travelPaths = {};
function pathTo(regionId) {
  if (travelPaths[regionId]) return travelPaths[regionId];
  const rows = WORLD_MAPS.world.rows;
  let goal = null;
  rows.forEach((r, y) => [...r].forEach((c, x) => ENTRANCES[c] === regionId && (goal = [x, y])));
  if (!goal) return null;
  const start = WORLD_MAPS.world.start;
  const prev = { [start.join()]: null };
  const q = [start];
  while (q.length) {
    const [x, y] = q.shift();
    if (x === goal[0] && y === goal[1]) break;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy, k = `${nx},${ny}`;
      const c = rows[ny] && rows[ny][nx];
      if (!c || BLOCKED.has(c) || k in prev) continue;
      if (ENTRANCES[c] && ENTRANCES[c] !== regionId) continue;
      prev[k] = [x, y];
      q.push([nx, ny]);
    }
  }
  const path = [];
  for (let p = goal; p; p = prev[p.join()]) path.unshift(p);
  return (travelPaths[regionId] = path);
}
function travelerPositions() {
  const now = Date.now();
  const out = [];
  S.heroes.forEach((h) => {
    if (!h.exp || h.exp.done) return;
    const path = pathTo(h.exp.region);
    if (!path || path.length < 2) return;
    const p = Math.min(1, (now - h.exp.start) / (h.exp.end - h.exp.start));
    const along = p < 0.5 ? p * 2 : (1 - p) * 2; // out, then back home
    const f = along * (path.length - 1);
    const i = Math.min(path.length - 2, Math.floor(f));
    const t = f - i;
    out.push({ h, x: path[i][0] + (path[i + 1][0] - path[i][0]) * t, y: path[i][1] + (path[i + 1][1] - path[i][1]) * t });
  });
  return out;
}
// ---------- drawing ----------
function resizeWorld() {
  const cv = $("w-canvas");
  const stage = cv.parentElement;
  const dpr = window.devicePixelRatio || 1;
  W.vw = stage.clientWidth;
  W.vh = stage.clientHeight;
  W.dpr = dpr;
  cv.width = W.vw * dpr;
  cv.height = W.vh * dpr;
  cv.style.width = W.vw + "px";
  cv.style.height = W.vh + "px";
  W.ts = Math.max(28, Math.min(56, Math.floor(Math.min(W.vw / 11, W.vh / 9))));
  W.tw = 2 * Math.round(Math.max(30, Math.min(56, Math.min(W.vw / 14, W.vh / 10))));
}
window.addEventListener("resize", () => W.open && resizeWorld());
const worldClock = frameClock();
function worldLoop(time) {
  if (!W.open) {
    worldLoopOn = false;
    worldClock.reset();
    return;
  }
  // glide toward the target tile; the pow() form keeps the 0.28-per-frame
  // ease identical at 60, 120 or 144fps
  const ease = 1 - Math.pow(1 - 0.28, worldClock(time));
  W.px += (W.x - W.px) * ease;
  W.py += (W.y - W.py) * ease;
  if (Math.abs(W.x - W.px) < 0.01) W.px = W.x;
  if (Math.abs(W.y - W.py) < 0.01) W.py = W.y;
  if (isoOn()) drawWorldIso(time / 1000);
  else drawWorld(time / 1000);
  requestAnimationFrame(worldLoop);
}
const FLOORS = {
  ".": "#2c2318", ",": "#262120", "=": "#4d3d27", w: "#142320", g: "#3b3320", v: "#1f1530",
  "^": "#16110d", "~": "#0a1220", T: "#2c2318", C: "#4d3d27", S: "#2c2318",
  1: "#2c2318", 2: "#142320", 3: "#3b3320", 4: "#1f1530",
  b: "#12262a", o: "#2e1814", i: "#1a1c2e", x: "#3a362c", f: "#33291a",
  5: "#12262a", 6: "#2e1814", 7: "#1a1c2e", 8: "#3a362c", 9: "#33291a"
};
function glyph(ctx, ch, sx, sy, ts, scale = 0.68, alpha = 1) {
  ctx.globalAlpha = alpha;
  ctx.font = `${Math.round(ts * scale)}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(ch, sx + ts / 2, sy + ts / 2 + ts * 0.04);
  ctx.globalAlpha = 1;
}
function glow(ctx, sx, sy, ts, color, strength) {
  const g = ctx.createRadialGradient(sx + ts / 2, sy + ts / 2, 0, sx + ts / 2, sy + ts / 2, ts * 0.8);
  g.addColorStop(0, color.replace("A", strength));
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.fillRect(sx - ts * 0.3, sy - ts * 0.3, ts * 1.6, ts * 1.6);
}
function drawTile(ctx, ch, x, y, sx, sy, ts, t) {
  const hsh = ((x * 73856093) ^ (y * 19349663)) >>> 0;
  const inRuins = W.map !== "world";
  if (inRuins) {
    if (ch === "#") {
      // stone wall: lit top face, darker front, brick seams
      ctx.fillStyle = "#3e3226";
      ctx.fillRect(sx, sy, ts + 0.5, ts + 0.5);
      ctx.fillStyle = "#5e4c38";
      ctx.fillRect(sx, sy, ts + 0.5, ts * 0.22);
      ctx.strokeStyle = "#2a2018";
      ctx.beginPath();
      ctx.moveTo(sx, sy + ts * 0.55);
      ctx.lineTo(sx + ts, sy + ts * 0.55);
      ctx.moveTo(sx + ((x % 2) ? ts * 0.3 : ts * 0.7), sy + ts * 0.22);
      ctx.lineTo(sx + ((x % 2) ? ts * 0.3 : ts * 0.7), sy + ts * 0.55);
      ctx.moveTo(sx + ((x % 2) ? ts * 0.7 : ts * 0.3), sy + ts * 0.55);
      ctx.lineTo(sx + ((x % 2) ? ts * 0.7 : ts * 0.3), sy + ts);
      ctx.stroke();
      ctx.fillStyle = "#00000088";
      ctx.fillRect(sx, sy + ts - 3, ts + 0.5, 3);
      return;
    }
    ctx.fillStyle = (x + y) % 2 ? "#17120e" : "#1b150f";
    ctx.fillRect(sx, sy, ts + 0.5, ts + 0.5);
    ctx.strokeStyle = "#00000033";
    ctx.strokeRect(sx + 0.5, sy + 0.5, ts - 1, ts - 1);
    if (hsh % 7 === 0) {
      ctx.fillStyle = "#4a3c2a55";
      ctx.fillRect(sx + (hsh % 13) * ts / 16, sy + (hsh % 11) * ts / 14, 3, 2);
    }
    if (ch === "E") glyph(ctx, "\u{1F6AA}", sx, sy, ts);
    else if (ch === "c") glyph(ctx, "\u{1F4E6}", sx, sy, ts, 0.6);
    else if (ch === "k") {
      glow(ctx, sx, sy, ts, "rgba(232,208,124,A)", 0.25 + Math.sin(t * 3) * 0.1);
      glyph(ctx, "\u{1F5DD}\u{FE0F}", sx, sy, ts, 0.55);
    } else if (ch === "D") {
      ctx.fillStyle = "#3a2614";
      ctx.fillRect(sx + ts * 0.12, sy, ts * 0.76, ts);
      glyph(ctx, "\u{1F512}", sx, sy, ts, 0.45);
    } else if (ch === "L") {
      glow(ctx, sx, sy, ts, "rgba(138,159,232,A)", 0.35 + Math.sin(t * 2) * 0.15);
      glyph(ctx, "\u{1F441}\u{FE0F}", sx, sy, ts, 0.55);
    } else if (ch === "W") {
      glow(ctx, sx, sy, ts, "rgba(232,96,80,A)", 0.4 + Math.sin(t * 4) * 0.15);
      glyph(ctx, "\u{1F9DF}", sx, sy, ts, 0.72);
    } else if (ch === "R") {
      glow(ctx, sx, sy, ts, "rgba(192,138,232,A)", 0.4 + Math.sin(t * 2.5) * 0.15);
      glyph(ctx, "\u{1F3FA}", sx, sy, ts, 0.62);
    }
    return;
  }
  ctx.fillStyle = FLOORS[ch] || "#2c2318";
  ctx.fillRect(sx, sy, ts + 0.5, ts + 0.5);
  if (ch === ",") {
    ctx.fillStyle = "#5a524c55";
    for (let i = 0; i < 4; i++) ctx.fillRect(sx + ((hsh >> (i * 3)) % ts), sy + ((hsh >> (i * 4 + 2)) % ts), 2, 2);
  } else if (ch === ".") {
    if (hsh % 5 === 0) {
      ctx.fillStyle = "#4a3b2655";
      ctx.fillRect(sx + (hsh % ts), sy + ((hsh >> 3) % ts), 3, 2);
    }
  } else if (ch === "=") {
    ctx.fillStyle = "#5e4b30";
    ctx.fillRect(sx, sy + ts * 0.3, ts, ts * 0.4);
    ctx.fillStyle = "#00000022";
    ctx.fillRect(sx + (hsh % ts), sy + ts * 0.45, 4, 2);
  } else if (ch === "w") {
    ctx.strokeStyle = "#2f5a4a88";
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const bx = sx + ((hsh >> (i * 5)) % (ts - 6)) + 3, by = sy + ((hsh >> (i * 3 + 1)) % (ts - 8)) + 8;
      ctx.moveTo(bx, by);
      ctx.lineTo(bx - 2, by - 6);
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + 2, by - 5);
    }
    ctx.stroke();
  } else if (ch === "g") {
    const a = 0.25 + Math.sin(t * 2 + (hsh % 10)) * 0.25;
    ctx.fillStyle = `rgba(255,240,190,${Math.max(0, a)})`;
    ctx.fillRect(sx + (hsh % ts), sy + ((hsh >> 4) % ts), 2, 2);
    ctx.fillStyle = "#4a402866";
    ctx.fillRect(sx, sy + ts * 0.6, ts, 2);
  } else if (ch === "v") {
    const a = 0.08 + Math.sin(t * 1.5 + (hsh % 7)) * 0.06;
    ctx.fillStyle = `rgba(192,138,232,${a})`;
    ctx.fillRect(sx, sy, ts, ts);
    if (hsh % 4 === 0) {
      ctx.strokeStyle = "#c08ae855";
      ctx.beginPath();
      ctx.moveTo(sx + ts * 0.2, sy + ts * 0.3);
      ctx.lineTo(sx + ts * 0.5, sy + ts * 0.55);
      ctx.lineTo(sx + ts * 0.7, sy + ts * 0.4);
      ctx.stroke();
    }
  } else if (ch === "~") {
    ctx.strokeStyle = "#2a4060aa";
    ctx.beginPath();
    const off = Math.sin(t * 1.5 + x) * 3;
    ctx.moveTo(sx + 4, sy + ts * 0.4 + off);
    ctx.quadraticCurveTo(sx + ts / 2, sy + ts * 0.3 + off, sx + ts - 4, sy + ts * 0.4 + off);
    ctx.stroke();
  } else if (ch === "^") {
    ctx.fillStyle = "#2a2018";
    ctx.beginPath();
    ctx.moveTo(sx + ts * 0.05, sy + ts);
    ctx.lineTo(sx + ts * 0.5, sy + ts * 0.12);
    ctx.lineTo(sx + ts * 0.95, sy + ts);
    ctx.fill();
    ctx.fillStyle = "#4a3c2c";
    ctx.beginPath();
    ctx.moveTo(sx + ts * 0.5, sy + ts * 0.12);
    ctx.lineTo(sx + ts * 0.62, sy + ts * 0.36);
    ctx.lineTo(sx + ts * 0.42, sy + ts * 0.32);
    ctx.fill();
  } else if (ch === "T") {
    ctx.strokeStyle = "#5a4630";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx + ts / 2, sy + ts * 0.9);
    ctx.lineTo(sx + ts / 2, sy + ts * 0.3);
    ctx.lineTo(sx + ts * 0.3, sy + ts * 0.15);
    ctx.moveTo(sx + ts / 2, sy + ts * 0.45);
    ctx.lineTo(sx + ts * 0.72, sy + ts * 0.25);
    ctx.stroke();
    ctx.lineWidth = 1;
  } else if (ch === "C") {
    glow(ctx, sx, sy, ts, "rgba(232,180,110,A)", 0.35);
    glyph(ctx, "\u{1F3F0}", sx, sy, ts, 0.75);
  } else if (ch === "S") {
    glow(ctx, sx, sy, ts, "rgba(122,202,138,A)", 0.3 + Math.sin(t * 2) * 0.1);
    glyph(ctx, "\u{26F2}", sx, sy, ts, 0.62);
  } else if (ENTRANCES[ch]) {
    const r = regionById(ENTRANCES[ch]);
    const locked = r.unlock > S.castleLevel;
    glow(ctx, sx, sy, ts, locked ? "rgba(120,120,120,A)" : "rgba(232,200,140,A)", locked ? 0.15 : 0.35 + Math.sin(t * 2) * 0.1);
    glyph(ctx, r.icon, sx, sy, ts, 0.72, locked ? 0.45 : 1);
    if (locked) glyph(ctx, "\u{1F512}", sx + ts * 0.25, sy + ts * 0.25, ts, 0.32);
  }
}
function drawToken(ctx, icon, cx, cy, r, ring, alpha) {
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#00000088";
  ctx.beginPath();
  ctx.ellipse(cx, cy + r * 0.95, r * 0.8, r * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#120e0a";
  ctx.strokeStyle = ring;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.font = `${Math.round(r * 1.25)}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(icon, cx, cy + r * 0.06);
  ctx.globalAlpha = 1;
}
function drawWorld(t) {
  const cv = $("w-canvas");
  const ctx = cv.getContext("2d");
  ctx.setTransform(W.dpr, 0, 0, W.dpr, 0, 0);
  const m = worldMap(), rows = m.rows, ts = W.ts;
  const mw = rows[0].length, mh = rows.length;
  let camX = W.px * ts + ts / 2 - W.vw / 2;
  let camY = W.py * ts + ts / 2 - W.vh / 2;
  const maxX = mw * ts - W.vw, maxY = mh * ts - W.vh;
  camX = maxX < 0 ? maxX / 2 : Math.max(0, Math.min(maxX, camX));
  camY = maxY < 0 ? maxY / 2 : Math.max(0, Math.min(maxY, camY));
  ctx.fillStyle = "#050405";
  ctx.fillRect(0, 0, W.vw, W.vh);
  const x0 = Math.max(0, Math.floor(camX / ts)), y0 = Math.max(0, Math.floor(camY / ts));
  const x1 = Math.min(mw - 1, Math.floor((camX + W.vw) / ts)), y1 = Math.min(mh - 1, Math.floor((camY + W.vh) / ts));
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) drawTile(ctx, tileAt(x, y), x, y, x * ts - camX, y * ts - camY, ts, t);
  // heroes away on expeditions, walking the roads
  if (W.map === "world")
    travelerPositions().forEach((p) => {
      const cx = p.x * ts - camX + ts / 2, cy = p.y * ts - camY + ts / 2;
      drawHeroSprite(ctx, p.h.id, cx, cy + ts * 0.32, ts * 0.7, 0.75) || drawToken(ctx, p.h.icon, cx, cy, ts * 0.26, "#8a9fe8", 0.85);
    });
  // the party: followers trail the leader
  const bob = Math.abs(Math.sin(t * 6)) * (W.px !== W.x || W.py !== W.y ? 3 : 0.8);
  for (let i = W.trail.length - 1; i >= 0; i--) {
    const [fx, fy] = W.trail[i];
    const h = S.heroes[W.party[i + 1]];
    const down = (W.hpState[W.party[i + 1]] || {}).hp <= 0;
    const cx = fx * ts - camX + ts / 2, cy = fy * ts - camY + ts / 2;
    drawHeroSprite(ctx, h.id, cx, cy + ts * 0.38 - bob * 0.6, ts * 0.85, down ? 0.35 : 0.95, fx > W.px) || drawToken(ctx, h.icon, cx, cy - bob * 0.6, ts * 0.3, "#c8a97e88", down ? 0.35 : 0.9);
  }
  const lead = S.heroes[W.party[0]];
  {
    const cx = W.px * ts - camX + ts / 2, cy = W.py * ts - camY + ts / 2;
    drawHeroSprite(ctx, lead.id, cx, cy + ts * 0.4 - bob, ts * 1.0, 1, W.face < 0, W.map !== "world" ? "rgba(255,180,100,0.22)" : null) || drawToken(ctx, lead.icon, cx, cy - bob, ts * 0.38, "#c8a97e", 1);
  }
  // fog of war inside ruins
  if (m.fog) {
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++) {
        const sx = x * ts - camX, sy = y * ts - camY;
        if (!W.seen.has(`${x},${y}`)) {
          ctx.fillStyle = "#050405";
          ctx.fillRect(sx, sy, ts + 1, ts + 1);
        } else {
          const d = Math.hypot(x - W.px, y - W.py);
          if (d > 2.5) {
            ctx.fillStyle = `rgba(5,4,5,${Math.min(0.6, (d - 2.5) * 0.25)})`;
            ctx.fillRect(sx, sy, ts + 1, ts + 1);
          }
        }
      }
  }
  // vignette
  const vg = ctx.createRadialGradient(W.vw / 2, W.vh / 2, Math.min(W.vw, W.vh) * 0.35, W.vw / 2, W.vh / 2, Math.max(W.vw, W.vh) * 0.75);
  vg.addColorStop(0, "transparent");
  vg.addColorStop(1, "#000000aa");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W.vw, W.vh);
}
// ---------- 2.5D isometric view ----------
// Tile (x, y) projects to a diamond: screen x = (x - y) * tw/2, screen y = (x + y) * tw/4.
// Same look as rotateX(55deg) rotateZ(-45deg), but drawn directly so heroes and
// buildings stay upright and walls/mountains get real height.
const isoOn = () => S.viewIso !== false;
function toggleIso() {
  S.viewIso = !isoOn();
  applyViewMode();
  saveGame(true);
}
function applyViewMode() {
  $("world").classList.toggle("iso", isoOn());
  $("w-view").textContent = isoOn() ? "2D view" : "2.5D view";
}
function isoProj(x, y) {
  return [((x - y) * W.tw) / 2, ((x + y) * W.tw) / 4];
}
function isoDiamond(ctx, cx, cy, tw, th, lift = 0) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - th / 2 - lift);
  ctx.lineTo(cx + tw / 2, cy - lift);
  ctx.lineTo(cx, cy + th / 2 - lift);
  ctx.lineTo(cx - tw / 2, cy - lift);
  ctx.closePath();
}
function isoBlock(ctx, cx, cy, tw, th, h, top, left, right) {
  ctx.fillStyle = left;
  ctx.beginPath();
  ctx.moveTo(cx - tw / 2, cy - h);
  ctx.lineTo(cx, cy + th / 2 - h);
  ctx.lineTo(cx, cy + th / 2);
  ctx.lineTo(cx - tw / 2, cy);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = right;
  ctx.beginPath();
  ctx.moveTo(cx + tw / 2, cy - h);
  ctx.lineTo(cx, cy + th / 2 - h);
  ctx.lineTo(cx, cy + th / 2);
  ctx.lineTo(cx + tw / 2, cy);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = top;
  isoDiamond(ctx, cx, cy, tw, th, h);
  ctx.fill();
}
function isoGlyph(ctx, ch, cx, baseY, size, alpha = 1) {
  const prev = ctx.globalAlpha;
  ctx.globalAlpha = prev * alpha;
  ctx.font = `${Math.round(size)}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(ch, cx, baseY);
  ctx.globalAlpha = prev;
}
function isoGlow(ctx, cx, cy, r, color) {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, color);
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
}
function isoGround(ctx, cx, cy, tw, th, color, hsh) {
  ctx.fillStyle = color;
  isoDiamond(ctx, cx, cy, tw + 0.6, th + 0.3);
  ctx.fill();
  if (hsh % 3) {
    ctx.fillStyle = `rgba(255,240,210,${(hsh % 3) * 0.018})`;
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(0,0,0,0.22)";
  isoDiamond(ctx, cx, cy, tw, th);
  ctx.stroke();
}
function drawIsoTile(ctx, ch, x, y, cx, cy, tw, th, t) {
  const hsh = ((x * 73856093) ^ (y * 19349663)) >>> 0;
  const sprite = (g, scale = 0.46, alpha = 1) => isoGlyph(ctx, g, cx, cy + th * 0.22, tw * scale, alpha);
  if (W.map !== "world") {
    if (ch === "#") {
      const h = th * 1.3;
      isoBlock(ctx, cx, cy, tw, th, h, "#64513c", "#3c3024", "#2c231a");
      ctx.strokeStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.moveTo(cx - tw / 2, cy - h / 2);
      ctx.lineTo(cx, cy + th / 2 - h / 2);
      ctx.lineTo(cx + tw / 2, cy - h / 2);
      ctx.stroke();
      return;
    }
    isoGround(ctx, cx, cy, tw, th, (x + y) % 2 ? "#251d16" : "#2b221a", hsh);
    if (ch === "E") sprite("\u{1F6AA}", 0.5);
    else if (ch === "c") sprite("\u{1F4E6}", 0.42);
    else if (ch === "k") {
      isoGlow(ctx, cx, cy - th * 0.3, tw * 0.45, `rgba(232,208,124,${0.3 + Math.sin(t * 3) * 0.1})`);
      sprite("\u{1F5DD}\u{FE0F}", 0.38);
    } else if (ch === "D") {
      isoBlock(ctx, cx, cy, tw * 0.8, th * 0.8, th * 1.1, "#5a3a1c", "#3e2814", "#2e1c0c");
      isoGlyph(ctx, "\u{1F512}", cx, cy - th * 0.5, tw * 0.26);
    } else if (ch === "L") {
      isoGlow(ctx, cx, cy - th * 0.4, tw * 0.55, `rgba(138,159,232,${0.35 + Math.sin(t * 2) * 0.15})`);
      sprite("\u{1F441}\u{FE0F}", 0.4);
    } else if (ch === "W") {
      isoGlow(ctx, cx, cy - th * 0.5, tw * 0.6, `rgba(232,96,80,${0.4 + Math.sin(t * 4) * 0.15})`);
      sprite("\u{1F9DF}", 0.62);
    } else if (ch === "R") {
      isoGlow(ctx, cx, cy - th * 0.4, tw * 0.55, `rgba(192,138,232,${0.4 + Math.sin(t * 2.5) * 0.15})`);
      sprite("\u{1F3FA}", 0.46);
    }
    return;
  }
  if (ch === "^") {
    const h = th * (0.9 + (hsh % 5) * 0.2);
    isoBlock(ctx, cx, cy, tw, th, h, "#4a3c2c", "#2c2219", "#1f1812");
    ctx.fillStyle = "#6a5a46";
    isoDiamond(ctx, cx, cy, tw * 0.45, th * 0.45, h);
    ctx.fill();
    return;
  }
  isoGround(ctx, cx, cy, tw, th, ch === "T" ? FLOORS["."] : FLOORS[ch] || "#2c2318", hsh);
  if (ch === "=" || ch === "C") {
    ctx.fillStyle = "#6a5434";
    isoDiamond(ctx, cx, cy, tw * 0.6, th * 0.6);
    ctx.fill();
  } else if (ch === ",") {
    ctx.fillStyle = "#6a625a77";
    for (let i = 0; i < 4; i++) ctx.fillRect(cx - tw * 0.25 + ((hsh >> (i * 3)) % (tw * 0.5)), cy - th * 0.2 + ((hsh >> (i * 4 + 2)) % (th * 0.4)), 2, 2);
  } else if (ch === "w") {
    ctx.strokeStyle = "#3a6a5899";
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const bx = cx - tw * 0.2 + ((hsh >> (i * 5)) % (tw * 0.4)), by = cy - th * 0.1 + ((hsh >> (i * 3 + 1)) % (th * 0.3));
      ctx.moveTo(bx, by);
      ctx.lineTo(bx - 2, by - th * 0.3);
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + 2, by - th * 0.25);
    }
    ctx.stroke();
  } else if (ch === "g") {
    const a = 0.25 + Math.sin(t * 2 + (hsh % 10)) * 0.25;
    ctx.fillStyle = `rgba(255,240,190,${Math.max(0, a)})`;
    ctx.fillRect(cx - tw * 0.2 + (hsh % (tw * 0.4)), cy - th * 0.15 + ((hsh >> 4) % (th * 0.3)), 2, 2);
  } else if (ch === "v") {
    ctx.fillStyle = `rgba(192,138,232,${0.08 + Math.sin(t * 1.5 + (hsh % 7)) * 0.06})`;
    isoDiamond(ctx, cx, cy, tw, th);
    ctx.fill();
  } else if (ch === "~") {
    ctx.strokeStyle = "#2a4a70aa";
    ctx.beginPath();
    const off = Math.sin(t * 1.5 + x + y) * 2;
    ctx.moveTo(cx - tw * 0.25, cy + off);
    ctx.quadraticCurveTo(cx, cy - th * 0.15 + off, cx + tw * 0.25, cy + off);
    ctx.stroke();
  } else if (ch === "T") {
    ctx.strokeStyle = "#6a5236";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy + th * 0.1);
    ctx.lineTo(cx, cy - th * 1.1);
    ctx.lineTo(cx - tw * 0.16, cy - th * 1.4);
    ctx.moveTo(cx, cy - th * 0.7);
    ctx.lineTo(cx + tw * 0.18, cy - th * 1.05);
    ctx.stroke();
    ctx.lineWidth = 1;
  }
  if (ch === "C") {
    isoGlow(ctx, cx, cy - th * 0.6, tw * 0.6, "rgba(232,180,110,0.35)");
    sprite("\u{1F3F0}", 0.62);
  } else if (ch === "S") {
    isoGlow(ctx, cx, cy - th * 0.4, tw * 0.55, `rgba(122,202,138,${0.3 + Math.sin(t * 2) * 0.1})`);
    sprite("\u{26F2}", 0.5);
  } else if (ENTRANCES[ch]) {
    const r = regionById(ENTRANCES[ch]);
    const locked = r.unlock > S.castleLevel;
    isoGlow(ctx, cx, cy - th * 0.5, tw * 0.6, locked ? "rgba(120,120,120,0.15)" : `rgba(232,200,140,${0.35 + Math.sin(t * 2) * 0.1})`);
    sprite(r.icon, 0.58, locked ? 0.45 : 1);
    if (locked) isoGlyph(ctx, "\u{1F512}", cx + tw * 0.18, cy - th * 0.9, tw * 0.22);
  }
}
function drawWorldIso(t) {
  const cv = $("w-canvas");
  const ctx = cv.getContext("2d");
  ctx.setTransform(W.dpr, 0, 0, W.dpr, 0, 0);
  const m = worldMap(), rows = m.rows, mw = rows[0].length, mh = rows.length;
  const tw = W.tw, th = tw / 2;
  const [pcx, pcy] = isoProj(W.px, W.py);
  const ox = W.vw / 2 - pcx, oy = W.vh / 2 - pcy + th * 0.4;
  ctx.fillStyle = "#050405";
  ctx.fillRect(0, 0, W.vw, W.vh);
  // tokens are bucketed by tile so walls in front of them draw on top
  const tokens = {};
  const put = (x, y, fn) => {
    const k = `${Math.round(x)},${Math.round(y)}`;
    (tokens[k] = tokens[k] || []).push(fn);
  };
  const at = (x, y) => {
    const [sx, sy] = isoProj(x, y);
    return [sx + ox, sy + oy];
  };
  const moving = W.px !== W.x || W.py !== W.y;
  const bob = Math.abs(Math.sin(t * 6)) * (moving ? 3 : 0.8);
  if (W.map === "world")
    travelerPositions().forEach((p) =>
      put(p.x, p.y, () => {
        const [sx, sy] = at(p.x, p.y);
        drawHeroSprite(ctx, p.h.id, sx, sy + tw * 0.06, tw * 0.48, 0.75) || drawToken(ctx, p.h.icon, sx, sy - tw * 0.2, tw * 0.15, "#8a9fe8", 0.85);
      })
    );
  W.trail.forEach(([fx, fy], i) => {
    const h = S.heroes[W.party[i + 1]];
    const down = (W.hpState[W.party[i + 1]] || {}).hp <= 0;
    put(fx, fy, () => {
      const [sx, sy] = at(fx, fy);
      drawHeroSprite(ctx, h.id, sx, sy + tw * 0.06 - bob * 0.6, tw * 0.58, down ? 0.35 : 0.95, fx > W.px) || drawToken(ctx, h.icon, sx, sy - tw * 0.21 - bob * 0.6, tw * 0.17, "#c8a97e88", down ? 0.35 : 0.9);
    });
  });
  put(W.px, W.py, () => {
    const [sx, sy] = at(W.px, W.py);
    const lead = S.heroes[W.party[0]];
    drawHeroSprite(ctx, lead.id, sx, sy + tw * 0.06 - bob, tw * 0.68, 1, W.face < 0, W.map !== "world" ? "rgba(255,180,100,0.25)" : null) || drawToken(ctx, lead.icon, sx, sy - tw * 0.26 - bob, tw * 0.21, "#c8a97e", 1);
  });
  const pSum = W.px + W.py, pDiff = W.px - W.py;
  for (let s = 0; s <= mw + mh - 2; s++) {
    for (let x = Math.max(0, s - mh + 1); x <= Math.min(mw - 1, s); x++) {
      const y = s - x;
      const [cx, cy] = at(x, y);
      if (cx < -tw || cx > W.vw + tw || cy < -tw * 1.2 || cy > W.vh + tw * 1.5) continue;
      let alpha = 1;
      if (m.fog) {
        if (!W.seen.has(`${x},${y}`)) continue;
        const d = Math.hypot(x - W.px, y - W.py);
        if (d > 2.5) alpha = Math.max(0.35, 1 - (d - 2.5) * 0.25);
      }
      const ch = tileAt(x, y);
      // tall tiles just in front of the party turn see-through
      if ((ch === "#" || ch === "^" || ch === "D") && s > pSum && s - pSum <= 2.5 && Math.abs(x - y - pDiff) <= 2) alpha = Math.min(alpha, 0.35);
      ctx.save();
      ctx.globalAlpha = alpha;
      drawIsoTile(ctx, ch, x, y, cx, cy, tw, th, t);
      ctx.restore();
      (tokens[`${x},${y}`] || []).forEach((f) => f());
    }
  }
  const vg = ctx.createRadialGradient(W.vw / 2, W.vh / 2, Math.min(W.vw, W.vh) * 0.35, W.vw / 2, W.vh / 2, Math.max(W.vw, W.vh) * 0.75);
  vg.addColorStop(0, "transparent");
  vg.addColorStop(1, "#000000bb");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W.vw, W.vh);
}
// ---------- HUD ----------
function updateWorldUI() {
  if (!W.open) return;
  const m = worldMap();
  $("w-title").textContent = m.name;
  let zone = "";
  if (W.map === "world") {
    const z = ZONES[tileAt(W.x, W.y)];
    if (z) zone = z.danger ? `${z.name}  ${"\u{2620}".repeat(z.danger)}` : z.name;
  } else zone = S.world.keys[W.map] ? "\u{1F5DD}\u{FE0F} Rusted Key in hand" : "Explore the ruins";
  $("w-zone").textContent = zone;
  $("w-party").innerHTML = W.party
    .map((i) => {
      const h = S.heroes[i];
      const st = heroBattleStats(h);
      const cur = W.hpState[i] || { hp: st.hp };
      const p = Math.max(0, (cur.hp / st.hp) * 100);
      return `<div class="w-hero ${cur.hp <= 0 ? "down" : ""}" title="${h.name}"><span>${heroSprite(h)}</span><div class="w-hp"><i style="width:${p}%;background:${hpColor(p)}"></i></div></div>`;
    })
    .join("");
  const packTxt = lootString(W.pack);
  $("w-pack").innerHTML = `<b>Pack</b> ${packTxt || "empty"}<span class="w-items">\u{1F9EA}${S.items.draught || 0}  \u{1FAB6}${S.items.ember || 0}</span>`;
  const home = $("w-home");
  home.disabled = W.map !== "world";
  home.textContent = W.map === "world" ? "\u{1F3F0} Return" : "Find the exit";
}
let toastTimer = null;
function worldToast(msg) {
  const el = $("w-toast");
  el.textContent = msg;
  retrigger(el, "show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}
// ---------- controls: keyboard + on-screen D-pad ----------
const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const KEYMAP = { ArrowUp: "up", w: "up", W: "up", ArrowDown: "down", s: "down", S: "down", ArrowLeft: "left", a: "left", A: "left", ArrowRight: "right", d: "right", D: "right" };
document.addEventListener("keydown", (e) => {
  if (!W.open || !KEYMAP[e.key]) return;
  e.preventDefault();
  tryMove(...DIRS[KEYMAP[e.key]]);
});
let holdTimer = null;
function padStart(dir, e) {
  if (e) e.preventDefault();
  padStop();
  tryMove(...DIRS[dir]);
  holdTimer = setInterval(() => tryMove(...DIRS[dir]), 60);
}
function padStop() {
  clearInterval(holdTimer);
  holdTimer = null;
}
// ==============================================================
// DESCENTS  -  roguelike runs beneath a region
// Turn-based combat, Hades-style structure: the route is generated
// up front, you pick one node per floor, loot builds up in the run,
// and you either Extract Early (bank it + depth bonus) or push on
// toward the boss, risking a wipe that keeps only part of it.
// ==============================================================
//
// RUN STATE  D  (one active run, null when none)
// {
//   region, cfg            which Descent and its config (DESCENTS)
//   floors: [[node..]..]   the whole route, built by generateFloors()
//   floor                  index of the floor being chosen on (= floors cleared)
//   chosen: {floor: i}     which node was picked on each floor
//   node                   the node currently being resolved
//   phase                  intro | choose | combat | rest | shrine | event | market | boon | won
//   stamina: {cur, max}    squad-wide; HP/MP per hero live in W.hpState
//   loot: {relics, essence, gold, stone, wood}   banked only by extraction or victory
//   boons: [id]            Echoes active this run
//   log                    outcome text shown above the next choice
//   marketUsed, seenEvents, event, boonChoices, boonFrom, tithe, lastReward
// }
// NODE  { type: "combat"|"elite"|"rest"|"shrine"|"event"|"market"|"boss", reward?: "relics"|"essence"|"gold"|"supplies" }
//
const DESCENTS = {
  outskirts: {
    name: "the Ashen Outskirts",
    floors: 8,
    normal: [["scavenger", "scavenger"], ["guardian"], ["scavenger", "guardian"], ["scavenger", "scavenger", "scavenger"]],
    elite: [["guardian", "scavenger", "guardian"], ["guardian", "guardian"]],
    boss: ["scavenger", "warden", "scavenger"],
    bossReward: { relics: 12, essence: 40, gold: 60 },
    intro: "Beneath the ruins, the ground gives way to old tunnels. Eight floors lie below, and something at the bottom is waiting. You can climb out between floors and keep everything you've found."
  },
  // ---- the Far Reach: harder Descents (scale multiplies enemy HP and attack) ----
  bells: {
    name: "the Drowned Bells", floors: 8, scale: 1.6, scene: "rift",
    normal: [["wisp", "guardian"], ["wisp", "wisp", "wisp"], ["guardian", "wisp", "guardian"]],
    elite: [["guardian", "guardian", "guardian"], ["wisp", "warlord", "wisp"]],
    boss: ["wisp", "horror", "wisp"], bossName: "the Bell-Drowned", bossIntro: "The great bell rolls over in the deep, and something climbs out of it!",
    bossReward: { relics: 30, essence: 300, gold: 150 },
    intro: "The sunken tower goes down further than it ever went up. Every floor, the bell gets louder."
  },
  orchard: {
    name: "the Cinder Orchard", floors: 8, scale: 2, scene: "wastes",
    normal: [["imp", "imp", "imp"], ["imp", "guardian"], ["scavenger", "imp", "scavenger"]],
    elite: [["imp", "warlord", "imp"], ["warlord", "guardian"]],
    boss: ["imp", "warden", "imp"], bossName: "the Root of Embers", bossIntro: "The oldest tree tears up its roots and walks!",
    bossReward: { relics: 40, essence: 450, gold: 200 },
    intro: "Under the orchard the roots are still burning. They light the way down."
  },
  spires: {
    name: "the Inverted Spires", floors: 8, scale: 2.5, scene: "rift",
    normal: [["wisp", "wisp", "guardian"], ["guardian", "guardian"], ["wisp", "imp", "wisp"]],
    elite: [["guardian", "horror"], ["wisp", "wisp", "warlord"]],
    boss: ["wisp", "horror", "wisp"], bossName: "the Hanged King", bossIntro: "Upside down on his throne, the Hanged King opens his eyes!",
    bossReward: { relics: 55, essence: 650, gold: 260 },
    intro: "You climb down into a tower that hangs from the sky. Down is up here. Try not to think about it."
  },
  bonetide: {
    name: "the Bone Tide", floors: 8, scale: 3, scene: "wastes",
    normal: [["scavenger", "scavenger", "warlord"], ["guardian", "warlord"], ["imp", "warden"]],
    elite: [["warden", "warlord"], ["horror", "scavenger"]],
    boss: ["guardian", "horror", "guardian"], bossName: "the Undertow", bossIntro: "The tide stands up and becomes a shape!",
    bossReward: { relics: 70, essence: 900, gold: 340 },
    intro: "When the white sea pulls back, it leaves stairs. They only stay open until the tide returns."
  },
  firstcity: {
    name: "the First City", floors: 8, scale: 3.6, scene: "ruins",
    normal: [["warlord", "guardian"], ["wisp", "horror"], ["warden", "imp", "imp"]],
    elite: [["warden", "horror"], ["warlord", "warlord", "guardian"]],
    boss: ["warden", "horror", "warden"], bossName: "the First Keeper", bossIntro: "The First Keeper rises. It wears your crown.",
    bossReward: { relics: 100, essence: 1400, gold: 450 },
    intro: "Beneath the First City is another city, and beneath that one, another. Eight floors down, someone is still on the throne."
  }
};
const NODE_TYPES = {
  combat: { icon: "\u{2694}\u{FE0F}", label: "Battle", stamina: 12 },
  elite: { icon: "\u{2620}\u{FE0F}", label: "Elite", stamina: 18, sub: "hard fight, double reward" },
  rest: { icon: "\u{1F525}", label: "Rest Site", stamina: 0, sub: "no fight" },
  shrine: { icon: "\u{1F3DB}\u{FE0F}", label: "Shrine", stamina: 6, sub: "an Echo, for a price" },
  event: { icon: "\u{2753}", label: "Unknown", stamina: 6, sub: "a choice awaits" },
  market: { icon: "\u{1F4B0}", label: "Shadow Market", stamina: 6, sub: "spend gold" },
  boss: { icon: "\u{1F9DF}", label: "The Warden's Hall", stamina: 0, sub: "boss" },
  guardian: { icon: "\u{1F441}\u{FE0F}", label: "Depth Guardian", stamina: 0, sub: "guards the way down" }
};
// ---------- the Endless Descent: past the boss, the floors never stop ----------
// every 5 floors: 3 normal floors, a breather, then a Depth Guardian
function endlessChunk() {
  const chunk = generateFloors({ floors: 5 });
  chunk[4] = [{ type: "guardian" }];
  return chunk;
}
const GUARDIANS = [["scavenger", "warden", "scavenger"], ["imp", "warlord", "imp"], ["wisp", "horror", "wisp"], ["guardian", "warden", "guardian"], ["warlord", "horror"]];
function guardianReward(f) {
  const luck = runHas("luck") ? 1.5 : 1;
  return { relics: Math.round((6 + f) * luck), essence: 30 + f * 8, gold: Math.round((30 + f * 5) * luck) };
}
function depthScale(f) {
  return (D.cfg.scale || 1) * (1 + f * 0.06 + Math.max(0, f - 8) * 0.05);
}
function recordDepth() {
  if (!D) return;
  S.bestDepth = Math.max(S.bestDepth || 0, D.floor);
  if (D.endless) S.bestEndless = Math.max(S.bestEndless || 0, D.floor);
}
function goDeeper() {
  if (!D || D.phase !== "won") return;
  D.endless = true;
  D.floors.push(...endlessChunk());
  D.phase = "choose";
  D.log = "\u{1F573}\u{FE0F} Past the Warden's hall, a stair keeps going down. The Endless Descent begins.";
  gainStamina(40);
  saveGame(true);
  renderDescent();
}
const REWARD_TYPES = {
  relics: { icon: "\u{1F3FA}", label: "Relics" },
  essence: { icon: "\u{2697}\u{FE0F}", label: "Essence" },
  gold: { icon: "\u{1FA99}", label: "Gold" },
  supplies: { icon: "\u{1FAB5}", label: "Supplies" }
};
// run-only powers; they fade when the Descent ends
const BOONS = [
  { id: "cinder", name: "Cinder Edge", icon: "\u{1F525}", desc: "Your party deals 20% more damage." },
  { id: "stoneskin", name: "Stoneskin", icon: "\u{1FAA8}", desc: "Your party takes 15% less damage." },
  { id: "firstlight", name: "First Light", icon: "\u{1F305}", desc: "The first hit of every battle is a critical (2x)." },
  { id: "thirst", name: "Void Thirst", icon: "\u{1F300}", desc: "Basic attacks restore 1 MP." },
  { id: "secondwind", name: "Second Wind", icon: "\u{1F343}", desc: "Heal 15% HP after every battle." },
  { id: "luck", name: "Scavenger's Luck", icon: "\u{1F3FA}", desc: "+50% relics and gold from battles." },
  { id: "shieldash", name: "Shield of Ash", icon: "\u{1F6E1}\u{FE0F}", desc: "Every battle starts with Shield Wall raised." },
  { id: "tireless", name: "Tireless", icon: "\u{1F97E}", desc: "Floors cost half stamina." },
  { id: "embercleave", name: "Ember Cleave", icon: "\u{1FA93}", desc: "Cleave costs 2 less MP and hits at full power.", hero: "commander" },
  { id: "echomend", name: "Echoing Mend", icon: "\u{2728}", desc: "Mend heals the whole party.", hero: "mystic" },
  { id: "instinct", name: "Killer Instinct", icon: "\u{1F5E1}\u{FE0F}", desc: "Ambush always deals 3x.", hero: "rogue" }
];
const MARKET = [
  { id: "draught", name: "Healing Draught", icon: "\u{1F9EA}", cost: 20 },
  { id: "rations", name: "Trail Rations", icon: "\u{1F356}", cost: 15, desc: "Restore 40 stamina" },
  { id: "ember", name: "Ember of Return", icon: "\u{1FAB6}", cost: 45 },
  { id: "restore", name: "Full Restore", icon: "\u{1F496}", cost: 35, desc: "Heal and revive the whole party" },
  { id: "boon", name: "Bottled Echo", icon: "\u{2728}", cost: 55, desc: "Choose a new Echo" }
];
// random choice events: run() returns a string, or { text, fight, boon }
const EVENTS = [
  {
    id: "cage", icon: "\u{26D3}\u{FE0F}", title: "The Hanging Cage",
    text: "A scavenger hangs in a rusted cage, begging to be let down. Its belt clinks with coin.",
    choices: [
      { label: "Free it", hint: "It might be grateful. It might not.", run: () => Math.random() < 0.6
          ? (addRunLoot({ gold: rand(25, 40) }), "It presses a pouch of coin into your hands and scurries off into the dark.")
          : { text: "The cage was bait. Its friends drop from the ceiling!", fight: ["scavenger", "scavenger", "scavenger"] } },
      { label: "Leave it", hint: "Safe.", run: () => "Its cries follow you down the tunnel." }
    ]
  },
  {
    id: "well", icon: "\u{1F573}\u{FE0F}", title: "The Whispering Well",
    text: "Black water whispers your names. Something old is listening.",
    choices: [
      { label: "Drink", hint: "An Echo, or a curse.", run: () => Math.random() < 0.5
          ? { text: "The water burns cold, and something answers.", boon: true }
          : (hurtParty(0.2), "The water is poison. Every hero loses 20% of their health.") },
      { label: "Toss in 15 gold", hint: "Heal the party 30%.", req: () => (D.loot.gold || 0) >= 15, run: () => {
          D.loot.gold -= 15;
          healParty(0.3);
          return "The whispers soften. Your wounds close a little.";
        } },
      { label: "Walk away", hint: "Safe.", run: () => "You leave the voices behind." }
    ]
  },
  {
    id: "cart", icon: "\u{1F6D2}", title: "Collapsed Supply Cart",
    text: "A cart lies crushed under fallen stone. Crates spill out from beneath it.",
    choices: [
      { label: "Dig it out", hint: "-15 stamina, gain supplies and relics.", run: () => {
          spendStamina(15);
          addRunLoot({ stone: rand(40, 70), wood: rand(30, 60), relics: rand(1, 3) });
          return "It takes a while, but the crates are full.";
        } },
      { label: "Move on", hint: "Save your strength.", run: () => "You step around the wreck." }
    ]
  },
  {
    id: "stranger", icon: "\u{1F9D9}", title: "The Pale Stranger",
    text: "A figure in grey sits by a dying fire. \"Relics,\" she says. \"I trade in relics.\"",
    choices: [
      { label: "Trade 4 relics", hint: "Receive an Ember of Return.", req: () => (D.loot.relics || 0) >= 4, run: () => {
          D.loot.relics -= 4;
          S.items.ember = (S.items.ember || 0) + 1;
          return "She hands you a warm ember. \"You'll need it,\" she says.";
        } },
      { label: "Sit by the fire", hint: "+25 stamina.", run: () => {
          gainStamina(25);
          return "She says nothing. The warmth is enough.";
        } },
      { label: "Refuse", hint: "Safe.", run: () => "She shrugs and returns to the fire." }
    ]
  },
  {
    id: "vein", icon: "\u{1F48E}", title: "Ember Vein",
    text: "A seam of glowing essence runs through the wall, pulsing like a heartbeat.",
    choices: [
      { label: "Mine it", hint: "-10 stamina, gain essence.", run: () => {
          spendStamina(10);
          addRunLoot({ essence: rand(15, 30) });
          return "The essence comes loose in warm, bright shards.";
        } },
      { label: "Rest by its warmth", hint: "+20 stamina, restore MP.", run: () => {
          gainStamina(20);
          W.party.forEach((i) => W.hpState[i] && (W.hpState[i].mp = heroBattleStats(S.heroes[i]).mp));
          return "The glow fills you with quiet strength.";
        } }
    ]
  },
  {
    id: "dice", icon: "\u{1F3B2}", title: "The Bone Dice",
    text: "A skeleton slumps over a table, dice still in its hand. A note reads: \"Double or nothing.\"",
    choices: [
      { label: "Wager 20 gold", hint: "50/50.", req: () => (D.loot.gold || 0) >= 20, run: () => {
          if (Math.random() < 0.5) {
            D.loot.gold += 20;
            return "The bones land in your favor. You win 20 gold.";
          }
          D.loot.gold -= 20;
          return "The bones turn against you. You lose 20 gold.";
        } },
      { label: "Leave the dead in peace", hint: "Safe.", run: () => "Some games aren't worth playing." }
    ]
  }
];
let D = null;
const hasBoon = (id) => !!(B && B.boons && B.boons.includes(id));
const runHas = (id) => !!(D && D.boons.includes(id));
function rank(id) {
  return (S.research && S.research[id]) || 0;
}
function packKeep() {
  return [0.5, 0.65, 0.8][rank("packkeep")];
}
const shuffled = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
function pickWeighted(pool) {
  const total = pool.reduce((a, [, w]) => a + w, 0);
  let r = Math.random() * total;
  for (const [k, w] of pool) if ((r -= w) <= 0) return k;
  return pool[0][0];
}
// ---------- node generation ----------
function combatNode(f, used) {
  const left = Object.keys(REWARD_TYPES).filter((r) => !used.has("r:" + r));
  const reward = left[rand(0, left.length - 1)] || "gold";
  used.add("r:" + reward);
  return { type: f >= 3 && Math.random() < 0.3 ? "elite" : "combat", reward };
}
function generateFloors(cfg) {
  const floors = [];
  const n = 2 + rank("doors");
  let marketPlaced = false;
  for (let f = 0; f < cfg.floors; f++) {
    const used = new Set();
    if (f === cfg.floors - 1) {
      floors.push([{ type: "boss" }]);
      continue;
    }
    if (f === cfg.floors - 2) {
      // a breather before the boss
      const alt = marketPlaced ? "shrine" : pickWeighted([["shrine", 1], ["market", 1]]);
      const fl = [{ type: "rest" }, { type: alt }];
      if (n > 2) fl.push(combatNode(f, used));
      floors.push(shuffled(fl));
      continue;
    }
    const fl = [combatNode(f, used)]; // every floor offers at least one fight
    while (fl.length < n) {
      const pool = [
        ["combat", 30],
        ["event", 22],
        ["shrine", 16],
        ["rest", f >= 2 ? 12 : 0],
        ["market", !marketPlaced && f >= 2 ? 10 : 0]
      ].filter(([k, w]) => w > 0 && (k === "combat" || !used.has(k)));
      const t = pickWeighted(pool);
      if (t === "combat") fl.push(combatNode(f, used));
      else {
        used.add(t);
        if (t === "market") marketPlaced = true;
        fl.push({ type: t });
      }
    }
    floors.push(shuffled(fl));
  }
  return floors;
}
// ---------- run state helpers ----------
function addRunLoot(loot) {
  Object.entries(loot).forEach(([k, v]) => {
    if (v > 0) D.loot[k] = (D.loot[k] || 0) + v;
  });
}
function spendStamina(n) {
  if (runHas("tireless")) n = Math.ceil(n / 2);
  D.stamina.cur = Math.max(0, D.stamina.cur - n);
}
function gainStamina(n) {
  D.stamina.cur = Math.min(D.stamina.max, D.stamina.cur + n);
}
// low stamina weakens the party's attacks
function fatigue() {
  return D.stamina.cur <= 0 ? 0.75 : D.stamina.cur < 30 ? 0.9 : 1;
}
function healParty(frac, revive) {
  W.party.forEach((i) => {
    const st = heroBattleStats(S.heroes[i]);
    const cur = W.hpState[i] || { hp: st.hp, mp: st.mp };
    if (cur.hp <= 0) cur.hp = revive ? Math.round(st.hp * revive) : 0;
    else cur.hp = Math.min(st.hp, cur.hp + Math.round(st.hp * frac));
    W.hpState[i] = cur;
  });
}
function hurtParty(frac) {
  W.party.forEach((i) => {
    const st = heroBattleStats(S.heroes[i]);
    const cur = W.hpState[i];
    if (cur && cur.hp > 0) cur.hp = Math.max(1, cur.hp - Math.round(st.hp * frac));
  });
}
function nodeReward(node) {
  const f = D.floor;
  const mult = node.type === "elite" ? 2 : 1;
  const luck = runHas("luck") ? 1.5 : 1;
  const r = {};
  if (node.reward === "relics") r.relics = Math.round((rand(2, 4) + Math.floor(f / 2)) * mult * luck);
  else if (node.reward === "essence") r.essence = (rand(8, 15) + f * 2) * mult;
  else if (node.reward === "gold") r.gold = Math.round((rand(14, 22) + f * 3) * mult * luck);
  else if (node.reward === "supplies") {
    r.stone = (rand(30, 60) + f * 8) * mult;
    r.wood = (rand(25, 50) + f * 6) * mult;
  }
  if (node.reward !== "gold") r.gold = Math.round((rand(4, 8) + f) * luck); // every fight drops a little
  return r;
}
// extraction pays a bonus for every floor survived
function extractBonus() {
  return 1 + 0.08 * D.floor;
}
function extractPreview() {
  const b = extractBonus();
  const out = {};
  Object.entries(D.loot).forEach(([k, v]) => v > 0 && (out[k] = Math.round(v * b)));
  return out;
}
// ---------- start / flow ----------
function startDescent(regionId) {
  hideChoice();
  const cfg = DESCENTS[regionId];
  D = {
    region: regionId, cfg,
    floors: generateFloors(cfg), floor: 0, chosen: {},
    node: null, phase: "intro",
    stamina: { cur: 100, max: 100 },
    loot: {}, boons: [], log: "",
    marketUsed: false, seenEvents: [], tithe: "blood"
  };
  S.runLoot = D.loot; // banked at the fall rate if the page closes mid-run
  if (rank("attune")) D.boons.push(randomBoons(1)[0].id);
  $("descent").classList.add("open");
  renderDescent();
}
function beginDescent() {
  D.phase = "choose";
  renderDescent();
}
function advance(text) {
  D.floor++;
  D.log = text;
  D.phase = "choose";
  D.node = null;
  recordDepth();
  saveGame(true);
  renderDescent();
}
function chooseNode(i) {
  if (!D || D.phase !== "choose") return;
  const node = D.floors[D.floor][i];
  if (!node) return;
  D.node = node;
  D.chosen[D.floor] = i;
  spendStamina(NODE_TYPES[node.type].stamina);
  if (node.type === "combat" || node.type === "elite" || node.type === "boss" || node.type === "guardian") {
    enterCombat(node);
    return;
  }
  if (node.type === "rest") D.phase = "rest";
  else if (node.type === "shrine") {
    D.boonChoices = randomBoons(3);
    D.phase = "shrine";
  } else if (node.type === "event") {
    const pool = EVENTS.filter((e) => !D.seenEvents.includes(e.id));
    D.event = (pool.length ? pool : EVENTS)[rand(0, (pool.length || EVENTS.length) - 1)];
    D.seenEvents.push(D.event.id);
    D.phase = "event";
  } else if (node.type === "market") {
    D.marketUsed = true;
    D.phase = "market";
  }
  renderDescent();
}
// ---------- combat transition ----------
function enterCombat(node, groupOverride, introOverride) {
  const cfg = D.cfg;
  const boss = node.type === "boss";
  const guard = node.type === "guardian";
  const list = node.type === "elite" ? cfg.elite : cfg.normal;
  const group = groupOverride || (boss ? cfg.boss : guard ? GUARDIANS[Math.floor(D.floor / 5) % GUARDIANS.length] : list[rand(0, list.length - 1)]);
  const reward = boss ? { ...cfg.bossReward } : guard ? guardianReward(D.floor) : nodeReward(node);
  D.lastReward = reward;
  D.phase = "combat";
  renderDescent();
  retrigger($("w-flash"), "on");
  setTimeout(() => {
    startBattle({
      kind: "descent",
      title: boss ? "BOSS" : guard ? `DEPTH ${D.floor + 1}` : `FLOOR ${D.floor + 1}`,
      name: boss ? cfg.bossName || "the Warden" : guard ? "the Depth Guardian" : "the chamber",
      group,
      reward,
      lootTo: D.loot,
      xpReward: Math.round((boss ? 60 : guard ? 40 + D.floor * 4 : 8 + D.floor * 2 + (node.type === "elite" ? 10 : 0)) * (cfg.scale || 1)),
      bonusItem: boss || (guard && Math.floor(D.floor / 5) % 2 === 0) ? "ember" : null,
      party: W.party,
      hpState: W.hpState,
      scale: depthScale(D.floor),
      scene: cfg.scene,
      fatigue: fatigue(),
      boons: D.boons,
      intro: introOverride || (boss ? cfg.bossIntro || "The Ash Warden rises, wreathed in cinders!" : guard ? `A Depth Guardian blocks the stair at depth ${D.floor + 1}!` : node.type === "elite" ? "An elite guard bars the way!" : "Shapes move in the dark chamber..."),
      onClose: descentBattleClosed
    });
  }, 450);
}
function descentBattleClosed(won) {
  if (!won) {
    descentWiped();
    return;
  }
  if (runHas("secondwind")) healParty(0.15);
  if (D.node.type === "boss") {
    descentVictory();
    return;
  }
  if (D.node.type === "guardian") {
    // a guardian falls: an Echo, some breath back, and the next five floors open
    gainStamina(30);
    D.floors.push(...endlessChunk());
    const unheard = LORE.map((_, i) => i).filter((i) => !S.lore.includes(i));
    if (unheard.length && Math.random() < 0.5) {
      S.lore.push(unheard[0]);
      updateQuestProgress("lore", S.lore.length);
      setTimeout(() => showLore(unheard[0]), 900);
    }
    D.floor++;
    recordDepth();
    D.floor--;
    D.boonChoices = randomBoons(3);
    D.boonFrom = "guardian";
    D.log = `\u{1F441}\u{FE0F} The Depth Guardian falls. You recover ${lootString(D.lastReward)}, and an Echo stirs.`;
    D.phase = "boon";
    saveGame(true);
    renderDescent();
    return;
  }
  const icon = D.node.reward ? REWARD_TYPES[D.node.reward].icon : NODE_TYPES[D.node.type].icon;
  advance(`${icon} Floor ${D.floor + 1} cleared. You recover ${lootString(D.lastReward)}.`);
}
// ---------- non-combat nodes ----------
function restAction(kind) {
  if (kind === "rest") {
    healParty(0.4, 0.25);
    advance("\u{1F525} You rest by the fire. Wounds close, and the fallen stir.");
  } else {
    gainStamina(50);
    W.party.forEach((i) => W.hpState[i] && (W.hpState[i].mp = heroBattleStats(S.heroes[i]).mp));
    advance("\u{1F9D8} You sit in silence. Stamina and MP return.");
  }
}
function shrineCost() {
  return 20 + D.floor * 4;
}
function setTithe(t) {
  D.tithe = t;
  renderDescent();
}
function shrinePick(id) {
  const b = BOONS.find((x) => x.id === id);
  if (!b) return;
  if (D.tithe === "gold") {
    if ((D.loot.gold || 0) < shrineCost()) return;
    D.loot.gold -= shrineCost();
  } else hurtParty(0.15);
  D.boons.push(id);
  burst(window.innerWidth / 2, window.innerHeight / 2, "#8a9fe8", 24);
  advance(`${b.icon} The shrine accepts your offering. ${b.name} echoes through you.`);
}
function eventChoice(i) {
  const c = D.event.choices[i];
  if (!c || (c.req && !c.req())) return;
  const res = c.run();
  if (res && res.fight) {
    D.node = { type: "combat", reward: "gold" };
    D.log = res.text;
    enterCombat(D.node, res.fight, res.text);
    return;
  }
  if (res && res.boon) {
    D.boonChoices = randomBoons(3);
    D.boonFrom = "event";
    D.log = res.text;
    D.phase = "boon";
    renderDescent();
    return;
  }
  advance(`${D.event.icon} ${res}`);
}
function buyMarket(id) {
  const item = MARKET.find((m) => m.id === id);
  if (!item || (D.loot.gold || 0) < item.cost) return;
  D.loot.gold -= item.cost;
  if (id === "draught" || id === "ember") S.items[id] = (S.items[id] || 0) + 1;
  else if (id === "rations") gainStamina(40);
  else if (id === "restore") healParty(1, 1);
  else if (id === "boon") {
    D.boonChoices = randomBoons(3);
    D.boonFrom = "market";
    D.phase = "boon";
  }
  worldToast(`${item.icon} Bought ${item.name}.`);
  renderDescent();
}
function leaveMarket() {
  advance("\u{1F4B0} The trader melts back into the dark.");
}
// ---------- echoes ----------
function randomBoons(n) {
  const party = W.party.map((i) => S.heroes[i].id);
  const pool = BOONS.filter((b) => !(D && D.boons.includes(b.id)) && (!b.hero || party.includes(b.hero)));
  const out = [];
  while (out.length < n && pool.length) out.push(pool.splice(rand(0, pool.length - 1), 1)[0]);
  return out;
}
function pickBoon(id) {
  const b = BOONS.find((x) => x.id === id);
  if (b && !D.boons.includes(id)) D.boons.push(id);
  burst(window.innerWidth / 2, window.innerHeight / 2, "#8a9fe8", 24);
  if (D.boonFrom === "market") {
    D.boonFrom = null;
    D.phase = "market";
    worldToast(`${b.icon} ${b.name} echoes through you.`);
    renderDescent();
    return;
  }
  D.boonFrom = null;
  advance(`${b ? b.icon + " " + b.name + " echoes through you." : "The echo fades."}`);
}
// ---------- endings: extract, victory, wipe ----------
function extractDescent(goHome = true) {
  const bonus = Math.round((extractBonus() - 1) * 100);
  const got = extractPreview();
  addToPack(got);
  recordDepth();
  S.runLoot = null;
  $("descent").classList.remove("open");
  const floor = D.floor;
  D = null;
  if (goHome) {
    notify(`Extracted after ${floor} floors${bonus ? ` (+${bonus}% depth bonus)` : ""}.`, "success", 4500);
    leaveWorld();
  } else {
    worldToast(`You climb back into the wastes carrying ${lootString(got) || "nothing"}. Your Echoes fade.`);
    updateWorldUI();
  }
}
function descentVictory() {
  D.floor++;
  S.descents = (S.descents || 0) + 1;
  S.bestDepth = Math.max(S.bestDepth || 0, D.floor);
  D.phase = "won";
  renderDescent();
  burst(window.innerWidth / 2, window.innerHeight / 2, "#c8a97e", 40);
  const unheard = LORE.map((_, i) => i).filter((i) => !S.lore.includes(i));
  if (unheard.length) {
    S.lore.push(unheard[0]);
    updateQuestProgress("lore", S.lore.length);
    setTimeout(() => showLore(unheard[0]), 900);
  }
  saveGame(true);
}
function descentWiped() {
  const keep = packKeep();
  Object.keys(W.pack).forEach((k) => (W.pack[k] = Math.floor(W.pack[k] * keep)));
  Object.entries(D.loot).forEach(([k, v]) => {
    const kept = Math.floor(v * keep);
    if (kept > 0) W.pack[k] = (W.pack[k] || 0) + kept;
  });
  recordDepth();
  S.runLoot = null;
  $("descent").classList.remove("open");
  D = null;
  leaveWorld(true);
}
function leaveDescent() {
  // turning back before the first floor costs nothing
  S.runLoot = null;
  $("descent").classList.remove("open");
  D = null;
  worldToast("You climb back up into the wastes.");
  updateWorldUI();
}
// ---------- drawing ----------
function descentPartyHtml() {
  return W.party
    .map((i) => {
      const h = S.heroes[i];
      const st = heroBattleStats(h);
      const cur = W.hpState[i] || { hp: st.hp, mp: st.mp };
      const p = Math.max(0, (cur.hp / st.hp) * 100);
      return `<div class="w-hero ${cur.hp <= 0 ? "down" : ""}" title="${h.name}: ${Math.max(0, Math.ceil(cur.hp))}/${st.hp} HP"><span>${heroSprite(h)}</span><div class="w-hp"><i style="width:${p}%;background:${hpColor(p)}"></i></div></div>`;
    })
    .join("");
}
function nodeIcon(n) {
  return n.type === "combat" && n.reward ? REWARD_TYPES[n.reward].icon : NODE_TYPES[n.type].icon;
}
function routeHtml() {
  // the Endless Descent only shows the current set of five floors
  const from = D.endless && D.floor >= 8 ? 8 + Math.floor((D.floor - 8) / 5) * 5 : 0;
  const to = D.endless && D.floor >= 8 ? from + 5 : 8;
  return D.floors
    .map((fl, f) => {
      if (f < from || f >= to) return "";
      const cls = f < D.floor ? "done" : f === D.floor && D.phase !== "won" ? "next" : "";
      return `<div class="rt-floor ${cls} ${fl[0].type === "boss" || fl[0].type === "guardian" ? "boss" : ""}">${fl
        .map((n, i) => `<span class="${f < D.floor ? (D.chosen[f] === i ? "picked" : "skip") : ""}" title="${NODE_TYPES[n.type].label}">${nodeIcon(n)}</span>`)
        .join("")}</div>`;
    })
    .join("");
}
function nodeCard(n, i) {
  const t = NODE_TYPES[n.type];
  const isFight = n.type === "combat" || n.type === "elite";
  const label = isFight ? REWARD_TYPES[n.reward].label : t.label;
  const sub = n.type === "elite" ? `${REWARD_TYPES[n.reward].icon} ${t.sub}` : isFight ? "battle" : t.sub;
  let cost = t.stamina;
  if (cost && runHas("tireless")) cost = Math.ceil(cost / 2);
  return `<button class="d-door ${n.type}" onclick="chooseNode(${i})">
    <span class="d-door-ic">${n.type === "elite" ? "\u{2620}\u{FE0F}" : nodeIcon(n)}</span>
    <span class="d-door-label">${label}</span>
    <span class="d-door-sub">${sub}</span>
    ${cost ? `<span class="d-door-cost">-${cost} stamina</span>` : ""}
  </button>`;
}
function renderDescent() {
  if (!D) return;
  $("d-title").textContent = `Descent: ${D.cfg.name}`;
  $("d-party").innerHTML = descentPartyHtml();
  $("d-depth").innerHTML = routeHtml();
  $("d-boons").innerHTML = D.boons.length
    ? D.boons.map((id) => BOONS.find((x) => x.id === id)).map((b) => `<span class="d-boon" title="${b.desc}">${b.icon} ${b.name}</span>`).join("")
    : `<span class="d-none">No Echoes yet</span>`;
  const sp = (D.stamina.cur / D.stamina.max) * 100;
  const fat = fatigue();
  $("d-pack").innerHTML = `
    <div class="d-stam"><b>Stamina</b><div class="d-stam-bar"><i style="width:${sp}%;background:${sp > 30 ? "#e8c07c" : sp > 0 ? "#e8907c" : "#e87c7c"}"></i></div><span>${D.stamina.cur}/${D.stamina.max}${fat < 1 ? ` <em>${fat === 0.75 ? "Exhausted" : "Weary"}: -${Math.round((1 - fat) * 100)}% dmg</em>` : ""}</span></div>
    <div><b>Run loot</b> ${lootString(D.loot) || "nothing yet"}</div>`;
  const st = $("d-stage");
  const floorLabel = D.endless ? `Endless  -  depth ${D.floor + 1}${S.bestEndless ? `  (record ${S.bestEndless})` : ""}` : `Floor ${Math.min(D.floor + 1, D.floors.length)} of ${D.floors.length}`;
  let html = "";
  if (D.phase === "intro") {
    html = `<div class="d-big">\u{1F573}\u{FE0F}</div><div class="d-kicker">The way down</div>
      <p class="d-text">${D.cfg.intro}</p>
      <p class="d-sub">Extracting pays +8% per floor survived. A wipe keeps only ${Math.round(packKeep() * 100)}%.</p>
      <div class="d-actions"><button class="d-btn gold" onclick="beginDescent()">Descend</button><button class="d-btn" onclick="leaveDescent()">Turn back</button></div>`;
  } else if (D.phase === "choose") {
    const here = D.floors[D.floor][0].type;
    const boss = here === "boss", guard = here === "guardian";
    const prev = extractPreview();
    html = `${D.log ? `<p class="d-log">${D.log}</p>` : ""}
      <div class="d-kicker">${floorLabel}${boss ? "  -  the bottom" : ""}</div>
      <p class="d-text">${boss ? `${(D.cfg.bossName || "the Warden").replace(/^the/, "The")}'s hall lies ahead. There's no coming back up mid-fight.` : guard ? "A Depth Guardian holds the stair. Beat it for an Echo and five more floors." : "Choose your path."}</p>
      <div class="d-doors">${D.floors[D.floor].map(nodeCard).join("")}</div>
      ${D.floor > 0
        ? `<div class="d-extract">
            <button class="d-btn" onclick="extractDescent()">\u{1FA9C} Extract now<small>Bank ${lootString(prev) || "nothing"}${D.floor ? `  (+${Math.round((extractBonus() - 1) * 100)}%)` : ""}</small></button>
            <span class="d-sub">Push on and a wipe keeps only ${Math.round(packKeep() * 100)}%.</span>
          </div>`
        : ""}`;
  } else if (D.phase === "combat") {
    html = `<div class="d-big pulse">\u{2694}\u{FE0F}</div><div class="d-kicker">${floorLabel}</div>`;
  } else if (D.phase === "rest") {
    html = `<div class="d-big">\u{1F525}</div><div class="d-kicker">${floorLabel}: Rest Site</div>
      <p class="d-text">A sheltered alcove with the embers of an old fire. You have time for one thing.</p>
      <div class="d-choices">
        <button class="d-btn gold" onclick="restAction('rest')">\u{1F6CF}\u{FE0F} Rest<small>Heal 40% HP, revive the fallen at 25%</small></button>
        <button class="d-btn" onclick="restAction('meditate')">\u{1F9D8} Meditate<small>+50 stamina, restore all MP</small></button>
      </div>`;
  } else if (D.phase === "shrine") {
    const cost = shrineCost();
    const canGold = (D.loot.gold || 0) >= cost;
    if (D.tithe === "gold" && !canGold) D.tithe = "blood";
    html = `<div class="d-big">\u{1F3DB}\u{FE0F}</div><div class="d-kicker">${floorLabel}: Shrine</div>
      <p class="d-text">An altar older than the city. It will grant one Echo, for a price.</p>
      <div class="d-tithe">
        <button class="${D.tithe === "blood" ? "on" : ""}" onclick="setTithe('blood')">\u{1FA78} Blood<small>Every hero loses 15% HP</small></button>
        <button class="${D.tithe === "gold" ? "on" : ""}" ${canGold ? "" : "disabled"} onclick="setTithe('gold')">\u{1FA99} ${cost} Gold<small>From your run loot</small></button>
      </div>
      <div class="d-boon-pick">${(D.boonChoices || []).map((b) => `<button class="d-boon-card" onclick="shrinePick('${b.id}')"><span class="ic">${b.icon}</span><b>${b.name}</b><span>${b.desc}</span></button>`).join("")}</div>
      <div class="d-actions"><button class="d-btn ghost" onclick="advance('You leave the shrine untouched.')">Leave it</button></div>`;
  } else if (D.phase === "event") {
    const e = D.event;
    html = `<div class="d-big">${e.icon}</div><div class="d-kicker">${floorLabel}: ${e.title}</div>
      <p class="d-text">${e.text}</p>
      <div class="d-choices">${e.choices
        .map((c, i) => `<button class="d-btn ${i === 0 ? "gold" : ""}" ${c.req && !c.req() ? "disabled" : ""} onclick="eventChoice(${i})">${c.label}<small>${c.hint}</small></button>`)
        .join("")}</div>`;
  } else if (D.phase === "market") {
    const gold = D.loot.gold || 0;
    html = `<div class="d-big">\u{1F4B0}</div><div class="d-kicker">${floorLabel}: Shadow Market</div>
      <p class="d-text">A hooded trader waits in the dark. Gold only.</p>
      <div class="d-market">${MARKET.map(
        (m) => `<button class="d-offer" ${gold < m.cost ? "disabled" : ""} onclick="buyMarket('${m.id}')"><span>${m.icon} ${m.name}</span><em>${m.desc || ""}</em><b>\u{1FA99} ${m.cost}</b></button>`
      ).join("")}</div>
      <div class="d-actions"><button class="d-btn gold" onclick="leaveMarket()">Move on (\u{1FA99} ${gold})</button></div>`;
  } else if (D.phase === "boon") {
    html = `${D.log ? `<p class="d-log">${D.log}</p>` : ""}<div class="d-kicker">An echo stirs</div>
      <p class="d-text">Choose one.</p>
      <div class="d-boon-pick">${(D.boonChoices || []).map((b) => `<button class="d-boon-card" onclick="pickBoon('${b.id}')"><span class="ic">${b.icon}</span><b>${b.name}</b><span>${b.desc}</span></button>`).join("") ||
        `<p class="d-sub">No new echoes remain.</p><div class="d-actions"><button class="d-btn gold" onclick="pickBoon(null)">Go on</button></div>`}</div>`;
  } else if (D.phase === "won") {
    const prev = extractPreview();
    html = `<div class="d-big">\u{1F3C6}</div><div class="d-kicker">The Warden falls</div>
      <p class="d-text">The depths go quiet. Everything you carry is yours, with a +${Math.round((extractBonus() - 1) * 100)}% depth bonus.</p>
      <p class="d-sub">${lootString(prev)}</p>
      <div class="d-choices">
        <button class="d-btn gold" onclick="extractDescent(true)">\u{1F3F0} Return to the city<small>Bank it all now</small></button>
        <button class="d-btn" onclick="extractDescent(false)">\u{1F5FA}\u{FE0F} Climb back to the wastes<small>Carry it in your pack</small></button>
        <button class="d-btn void" onclick="goDeeper()">\u{1F573}\u{FE0F} Go deeper: the Endless Descent<small>Floors never stop. Harder each time, richer each time.${S.bestEndless ? ` Record: depth ${S.bestEndless}.` : ""}</small></button>
      </div>`;
  }
  st.innerHTML = html;
}
// ---------- the region entrance: ruins or a Descent ----------
function showChoice(regionId) {
  const r = regionById(regionId);
  $("w-choice").innerHTML = `
    <div class="w-choice-box">
      <div class="d-kicker">${r.icon} ${r.name}</div>
      ${WORLD_MAPS[regionId] ? `<button class="d-btn" onclick="hideChoice();enterDungeon('${regionId}')">\u{1F3DA}\u{FE0F} Explore the ruins<small>Chests, a locked door, the Warden's lair</small></button>` : ""}
      ${DESCENTS[regionId] ? `<button class="d-btn gold" onclick="startDescent('${regionId}')">\u{1F573}\u{FE0F} Begin a Descent<small>${DESCENTS[regionId].floors} floors, extract any time, repeatable. Beat the boss to go Endless.${S.bestEndless ? ` Endless record: depth ${S.bestEndless}.` : ""}</small></button>` : ""}
      <button class="d-btn ghost" onclick="hideChoice()">Not now</button>
    </div>`;
  $("w-choice").classList.add("open");
  W.busy = true;
}
function hideChoice() {
  $("w-choice").classList.remove("open");
  W.busy = false;
}
// ---------- the Void Archive's research (permanent) ----------
const RESEARCH = [
  { id: "hardy", name: "Hardened Bodies", icon: "\u{2764}\u{FE0F}", tier: 1, max: 3, relics: [5, 10, 18], essence: [20, 40, 80], desc: "+8% max HP per rank" },
  { id: "wells", name: "Deep Wells", icon: "\u{1F539}", tier: 1, max: 3, relics: [4, 8, 15], essence: [15, 30, 60], desc: "+2 max MP per rank" },
  { id: "medicine", name: "Field Medicine", icon: "\u{1F9EA}", tier: 1, max: 1, relics: [6], essence: [25], desc: "Healing Draughts restore 55% HP" },
  { id: "doors", name: "The Third Door", icon: "\u{1F6AA}", tier: 2, max: 1, relics: [12], essence: [60], desc: "Descents offer three paths instead of two" },
  { id: "packkeep", name: "Ash-Walker's Pack", icon: "\u{1F392}", tier: 2, max: 2, relics: [10, 20], essence: [40, 90], desc: "Keep 65%, then 80%, of your pack when you fall" },
  { id: "attune", name: "Echo Attunement", icon: "\u{1F441}\u{FE0F}", tier: 3, max: 1, relics: [20], essence: [120], desc: "Begin every Descent with a random Echo" }
];
function researchHtml() {
  const lv = S.buildings.archive.level;
  return `<div class="section-label" style="margin-top:14px">Research  -  permanent upgrades</div>
    ${RESEARCH.map((r) => {
      const cur = rank(r.id);
      const maxed = cur >= r.max;
      const locked = lv < r.tier;
      const cr = r.relics[cur], ce = r.essence[cur];
      const afford = !maxed && S.res.relics >= cr && S.res.essence >= ce;
      return `<div class="rs-row ${locked ? "locked" : ""}">
        <div class="rs-ic">${r.icon}</div>
        <div class="rs-info">
          <div class="rs-name">${r.name} <span class="rs-pips">${Array.from({ length: r.max }, (_, i) => `<i class="${i < cur ? "on" : ""}"></i>`).join("")}</span></div>
          <div class="rs-desc">${r.desc}</div>
        </div>
        ${locked
          ? `<span class="rs-lock">Archive Lv ${r.tier}</span>`
          : maxed
          ? `<span class="rs-max">MAX</span>`
          : `<button class="rs-buy" ${afford ? "" : "disabled"} onclick="buyResearch('${r.id}')">\u{1F3FA}${cr} \u{2697}\u{FE0F}${ce}</button>`}
      </div>`;
    }).join("")}`;
}
function buyResearch(id) {
  const r = RESEARCH.find((x) => x.id === id);
  const cur = rank(id);
  if (!r || cur >= r.max || S.buildings.archive.level < r.tier) return;
  const cr = r.relics[cur], ce = r.essence[cur];
  if (S.res.relics < cr || S.res.essence < ce) return;
  S.res.relics -= cr;
  S.res.essence -= ce;
  S.research[id] = cur + 1;
  notify(`Research complete: ${r.name} ${cur + 1}/${r.max}`, "success");
  burstAt($("modal-box"), "#8a9fe8", 22);
  saveGame(true);
  openBuildingModal("archive");
}
// ==============================================================
// PIXEL SPRITES  -  original 16x20 hero art, stored as text rows
// one character per pixel; '.' is transparent, 'k' is the outline
// ==============================================================
const SPRITE_PAL = {"k": "#140f0c", "S": "#b0bac8", "s": "#788292", "W": "#e8eef6", "d": "#464e5c", "r": "#962820", "R": "#601814", "g": "#c8a97e", "h": "#6a4a2a", "b": "#dce4ee", "f": "#deb08c", "p": "#3a2e62", "P": "#5c4c92", "x": "#1a1428", "e": "#aac8ff", "v": "#8a9fe8", "V": "#e8f0ff", "C": "#4a3c30", "c": "#28221e", "l": "#6e4c2c", "E": "#ffd27a", "o": "#e87850"};
const SPRITES = {
  commander: [
    ".....krRrk..kWk.",
    ".....krrrk..kbk.",
    "....kSSSSSk.kbk.",
    "....kSWWWSk.kbk.",
    "....kSSSSSk.kbk.",
    "....kdkdkdk.kbk.",
    "....kSsssSk.kbk.",
    "....kSsssSk.kbk.",
    "kkkkkkdddkkkkbk.",
    "ggggWSrrrSWWkbk.",
    "gRRgWsrrrsWWkbk.",
    "gRRgSsrrrsSssbk.",
    "ggggSsRRRsSsgggk",
    "gRRgSsrrrsSsfhk.",
    "gRRggggggggkkhk.",
    "ggggkssrssk..k..",
    "kkkkksskssk.....",
    "....ksskssk.....",
    "....ksskssk.....",
    "...kdddkdddk....",
  ],
  mystic: [
    "......kpk.......",
    ".....kpppk......",
    "....kPppppk.....",
    "....kPppppk.....",
    "....kPxxxpk..k..",
    "....kPefepk.kvk.",
    "....kPfffpkkVvvk",
    "....kPfffpkkvVvk",
    "....kPppppkkvvvk",
    "...kkPpPppkkkvk.",
    "..kppPpPppppfk..",
    "..kppPpPppppk...",
    "..kppvvvvvpk....",
    "..kppppPpppk....",
    "..kfPppPpppk....",
    "..kPpppPppppk...",
    "..kPpppPppppk...",
    "..kPpppPppppk...",
    ".kPppppPpppppk..",
    ".kPvvvvvvvvvpk..",
  ],
  rogue: [
    ".......k........",
    ".....kkCkk......",
    "....kCCCCCk.....",
    "....kCCCCCCk....",
    "....kCcccCCk....",
    "....kCEcECCk....",
    "....kCcccCCk....",
    "...kkCoooCkk.k..",
    "..kCcCoooocCkWk.",
    ".kocclllllcckbk.",
    "kEkcclllllcckbk.",
    "koEcchhhhhcclbk.",
    "kffcclllllcclbk.",
    "kffcclllllcclbk.",
    ".kkcchhhhhccfhk.",
    "..kcccckcccckk..",
    "..kcccckcccck...",
    "..kcccckcckk....",
    "...kkcckcck.....",
    "...khhhkhhhk....",
  ],
};
// original enemy pixel art (same text format as the hero sprites)
const ENEMY_PAL = {"k": "#140f0c", "K": "#08060a", "W": "#f0f4fa", "Y": "#ffec8c", "m": "#362c3a", "n": "#504258", "d": "#463e46", "E": "#ffd27a", "o": "#e87850", "O": "#f0965a", "r": "#b03a28", "R": "#78241a", "B": "#3c281e", "v": "#6e78d2", "V": "#b4c4ff", "P": "#8c6ec8", "g": "#70726e", "G": "#969892", "q": "#284650", "Q": "#78e6f0", "M": "#50783c", "S": "#969ca8", "h": "#6a4a2a", "y": "#c8a97e", "a": "#5a5450", "A": "#827a72", "z": "#302826", "b": "#c8beb4", "x": "#241634", "X": "#3e285a"};
const ENEMY_SPRITES = {
  scavenger: [
    "..................",
    "..................",
    "........k....k....",
    ".....kkknkkkknkk..",
    "...kknnnnnnnnnYnk.",
    "..kmnnnnnnnnnYWYk.",
    "..knnnnnnnnnYYYKYk",
    ".kmmnnnnnnnnnYYYk.",
    ".kmmmnnnnnnnnnYnk.",
    ".kmmmmmmnmmmmnmk..",
    ".kmmmmmmmmmmmmmk..",
    ".kmmmdkkdkkdkmk...",
    ".kmkmdkkdkkdkk....",
    "..k.kdkkdkkdk.....",
    "...kdk.kddkkdk....",
  ],
  imp: [
    "......kEk.......",
    "...k.koook.k....",
    "..kBkOOOOOkBk...",
    "...kBkkrkkBk....",
    "....krrOrrk.....",
    ".k.krOOOOOrk....",
    "kRkkOOEOOEOk....",
    ".kRRrOOOOOrrk...",
    "kRRRrrrOkkrk.kk.",
    ".kRRrrrrrrrkkEok",
    ".kRRkrrrrrkrrok.",
    "k.kkkrOOOrkrrk..",
    "okkkrrOOOrrkk...",
    "krrkkrOOOrk.....",
    ".kk.krrrrrk.....",
    "....kRRrkRRk....",
    "....kRRkkRRk....",
  ],
  wisp: [
    ".......kVkk.....",
    ".....kkVVkvk....",
    "....kvVVVVVvk...",
    "...kvVVVVVVVvk..",
    "...kWVVVVVVVvk..",
    "...kVVVVVVVVVk..",
    "..kvvVKVVVKVvvk.",
    "...kvVKVPVKVvk..",
    "...kvPPPPPPPvk..",
    "...kPPPPKPPPPkk.",
    "..kkvPPPPPPPvvvk",
    ".kvvvvvvPvvvVkk.",
    "..kvvvvvvvvvk...",
    "..kvvvvvvvvvk...",
    "...kkvvvvvvvk...",
    ".....kvvvvvvvk..",
    "......kvvvvvk...",
    "......kvvvvvk...",
    ".......kkkkk....",
  ],
  guardian: [
    ".......kkkkkkkk.......",
    "......kggggggggk......",
    "......kgGGGGGMgk......",
    "......kgGGGGGGgk......",
    "......kggqqQqggk......",
    "......kggqqqqggk......",
    "......kggggggggk......",
    ".kkkkkkggggggggkkkkkk.",
    "kggggggggggggggggggggk",
    "kggggMGGGGGGGGGGGggggk",
    "kgMggGGGGGGGGGGGGggggk",
    "kggggggggqqqqggGgggggk",
    "kgggggGggqQQqggggggMgk",
    "kggggggggqQQqgggMggggk",
    "kggggggggqqqqggggggggk",
    "GGGGgggMggggggggggGGGG",
    "GGGGggggggggggggggGGGG",
    "GGGGkkggggkkggggkkGGGG",
    "GGGGkkggggkkggggkkGGGG",
    "kkkk.kggggkkggggk.kkkk",
    ".....kggggkkggggk.....",
    "....kGGGGGkkGGGGGk....",
    "....kGGGGGkkGGGGGk....",
  ],
  warlord: [
    "........k..........k...kkkkk",
    ".......kBk........kBk.kWWWWW",
    "........kBkkkkkkkkBk..kWWWWW",
    "........kBrrrrrrrrBk..kSShSS",
    ".........krRRRRRRrk...kSShSS",
    ".........krRRRRRRrk...kSShSS",
    ".........krrErrErrk...kSShSS",
    ".........krrrrrrrrk...kSShSS",
    ".........krrkkkkrrk...kSShSS",
    "...kkkkkkkrrWrrWrrkkkkkkkhSS",
    "..kSSSSddddddddddddddSSSShSk",
    "..kSSSSdSSSSSSSSSSSSdSSSShk.",
    "..kSSSSdSSSSSSSSSSSSdSSSShk.",
    "..kSSSSddddrrrrrrddddSSSShk.",
    "..krrrdddddrRRRRrdddddrrrhk.",
    "..krrrdddddrRRRRrdddddrrrhk.",
    ".kkrrrdddddrRRRRrdddddrrrhk.",
    "kokrrrdddddrRRRRrdddddrrrhk.",
    ".kErrrdddddrrrrrrdddddrrrhk.",
    "..krrrhhhhhhhyyhhhhhhhkkkhk.",
    "...kkkhhhhhhhhhhhhhhhhk.khk.",
    "......kkddddkkkkddddkk..khk.",
    ".......kddddk..kddddk...khk.",
    ".......kddddk..kddddk....k..",
    ".......kddddk..kddddk.......",
    ".......kddddk..kddddk.......",
    ".......kkkkk....kkkkk.......",
    ".......kkkkk....kkkkk.......",
    "............................",
  ],
  warden: [
    ".....k.....kok......kbbk",
    "....kEk..kkaakkk....kbbk",
    ".....k..kaaaaaaak...kbbk",
    "........kaAAAAAak...kbbk",
    "........kaaaaaaak...kobk",
    "...k....kaKEKEKak...kbbk",
    "..kok...kaKKKKKak...kbbk",
    "...k....kaaaaaaak...kbbk",
    "....kkkkkaaaaaaakkkkkbbk",
    "...kAAAaaaaaaaaaaaAAAbok",
    "...kAAAAAAAAAAAAAAAAAbbk",
    "...kAAAAAAAAAAAAAAAAAbbk",
    "...kAAAaazzzzzzzaaAAAbbk",
    "..kkaaaaazzzzzzzaaaaaEbk",
    ".kokaaaaazzzEzzzaaaaabbk",
    "..kkaaaaazzozozzaaaaabbk",
    "...kaaaaazzzzzzzaaaaabbk",
    "...kaaaaazzzzzzzaaaaahhh",
    "...kaaaaaaaaaaaaaaaaahhk",
    "...kazzzhhhhhhhhhzzzkhhk",
    "....kzzzzzzzzzzzzzzzkhhk",
    "....kzzzzzzzzzzzzzzzkkk.",
    "....kzzzzzzzzzzzzzzzk...",
    "....kzzzzzzzzzzzzzzzk...",
    "....kzzzzzzzzzzzzzzzk...",
    "....kzzzzzzzzzzzzzzzk...",
    ".....kzkzkzkzkzkzkzk....",
    "....kzkzkzkzkzkzkzkzk...",
    ".....k.k.k.k.k.k.k.k....",
  ],
  horror: [
    "................................",
    ".............k..k..k............",
    "............kPkkXkkPk...........",
    "...........kkXXXXXXXkk..........",
    ".........kkxXXXXXXXXXxkk........",
    "........kxxxXXXXXXXXXxxxk..k....",
    ".......kxPXXXXXXXXXXXXXxxkkPk...",
    "......kxPYPXXXXXWXXXXXXPxxkk....",
    ".....kxxXPXXXWWWVWWWXXYPPxxk....",
    "....kkxXXXXXWWVVVKVWWXXPXXxk....",
    "...kvxxXXXXXWVVWKKKVWXXXXXxxk...",
    "....kxxXXXXXWVVVKKKVWXXXXXxxk...",
    "....kxXXXXXWVVVKKKKKVWXXXXXxvk..",
    "...kxxxXXXXXWVVVKKKVWXXXXXxxxk..",
    "....kxxXXXXXWVVVKKKVWXXXXXxxk...",
    "....kPxXXXXXWWVVVKVWWXPXXXxxk...",
    "....kxxxXXPXXWWWVWWWXPPPXxxxk...",
    ".....kxxxPPPXXXXWXXXXXPXxxxk....",
    ".....kxxxxPXXXXXXXXXXXXxxxxk....",
    "......kxxxxxXXXXXXXXXxxxxxk.....",
    "......kkxxxxxxxxXxxxxxxxxkkk....",
    ".....kxxkxxxxxxxxxxxxxxxkkxxk...",
    "......kxxkkxxxxxxxxxxxxxkkxxk...",
    "......kxxkkxxkxxxkxxkkxxkkkxxkk.",
    ".....kxxkxxkkxxkk.kxxkkkxxkkkxxk",
    "....kkxxxxk.kxxk..kxxk..kxxkkxxk",
    "...kxkkkxk..kxk....kxkk.kxk.kxk.",
    "..kxk.kxk....kxk....kkxk.kxkkxk.",
    "..kxk.kxk.....kxk....kxk.kxkxk..",
    "..kxk..kxk....kxk....kxkkxkkxk..",
  ],
};
// ==============================================================
// HD SPRITES  -  higher-detail redraws (32x40, 2 pixels per unit)
// these replace the 16x20 versions; `dens` keeps them the same
// on-screen size while showing twice the detail
// ==============================================================
const HD_SPRITES = {
  commander: {
    dens: 2,
    pal: {"k": "#120c10", "0": "#141620", "1": "#2a3040", "2": "#4a5468", "3": "#7a8498", "4": "#b4bccb", "5": "#ecf2fa", "r": "#3a0e0c", "R": "#6a1a16", "q": "#9a2a20", "Q": "#c8463a", "g": "#5a3a18", "G": "#9a6a2a", "h": "#d4a860", "H": "#f4dca0", "L": "#4a3020", "l": "#6e4a2e", "B": "#9aa8b8", "W": "#ecf2fa", "b": "#647080"},
    rows: [
      "............kkQQQk.......kWBk...",
      "..........kkqqqqqQk......kWBk...",
      ".........kqqRRRRRqqk.....kWBk...",
      "........kRRRRR4H2RRk.....kWbk...",
      ".......kRRrrk44h222k.....kWbk...",
      "......kRrrkk444h3321k....kWbk...",
      "......kRrkk4444h33311k...kWbk...",
      ".....kRrk.k4444h33331k...kWbk...",
      ".....krrk.k4444h33331k...kWbk...",
      ".....krk..k2333h33331k...kWbk...",
      "......k...k00kk00kk00k...kWbk...",
      "..........k2111111111k...kWbk...",
      "...........k23222222k....kWbk...",
      ".....kkkkkkk22322222kkkkkkWbk...",
      "....k454433333222233454333Wbk...",
      "....k433322222222222433222Wbk...",
      "kkkkk444333214433333444332Wbk...",
      "HHHHGGGGG22144354332433221Wbk...",
      "HQQ5qqRRG32143354322443321Wbk...",
      "HQQQhqRRG2143334422244321kWbk...",
      "HQQQGqRRG1133334422214321kWbk...",
      "HQQQGqRRGr33333442221432kkWbk...",
      "HQhGHGGRGr33332442211421rkWbk...",
      "HqqqGqRRGr33322442111321rkWBk...",
      "HqqqGqRRGrLLLLLhHLLLL321rkWBkkk.",
      "HqqqGqRRGrLLLLLHHLLLL32GHHHHHHGk",
      "HqqqGqRRGrkkGQRqqRRgkr3332LLkkk.",
      "HqqqGqRRGrkkGQRQqRRgkr2222lLk...",
      "HRRRGRRRGrkkGqRqqRRgkr2222LLk...",
      "kHRRRRRGrrkkGqRqRRRgkrrrrrLLk...",
      ".kHRRRGrrrkkGqRQRRRgkrrrrGHGGk..",
      "..kHRGrrrrkkGqRRRRrgkrrrrGGGGk..",
      "...kGrrrrrk4GqRRRRrg2rrrrrrkk...",
      "...kGrrrrrk4GRRRRRRg2rrrrrrk....",
      "...k0rrrrrk4GGGGGGGG2rrrrrrk....",
      "...k0rrrrrk3321kk3321rrrrrrk....",
      "...k0rrrrrk3221kk3221rrrrrrk....",
      "....kkkkkkk3211kk3211kkkkkk.....",
      ".........k22221kk22221k.........",
      ".........k11111kk11111k.........",
    ]
  },
  mystic: {
    dens: 2,
    pal: {"k": "#120c16", "1": "#1a1430", "2": "#2e2452", "3": "#463a7a", "4": "#6656a8", "T": "#a8b8e8", "t": "#6e7cb4", "V": "#8a9fe8", "v": "#4a5ac8", "W": "#f0f6ff", "f": "#e8d8cc", "F": "#b09888", "x": "#0e0a18", "e": "#8cbeff", "E": "#dcf0ff"},
    rows: [
      "................................",
      "...........k....................",
      "..........k3kkkkkk..............",
      ".........k2k433333k....k........",
      "..........k44333332k..kvk.......",
      ".........k4433333322k.kk........",
      "........k444334444444kvk..kkkk..",
      "........k443343xxxxx22k..kvvvvkk",
      "........k43333xxxxxxxk..kvVVVVvv",
      "........k43333xxExxExk.kvVWWWVVv",
      "........k33333xxexxexk.kvWWWWWVv",
      "........k33333xFfffFxk.kvVWWWWVv",
      "........k33333xFfffFxk.kvVVWWVVv",
      "........k333322FFFFF1kk.kvVVVVvk",
      ".......k33333222xxx2222k.kvvvvk.",
      ".......k333332222222111k.kffkkvk",
      "......kk333332222222111kkkfFk.k.",
      ".....k44222222222222111k222k....",
      ".....k4433244133T3322232222k....",
      ".....k4432244v33t3223332222k....",
      ".....k4332244V33t322333222k.....",
      ".....k4332143133t3223332kk......",
      ".....k4322143133t322332k........",
      ".....k43221vvvvvvvvvv22k........",
      ".....k332213v133t2222222k.......",
      ".....k3321131133t2222221k.......",
      ".....k3221133133t2222221k.......",
      ".....kTTTTT33132t22222211k......",
      ".....k43fF133132T22222111k......",
      ".....k43F3333122t22222111k......",
      ".....k3333333122t22221111k......",
      "....k33333333122t222211111k.....",
      "....k33333132122t222211111k.....",
      "....k33333332122T222111111k.....",
      "...k333333322122t2221111111k....",
      "...k333333222122t2221111111k....",
      "...k333332122122t2221111111k....",
      "...k33333T22T22Tt2T11T11T11k....",
      "..k33332T2TT2TT2TT1TT1TT1111k...",
      "...kkkkkk111111111111111kkkk....",
    ]
  },
  rogue: {
    dens: 2,
    pal: {"k": "#140c0a", "c": "#1a1412", "C": "#2e2420", "d": "#4a3a30", "D": "#6a5444", "l": "#3a2414", "L": "#5a3820", "m": "#7e5232", "M": "#a8723e", "h": "#c8a97e", "H": "#f4dca0", "f": "#d2a078", "F": "#a07050", "B": "#a0aab8", "W": "#ecf2fa", "x": "#0c0808", "o": "#a83a1e", "O": "#e0603a", "Y": "#ff9a5a", "E": "#ffe08c"},
    rows: [
      "................................",
      "...............kk...............",
      ".............kkddkk.............",
      ".........kk.kDdddddk............",
      "........kCCkDDDDDDDDk...........",
      ".......kCCkDDdddddCCCk..........",
      "......kCCkDDddddxxxxCCk.........",
      ".......kkkDDdddxxxxxxCk.........",
      ".........kDddddxExxExCk.........",
      ".........kdddddxoxxoxck.........",
      ".........kdddddxxxxxxck.........",
      ".........kddddOYYYYYOOk.........",
      "..........kdddOOOoOOYOk.........",
      ".......kkkkkdOoOooooookkk.......",
      "......kDDDDDOCCCCCcdddCCCk......",
      ".....kDDDDDoMMMCCmmLLCCCCk......",
      ".....kDDDDollMMmmmLLLCCCCk......",
      ".....kDDDoDMllmmmmLLmLLCCk......",
      ".....kDdooCMMllmmLLLmLLCCk......",
      "....kDDoOCCMMmllmLLLmLLCCCk.....",
      "....kDDdYOCMMmmllLLLmLLCCCk.....",
      "....kDDOECCMmmmmHhLlmLLCCCk.....",
      "....kDDOEOCmmmmLLlllmLLCCCk.....",
      "....kDDoOoCmmmmLLLllmLLCCck.....",
      "...kDDffffCmmmLLLLllmLhhhhck....",
      "...kDDFfffdmmmLLLlllllfffcck....",
      "...kDDdddddlllllllLLLCffFcck....",
      "...kDddddddddCCCCdLmLCCWBcck....",
      "..kddddddddddCCCCdLLLCCWBccck...",
      "..kddddddddddCCCCdLLLCCWBccck...",
      "..kddddddddddCCCCdCCCCcWBccck...",
      "..kddddddddCdCCCCdCCCccWBccck...",
      "..kdddddddCCdCCCCdCCcccWBccck...",
      ".kdddddddCCCdCCCCdCCccccBcccck..",
      ".kddddddCCCCdCCCCdCCccccBcccck..",
      ".kddddddCCCmmmlCCmmmlcccBcccck..",
      ".kddddkCCkClLllkClLllkcckcckck..",
      "..kkkckkckkllllkkllllkkckkckk...",
      ".....k..k.kllllkkllllk.k..k.....",
      "...........kkkk..kkkk...........",
    ]
  }
};
// ==============================================================
// SPRITE LIGHTING  -  HD-2D style pass applied to any sprite
//   rim light on edges facing the scene's light, core shadow on the
//   far side, ambient occlusion at the feet, ambient color tint,
//   plus a separate glow layer for bright/emissive pixels (bloom)
// ==============================================================
const SPRITE_LIGHTS = {
  wastes: { dir: [1, -0.7], rim: [255, 196, 120], amb: [70, 50, 90], ambAmt: 0.16, shadow: 0.28 },
  ruins: { dir: [-1, -0.6], rim: [255, 168, 88], amb: [60, 40, 30], ambAmt: 0.18, shadow: 0.32 },
  rift: { dir: [0.4, -1], rim: [196, 176, 255], amb: [60, 40, 110], ambAmt: 0.2, shadow: 0.3 },
  map: { dir: [-1, -0.8], rim: [255, 200, 140], amb: [40, 40, 80], ambAmt: 0.14, shadow: 0.25 },
  forge: { dir: [-0.8, -0.7], rim: [255, 184, 112], amb: [60, 40, 90], ambAmt: 0.12, shadow: 0.26 }
};
const litCache = {};
function litCanvas(id, lightKey, flip = false) {
  const key = `${id}|${lightKey}|${flip ? 1 : 0}`;
  if (litCache[key]) return litCache[key];
  const base = spriteCanvas(id);
  const L = SPRITE_LIGHTS[lightKey];
  if (!base || !L) return base;
  const w = base.width, h = base.height;
  const src = base.getContext("2d").getImageData(0, 0, w, h);
  const out = new ImageData(new Uint8ClampedArray(src.data), w, h);
  const glow = new ImageData(w, h);
  const A = (x, y) => (x < 0 || y < 0 || x >= w || y >= h ? 0 : src.data[(y * w + x) * 4 + 3]);
  const lum = (i) => (src.data[i] * 0.3 + src.data[i + 1] * 0.59 + src.data[i + 2] * 0.11) / 255;
  // step toward the light, in sprite space (mirrored when the sprite is drawn flipped)
  const dx = (flip ? -1 : 1) * L.dir[0], dy = L.dir[1];
  const sx = Math.abs(dx) > 0.3 ? Math.sign(dx) : 0, sy = Math.abs(dy) > 0.3 ? Math.sign(dy) : 0;
  const thick = Math.max(1, Math.round(w / 32)); // HD sprites get a 2px rim
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (!src.data[i + 3]) continue;
      let r = src.data[i], g = src.data[i + 1], b = src.data[i + 2];
      const outline = lum(i) < 0.11;
      // ambient color tint
      r = r * (1 - L.ambAmt) + (r * L.amb[0] / 110) * L.ambAmt;
      g = g * (1 - L.ambAmt) + (g * L.amb[1] / 110) * L.ambAmt;
      b = b * (1 - L.ambAmt) + (b * L.amb[2] / 110) * L.ambAmt;
      // rim: open space toward the light within 1-2 px
      // open space along the light's horizontal, vertical or diagonal step
      const open = (k) => (sx && !A(x + sx * k, y)) || (sy && !A(x, y + sy * k)) || !A(x + sx * k, y + sy * k);
      let rim = 0;
      for (let k = 1; k <= thick + 1; k++)
        if (open(k)) {
          rim = k <= thick ? 0.6 : 0.28;
          break;
        }
      if (outline) rim *= 0.55;
      if (rim) {
        r += (L.rim[0] - r) * rim;
        g += (L.rim[1] - g) * rim;
        b += (L.rim[2] - b) * rim;
        const gi = i;
        glow.data[gi] = L.rim[0];
        glow.data[gi + 1] = L.rim[1];
        glow.data[gi + 2] = L.rim[2];
        glow.data[gi + 3] = Math.round(255 * rim * 0.9);
      } else if (!outline) {
        // core shadow on the side facing away from the light
        for (let k = 1; k <= thick + 1; k++)
          if ((sx && !A(x - sx * k, y)) || (sy && !A(x, y - sy * k)) || !A(x - sx * k, y - sy * k)) {
            const f = 1 - L.shadow * (k <= thick ? 1 : 0.5);
            r *= f; g *= f; b *= f;
            break;
          }
      }
      // ambient occlusion toward the feet
      const foot = (y / h - 0.82) / 0.18;
      if (foot > 0) {
        const f = 1 - 0.32 * Math.min(1, foot);
        r *= f; g *= f; b *= f;
      }
      out.data[i] = r; out.data[i + 1] = g; out.data[i + 2] = b;
      // bright pixels (eyes, orbs, embers, blade gleam) feed the bloom layer
      if (!rim && lum(i) > 0.8) {
        glow.data[i] = src.data[i]; glow.data[i + 1] = src.data[i + 1]; glow.data[i + 2] = src.data[i + 2]; glow.data[i + 3] = 200;
      }
    }
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  c.getContext("2d").putImageData(out, 0, 0);
  c.dens = base.dens;
  const gc = document.createElement("canvas");
  gc.width = w;
  gc.height = h;
  gc.getContext("2d").putImageData(glow, 0, 0);
  c.glow = gc;
  return (litCache[key] = c);
}
const litURLs = {};
function litURL(id, lightKey, flip = false, glow = false) {
  const key = `${id}|${lightKey}|${flip ? 1 : 0}|${glow ? 1 : 0}`;
  if (!litURLs[key]) {
    const c = litCanvas(id, lightKey, flip);
    litURLs[key] = (glow ? c.glow : c).toDataURL();
  }
  return litURLs[key];
}
const spriteCache = {};
function spriteCanvas(id) {
  if (spriteCache[id]) return spriteCache[id];
  const hd = HD_SPRITES[id];
  const rows = hd ? hd.rows : SPRITES[id] || ENEMY_SPRITES[id];
  if (!rows) return null;
  const pal = hd ? hd.pal : SPRITES[id] ? SPRITE_PAL : ENEMY_PAL;
  const c = document.createElement("canvas");
  c.dens = hd ? hd.dens : 1; // pixels per art unit
  c.width = rows[0].length;
  c.height = rows.length;
  const ctx = c.getContext("2d");
  rows.forEach((r, y) =>
    [...r].forEach((ch, x) => {
      if (ch === "." || !pal[ch]) return;
      ctx.fillStyle = pal[ch];
      ctx.fillRect(x, y, 1, 1);
    })
  );
  return (spriteCache[id] = c);
}
const spriteURLs = {};
function spriteURL(id) {
  if (!spriteURLs[id]) spriteURLs[id] = spriteCanvas(id).toDataURL();
  return spriteURLs[id];
}
// HTML for a hero's portrait: pixel sprite if one exists, emoji otherwise
function heroSprite(h, cls = "") {
  return SPRITES[h.id] ? `<img class="px ${cls}" src="${spriteURL(h.id)}" alt="${h.name}">` : h.icon;
}
// draws a standing sprite on a canvas, feet at (cx, footY)
function drawHeroSprite(ctx, id, cx, footY, height, alpha = 1, flip = false, light = null) {
  const img = litCanvas(id, W && W.open && W.map !== "world" ? "ruins" : "map", flip);
  if (!img) return false;
  const w = (height * img.width) / img.height;
  ctx.save();
  ctx.globalAlpha = alpha;
  if (light) {
    const g = ctx.createRadialGradient(cx, footY - height * 0.4, 0, cx, footY - height * 0.4, height * 1.6);
    g.addColorStop(0, light);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(cx - height * 1.6, footY - height * 2, height * 3.2, height * 3.2);
  }
  ctx.fillStyle = "rgba(0,0,0,0.45)";
  ctx.beginPath();
  ctx.ellipse(cx, footY, w * 0.45, w * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.imageSmoothingEnabled = false;
  ctx.translate(cx, footY - height);
  if (flip) ctx.scale(-1, 1);
    
  // --- BLOOM: a soft glow around the sprite ---
  // Drawn normally (source-over) so the sprite stays solid; the shadow
  // becomes the glow. Amber in the open wastes, cyan in the ruins.
  // shadowBlur ignores the canvas transform, so it's scaled by DPR to
  // look the same on a phone (DPR 3) as on a desktop (DPR 1).
  const inWastes = W && W.open && W.map === "world";
  const dpr = Math.abs(ctx.getTransform().a) || 1; // abs: a flipped sprite has a negative scale
  ctx.shadowBlur = (inWastes ? 18 : 12) * dpr;
  ctx.shadowColor = inWastes ? "rgba(255, 140, 40, 0.8)" : "rgba(0, 240, 255, 0.7)";
  ctx.drawImage(img, -w / 2, 0, w, height);
  ctx.restore();
  return true;
}
// ==============================================================
// CHAMPION FORGING  -  create the hero who leads the party
// ==============================================================
const CLASS_INFO = {
  commander: { title: "Iron Commander", role: "Vanguard. Shields the party and cleaves through enemy lines." },
  mystic: { title: "Pale Mystic", role: "Void-caster. Tears through armor and mends the wounded." },
  rogue: { title: "Ember Rogue", role: "Assassin. Strikes first and finishes the wounded." }
};
const ORIGINS = [
  { id: "ashborn", name: "Ashborn", desc: "Raised in the cinder fields. Hard to kill.", mods: { vit: 2 }, perk: "+12 max HP" },
  { id: "scribe", name: "Archive Scribe", desc: "Grew up among forbidden pages.", mods: { mp: 4, atk: 1 }, perk: "+4 MP, +1 ATK" },
  { id: "drifter", name: "Wasteland Drifter", desc: "Never stays in one place for long.", mods: { spd: 2 }, perk: "+2 SPD" },
  { id: "noble", name: "Fallen Noble", desc: "Lost a house, kept the training, and some coin.", mods: { def: 1 }, gold: 100, perk: "+1 DEF, +100 gold" }
];
const ATTRS = [
  { id: "str", label: "Might", stat: "atk", desc: "+1 ATK" },
  { id: "fort", label: "Fortitude", stat: "def", desc: "+1 DEF" },
  { id: "agi", label: "Agility", stat: "spd", desc: "+1 SPD: acts sooner, travels faster" },
  { id: "vit", label: "Vitality", stat: "vit", desc: "+6 max HP" }
];
const FORGE_POINTS = 5, FORGE_MAX = 3;
let F = null;
function openForge() {
  F = { cls: "commander", origin: "ashborn", alloc: { str: 0, fort: 0, agi: 0, vit: 0 }, name: "" };
  $("forge-name").value = "";
  $("forge").classList.add("open");
  renderForge();
  startForgeEmbers();
}
function pointsLeft() {
  return FORGE_POINTS - Object.values(F.alloc).reduce((a, b) => a + b, 0);
}
function forgeClass(id) {
  F.cls = id;
  retrigger($("forge-sprite"), "pop");
  renderForge();
}
function forgeOrigin(id) {
  F.origin = id;
  renderForge();
}
function forgeAlloc(id, d) {
  const v = F.alloc[id] + d;
  if (v < 0 || v > FORGE_MAX || (d > 0 && pointsLeft() <= 0)) return;
  F.alloc[id] = v;
  renderForge();
}
// the chosen hero with the origin and attribute points applied
function forgePreview() {
  const base = S.heroes.find((h) => h.id === F.cls);
  const m = ORIGINS.find((o) => o.id === F.origin).mods;
  const h = { ...base };
  h.atk += F.alloc.str + (m.atk || 0);
  h.def += F.alloc.fort + (m.def || 0);
  h.spd += F.alloc.agi + (m.spd || 0);
  h.vit = (h.vit || 0) + F.alloc.vit + (m.vit || 0);
  h.mpBonus = (h.mpBonus || 0) + (m.mp || 0);
  return { base, h };
}
function statRow(label, now, was, max) {
  const add = now - was;
  return `<div class="fg-stat"><span>${label}</span>
    <div class="fg-bar"><i style="width:${Math.min(100, (was / max) * 100)}%"></i><b style="width:${Math.min(100 - (was / max) * 100, (add / max) * 100)}%"></b></div>
    <em>${now}${add ? `<small>+${add}</small>` : ""}</em></div>`;
}
function renderForge() {
  const { base, h } = forgePreview();
  const info = CLASS_INFO[F.cls];
  const bs = heroBattleStats(base), ns = heroBattleStats(h);
  $("forge-sprite").src = litURL(F.cls, "forge");
  $("forge-title").textContent = ($("forge-name").value.trim() || base.name).toUpperCase();
  $("forge-role").textContent = `${info.title}  -  ${ORIGINS.find((o) => o.id === F.origin).name}`;
  $("fg-classes").innerHTML = Object.entries(CLASS_INFO)
    .map(([id, c]) => `<button class="fg-card ${F.cls === id ? "on" : ""}" onclick="forgeClass('${id}')">
      <img class="px" src="${spriteURL(id)}" alt=""><b>${c.title}</b><span>${c.role}</span></button>`)
    .join("");
  $("fg-origins").innerHTML = ORIGINS.map(
    (o) => `<button class="fg-origin ${F.origin === o.id ? "on" : ""}" onclick="forgeOrigin('${o.id}')"><b>${o.name}</b><span>${o.desc}</span><em>${o.perk}</em></button>`
  ).join("");
  $("fg-points").textContent = `${pointsLeft()} of ${FORGE_POINTS} points left`;
  $("fg-attrs").innerHTML = ATTRS.map(
    (a) => `<div class="fg-attr"><div><b>${a.label}</b><span>${a.desc}</span></div>
      <button onclick="forgeAlloc('${a.id}',-1)" ${F.alloc[a.id] ? "" : "disabled"}>-</button>
      <i>${"\u{25C6}".repeat(F.alloc[a.id])}${"\u{25C7}".repeat(FORGE_MAX - F.alloc[a.id])}</i>
      <button onclick="forgeAlloc('${a.id}',1)" ${F.alloc[a.id] < FORGE_MAX && pointsLeft() > 0 ? "" : "disabled"}>+</button></div>`
  ).join("");
  $("fg-stats").innerHTML =
    statRow("HP", ns.hp, bs.hp, 180) +
    statRow("MP", ns.mp, bs.mp, 40) +
    statRow("ATK", h.atk, base.atk, 24) +
    statRow("DEF", h.def, base.def, 18) +
    statRow("SPD", h.spd, base.spd, 18);
  const at = ATTACK_TYPE[F.cls];
  $("fg-skills").innerHTML =
    `<div class="fg-skill"><b>${DMG_TYPES[at].icon} Attack</b><span>Basic strikes deal ${DMG_TYPES[at].name} damage. Surge adds extra hits.</span></div>` +
    SKILLS[F.cls].map((s) => `<div class="fg-skill"><b>${s.type ? DMG_TYPES[s.type].icon + " " : ""}${s.name}<em>${s.mp} MP</em></b><span>${s.desc}</span></div>`).join("") +
    `<div class="fg-skill trait"><b>\u{1F9ED} ${HERO_SPECIALTY[F.cls].label}</b><span>On expeditions: ${HERO_SPECIALTY[F.cls].desc}</span></div>`;
}
function confirmForge() {
  const { h } = forgePreview();
  const i = S.heroes.findIndex((x) => x.id === F.cls);
  const o = ORIGINS.find((x) => x.id === F.origin);
  const name = $("forge-name").value.trim().slice(0, 18);
  Object.assign(S.heroes[i], { atk: h.atk, def: h.def, spd: h.spd, vit: h.vit, mpBonus: h.mpBonus, origin: o.id, champion: true });
  if (name) S.heroes[i].name = name;
  if (o.gold) S.res.gold = (S.res.gold || 0) + o.gold;
  S.champion = { hi: i, origin: o.id };
  S.selectedHero = i;
  saveGame(true);
  burstAt($("forge-sprite"), "#e8c07c", 40);
  setTimeout(() => {
    $("forge").classList.remove("open");
    F = null;
    renderPanel();
    notify(`${S.heroes[i].name} rises to lead the party.`, "reward", 4500);
    if (!S.dailyClaimed) setTimeout(() => openDaily(), 800);
  }, 700);
}
// the champion always walks first
function championFirst(list) {
  const c = S.champion ? S.champion.hi : -1;
  return [...list].sort((a, b) => (b === c) - (a === c));
}
// embers drifting around the portrait
const forgeClock = frameClock();
let forgeLoopOn = false;
function startForgeEmbers() {
  if (forgeLoopOn) return; // never run two ember loops at once
  forgeLoopOn = true;
  forgeClock.reset();
  const cv = $("forge-embers");
  const ctx = cv.getContext("2d");
  const parts = Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), v: 0.002 + Math.random() * 0.004, r: Math.random() * 1.6 + 0.5, w: Math.random() * 6 }));
  (function loop(now) {
    if (!F) {
      forgeLoopOn = false;
      return;
    }
    requestAnimationFrame(loop);
    const dt = forgeClock(now || performance.now());
    // only resize when the box actually changed size; setting width every
    // frame reallocated the whole canvas 60+ times a second
    const cw = cv.clientWidth, ch = cv.clientHeight;
    if (cv.width !== cw || cv.height !== ch) {
      cv.width = cw;
      cv.height = ch;
    } else ctx.clearRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = "lighter";
    parts.forEach((p) => {
      p.y -= p.v * dt;
      p.w += 0.03 * dt;
      if (p.y < -0.05) {
        p.y = 1.05;
        p.x = Math.random();
      }
      const a = Math.min(1, p.y * 1.5) * (0.5 + Math.sin(p.w * 3) * 0.3);
      ctx.fillStyle = `rgba(255,${150 + Math.round(Math.sin(p.w) * 40)},90,${a})`;
      ctx.beginPath();
      ctx.arc((p.x + Math.sin(p.w) * 0.02) * cv.width, p.y * cv.height, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
  })();
}
// ==============================================================
// DAILY REWARD
// ==============================================================
function openDaily() {
  const grid = $("reward-grid");
  grid.innerHTML = DAILY_REWARDS.map((r, i) => {
    const day = i + 1;
    const status = day < S.dailyDay ? "claimed" : day === S.dailyDay ? "today" : "future";
    return `<div class="reward-day ${status}">
      <div style="font-size:20px;margin-bottom:4px">${r.icon}</div>
      <div style="font-family:'Cinzel',serif;font-size:8px;color:#666;margin-bottom:2px">DAY ${day}</div>
      <div style="font-size:9px;color:${status === "today" ? "var(--gold)" : "#666"};line-height:1.3">${r.label}</div>
      ${status === "claimed" ? '<div style="font-size:10px;color:var(--green)">\u{2713}</div>' : ""}
    </div>`;
  }).join("");
  $("daily").classList.add("open");
}
function closeDaily() {
  $("daily").classList.remove("open");
}
// the daily reward resets each calendar day
function refreshDaily() {
  if (S.dailyClaimed && S.dailyDate !== new Date().toDateString()) S.dailyClaimed = false;
}
function claimDaily() {
  refreshDaily();
  if (S.dailyClaimed) {
    notify("Already claimed today. Come back tomorrow!", "error");
    closeDaily();
    return;
  }
  const reward = DAILY_REWARDS[S.dailyDay - 1];
  if (!reward) return;
  burstAt(document.querySelector(".reward-day.today"), "#c8a97e", 26);
  Object.entries(reward.grant).forEach(([k, v]) => {
    if (k === "heroXp") addHeroXP(S.selectedHero, 100);
    else if (S.res[k] !== undefined) S.res[k] += v;
  });
  S.dailyClaimed = true;
  S.dailyDate = new Date().toDateString();
  if (S.dailyDay < 7) S.dailyDay++;
  notify(`Day ${S.dailyDay - 1} reward: ${reward.label}`, "reward");
  setTimeout(closeDaily, 450);
  renderBmap();
}
// ==============================================================
// NOTIFICATIONS
// ==============================================================
const NOTIF_ICON = { success: "\u{2713}", error: "\u{2715}", info: "\u{25C6}", reward: "\u{2726}" };
function notify(msg, type = "info", ms = 3000) {
  const stack = $("notif-stack");
  const el = document.createElement("div");
  el.className = `notif ${type}`;
  const ic = document.createElement("span");
  ic.className = "n-ic";
  ic.textContent = NOTIF_ICON[type] || "\u{25C6}";
  el.appendChild(ic);
  el.appendChild(document.createTextNode(msg));
  stack.appendChild(el);
  setTimeout(() => el.classList.add("out"), ms - 400);
  setTimeout(() => el.remove(), ms);
}
// ==============================================================
// SAVE / LOAD  (autosaves every 30s and when you leave the page)
// ==============================================================
const SAVE_KEY = "echoes-save-v1"; // the key name stays; the version lives inside the save
const BACKUP_KEY = SAVE_KEY + "-backup"; // last save that loaded cleanly
const SAVE_VERSION = 1;
// One step per version, run in order on older saves (v0 = saves made
// before versioning). Add a step when a field is RENAMED or changes
// MEANING; brand-new fields need nothing, they're filled from defaults.
//   e.g. MIGRATIONS[2] = (d) => { d.gear = d.items.gear || []; };
const MIGRATIONS = {
  1: (d) => {} // stamps unversioned saves as v1
};
let saveWarned = false;
function saveGame(silent) {
  try {
    S.lastSeen = Date.now();
    S.v = SAVE_VERSION;
    const { awayReport, awayTrip, selectedBuilding, ...data } = S;
    const json = JSON.stringify(data);
    localStorage.setItem(SAVE_KEY, json);
    // read it back: catches writes that silently didn't land
    if (localStorage.getItem(SAVE_KEY) !== json) throw new Error("save did not verify");
    if (saveWarned) {
      saveWarned = false;
      notify("Saving works again. Progress is safe.", "success");
    }
    if (!silent) notify("Game saved!", "success");
    return true;
  } catch (e) {
    if (!silent) notify("Save failed in this browser.", "error");
    else if (!saveWarned) {
      // autosave failures used to be invisible; warn once until it recovers
      saveWarned = true;
      notify("Progress isn't saving: browser storage is blocked or full.", "error", 7000);
    }
    return false;
  }
}
// returns the parsed save, null if there is none, or false if it's damaged
function readSave(key) {
  let raw;
  try {
    raw = localStorage.getItem(key);
  } catch (e) {
    return null; // storage blocked entirely
  }
  if (!raw) return null;
  try {
    const d = JSON.parse(raw);
    return d && typeof d === "object" && Array.isArray(d.heroes) && d.buildings && d.res ? d : false;
  } catch (e) {
    return false;
  }
}
const isPlain = (o) => o && typeof o === "object" && !Array.isArray(o);
// copies in anything the save is missing (new buildings, quests, hero
// fields...) without touching values the save already has
function fillDefaults(target, defaults) {
  Object.keys(defaults).forEach((k) => {
    if (target[k] === undefined) target[k] = JSON.parse(JSON.stringify(defaults[k]));
    else if (isPlain(target[k]) && isPlain(defaults[k])) fillDefaults(target[k], defaults[k]);
  });
}
function loadGame() {
  const defaults = JSON.parse(JSON.stringify(S)); // fresh-game state, before loading
  let data = readSave(SAVE_KEY);
  if (!data) {
    const backup = readSave(BACKUP_KEY);
    if (data === false) {
      // keep the damaged save under its own key rather than overwriting it
      try {
        localStorage.setItem(SAVE_KEY + "-damaged", localStorage.getItem(SAVE_KEY));
      } catch (e) {}
    }
    if (backup) {
      data = backup;
      setTimeout(() => notify("Your save was damaged, so the last good backup was restored.", "error", 7000), 1200);
    } else if (data === false) {
      setTimeout(() => notify("Your save couldn't be read. Starting fresh (the old one was kept aside).", "error", 7000), 1200);
      return false;
    } else return false;
  }
  try {
    // back up the known-good save before any migration touches it
    localStorage.setItem(BACKUP_KEY, JSON.stringify(data));
  } catch (e) {}
  for (let v = (data.v || 0) + 1; v <= SAVE_VERSION; v++) if (MIGRATIONS[v]) MIGRATIONS[v](data);
  data.v = SAVE_VERSION;
  fillDefaults(data, defaults);
  // heroes are a list, so fill each one from the default hero with the same id
  data.heroes.forEach((h) => {
    const def = defaults.heroes.find((d) => d.id === h.id);
    if (def) fillDefaults(h, def);
  });
  Object.assign(S, data);
  return true;
}
// ==============================================================
// INIT
// ==============================================================
if (loadGame()) {
  migrateSave();
  if (S.trip && Object.keys(S.trip).length) {
    Object.entries(S.trip).forEach(([k, v]) => addCapped(S.res, k, v));
    S.awayTrip = lootString(S.trip);
  }
  S.trip = null;
  // a Descent interrupted by closing the page is banked at the wipe rate
  if (S.runLoot && Object.keys(S.runLoot).length) {
    const keep = packKeep();
    Object.entries(S.runLoot).forEach(([k, v]) => addCapped(S.res, k, Math.floor(v * keep)));
  }
  S.runLoot = null;
  processOffline((Date.now() - (S.lastSeen || Date.now())) / 1000);
  checkCastleLevel();
}
refreshDaily();
renderBmap();
renderPanel();
updateCP();
updateRatesUI();
updateQuestProgress("", 0);
tickExpeditions();
animateCounters();
setInterval(() => saveGame(true), 30000);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveGame(true);
});
window.addEventListener("pagehide", () => saveGame(true));
// ==============================================================
// TITLE / SPLASH SCREEN
// ==============================================================
function closeSplash() {
  const splash = $("splash");
  splash.classList.add("closed");
  setTimeout(() => {
    splash.style.display = "none";
    if (!S.champion) {
      openForge();
      return;
    }
    if (S.awayTrip) {
      notify(`Your party made it home from the wastes with ${S.awayTrip}.`, "reward", 6000);
      S.awayTrip = null;
    }
    const away = S.awayReport;
    if (away) {
      const parts = [...away.gains];
      if (away.finished.length) parts.push(`finished: ${away.finished.join(", ")}`);
      notify(`While you were away (${fmtAway(away.sec)}): ${parts.join(", ") || "the city slept"}`, "reward", 7000);
      S.awayReport = null;
    } else {
      notify("Tap any building to upgrade! Send heroes out from the Explore tab.", "info", 4500);
    }
    if (!S.dailyClaimed) setTimeout(() => openDaily(), 600);
  }, 650);
}
// ==============================================================
// ECHO REBIRTH  -  let the city fall, keep what it remembers
//   From castle Lv 6 the city can be reborn. Buildings, stockpiles
//   and quests reset; heroes, items, research, relics, gold and lore
//   stay. Each rebirth pays Memory Shards, spent on permanent Memories.
// ==============================================================
const MEMORIES = [
  { id: "bedrock", name: "Bedrock Memory", icon: "\u{1FAA8}", max: 10, cost: (r) => 4 + r * 3, desc: "+15% stone, wood and essence production per rank" },
  { id: "masons", name: "Mason's Recall", icon: "\u{1F528}", max: 5, cost: (r) => 6 + r * 4, desc: "Construction 10% faster per rank" },
  { id: "stores", name: "Hoarded Stores", icon: "\u{1F4E6}", max: 5, cost: (r) => 3 + r * 3, desc: "Each new life starts with +600 stone and wood, +150 essence per rank" },
  { id: "foundations", name: "Old Foundations", icon: "\u{1F3F0}", max: 3, cost: (r) => 12 + r * 10, desc: "Each new life starts with the Keep, Quarry, Farm and Barracks 1 level higher per rank" },
  { id: "veteran", name: "Veteran's Echo", icon: "\u{2694}\u{FE0F}", max: 10, cost: (r) => 5 + r * 4, desc: "Heroes +6% HP and ATK per rank" },
  { id: "swift", name: "Swift Return", icon: "\u{1F9ED}", max: 5, cost: (r) => 4 + r * 4, desc: "Expeditions 10% faster per rank" },
  { id: "longmemory", name: "Long Memory", icon: "\u{1F319}", max: 4, cost: (r) => 5 + r * 5, desc: "+4 hours of offline progress per rank" }
];
function memRank(id) {
  return (S.memories && S.memories[id]) || 0;
}
// Memory Shards paid for letting the city fall now
function echoGain() {
  if ((S.castleLevel || 1) < 6) return 0;
  const tierPay = [0, 0, 0, 0, 0, 10, 16, 24, 34, 46][castleTier() - 1];
  return tierPay + Math.floor((S.totalLevels || 0) / 6) + Math.floor(Math.min(80, S.bestEndless || 0) / 2);
}
const roman = (n) => ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n] || String(n);
let altarConfirm = false;
function openAltar() {
  altarConfirm = false;
  renderAltar();
  $("modal").classList.add("open");
}
function renderAltar() {
  const box = $("modal-box");
  box.style.setProperty("--bc", "#c9b6e8");
  const L = S.castleLevel || 1, gain = echoGain();
  const next = CASTLE_THRESHOLDS[L];
  box.innerHTML = `
    <div class="modal-head">
      <div class="modal-icon">\u{1F3F0}</div>
      <div>
        <div class="modal-title">${CASTLE_TIERS[castleTier() - 1]}</div>
        <div class="modal-sub">Castle Lv ${L} of ${CASTLE_MAX}  -  Life ${roman(S.lives || 1)}${L < CASTLE_MAX ? `  -  ${next - S.totalLevels} building levels to Lv ${L + 1}` : ""}</div>
      </div>
    </div>
    <div class="altar-echoes"><span>\u{2728}</span><b>${S.echoes || 0}</b> Memory Shards<small>${S.echoesEarned || 0} earned across all lives</small></div>
    <div class="section-label">Memories  -  permanent, every life</div>
    ${MEMORIES.map((m) => {
      const r = memRank(m.id), maxed = r >= m.max, c = m.cost(r);
      return `<div class="rs-row">
        <div class="rs-ic">${m.icon}</div>
        <div class="rs-info">
          <div class="rs-name altar">${m.name} <span class="rs-pips">${Array.from({ length: m.max }, (_, i) => `<i class="${i < r ? "on" : ""}"></i>`).join("")}</span></div>
          <div class="rs-desc">${m.desc}</div>
        </div>
        ${maxed ? `<span class="rs-max">MAX</span>` : `<button class="rs-buy altar" ${(S.echoes || 0) >= c ? "" : "disabled"} onclick="buyMemory('${m.id}')">\u{2728}${c}</button>`}
      </div>`;
    }).join("")}
    <div class="section-label" style="margin-top:14px">Rebirth</div>
    ${L < 6
      ? `<div class="altar-note">The city must stand at Castle Lv 6 before it can fall and remember. (Now Lv ${L}.)</div>`
      : `<div class="altar-note">Let the city fall and rise again as a <b>Ruined Keep</b>. You earn <b class="gold">\u{2728} ${gain} Memory Shards</b>.
          <ul><li><b>Resets:</b> buildings, castle level, stone, wood, essence, troops, quests, the ruins' chests.</li>
          <li><b>Stays:</b> heroes and their levels, items, research, relics, gold, lore, Memories, your deepest Descent.</li></ul>
          <small>More shards for a higher castle, more building levels, and deeper Endless Descents.</small></div>
        <button class="mbtn ${altarConfirm ? "mbtn-danger" : "mbtn-gold"} altar-go" onclick="rebirthPress()">${altarConfirm ? "Tap again to let it fall" : `\u{1F56F}\u{FE0F} Let the city fall  (+${gain} shards)`}</button>`}
    <div class="modal-actions"><button class="mbtn mbtn-ghost" onclick="closeModal()">\u{2715} Close</button></div>`;
}
function buyMemory(id) {
  const m = MEMORIES.find((x) => x.id === id);
  const r = memRank(id);
  if (!m || r >= m.max || (S.echoes || 0) < m.cost(r)) return;
  S.echoes -= m.cost(r);
  S.memories[id] = r + 1;
  notify(`${m.icon} ${m.name} ${roman(r + 1)} remembered.`, "success");
  updateRatesUI();
  saveGame(true);
  renderAltar();
}
function rebirthPress() {
  if (!altarConfirm) {
    altarConfirm = true;
    renderAltar();
    return;
  }
  rebirth();
}
function rebirth() {
  const gain = echoGain();
  if (gain <= 0) return;
  S.echoes = (S.echoes || 0) + gain;
  S.echoesEarned = (S.echoesEarned || 0) + gain;
  S.lives = (S.lives || 1) + 1;
  const f = memRank("foundations"), st = memRank("stores");
  BDATA.forEach((b) => (S.buildings[b.id] = { level: 0, upgrading: false, timer: 0, timerMax: 0 }));
  S.buildings.keep.level = 1 + f;
  S.buildings.quarry.level = 1 + f;
  S.buildings.farm.level = f;
  S.buildings.barracks.level = f;
  S.totalLevels = BDATA.reduce((a, b) => a + S.buildings[b.id].level, 0);
  S.castleLevel = 1;
  while (CASTLE_THRESHOLDS[S.castleLevel] && S.totalLevels >= CASTLE_THRESHOLDS[S.castleLevel]) S.castleLevel++;
  S.res.stone = 200 + 600 * st;
  S.res.wood = 150 + 600 * st;
  S.res.essence = 40 + 150 * st;
  S.res.troops = 0;
  S.troopCap = calcTroopCap();
  S.upgradesTotal = 0;
  S.raids = 0;
  S.expeditions = 0;
  QUESTS.forEach((q) => (S.quests[q.id] = { progress: 0, claimed: false }));
  S.world = { opened: [], keys: {} };
  S.selectedBuilding = null;
  closeModal();
  saveGame(true);
  // the castle's rebuild animation plays from the old tier down to the ruin
  $("lu-lv").textContent = `LIFE ${roman(S.lives)}`;
  $("lu-msg").textContent = `The city falls, and remembers. +${gain} Memory Shards. ${LORE[Math.min(LORE.length - 1, 13)]}`;
  $("lu-unlocks").innerHTML = `<div class="altar-echoes small"><span>\u{2728}</span><b>${S.echoes}</b> Memory Shards to spend at the Altar</div>`;
  $("levelup").classList.add("open");
  burst(window.innerWidth / 2, window.innerHeight * 0.4, "#c9b6e8", 40);
  renderBmap();
  renderPanel();
  updateCP();
  updateRatesUI();
  updateQuestProgress("", 0);
}
{
  const badge = $("castle-badge");
  if (badge) {
    badge.onclick = openAltar;
    badge.setAttribute("role", "button");
  }
}
// ==============================================================
// THE FAR REACH  -  ground detail for the new map bands, and a dark
// veil over bands the castle hasn't unsealed yet
// ==============================================================
const REACH_TINT = { b: "127,216,208", o: "255,130,80", i: "154,184,240", x: "232,220,192", f: "232,192,124" };
{
  const tile2d = drawTile;
  drawTile = function (ctx, ch, x, y, sx, sy, ts, t) {
    tile2d(ctx, ch, x, y, sx, sy, ts, t);
    if (W.map !== "world") return;
    const hsh = ((x * 73856093) ^ (y * 19349663)) >>> 0;
    if (REACH_TINT[ch]) {
      const a = 0.25 + Math.sin(t * 1.6 + (hsh % 9)) * 0.2;
      ctx.fillStyle = `rgba(${REACH_TINT[ch]},${Math.max(0.05, a)})`;
      for (let i = 0; i < 3; i++) ctx.fillRect(sx + ((hsh >> (i * 4)) % (ts - 3)), sy + ((hsh >> (i * 5 + 2)) % (ts - 3)), 2, 2);
      if (ch === "f" && hsh % 3 === 0) {
        ctx.strokeStyle = "#4a3c2488";
        ctx.strokeRect(sx + 3, sy + 3, ts - 6, ts - 6);
      }
    }
    if (reachUnlock(x) > S.castleLevel && ch !== "^") {
      ctx.fillStyle = "rgba(4,3,8,0.55)";
      ctx.fillRect(sx, sy, ts + 0.5, ts + 0.5);
    }
  };
  const tileIso = drawIsoTile;
  drawIsoTile = function (ctx, ch, x, y, cx, cy, tw, th, t) {
    tileIso(ctx, ch, x, y, cx, cy, tw, th, t);
    if (W.map !== "world") return;
    const hsh = ((x * 73856093) ^ (y * 19349663)) >>> 0;
    if (REACH_TINT[ch]) {
      const a = 0.25 + Math.sin(t * 1.6 + (hsh % 9)) * 0.2;
      ctx.fillStyle = `rgba(${REACH_TINT[ch]},${Math.max(0.05, a)})`;
      for (let i = 0; i < 3; i++) ctx.fillRect(cx - tw * 0.2 + ((hsh >> (i * 4)) % (tw * 0.4)), cy - th * 0.15 + ((hsh >> (i * 5 + 2)) % (th * 0.3)), 2, 2);
    }
    if (reachUnlock(x) > S.castleLevel && ch !== "^") {
      ctx.fillStyle = "rgba(4,3,8,0.55)";
      isoDiamond(ctx, cx, cy, tw, th);
      ctx.fill();
    }
  };
}
// ==============================================================
// AUDIO  -  music and sound effects, all synthesized live with the
// Web Audio API (no sound files to host). Every melody is original.
//   Sound button cycles: all on -> effects only -> muted (saved).
//   Browsers only allow sound after a tap, so it starts on "Begin".
// ==============================================================
const AU = { ctx: null, comp: null, musicBus: null, sfxBus: null, verb: null, noise: null, track: null, trackId: undefined, step: 0, next: 0, hitAt: 0 };
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
function audioInit() {
  if (AU.ctx) return AU.ctx.state === "suspended" && !document.hidden && AU.ctx.resume();
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const c = (AU.ctx = new AC());
  AU.comp = c.createDynamicsCompressor(); // glues the mix and stops clipping
  AU.comp.threshold.value = -16;
  AU.comp.ratio.value = 4;
  const out = c.createGain(); // make-up gain after the compressor
  out.gain.value = 3;
  AU.comp.connect(out);
  out.connect(c.destination);
  // reverb: a generated hall, gives the HD-2D sense of space
  AU.verb = c.createConvolver();
  const len = Math.floor(c.sampleRate * 2.6), ir = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
  }
  AU.verb.buffer = ir;
  AU.verb.connect(AU.comp);
  AU.noise = c.createBuffer(1, c.sampleRate, c.sampleRate);
  const nd = AU.noise.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  const bus = (send) => {
    const g = c.createGain(), s = c.createGain();
    s.gain.value = send;
    g.connect(AU.comp);
    g.connect(s);
    s.connect(AU.verb);
    return g;
  };
  AU.musicBus = bus(0.38);
  AU.sfxBus = bus(0.2);
  applyVolumes();
  setInterval(audioTick, 50);
}
function applyVolumes() {
  updateSoundBtn();
  if (!AU.ctx) return;
  const a = S.audio, t = AU.ctx.currentTime;
  AU.musicBus.gain.setTargetAtTime(a.mode === 0 ? a.music * 0.5 : 0, t, 0.15);
  AU.sfxBus.gain.setTargetAtTime(a.mode === 2 ? 0 : a.sfx * 0.7, t, 0.05);
}
function cycleSound() {
  S.audio.mode = (S.audio.mode + 1) % 3;
  audioInit();
  applyVolumes();
  saveGame(true);
}
function updateSoundBtn() {
  const b = $("sound-btn"), w = $("w-sound");
  if (b) b.innerHTML = ["\u{1F50A} Sound", "\u{1F509} SFX only", "\u{1F507} Muted"][S.audio.mode];
  if (w) w.innerHTML = ["\u{1F50A}", "\u{1F509}", "\u{1F507}"][S.audio.mode]; // icon only on the map header
}
// first tap anywhere unlocks audio (required on iPhone)
["pointerdown", "touchend", "keydown"].forEach((ev) => document.addEventListener(ev, audioInit, { capture: true, passive: true }));
document.addEventListener("visibilitychange", () => {
  if (!AU.ctx) return;
  if (document.hidden) AU.ctx.suspend();
  else AU.ctx.resume();
});
// ---------- building blocks ----------
function envGain(t, a, peak, dur, dest) {
  const g = AU.ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + dur);
  g.connect(dest);
  return g;
}
// one oscillator note; o.to = pitch glide target, o.lp = lowpass cutoff
function tone(dest, type, f, t, dur, vol, o = {}) {
  const c = AU.ctx, osc = c.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(f, t);
  if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + (o.glide || dur));
  if (o.detune) osc.detune.value = o.detune;
  let out = envGain(t, o.a || 0.005, vol, dur, dest);
  if (o.lp) {
    const fl = c.createBiquadFilter();
    fl.type = "lowpass";
    fl.frequency.setValueAtTime(o.lp, t);
    if (o.lpTo) fl.frequency.exponentialRampToValueAtTime(o.lpTo, t + dur);
    fl.connect(out);
    out = fl;
  }
  osc.connect(out);
  osc.start(t);
  osc.stop(t + (o.a || 0.005) + dur + 0.05);
}
// filtered noise burst (wind, swishes, drums, shatters)
function noise(dest, t, dur, vol, o = {}) {
  const c = AU.ctx, src = c.createBufferSource(), fl = c.createBiquadFilter();
  src.buffer = AU.noise;
  src.loop = true;
  fl.type = o.type || "bandpass";
  fl.frequency.setValueAtTime(o.f || 1000, t);
  if (o.to) fl.frequency.exponentialRampToValueAtTime(o.to, t + dur);
  fl.Q.value = o.q || 1;
  src.connect(fl);
  fl.connect(envGain(t, o.a || 0.003, vol, dur, dest));
  src.start(t, Math.random() * 0.5);
  src.stop(t + (o.a || 0.003) + dur + 0.05);
}
// ---------- instruments ----------
const INST = {
  pluck: (d, m, t, v = 0.12) => {
    tone(d, "triangle", mtof(m), t, 1.1, v, { lp: 3200, lpTo: 700 });
    tone(d, "square", mtof(m), t, 0.25, v * 0.18, { lp: 2000, lpTo: 500, detune: 6 });
  },
  pad: (d, notes, t, dur, v = 0.04) =>
    notes.forEach((m) => {
      tone(d, "sawtooth", mtof(m), t, dur, v, { a: Math.min(1.2, dur * 0.4), lp: 900, detune: -7 });
      tone(d, "sawtooth", mtof(m), t, dur, v, { a: Math.min(1.2, dur * 0.4), lp: 900, detune: 7 });
    }),
  bass: (d, m, t, dur, v = 0.16) => {
    tone(d, "triangle", mtof(m), t, dur, v, { lp: 600 });
    tone(d, "sine", mtof(m - 12), t, dur, v * 0.7);
  },
  bell: (d, m, t, v = 0.05, dur = 2.4) => {
    const f = mtof(m);
    tone(d, "sine", f, t, dur, v);
    tone(d, "sine", f * 2.76, t, dur * 0.4, v * 0.3);
    tone(d, "sine", f * 5.4, t, dur * 0.15, v * 0.12);
  },
  clang: (d, t, v = 0.06) => [1, 1.41, 2.13, 3.07].forEach((k, i) => tone(d, "square", 520 * k, t, 0.5 - i * 0.08, v / (i + 1), { lp: 5000 })),
  kick: (d, t, v = 0.32) => tone(d, "sine", 150, t, 0.28, v, { to: 42, glide: 0.12 }),
  snare: (d, t, v = 0.12) => {
    noise(d, t, 0.16, v, { type: "bandpass", f: 1900, q: 0.8 });
    tone(d, "triangle", 190, t, 0.08, v * 0.6);
  },
  hat: (d, t, v = 0.03) => noise(d, t, 0.04, v, { type: "highpass", f: 7500 }),
  wind: (d, t, dur, v = 0.035) => noise(d, t, dur, v, { type: "lowpass", f: 300 + Math.random() * 300, to: 500 + Math.random() * 500, q: 3, a: dur * 0.45 })
};
// ---------- music: one function per place, called every eighth note ----------
// chords are MIDI note lists, bass note first; c.k = steps per chord
function chordAt(tr, step) {
  return tr.chords[Math.floor(step / tr.k) % tr.chords.length];
}
const TRACKS = {
  // the keep at night: warm, unhurried, a lute and distant bells
  city: {
    bpm: 72, k: 16,
    chords: [[50, 57, 62, 65], [46, 53, 58, 62], [41, 48, 53, 57], [48, 55, 60, 64]],
    scale: [62, 65, 67, 69, 72, 74, 77, 79],
    play(d, s, t, sd) {
      const ch = chordAt(this, s);
      if (s % this.k === 0) {
        INST.pad(d, ch.slice(1), t, sd * this.k * 1.05, 0.022);
        INST.bass(d, ch[0] - 12, t, sd * 7, 0.11);
      }
      if (s % 8 === 4) INST.bass(d, ch[0] - 12, t, sd * 3, 0.07);
      if (Math.random() < 0.55) INST.pluck(d, ch[1 + (s % 3)] + 12, t, 0.07);
      if (s % 4 === 0 && Math.random() < 0.3) INST.bell(d, pick(this.scale) + 12, t + sd * 0.5, 0.03);
    }
  },
  // the open wastes: wind, a lonely drone, sparse notes
  wastes: {
    bpm: 58, k: 16,
    chords: [[45, 52, 57, 60], [41, 48, 53, 57], [45, 52, 57, 60], [40, 47, 52, 55]],
    scale: [69, 72, 74, 76, 79, 81, 84],
    play(d, s, t, sd) {
      const ch = chordAt(this, s);
      if (s % this.k === 0) {
        INST.pad(d, ch.slice(1, 3), t, sd * this.k * 1.1, 0.018);
        INST.bass(d, ch[0] - 12, t, sd * 14, 0.09);
        INST.wind(d, t, sd * 14);
      }
      if (Math.random() < 0.22) INST.pluck(d, pick(this.scale), t, 0.06);
      if (s % 16 === 10 && Math.random() < 0.5) INST.bell(d, pick(this.scale) + 12, t, 0.025, 3.5);
    }
  },
  // the ruins and the Descent: low pulse, dripping echoes, unease
  ruins: {
    bpm: 62, k: 16,
    chords: [[49, 56, 61, 64], [50, 57, 62, 66], [49, 56, 61, 64], [47, 54, 59, 63]],
    scale: [73, 74, 76, 78, 80, 81, 85],
    play(d, s, t, sd) {
      const ch = chordAt(this, s);
      if (s % this.k === 0) INST.pad(d, ch.slice(1), t, sd * this.k * 1.05, 0.02);
      if (s % 4 === 0) INST.bass(d, ch[0] - 12, t, sd * 1.5, s % 8 === 0 ? 0.12 : 0.06);
      if (Math.random() < 0.13) INST.bell(d, pick(this.scale) + 12, t, 0.022, 3);
      if (s % 16 === 8 && Math.random() < 0.4) INST.wind(d, t, sd * 8, 0.02);
    }
  },
  // the Forge: anvil strikes over a steady minor groove
  forge: {
    bpm: 80, k: 8,
    chords: [[43, 50, 55, 58], [39, 46, 51, 55], [46, 53, 58, 62], [41, 48, 53, 57]],
    play(d, s, t, sd) {
      const ch = chordAt(this, s);
      if (s % 8 === 0) {
        INST.pad(d, ch.slice(1), t, sd * 8.5, 0.022);
        INST.bass(d, ch[0] - 12, t, sd * 6, 0.11);
      }
      if (s % 8 === 0 || (s % 8 === 3 && Math.random() < 0.6)) INST.clang(d, t, 0.035);
      if (s % 2 === 1) INST.pluck(d, ch[1 + ((s >> 1) % 3)] + 12, t, 0.06);
    }
  },
  // battle: driving drums, an ostinato bass and a hook the ear can hold
  battle: {
    bpm: 128, k: 8,
    chords: [[40, 47, 52, 55], [36, 43, 48, 52], [38, 45, 50, 54], [35, 42, 47, 51]],
    hook: [0, null, 7, null, 12, 10, 7, null],
    bassPat: [0, 0, 12, 0, 0, 12, 0, 7],
    play(d, s, t, sd) {
      const ch = chordAt(this, s), i = s % 8;
      if (i === 0) INST.pad(d, ch.slice(1), t, sd * 8, 0.016);
      if (i === 0 || i === 4 || (i === 7 && Math.random() < 0.35)) INST.kick(d, t);
      if (i === 2 || i === 6) INST.snare(d, t);
      INST.hat(d, t, i % 2 ? 0.035 : 0.02);
      INST.bass(d, ch[0] - 12 + this.bassPat[i], t, sd * 0.85, 0.11);
      const h = this.hook[i];
      if (h !== null && (s >> 3) % 4 !== 3) INST.pluck(d, ch[0] + 24 + h, t, 0.075);
      else if ((s >> 3) % 4 === 3 && i % 2 === 0) INST.pluck(d, ch[1 + (i >> 1) % 3] + 24, t, 0.06);
    }
  },
  // boss: faster, heavier, a half-step that never resolves
  boss: {
    bpm: 140, k: 8,
    chords: [[40, 47, 52, 55], [41, 48, 53, 57], [40, 47, 52, 55], [39, 45, 48, 51]],
    play(d, s, t, sd) {
      const ch = chordAt(this, s), i = s % 8;
      if (i === 0 || i === 3) {
        tone(d, "sawtooth", mtof(ch[0]), t, sd * 1.6, 0.06, { lp: 1400, lpTo: 300 });
        tone(d, "sawtooth", mtof(ch[1]), t, sd * 1.6, 0.05, { lp: 1400, lpTo: 300, detune: 9 });
      }
      if (i % 2 === 0) INST.kick(d, t, 0.3);
      if (i === 2 || i === 6) INST.snare(d, t, 0.14);
      INST.hat(d, t, 0.03);
      INST.bass(d, ch[0] - 12 + (i % 2 ? 12 : 0), t, sd * 0.8, 0.12);
      if ((s >> 3) % 2 === 1 && i % 2 === 1) INST.pluck(d, ch[3] + 24 - (i >> 1), t, 0.07);
    }
  }
};
function musicFor() {
  if ($("combat-modal").classList.contains("open")) return B && !B.over ? (B.enemies.some((e) => e.boss) ? "boss" : "battle") : null;
  if ($("forge").classList.contains("open")) return "forge";
  if (W.open) return W.map === "world" ? "wastes" : "ruins";
  return "city";
}
// look-ahead scheduler: books notes ~0.25s ahead so timing stays tight
function audioTick() {
  const c = AU.ctx;
  if (!c || c.state !== "running") return;
  const want = musicFor();
  if (want !== AU.trackId) {
    // crossfade: the old track fades out on its own gain, the new one fades in
    if (AU.track) {
      const old = AU.track;
      old.gain.setTargetAtTime(0, c.currentTime, 0.4);
      setTimeout(() => old.disconnect(), 3000);
    }
    AU.trackId = want;
    AU.track = null;
    if (want) {
      AU.track = c.createGain();
      AU.track.gain.setValueAtTime(0, c.currentTime);
      AU.track.gain.setTargetAtTime(1, c.currentTime + 0.2, 0.5);
      AU.track.connect(AU.musicBus);
      AU.step = 0;
      AU.next = c.currentTime + 0.15;
    }
  }
  const tr = TRACKS[AU.trackId];
  if (!tr || S.audio.mode !== 0) return;
  const sd = 60 / tr.bpm / 2;
  if (AU.next < c.currentTime) AU.next = c.currentTime + 0.05; // after a pause
  while (AU.next < c.currentTime + 0.25) {
    tr.play(AU.track, AU.step++, AU.next, sd);
    AU.next += sd;
  }
}
// ---------- sound effects ----------
const SFX = {
  tap: (d, t) => tone(d, "triangle", 1300, t, 0.05, 0.09, { to: 850 }),
  info: (d, t) => {
    tone(d, "sine", 880, t, 0.14, 0.06);
    tone(d, "sine", 1320, t + 0.07, 0.2, 0.05);
  },
  success: (d, t) => [76, 83].forEach((m, i) => INST.bell(d, m, t + i * 0.09, 0.07, 1.2)),
  reward: (d, t) => {
    tone(d, "square", 1319, t, 0.07, 0.04, { lp: 4000 });
    tone(d, "square", 1976, t + 0.075, 0.32, 0.04, { lp: 4000 });
    INST.bell(d, 95, t + 0.075, 0.03, 0.8);
  },
  error: (d, t) => [0, 0.11].forEach((o) => tone(d, "square", 220, t + o, 0.12, 0.045, { to: 175, lp: 1200 })),
  build: (d, t) => {
    [0, 0.14].forEach((o) => noise(d, t + o, 0.08, 0.2, { f: 700, q: 2 }));
    INST.bell(d, 67, t + 0.3, 0.05, 1);
  },
  levelup: (d, t) => {
    [67, 71, 74, 79].forEach((m, i) => INST.pluck(d, m, t + i * 0.07, 0.11));
    INST.bell(d, 86, t + 0.3, 0.06, 2);
  },
  castle: (d, t) => {
    INST.pad(d, [50, 57, 62, 66], t, 2.6, 0.04);
    [62, 66, 69, 74, 78, 81].forEach((m, i) => INST.bell(d, m, t + i * 0.12, 0.05, 2.2));
  },
  hit_blade: (d, t) => {
    noise(d, t, 0.12, 0.22, { type: "highpass", f: 3200, to: 1400 });
    tone(d, "sawtooth", 320, t + 0.03, 0.09, 0.08, { to: 110, lp: 1800 });
  },
  hit_pierce: (d, t) => {
    noise(d, t, 0.08, 0.3, { f: 4200, q: 4 });
    tone(d, "square", 950, t, 0.06, 0.08, { to: 300, lp: 3000 });
  },
  hit_void: (d, t) => {
    tone(d, "sine", 620, t, 0.38, 0.18, { to: 80 });
    tone(d, "sine", 627, t, 0.38, 0.12, { to: 84 });
    noise(d, t, 0.3, 0.1, { type: "lowpass", f: 900, to: 200 });
  },
  hit_fire: (d, t) => {
    noise(d, t, 0.36, 0.26, { f: 1300, to: 320, q: 0.7, a: 0.02 });
    tone(d, "sawtooth", 150, t, 0.2, 0.06, { to: 60, lp: 700 });
  },
  weak: (d, t) => tone(d, "triangle", 1760, t, 0.14, 0.08),
  hurt: (d, t) => {
    tone(d, "sine", 170, t, 0.22, 0.3, { to: 50 });
    noise(d, t, 0.1, 0.12, { type: "lowpass", f: 450 });
  },
  break: (d, t) => {
    noise(d, t, 0.45, 0.24, { type: "highpass", f: 4500, to: 2000 });
    for (let i = 0; i < 6; i++) tone(d, "triangle", 2000 + Math.random() * 2500, t + i * 0.035, 0.12, 0.04);
    tone(d, "sine", 110, t, 0.45, 0.3, { to: 38 });
  },
  surge: (d, t) => {
    tone(d, "sawtooth", 180, t, 0.4, 0.07, { to: 1100, lp: 2500 });
    noise(d, t, 0.4, 0.08, { f: 400, to: 3000, q: 2, a: 0.15 });
  },
  heal: (d, t) => [79, 84, 88, 91].forEach((m, i) => INST.bell(d, m, t + i * 0.06, 0.035, 1)),
  ko_enemy: (d, t) => {
    tone(d, "sawtooth", 420, t, 0.55, 0.08, { to: 55, lp: 1100 });
    noise(d, t + 0.05, 0.35, 0.08, { type: "lowpass", f: 600, to: 150 });
  },
  ko_hero: (d, t) => tone(d, "triangle", 330, t, 0.7, 0.12, { to: 98 }),
  victory: (d, t) => {
    [64, 68, 71].forEach((m, i) => INST.pluck(d, m + 12, t + i * 0.11, 0.12));
    [76, 80, 83, 88].forEach((m) => tone(d, "sawtooth", mtof(m), t + 0.36, 1.5, 0.025, { lp: 2400, lpTo: 900, a: 0.03 }));
    INST.bell(d, 88, t + 0.36, 0.05, 2.5);
  },
  defeat: (d, t) => {
    [67, 63, 60, 55].forEach((m, i) => tone(d, "triangle", mtof(m), t + i * 0.32, 0.6, 0.08));
    INST.pad(d, [43, 50, 55], t + 0.9, 2.2, 0.035);
  },
  step: (d, t) => noise(d, t, 0.06, 0.12, { type: "lowpass", f: 450 + Math.random() * 400 }),
  whoosh: (d, t) => noise(d, t, 0.55, 0.14, { f: 250, to: 1600, q: 1.5, a: 0.18 }),
  battle: (d, t) => {
    noise(d, t, 0.5, 0.16, { f: 300, to: 2400, q: 1.2, a: 0.25 });
    INST.kick(d, t + 0.45, 0.4);
  },
  lore: (d, t) => [74, 81, 86, 93].forEach((m, i) => INST.bell(d, m, t + i * 0.22, 0.05, 3)),
  forge: (d, t) => {
    INST.clang(d, t, 0.1);
    INST.pad(d, [55, 62, 67, 70], t + 0.2, 2, 0.035);
  }
};
// stagger: rapid hits (Cleave, Flurry) play as a quick ripple, not one blast
function sfx(name, gap = 0) {
  const c = AU.ctx;
  if (!c || c.state !== "running" || S.audio.mode === 2 || !SFX[name]) return;
  let t = c.currentTime + 0.01;
  if (gap === -1) t = Math.max(t, AU.hitAt); // lands with the last hit
  else if (gap) {
    t = Math.max(t, AU.hitAt + gap);
    AU.hitAt = t;
  }
  try {
    SFX[name](AU.sfxBus, t);
  } catch (e) {}
}
// ---------- hooks: sounds attach to existing actions without changing them ----------
{
  const after = (orig, fn) =>
    function (...a) {
      const r = orig.apply(this, a);
      try {
        fn(r, ...a);
      } catch (e) {}
      return r;
    };
  notify = after(notify, (r, msg, type = "info") => sfx(type === "reward" || type === "success" || type === "error" ? type : "info"));
  strike = after(strike, (d, att, t, mult, type) => {
    if (!t || t.side !== "enemy") return;
    sfx("hit_" + (DMG_TYPES[type] ? type : "blade"), 0.07);
    if (type && t.weak && t.weak.includes(type)) sfx("weak", -1);
  });
  breakEnemy = after(breakEnemy, () => sfx("break"));
  const hurtOrig = hurt;
  hurt = function (u, d, weak) {
    const wasKo = u.ko;
    hurtOrig(u, d, weak);
    try {
      if (u.side === "hero") sfx("hurt", 0.06);
      if (!wasKo && u.ko) setTimeout(() => sfx(u.side === "enemy" ? "ko_enemy" : "ko_hero"), 120);
    } catch (e) {}
  };
  takeSurge = after(takeSurge, (n) => n && sfx("surge"));
  healUnit = after(healUnit, () => sfx("heal", 0.05));
  finishBattle = after(finishBattle, (r, won) => setTimeout(() => sfx(won ? "victory" : "defeat"), 250));
  startBattle = after(startBattle, () => sfx("battle"));
  const xpOrig = addHeroXP;
  addHeroXP = function (idx, xp) {
    const h = S.heroes[idx], lv = h && h.level;
    xpOrig(idx, xp);
    if (h && h.level > lv) sfx("levelup");
  };
  const castleOrig = checkCastleLevel;
  checkCastleLevel = function () {
    const lv = S.castleLevel;
    castleOrig();
    if (S.castleLevel > lv) setTimeout(() => sfx("castle"), 150);
  };
  doUpgrade = after(doUpgrade, (r, id) => S.buildings[id] && S.buildings[id].upgrading && sfx("build"));
  const moveOrig = tryMove;
  tryMove = function (dx, dy) {
    const x = W.x, y = W.y;
    moveOrig(dx, dy);
    if (W.x !== x || W.y !== y) sfx("step");
  };
  openWorld = after(openWorld, () => sfx("whoosh"));
  enterDungeon = after(enterDungeon, () => sfx("whoosh"));
  chooseNode = after(chooseNode, () => sfx("whoosh"));
  showLore = after(showLore, () => sfx("lore"));
  confirmForge = after(confirmForge, () => sfx("forge"));
  // soft tick for buttons that don't already make their own sound
  document.addEventListener("click", (e) => {
    if (e.target.closest("button, .bnode, .ptab, .quest-card.complete")) sfx("tap");
  }, true);
  // sound buttons: one in the top bar (before Save), a small one on the map header;
  // the M key also cycles it on desktop
  const addBtn = (id, cls, beforeEl) => {
    if (!beforeEl) return;
    const b = document.createElement("button");
    b.id = id;
    b.className = cls;
    b.title = "Sound: all on / effects only / muted  (M)";
    b.onclick = cycleSound;
    beforeEl.parentNode.insertBefore(b, beforeEl);
  };
  addBtn("sound-btn", "top-btn top-sound", document.querySelector("#topbar .top-save"));
  addBtn("w-sound", "top-btn top-sound w-sound", $("w-view"));
  updateSoundBtn();
  document.addEventListener("keydown", (e) => {
    if ((e.key === "m" || e.key === "M") && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) cycleSound();
  });
}