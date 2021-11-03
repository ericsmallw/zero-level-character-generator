import Profession from "../models/profession";
import {
  Acrobatics,
  AnimalHandling, Arcana, BonusLanguages, BrewersSupplies, CarpenterTools, CartographersTools, CharismaSavingThrows,
  ConSavingThrows, CooksUtensils, Deception, GlassblowersTools, Handaxes, HeavyArmor, History, Insight, Intimidation,
  Investigation, LeatherWorkersToolsProf, Lute, MasonsTools,
  Medicine, Nature, NavigatorsTools, PaintersSupplies,
  Perception, Performance,
  Persuasion, PottersTools, Religion, SailingShip, SimpleWeapons,
  SleightOfHand,
  SmithsTools, Stealth, StrengthSavingThrows, Survival, TinkersTools, WeaversTools, WoodcarversTools
} from "./proficiencies";
import {
  Blowgun, BoneKnife, ButchersKnife, CastIronPan, Chisel,
  Club,
  Dagger, Flail, Greataxe,
  Handaxe, HandCrossbow,
  LightHammer,
  Longsword,
  Mace, Maul, Net,
  Pitchfork,
  Quarterstaff, Rapier, RollingPin, Scimitar, Scissors,
  Shortsword, Sickle, SteelBeerStein,
  Whip
} from "./weapons";
import {Common, Costume, Fine, Travelers, Vestments} from "./clothes";
import {
  Abacus,
  ADozenApples,
  ALute, AnimalBones,
  ArcaneBook, BagOfTrinkets, Basket,
  BeggarCup,
  Bell,
  BlockAndTackle, Caltrops,
  ChainShirt, CircusFlier,
  CuredHam, CutWood,
  DeadRatBag, DeerSkin,
  DisguiseKit,
  DruidicFocusTotem,
  FineCandles,
  FineCloth,
  FishingTackle,
  GlassblowersToolsItem,
  GroceryList,
  HealersKit,
  HideArmor,
  HolySymbolEmblem,
  HolySymbolReliquary,
  Jerky,
  JournalPen,
  LeatherArmor,
  LeatherworkerTools,
  Lock, MetalBucket,
  MinersTools,
  MoneySack,
  NobilityPapers, OfficialPapers, PaddedArmor,
  Pick,
  PortableTrampoline,
  Ringmail,
  Rope50Ft,
  SackOfManure,
  SaddleBags,
  SchoolBook,
  Shield,
  Soil,
  SpeakingTrumpet, StoneBlocks,
  ThievesTools, Towel
} from "./items";
import ProfessionTypeEnum from "../enums/professionTypeEnum";

// strength professions
export const Blacksmith = new Profession(1, "Blacksmith", "d12 sp", SmithsTools, LightHammer, [], Common, ProfessionTypeEnum.Strength);
export const Miner = new Profession(2, "Miner", "d20 cp", Investigation, Handaxe, [Pick, MinersTools], Common, ProfessionTypeEnum.Strength);
export const Teamster = new Profession(2, "Teamster", "d8 sp", StrengthSavingThrows, Whip, [BlockAndTackle], Common, ProfessionTypeEnum.Strength);
export const Bodyguard = new Profession(2, "Bodyguard", "d10 gp", HeavyArmor, Maul, [Ringmail], Travelers, ProfessionTypeEnum.Strength);
export const Plowman = new Profession(2, "Plowman", "d10 dp", Nature, Quarterstaff, [Soil], Common, ProfessionTypeEnum.Strength);
export const Rough = new Profession(2, "Rough", "d6 sp", Intimidation, Club, [LeatherArmor], Common, ProfessionTypeEnum.Strength);
export const Butcher = new Profession(2, "Butcher", "d10 sp", Handaxes, ButchersKnife, [Jerky], Common, ProfessionTypeEnum.Strength);
export const Gladiator = new Profession(2, "Gladiator", "d12 gp", SimpleWeapons, Net, [ChainShirt], Travelers, ProfessionTypeEnum.Strength);
export const Woodcutter = new Profession(2, "Woodcutter", "d6 sp", Nature, Handaxe, [CutWood], Common, ProfessionTypeEnum.Strength);
export const Carpenter = new Profession(2, "Carpenter", "d6 gp", CarpenterTools, LightHammer, [], Common, ProfessionTypeEnum.Strength);
export const Milkman = new Profession(2, "Milkman/Milkmaid", "d8 sp", AnimalHandling, Club, [MetalBucket], Common, ProfessionTypeEnum.Strength);
export const Executioner = new Profession(2, "Executioner", "d12 sp", Intimidation, Greataxe, [Basket], Common, ProfessionTypeEnum.Strength);
export const Mercenary = new Profession(2, "Mercenary", "d12 sp", SimpleWeapons, Shortsword, [LeatherArmor], Travelers, ProfessionTypeEnum.Strength);
export const BoneCarver = new Profession(2, "Bone Carver", "d6 sp", WoodcarversTools, BoneKnife, [AnimalBones], Common, ProfessionTypeEnum.Strength);
export const Mason = new Profession(2, "Mason", "d10 cp", MasonsTools, LightHammer, [], Common, ProfessionTypeEnum.Strength);

// dexterity professions
export const Pickpocket = new Profession(1, "Pickpocket", "d12 sp", SleightOfHand, Shortsword, [ThievesTools], Common, ProfessionTypeEnum.Dexterity);
export const Haberdasher = new Profession(2, "Haberdasher", "d12 gp", Persuasion , Dagger, [FineCloth], Fine, ProfessionTypeEnum.Dexterity);
export const Orphan = new Profession(2, "Orphan", "d4 cp", Stealth, Club, [BeggarCup], Common, ProfessionTypeEnum.Dexterity);
export const CircusAcrobat = new Profession(2, "Circus Acrobat", "d8 sp", Acrobatics, Scimitar, [PortableTrampoline], Costume, ProfessionTypeEnum.Dexterity);
export const GlassBlower = new Profession(2, "Glass Blower", "d10 sp", GlassblowersTools, Blowgun, [GlassblowersToolsItem], Common, ProfessionTypeEnum.Dexterity);
export const Messenger = new Profession(2, "Messenger", "d6 sp", Persuasion, Quarterstaff, [Bell], Travelers, ProfessionTypeEnum.Dexterity);
export const Locksmith = new Profession(2, "Locksmith", "d4 gp", ThievesTools, Dagger, [Lock], Common, ProfessionTypeEnum.Dexterity);
export const Weaver = new Profession(2, "Weaver", "d12 sp", WeaversTools, Dagger, [], Common, ProfessionTypeEnum.Dexterity);
export const Hunter = new Profession(2, "Hunter", "d10 sp", Nature, Shortsword, [DeerSkin], Common, ProfessionTypeEnum.Dexterity);
export const Contortionist = new Profession(2, "Contortionist", "d6 gp", Performance, Flail, [CircusFlier], Common, ProfessionTypeEnum.Dexterity);
export const Potter = new Profession(2, "Potter", "d12 sp", PottersTools, Quarterstaff, [], Common, ProfessionTypeEnum.Dexterity);
export const Bandit = new Profession(2, "Bandit", "d6 gp", Stealth, Shortsword, [Caltrops], Common, ProfessionTypeEnum.Dexterity);
export const Basketweaver = new Profession(2, "Basketweaver", "d4 cp", WeaversTools, Dagger, [], Common, ProfessionTypeEnum.Dexterity);
export const Bookbinder = new Profession(2, "Bookbinder", "d6 sp", Performance, Flail, [CircusFlier], Common, ProfessionTypeEnum.Dexterity);
export const Contortionist = new Profession(2, "Contortionist", "d6 gp", Performance, Flail, [CircusFlier], Common, ProfessionTypeEnum.Dexterity);

export const GongFarmer = new Profession(1, "GongFarmer", "d12 cp", ConSavingThrows, Club, [SackOfManure], Common, ProfessionTypeEnum.Constitution);
export const PigFarmer = new Profession(1, "PigFarmer", "d10 sp", AnimalHandling, Pitchfork, [CuredHam], Common, ProfessionTypeEnum.Constitution);
export const Leatherworker = new Profession(1, "Leatherworker", "d6 sp", LeatherWorkersToolsProf, Dagger, [LeatherworkerTools], Common, ProfessionTypeEnum.Constitution);
export const RatCatcher = new Profession(1, "Rat Catcher", "d12 cp", AnimalHandling, Net, [DeadRatBag], Common, ProfessionTypeEnum.Constitution);
export const Seaman = new Profession(1, "Seaman", "d8 sp", SailingShip, Shortsword, [Rope50Ft], Travelers, ProfessionTypeEnum.Constitution);
export const TavernCook = new Profession(1, "Tavern Cook", "d6 sp", CooksUtensils, CastIronPan, [], Common, ProfessionTypeEnum.Constitution);
export const Brewer = new Profession(1, "Brewer", "d6 gp", BrewersSupplies, SteelBeerStein, [], Common, ProfessionTypeEnum.Constitution);
export const Chandler = new Profession(1, "Chandler", "d10 sp", Investigation, Scissors, [FineCandles], Common, ProfessionTypeEnum.Constitution);
export const Apiarist = new Profession(1, "Apiarist", "d6 gp", AnimalHandling, Quarterstaff, [PaddedArmor], Common, ProfessionTypeEnum.Constitution);
export const StoneCarver = new Profession(1, "Stone Carver", "d6 sp", Performance, Chisel, [StoneBlocks], Common, ProfessionTypeEnum.Constitution);

export const Bookkeeper = new Profession(1, "Bookkeeper", "d8 sp", Investigation, Dagger, [Abacus], Common, ProfessionTypeEnum.Intelligence);
export const TaxCollector = new Profession(1, "Tax Collector", "d12 pp", Intimidation, Longsword, [MoneySack], Fine, ProfessionTypeEnum.Intelligence);
export const WizardsApprentice = new Profession(1, "Wizard's Apprentice", "d10 sp", Arcana, Quarterstaff, [ArcaneBook], Fine, ProfessionTypeEnum.Intelligence);
export const Apothecary = new Profession(1, "Apothecary", "d8 sp", Medicine, Sickle, [HealersKit], Common, ProfessionTypeEnum.Intelligence);
export const Tinker = new Profession(1, "Tinker", "d6 sp", TinkersTools, HandCrossbow, [], Common, ProfessionTypeEnum.Intelligence);
export const Tutor = new Profession(1, "Tutor", "d8 sp", History, Quarterstaff, [SchoolBook], Common, ProfessionTypeEnum.Intelligence);
export const Navigator = new Profession(1, "Navigator", "d6 sp", NavigatorsTools, Shortsword, [], Common, ProfessionTypeEnum.Intelligence);
export const PastryCook = new Profession(1, "Pastry Cook", "d8 sp", CooksUtensils, RollingPin, [], Common, ProfessionTypeEnum.Intelligence);
export const Cartographer = new Profession(1, "Cartographer", "d10 sp", CartographersTools, Dagger, [], Travelers, ProfessionTypeEnum.Intelligence);
export const Interpreter = new Profession(1, "Interpreter", "d8 gp", BonusLanguages, Quarterstaff, [], Common, ProfessionTypeEnum.Intelligence);

export const Herbalist = new Profession(1, "Herbalist", "d12 sp", Medicine, Club, [HealersKit], Common, ProfessionTypeEnum.Wisdom);
export const Sexton = new Profession(1, "Sexton", "d12 gp", Religion, Mace, [HolySymbolEmblem], Vestments, ProfessionTypeEnum.Wisdom);
export const Squire = new Profession(1, "Squire", "d6 sp", History, Longsword, [Shield], Fine, ProfessionTypeEnum.Wisdom);
export const Friar = new Profession(1, "Friar", "d8 sp", Religion, Quarterstaff, [HolySymbolReliquary], Travelers, ProfessionTypeEnum.Wisdom);
export const Woodward = new Profession(1, "Woodward", "d8 sp", Nature, Quarterstaff, [DruidicFocusTotem], Common, ProfessionTypeEnum.Wisdom);
export const Tracker = new Profession(1, "Tracker", "d8 sp", Survival, Shortsword, [HideArmor], Common, ProfessionTypeEnum.Wisdom);
export const Painter = new Profession(1, "Painter", "d8 cp", PaintersSupplies, Dagger, [], Common, ProfessionTypeEnum.Wisdom);
export const Ostler = new Profession(1, "Ostler", "d8 sp", AnimalHandling, Whip, [SaddleBags], Common, ProfessionTypeEnum.Wisdom);
export const Baker = new Profession(1, "Baker", "d6 sp", CooksUtensils, RollingPin, [], Common, ProfessionTypeEnum.Wisdom);
export const Servant = new Profession(1, "Servant", "d12 cp", Perception, Club, [Towel], Common, ProfessionTypeEnum.Wisdom);

export const Barker = new Profession(1, "Barker", "d8 gp", Perception, Club, [SpeakingTrumpet], Costume, ProfessionTypeEnum.Charisma);
export const Minstrel = new Profession(1, "Minstrel", "d10 gp", Lute, Dagger, [ALute], Costume, ProfessionTypeEnum.Charisma);
export const Innkeeper = new Profession(1, "Innkeeper", "d6 gp", CharismaSavingThrows, Club, [GroceryList], Common, ProfessionTypeEnum.Charisma);
export const LowNoble = new Profession(1, "Low Noble", "d12 pp", Deception, Rapier, [NobilityPapers], Fine, ProfessionTypeEnum.Charisma);
export const Costermonger = new Profession(1, "Costermonger", "d6 sp", Persuasion, Quarterstaff, [ADozenApples], Common, ProfessionTypeEnum.Charisma);
export const Fishmonger = new Profession(1, "Fishmonger", "d6 sp", Perception, Dagger, [FishingTackle], Common, ProfessionTypeEnum.Charisma);
export const Mime = new Profession(1, "Mime", "d10 gp", Performance, Club, [DisguiseKit], Costume, ProfessionTypeEnum.Charisma);
export const Storyteller = new Profession(1, "Storyteller", "d12 sp", Performance, Dagger, [JournalPen], Costume, ProfessionTypeEnum.Charisma);
export const Diplomat = new Profession(1, "Diplomat", "d12 gp", Insight, Longsword, [BagOfTrinkets], Fine, ProfessionTypeEnum.Charisma);
export const Peddlar = new Profession(1, "Peddlar", "d10 sp", Persuasion, Club, [OfficialPapers], Costume, ProfessionTypeEnum.Charisma);

export const Professions = [
    Blacksmith, Pickpocket, GongFarmer, Bookkeeper, Herbalist, Barker, Miner, Haberdasher, PigFarmer, TaxCollector,
  Sexton, Minstrel, Teamster, Orphan, Leatherworker, WizardsApprentice, Squire, Innkeeper, Bodyguard, RatCatcher, Seaman,
  Plowman, Apothecary, Tinker, Friar, Woodward, LowNoble, Costermonger, Fishmonger, Mime, Storyteller, Tracker, Painter,
  Ostler, Tutor, Navigator, PastryCook, TavernCook, Brewer, Chandler, Messenger, Locksmith, Weaver, Rough, Butcher,
    Gladiator, Woodcutter, Carpenter, Hunter, Contortionist, Apiarist, StoneCarver, Cartographer, Interpreter, Barker,
    Servant, Diplomat, Peddlar
]
