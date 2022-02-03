import SizeEnum from "../enums/sizeEnum";
import Race from "../models/race";
import RaceEnum from "../enums/raceEnum";
import AbilityBonus from "../models/abilityBonus";

const Human = new Race();
Human.id = RaceEnum.Human;
Human.name = "Human";
Human.size =  SizeEnum.medium;
Human.speed = 30;
Human.abilityBonus = new AbilityBonus();
Human.abilityBonus.Charisma = 1;
Human.abilityBonus.Dexterity = 1;
Human.abilityBonus.Intelligence = 1;
Human.abilityBonus.Wisdom = 1;
Human.abilityBonus.Strength = 1;
Human.abilityBonus.Constitution = 1;

const Halfling = new Race();
Halfling.id = RaceEnum.Halfling;
Halfling.name = "Halfling";
Halfling.size = SizeEnum.small;
Halfling.speed = 25;
Halfling.extraLanguage = "Halfling";
Halfling.abilityBonus = new AbilityBonus();
Halfling.abilityBonus.Dexterity = 2;
Halfling.abilityBonus.Charisma = 1;
Halfling.racialAbility = "Brave, Halfling Nimbleness"

const Dwarf = new Race();
Dwarf.id = RaceEnum.Dwarf;
Dwarf.name = "Dwarf";
Dwarf.size = SizeEnum.medium;
Dwarf.speed = 25;
Dwarf.extraLanguage = "Dwarvish";
Dwarf.abilityBonus = new AbilityBonus()
Dwarf.abilityBonus.Constitution = 2;
Dwarf.abilityBonus.Wisdom = 1;
Dwarf.racialAbility = "Darkvision 60', Dwarven Toughness"

const Gnome = new Race();
Gnome.id = RaceEnum.Gnome;
Gnome.name = "Gnome";
Gnome.size = SizeEnum.small;
Gnome.speed = 25;
Gnome.extraLanguage = "Gnomish";
Gnome.abilityBonus = new AbilityBonus();
Gnome.abilityBonus.Intelligence = 2;
Gnome.abilityBonus.Constitution = 1;
Gnome.racialAbility = "Darkvision 60', Gnome Cunning"

const HalfElf = new Race();
HalfElf.id = RaceEnum.HalfElf;
HalfElf.name = "Half-Elf";
HalfElf.size = SizeEnum.medium;
HalfElf.speed = 30;
HalfElf.extraLanguage = "Elvish";
HalfElf.abilityBonus = new AbilityBonus();
HalfElf.abilityBonus.Charisma = 2;
HalfElf.abilityBonus.Constitution = 1;
HalfElf.abilityBonus.Wisdom = 1;
HalfElf.abilityBonus.Intelligence = 1;
HalfElf.abilityBonus.Strength = 1;
HalfElf.abilityBonus.Dexterity = 1;
HalfElf.racialAbility = "Darkvision 60', Fey Ancestry"

const Elf = new Race();
Elf.id = RaceEnum.Elf;
Elf.name = "Elf";
Elf.size = SizeEnum.medium;
Elf.speed = 30;
Elf.extraLanguage = "Elvish";
Elf.abilityBonus = new AbilityBonus();
Elf.abilityBonus.Dexterity = 2;
Elf.abilityBonus.Intelligence = 1;
Elf.racialAbility = "Darkvision 60', Fey Ancestry, Trance"

const Tiefling = new Race();
Tiefling.id = RaceEnum.Tiefling;
Tiefling.name = "Tiefling";
Tiefling.size = SizeEnum.medium;
Tiefling.speed = 30;
Tiefling.extraLanguage = "Infernal";
Tiefling.abilityBonus = new AbilityBonus();
Tiefling.abilityBonus.Charisma = 2;
Tiefling.abilityBonus.Intelligence = 1;
Tiefling.racialAbility = "Darkvision 60', Hellish Resistance"

const HalfOrc = new Race();
HalfOrc.id = RaceEnum.HalfOrc;
HalfOrc.name = "Half-Orc";
HalfOrc.size = SizeEnum.medium;
HalfOrc.speed = 30;
HalfOrc.extraLanguage = "Orcish";
HalfOrc.abilityBonus = new AbilityBonus();
HalfOrc.abilityBonus.Strength = 2;
HalfOrc.abilityBonus.Constitution = 1;
HalfOrc.racialAbility = "Darkvision 60', Menacing"

const Dragonborn = new Race();
Dragonborn.id = RaceEnum.Dragonborn;
Dragonborn.name = "Dragonborn";
Dragonborn.size = SizeEnum.medium;
Dragonborn.speed = 30;
Dragonborn.extraLanguage = "Draconic";
Dragonborn.abilityBonus = new AbilityBonus();
Dragonborn.abilityBonus.Strength = 2;
Dragonborn.abilityBonus.Charisma = 1;
Dragonborn.racialAbility = "Draconic Ancestry, Damage Resistance";

const Harengon = new Race();
Harengon.id = RaceEnum.Harengon;
Harengon.name = "Harengon";
Harengon.size = "Medium";
Harengon.speed = 30;
Harengon.extraLanguage = "Sylvan";
Harengon.abilityBonus = new AbilityBonus();
Harengon.abilityBonus.Dexterity = 2;
Harengon.abilityBonus.Wisdom = 1;
Harengon.abilityBonus.Init = 2;
Harengon.racialAbility = "Lucky Footwork(on Failed Dex throw), Rabbit Hop (Bonus Action. Jump 10 ft. no op. attacks)";


const Races = [
  Human,
  Halfling,
  Dwarf,
  Gnome,
  HalfElf,
  Elf,
  Tiefling,
  HalfOrc,
  Dragonborn,
  Harengon
]

export default Races;
