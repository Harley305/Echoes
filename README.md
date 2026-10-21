# Echoes: City of the Unknown

A browser game that mixes city-building with turn-based party combat. Build a keep at the edge of the known world, lead three heroes into the wastes, and dive into roguelike Descents. When the city falls, it remembers.

**▶ [Play it here](https://harley305.github.io/Echoes/)**

No build step and no dependencies: open `index.html` in a browser. Progress saves to `localStorage`.

> Originally prototyped on [CodePen](https://codepen.io/Christopher-Davidson/pen/MYbeEyN).

## Features

- **Ages of the city** *(new).* Each Rebirth rebuilds the city in a more advanced era: Stone, then Glass (renaissance domes), Iron (factories and gaslight), and Light (glass towers and a lit skyline). Every life flies its own banner color, the keeps of past lives haunt the far hills, and the gate stone gains a mark for every keep.
- **Story: Act I, The Twelfth Keep** *(new).* A 12-chapter story chain with a prologue, narrated scenes in your heroes' voices, and a Chronicle for rereading everything you've uncovered. Your place in the story carries over through Rebirth. From Castle Lv 6, Old Maren waits by the gate with her goat and lantern to guide you toward the Altar.
- **City.** 15 buildings across 10 castle tiers, offline progress, and buildings that can be pushed past their max level.
- **A living city screen** *(new).* The buildings are drawn into the scene around the keep, in rows from the horizon to the foreground. They grow as they level, show scaffolding while upgrading, and glow when selected. Floating nameplates show each building's level and when an upgrade is affordable.
- **Champion.** Forge your lead hero by picking a class, an origin and attribute points.
- **Auto-battle** *(new).* Toggle Auto in any fight and the party plays itself, faster: it heals, revives, hunts weaknesses and spends Surge.
- **Combat.** Turn-based battles with hidden weaknesses, ward breaks and Surge.
- **World map.** Explore in 2D or 2.5D isometric view, with ruins, keys, chests and a world boss.
- **Descents.** Hades-style runs: pick a route, collect boons, visit shrines, markets and events, then extract early or push for the boss and the Endless Descent.
- **Expeditions.** Send heroes out on timed trips to recover loot and lore.
- **Research and Rebirth.** Archive research, plus Echo Rebirth with permanent Memories.
- **Gear and the Iron Forge** *(new).* Each hero has weapon, armor and charm slots. You can forge gear (rarity is rolled), pay extra for a Masterwork, salvage pieces you don't want, and loot drops from raids, elites and bosses. Legendaries carry perks: Bloodecho, Bulwark and Quickened.
- **Bounties** *(new).* Three daily and three weekly jobs, one reroll a day, and a bonus cache for finishing a full set.
- **Backup & install** *(new).* The Save menu copies your city as a save code or downloads it as a file, and restores it on any device. On phones, add it to your home screen to play full screen and offline.
- **Extras.** Daily login rewards and procedural music and sound effects.

## Project layout

```
index.html             markup and overlays
style.css              all styling
script.js              game logic, organized in banner-commented sections
manifest.webmanifest   app install info (name, icons, colors)
sw.js                  service worker: offline play and home-screen install
icons/                 app and browser icons
```

## Save compatibility

Saves are versioned (`SAVE_VERSION` in `script.js`). New fields are filled in from defaults when an older save loads, so existing saves pick up the gear and bounties systems automatically.

## License

MIT, © 2026 Christopher Davidson
