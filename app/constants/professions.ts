import Profession from "../models/profession";
import {
  AnimalHandling, Arcana, CharismaSavingThrows,
  ConSavingThrows, History, Intimidation,
  Investigation, LeatherWorkersToolsProf, Lute,
  Medicine,
  Perception,
  Persuasion, Religion,
  SleightOfHand,
  SmithsTools, Stealth, StrengthSavingThrows
} from "./proficiencies";
import {
  Club,
  Dagger,
  Handaxe,
  LightHammer,
  Longsword,
  Mace,
  Pitchfork,
  Quarterstaff,
  Shortsword,
  Whip
} from "./weapons";
import {Common, Costume, Fine, Shield, Vestments} from "./clothes";
import {
  Abacus, ALute, ArcaneBook, BeggarCup, BlockAndTackle,
  CuredHam,
  FineCloth, GroceryList,
  HealersKit, HolySymbolEmblem, LeatherworkerTools,
  MinersTools, MoneySack,
  Pick,
  SackOfManure,
  SpeakingTrumpet,
  ThievesTools
} from "./items";
import ProfessionTypeEnum from "../enums/professionTypeEnum";

export const Blacksmith = new Profession(1, "Blacksmith", "d12 sp", SmithsTools, LightHammer, [SmithsTools], Common, ProfessionTypeEnum.Strength);
export const Miner = new Profession(2, "Miner", "d20 cp", Investigation, Handaxe, [Pick, MinersTools], Common, ProfessionTypeEnum.Strength);
export const Teamster = new Profession(2, "Teamster", "d8 sp", StrengthSavingThrows, Whip, [BlockAndTackle], Common, ProfessionTypeEnum.Strength);

export const Pickpocket = new Profession(1, "Pickpocket", "d12 sp", SleightOfHand, Shortsword, [ThievesTools], Common, ProfessionTypeEnum.Dexterity);
export const Haberdasher = new Profession(2, "Haberdasher", "d12 gp", Persuasion , Dagger, [FineCloth], Fine, ProfessionTypeEnum.Dexterity);
export const Orphan = new Profession(2, "Orphan", "d4 cp", Stealth, Club, [BeggarCup], Common, ProfessionTypeEnum.Dexterity);

export const GongFarmer = new Profession(1, "GongFarmer", "d12 cp", ConSavingThrows, Club, [SackOfManure], Common, ProfessionTypeEnum.Constitution);
export const PigFarmer = new Profession(1, "PigFarmer", "d10 sp", AnimalHandling, Pitchfork, [CuredHam], Common, ProfessionTypeEnum.Constitution);
export const Leatherworker = new Profession(1, "Leatherworker", "d6 sp", LeatherWorkersToolsProf, Dagger, [LeatherworkerTools], Common, ProfessionTypeEnum.Constitution);

export const Bookkeeper = new Profession(1, "Bookkeeper", "d8 sp", Investigation, Dagger, [Abacus], Common, ProfessionTypeEnum.Intelligence);
export const TaxCollector = new Profession(1, "Tax Collector", "d12 pp", Intimidation, Longsword, [MoneySack], Fine, ProfessionTypeEnum.Intelligence);
export const WizardsApprentice = new Profession(1, "Wizard's Apprentice", "d10 sp", Arcana, Quarterstaff, [ArcaneBook], Fine, ProfessionTypeEnum.Intelligence);

export const Herbalist = new Profession(1, "Herbalist", "d12 sp", Medicine, Club, [HealersKit], Common, ProfessionTypeEnum.Wisdom);
export const Sexton = new Profession(1, "Sexton", "d12 gp", Religion, Mace, [HolySymbolEmblem], Vestments, ProfessionTypeEnum.Wisdom);
export const Squire = new Profession(1, "Squire", "d6 sp", History, Longsword, [Shield], Fine, ProfessionTypeEnum.Wisdom);

export const Barker = new Profession(1, "Barker", "d8 gp", Perception, Club, [SpeakingTrumpet], Costume, ProfessionTypeEnum.Charisma);
export const Minstrel = new Profession(1, "Minstrel", "d10 gp", Lute, Dagger, [ALute], Costume, ProfessionTypeEnum.Charisma);
export const Innkeeper = new Profession(1, "Innkeeper", "d6 gp", CharismaSavingThrows, Club, [GroceryList], Common, ProfessionTypeEnum.Charisma);

export const Professions = [
  Blacksmith, Pickpocket, GongFarmer, Bookkeeper, Herbalist, Barker, Miner, Haberdasher, PigFarmer, TaxCollector,
  Sexton, Minstrel, Teamster, Orphan, Leatherworker, WizardsApprentice, Squire, Innkeeper
]
