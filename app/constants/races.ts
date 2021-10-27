import SizeEnum from "../enums/sizeEnum";
import Race from "../models/race";
import RaceEnums from "../enums/raceEnums";

const Human = new Race();
Human.id = RaceEnums.Human;
Human.name = "Human";
Human.size =  SizeEnum.medium;
Human.speed = 30;
Human.abilityBonus = "+1 to All";

const Halfling = new Race();
Halfling.id = RaceEnums.Halfling;
Halfling.name = "Halfling";
Halfling.size = SizeEnum.small;
Halfling.speed = 25;
Halfling.extraLanguage = "Halfling";
Halfling.abilityBonus = "+2 Dex, +1 Cha"
Halfling.racialAbility = "Brave, Halfling Nimbleness"

const Dwarf = new Race();
Dwarf.id = RaceEnums.Dwarf;
Dwarf.name = "Dwarf";
Dwarf.size = SizeEnum.medium;
Dwarf.speed = 25;
Dwarf.extraLanguage = "Dwarvish";
Dwarf.abilityBonus = "+2 con, +1 Wis"
Dwarf.racialAbility = "Darkvision 60', Dwarven Toughness"

const Gnome = new Race();
Gnome.id = RaceEnums.Gnome;
Gnome.name = "Gnome";
Gnome.size = SizeEnum.small;
Gnome.speed = 25;
Gnome.extraLanguage = "Gnomish";
Gnome.abilityBonus = "+2 int, +1 Con"
Gnome.racialAbility = "Darkvision 60', Gnome Cunning"

const HalfElf = new Race();
HalfElf.id = RaceEnums.HalfElf;
HalfElf.name = "Half-Elf";
HalfElf.size = SizeEnum.medium;
HalfElf.speed = 30;
HalfElf.extraLanguage = "Elvish";
HalfElf.abilityBonus = "+2 Cha, +1 Any, +1 Any"
HalfElf.racialAbility = "Darkvision 60', Fey Ancestry"

const Elf = new Race();
Elf.id = RaceEnums.Elf;
Elf.name = "Elf";
Elf.size = SizeEnum.medium;
Elf.speed = 30;
Elf.extraLanguage = "Elvish";
Elf.abilityBonus = "+2 Dex, +1 Int"
Elf.racialAbility = "Darkvision 60', Fey Ancestry, Trance"

const Tiefling = new Race();
Tiefling.id = RaceEnums.Tiefling;
Tiefling.name = "Tiefling";
Tiefling.size = SizeEnum.medium;
Tiefling.speed = 30;
Tiefling.extraLanguage = "Infernal";
Tiefling.abilityBonus = "+2 Cha, +1 Int"
Tiefling.racialAbility = "Darkvision 60', Hellish Resistance"

const HalfOrc = new Race();
HalfOrc.id = RaceEnums.HalfOrc;
HalfOrc.name = "Half-Orc";
HalfOrc.size = SizeEnum.medium;
HalfOrc.speed = 30;
HalfOrc.extraLanguage = "Orcish";
HalfOrc.abilityBonus = "+2 Str, +1 Con"
HalfOrc.racialAbility = "Darkvision 60', Menacing"

const Dragonborn = new Race();
Dragonborn.id = RaceEnums.Dragonborn;
Dragonborn.name = "Dragonborn";
Dragonborn.size = SizeEnum.medium;
Dragonborn.speed = 30;
Dragonborn.extraLanguage = "Draconic";
Dragonborn.abilityBonus = "+2 Str, +1 Charisma"
Dragonborn.racialAbility = "Draconic Ancestry, Damage Resistance"

const Races = [
  Human,
  Halfling,
  Dwarf,
  Gnome,
  HalfElf,
  Elf,
  Tiefling,
  HalfOrc,
  Dragonborn
]

export default Races;
