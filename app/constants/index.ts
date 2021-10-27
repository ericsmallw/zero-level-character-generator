import DragonbornAncestry from "./../models/dragonbornAncestry";

const DefaultRacialMix = {
  "1,40": "Human",
  "41,50": "Halfling",
  "51,60": "Dwarf",
  "61,65": "Gnome",
  "66,70": "Tiefling",
  "71,80": "Half-Elf",
  "81,90": "Elf",
  "91,97": "Half-Orc",
  "98,100": "Dragonborn"
};

const HighFantasyRacialMix = {
  "1,20": "Human",
  "21,30": "Halfling",
  "31,40": "Dwarf",
  "41,50": "Gnome",
  "51,60": "Tiefling",
  "61,70": "Half-Elf",
  "71,80": "Elf",
  "81,90": "Half-Orc",
  "91,100": "Dragonborn"
};

const HumanDominatedRacialMix = {
  "1,64": "Human",
  "65,69": "Halfling",
  "70,74": "Dwarf",
  "75,80": "Gnome",
  "80,89": "Tiefling",
  "90,95": "Half-Elf",
  "96,97": "Elf",
  "98,99": "Half-Orc",
  "100": "Dragonborn"
}

const DragonbornAncestryTable: any = {
  "1,20": new DragonbornAncestry("black", "Acid"),
  "21,40": new DragonbornAncestry("White", "Cold"),
  "41,60": new DragonbornAncestry("Brass", "Fire"),
  "61,70": new DragonbornAncestry("Copper", "Acid"),
  "72,76": new DragonbornAncestry("Blue", "Lightning"),
  "77,82": new DragonbornAncestry("Bronze", "Lightning"),
  "83,89": new DragonbornAncestry("Green", "Poison"),
  "90,96": new DragonbornAncestry("Red", "Fire"),
  "97,98": new DragonbornAncestry("Silver", "Cold"),
  "99,100": new DragonbornAncestry("Gold", "Cold"),
}

export {
  DefaultRacialMix,
  HighFantasyRacialMix,
  HumanDominatedRacialMix,
  DragonbornAncestryTable
};

