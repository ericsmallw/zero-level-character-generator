import Profession from "../models/profession";
import {
  Acrobatics,
  AnimalHandling, Arcana, CharismaSavingThrows,
  ConSavingThrows, Deception, GlassblowersTools, HeavyArmor, History, Intimidation,
  Investigation, LeatherWorkersToolsProf, Lute,
  Medicine, Nature,
  Perception,
  Persuasion, Religion, SailingShip,
  SleightOfHand,
  SmithsTools, Stealth, StrengthSavingThrows, TinkersTools
} from "./proficiencies";
import {
  Blowgun,
  Club,
  Dagger,
  Handaxe, HandCrossbow,
  LightHammer,
  Longsword,
  Mace, Maul, Net,
  Pitchfork,
  Quarterstaff, Rapier, Scimitar,
  Shortsword, Sickle,
  Whip
} from "./weapons";
import {Common, Costume, Fine, Shield, Travelers, Vestments} from "./clothes";
import {
  Abacus, ADozenApples, ALute, ArcaneBook, BeggarCup, BlockAndTackle,
  CuredHam, DeadRatBag, DruidicFocusTotem,
  FineCloth, GlassblowersToolsItem, GroceryList,
  HealersKit, HolySymbolEmblem, HolySymbolReliquary, LeatherworkerTools,
  MinersTools, MoneySack, NobilityPapers,
  Pick, PortableTrampoline, Ringmail, Rope50Ft,
  SackOfManure, Soil,
  SpeakingTrumpet,
  ThievesTools
} from "./items";
import ProfessionTypeEnum from "../enums/professionTypeEnum";

export const Blacksmith = new Profession(1, "Blacksmith", "d12 sp", SmithsTools, LightHammer, [SmithsTools], Common, ProfessionTypeEnum.Strength);
export const Miner = new Profession(2, "Miner", "d20 cp", Investigation, Handaxe, [Pick, MinersTools], Common, ProfessionTypeEnum.Strength);
export const Teamster = new Profession(2, "Teamster", "d8 sp", StrengthSavingThrows, Whip, [BlockAndTackle], Common, ProfessionTypeEnum.Strength);
export const Bodyguard = new Profession(2, "Bodyguard", "d10 gp", HeavyArmor, Maul, [Ringmail], Travelers, ProfessionTypeEnum.Strength);
export const Plowman = new Profession(2, "Plowman", "d10 dp", Nature, Quarterstaff, [Soil], Common, ProfessionTypeEnum.Strength);

export const Pickpocket = new Profession(1, "Pickpocket", "d12 sp", SleightOfHand, Shortsword, [ThievesTools], Common, ProfessionTypeEnum.Dexterity);
export const Haberdasher = new Profession(2, "Haberdasher", "d12 gp", Persuasion , Dagger, [FineCloth], Fine, ProfessionTypeEnum.Dexterity);
export const Orphan = new Profession(2, "Orphan", "d4 cp", Stealth, Club, [BeggarCup], Common, ProfessionTypeEnum.Dexterity);
export const CircusAcrobat = new Profession(2, "Circus Acrobat", "d8 sp", Acrobatics, Scimitar, [PortableTrampoline], Costume, ProfessionTypeEnum.Dexterity);
export const GlassBlower = new Profession(2, "Glass Blower", "d10 sp", GlassblowersTools, Blowgun, [GlassblowersToolsItem], Common, ProfessionTypeEnum.Dexterity);

export const GongFarmer = new Profession(1, "GongFarmer", "d12 cp", ConSavingThrows, Club, [SackOfManure], Common, ProfessionTypeEnum.Constitution);
export const PigFarmer = new Profession(1, "PigFarmer", "d10 sp", AnimalHandling, Pitchfork, [CuredHam], Common, ProfessionTypeEnum.Constitution);
export const Leatherworker = new Profession(1, "Leatherworker", "d6 sp", LeatherWorkersToolsProf, Dagger, [LeatherworkerTools], Common, ProfessionTypeEnum.Constitution);
export const RatCatcher = new Profession(1, "Rat Catcher", "d12 cp", AnimalHandling, Net, [DeadRatBag], Common, ProfessionTypeEnum.Constitution);
export const Seaman = new Profession(1, "Seaman", "d8 sp", SailingShip, Shortsword, [Rope50Ft], Travelers, ProfessionTypeEnum.Constitution);

export const Bookkeeper = new Profession(1, "Bookkeeper", "d8 sp", Investigation, Dagger, [Abacus], Common, ProfessionTypeEnum.Intelligence);
export const TaxCollector = new Profession(1, "Tax Collector", "d12 pp", Intimidation, Longsword, [MoneySack], Fine, ProfessionTypeEnum.Intelligence);
export const WizardsApprentice = new Profession(1, "Wizard's Apprentice", "d10 sp", Arcana, Quarterstaff, [ArcaneBook], Fine, ProfessionTypeEnum.Intelligence);
export const Apothecary = new Profession(1, "Apothecary", "d8 sp", Medicine, Sickle, [HealersKit], Common, ProfessionTypeEnum.Intelligence);
export const Tinker = new Profession(1, "Tinker", "d6 sp", TinkersTools, HandCrossbow, [], Common, ProfessionTypeEnum.Intelligence);

export const Herbalist = new Profession(1, "Herbalist", "d12 sp", Medicine, Club, [HealersKit], Common, ProfessionTypeEnum.Wisdom);
export const Sexton = new Profession(1, "Sexton", "d12 gp", Religion, Mace, [HolySymbolEmblem], Vestments, ProfessionTypeEnum.Wisdom);
export const Squire = new Profession(1, "Squire", "d6 sp", History, Longsword, [Shield], Fine, ProfessionTypeEnum.Wisdom);
export const Friar = new Profession(1, "Friar", "d8 sp", Religion, Quarterstaff, [HolySymbolReliquary], Travelers, ProfessionTypeEnum.Wisdom);
export const Woodward = new Profession(1, "Woodward", "d8 sp", Nature, Quarterstaff, [DruidicFocusTotem], Common, ProfessionTypeEnum.Wisdom);

export const Barker = new Profession(1, "Barker", "d8 gp", Perception, Club, [SpeakingTrumpet], Costume, ProfessionTypeEnum.Charisma);
export const Minstrel = new Profession(1, "Minstrel", "d10 gp", Lute, Dagger, [ALute], Costume, ProfessionTypeEnum.Charisma);
export const Innkeeper = new Profession(1, "Innkeeper", "d6 gp", CharismaSavingThrows, Club, [GroceryList], Common, ProfessionTypeEnum.Charisma);
export const LowNoble = new Profession(1, "Low Noble", "d12 pp", Deception, Rapier, [NobilityPapers], Fine, ProfessionTypeEnum.Charisma);
export const Costermonger = new Profession(1, "Costermonger", "d6 sp", Persuasion, Quarterstaff, [ADozenApples], Common, ProfessionTypeEnum.Charisma);

export const Professions = [
  Blacksmith, Pickpocket, GongFarmer, Bookkeeper, Herbalist, Barker, Miner, Haberdasher, PigFarmer, TaxCollector,
  Sexton, Minstrel, Teamster, Orphan, Leatherworker, WizardsApprentice, Squire, Innkeeper, Bodyguard, RatCatcher, Seaman,
  Plowman, Apothecary, Tinker, Friar, Woodward, LowNoble, Costermonger
]
