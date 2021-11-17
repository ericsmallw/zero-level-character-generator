import Profession from "../models/profession";
import {
  Acrobatics,
  AnimalHandling,
  Arcana,
  BonusLanguages,
  Bows,
  BrewersSupplies,
  CalligraphersSupplies,
  CarpenterTools,
  CartographersTools,
  CharismaSavingThrows,
  ConSavingThrows,
  CooksUtensils,
  Deception,
  GlassblowersTools,
  Handaxes,
  HeavyArmor,
  History,
  Insight,
  Intimidation,
  Investigation,
  LeatherWorkersToolsProf,
  Lute,
  MasonsTools,
  Medicine,
  Nature,
  NavigatorsTools,
  PaintersSupplies,
  Perception,
  Performance,
  Persuasion,
  PottersTools,
  Religion,
  SailingShip,
  SimpleWeapons,
  SleightOfHand,
  SmithsTools,
  Stealth,
  StrengthSavingThrows,
  Survival,
  TinkersTools,
  WeaversTools,
  WoodcarversTools,
  Athletics,
  SheepShears,
  ShortSwordProf,
  BowsAndCrossbows,
  CobblersTools,
  Drum,
  Daggers,
  Mauls,
  LandVehicles, JewelersTools
} from "./proficiencies";
import {
  Blowgun, BoneKnife, Broom, Brush, ButchersKnife, CastIronPan, Chisel,
  Club,
  Dagger, Flail, Greataxe, Greatclub,
  Handaxe, HandCrossbow, Knife, LightCrossbow,
  LightHammer, Longbow,
  Longsword,
  Mace, Maul, Net, OrnateDagger,
  Pitchfork,
  Quarterstaff, Rapier, RollingPin, Scimitar, Scissors, Shortbow,
  Shortsword, Sickle, SteelBeerStein,
  Whip, WoodenSpoon
} from "./weapons";
import {Common, Costume, Fine, Travelers, Vestments} from "./clothes";
import {
  Abacus,
  ADozenApples,
  ALute, AnimalBones,
  ArcaneBook, BagOfTrinkets, Basket,
  BeggarCup,
  Bell,
  BlockAndTackle, BouquetOfFlowers, BowStaves, Broomcorn, Caltrops,
  ChainShirt, Chest, ChickenCarcass, CircusFlier, CrystalBall,
  CuredHam, CutWood,
  DeadRatBag, DeerSkin,
  DisguiseKit,
  DruidicFocusTotem,
  FineCandles,
  FineCloth,
  FishingTackle,
  GlassblowersToolsItem, GrindingStone,
  GroceryList,
  HealersKit,
  HideArmor, HolySymbol,
  HolySymbolEmblem,
  HolySymbolReliquary, HuntingTrap, IronIngot, JawPliers,
  Jerky,
  JournalPen, Lantern, LawDecree,
  LeatherArmor, LeatherGloves,
  LeatherworkerTools,
  Lock, LyeSoap, MetalBucket,
  MinersTools,
  MoneySack,
  NobilityPapers, OfficialPapers, Oysters, PaddedArmor, Parchment,
  Pick,
  PortableTrampoline, QuiverOfArrows,
  Ringmail,
  Rope50Ft,
  SackOfManure,
  SaddleBags,
  SchoolBook, SetOfKeys, SheepSkin, SheetOfMetal,
  Shield, Shovel, SmallClock, SmeltingPot,
  Soil,
  SpeakingTrumpet, SpoolOfThread, StoneBlocks,
  ThievesTools, Towel, WagonBolts, WheelOfCheese, WoodenPlank
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
export const Grinder = new Profession(2, "Grinder", "d8 sp", Daggers, Dagger, [GrindingStone], Common, ProfessionTypeEnum.Strength);
export const Plattner = new Profession(2, "Plattner", "d8 sp", Mauls, Maul, [SheetOfMetal], Common, ProfessionTypeEnum.Strength);
export const Porter = new Profession(2, "Porter", "d8 cp", Perception, Broom, [LyeSoap], Common, ProfessionTypeEnum.Strength);
export const Jailer = new Profession(2, "Jailer", "d4 sp", Investigation, Club, [SetOfKeys], Common, ProfessionTypeEnum.Strength);
export const Wagoner = new Profession(2, "Wagoner", "d12 cp", LandVehicles, Whip, [WagonBolts], Common, ProfessionTypeEnum.Strength);


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
export const Bandit = new Profession(2, "Bandit", "d6 sp", Stealth, Shortsword, [Caltrops], Travelers, ProfessionTypeEnum.Dexterity);
export const BasketWeaver = new Profession(2, "BasketWeaver", "d4 cp", WeaversTools, Dagger, [], Common, ProfessionTypeEnum.Dexterity);
export const Bookbinder = new Profession(2, "Bookbinder", "d6 sp", CalligraphersSupplies, Knife, [SpoolOfThread], Common, ProfessionTypeEnum.Dexterity);
export const Fletcher = new Profession(2, "Fletcher", "d8 sp", Bows, Shortbow, [QuiverOfArrows], Common, ProfessionTypeEnum.Dexterity);
export const Gilder = new Profession(2, "Gilder", "d4 gp", JewelersTools, Knife, [SmeltingPot], Fine, ProfessionTypeEnum.Dexterity);
export const Miniaturist = new Profession(2, "Miniaturist", "d6 cp", PaintersSupplies, Brush, [], Common, ProfessionTypeEnum.Dexterity);
export const ChickenButcher = new Profession(2, "Chicken Butcher", "d6 cp", Handaxes, ButchersKnife, [ChickenCarcass], Common, ProfessionTypeEnum.Dexterity);
export const GloveMaker = new Profession(2, "Glove Maker", "d8 sp", LeatherworkerTools, Knife, [LeatherGloves], Common, ProfessionTypeEnum.Dexterity);
export const Jeweler = new Profession(2, "Jeweler", "d4 gp", JewelersTools, Dagger, [], Fine, ProfessionTypeEnum.Dexterity);
export const ScabbardMaker = new Profession(1, "Scabbard Maker", "d10 sp", LeatherworkerTools, Longsword, [], Common, ProfessionTypeEnum.Dexterity)

//constitution professions
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
export const Undertaker = new Profession(1, "Undertaker", "d8 sp", Insight, LightHammer, [BouquetOfFlowers], Fine, ProfessionTypeEnum.Constitution);
export const GraveDigger = new Profession(1, "Grave Digger", "d12 cp", Athletics, Greatclub, [Shovel], Common, ProfessionTypeEnum.Constitution);
export const Chestmaker = new Profession(1, "Chestmaker", "d12 cp", WoodcarversTools, Club, [Chest], Common, ProfessionTypeEnum.Constitution);
export const BroomMaker = new Profession(1, "Broom Maker", "d6 cp", WoodcarversTools, Broom, [Broomcorn], Common, ProfessionTypeEnum.Constitution);
export const SheepShearer = new Profession(1, "Stone Carver", "d4 sp", ShortSwordProf, Shortsword, [SheepSkin], Common, ProfessionTypeEnum.Constitution);
export const Parchmenter = new Profession(1, "Parchementer", "d6 sp", Investigation, Dagger, [Parchment], Common, ProfessionTypeEnum.Constitution);
export const Smelter = new Profession(1, "Smelter", "d8 sp", TinkersTools, LightHammer, [IronIngot], Common, ProfessionTypeEnum.Constitution);
export const Cooper = new Profession(1, "Cooper", "d8 cp", CarpenterTools, LightHammer, [WoodenPlank], Common, ProfessionTypeEnum.Constitution);
export const Haenyeo = new Profession(1, "Haenyeo (Diver)", "d6 sp", Athletics, Dagger, [Oysters], Common, ProfessionTypeEnum.Constitution);
export const Roofer = new Profession(1, "Roofer", "d12 cp", CarpenterTools, LightHammer, [], Common, ProfessionTypeEnum.Constitution);

//Intelligence occupations
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
export const Scrivener = new Profession(1, "Scrivener", "d8 gp", CalligraphersSupplies, Dagger, [], Common, ProfessionTypeEnum.Intelligence);
export const Banker = new Profession(1, "Banker", "d10 pp", Insight, Quarterstaff, [Abacus], Fine, ProfessionTypeEnum.Intelligence);
export const Barrister = new Profession(1, "Barrister", "d4 gp", Persuasion, Club, [LawDecree], Fine, ProfessionTypeEnum.Intelligence);
export const Clockmaker = new Profession(1, "Clockmaker", "d6 gp", TinkersTools, Dagger, [SmallClock], Common, ProfessionTypeEnum.Intelligence);
export const Lampwright = new Profession(1, "Lampwright", "d10 sp", GlassblowersTools, Quarterstaff, [Lantern], Common, ProfessionTypeEnum.Intelligence);

//Wisom occupations
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
export const Trapper = new Profession(1, "Trapper", "d12 sp", Survival, LightCrossbow, [HuntingTrap], Common, ProfessionTypeEnum.Wisdom);
export const Beadle = new Profession(1, "Beadle", "d12 cp", Religion, Quarterstaff, [HolySymbol], Vestments, ProfessionTypeEnum.Wisdom);
export const Cheesemaker = new Profession(1, "Cheesemaker", "d12 cp", CooksUtensils, Quarterstaff, [WheelOfCheese], Common, ProfessionTypeEnum.Wisdom);
export const Bowyer = new Profession(1, "Bowyer", "d4 sp", BowsAndCrossbows, Longbow, [BowStaves], Common, ProfessionTypeEnum.Wisdom);
export const Cobbler = new Profession(1, "Cobbler", "d12 cp", CobblersTools, Dagger, [], Common, ProfessionTypeEnum.Wisdom);

export const Barker = new Profession(1, "Barker", "d8 gp", Perception, Club, [SpeakingTrumpet], Costume, ProfessionTypeEnum.Charisma);
export const Minstrel = new Profession(1, "Minstrel", "d10 gp", Lute, Dagger, [ALute], Costume, ProfessionTypeEnum.Charisma);
export const Innkeeper = new Profession(1, "Innkeeper", "d6 gp", CharismaSavingThrows, Club, [GroceryList], Common, ProfessionTypeEnum.Charisma);
export const LowNoble = new Profession(1, "Low Noble", "d12 pp", Deception, Rapier, [NobilityPapers], Fine, ProfessionTypeEnum.Charisma);
export const Costermonger = new Profession(1, "Costermonger", "d6 sp", Persuasion, Quarterstaff, [ADozenApples], Common, ProfessionTypeEnum.Charisma);
export const Fishmonger = new Profession(1, "Fishmonger", "d6 sp", Perception, Dagger, [FishingTackle], Common, ProfessionTypeEnum.Charisma);
export const Mime = new Profession(1, "Mime", "d10 gp", Performance, Club, [DisguiseKit], Costume, ProfessionTypeEnum.Charisma);
export const Storyteller = new Profession(1, "Storyteller", "d12 sp", Performance, Dagger, [JournalPen], Costume, ProfessionTypeEnum.Charisma);
export const Diplomat = new Profession(1, "Diplomat", "d12 gp", Insight, Longsword, [BagOfTrinkets], Fine, ProfessionTypeEnum.Charisma);
export const Peddlar = new Profession(1, "Peddlar", "d10 sp", Persuasion, Club, [OfficialPapers], Travelers, ProfessionTypeEnum.Charisma);
export const FortuneTeller = new Profession(1, "Fortune-Teller", "d6 sp", Performance, OrnateDagger, [CrystalBall], Costume, ProfessionTypeEnum.Charisma);
export const Drummer = new Profession(1, "Drummer", "d8 sp", Drum, Shortsword, [], Travelers, ProfessionTypeEnum.Charisma);
export const Confectioner = new Profession(1, "Confectioner", "d8 cp", CooksUtensils, WoodenSpoon, [], Common, ProfessionTypeEnum.Charisma);
export const Milliner = new Profession(1, "Milliner", "d8 sp", WeaversTools, Dagger, [], Fine, ProfessionTypeEnum.Charisma);
export const Barber = new Profession(1, "Barber", "d6 sp", Medicine, Scissors, [JawPliers], Costume, ProfessionTypeEnum.Charisma);


export const Professions = [
    Blacksmith, Pickpocket, GongFarmer, Bookkeeper, Herbalist, Barker, Miner, Haberdasher, PigFarmer, TaxCollector,
  Sexton, Minstrel, Teamster, Orphan, Leatherworker, WizardsApprentice, Squire, Innkeeper, Bodyguard, RatCatcher, Seaman,
  Plowman, Apothecary, Tinker, Friar, Woodward, LowNoble, Costermonger, Fishmonger, Mime, Storyteller, Tracker, Painter,
  Ostler, Tutor, Navigator, PastryCook, TavernCook, Brewer, Chandler, Messenger, Locksmith, Weaver, Rough, Butcher,
    Gladiator, Woodcutter, Carpenter, Hunter, Contortionist, Apiarist, StoneCarver, Cartographer, Interpreter, Barker,
    Servant, Diplomat, Peddlar, Milkman, Executioner, Mercenary, BoneCarver, Mason, Potter, Bandit, BasketWeaver,
    Bookbinder, Fletcher, Undertaker, GraveDigger, Chestmaker, BroomMaker, SheepShearer, Scrivener, Banker, Barrister,
    Clockmaker, Lampwright, Trapper, Beadle, Cheesemaker, Bowyer, Cobbler, FortuneTeller, Drummer, Confectioner,
    Milliner, Barber, Grinder, Plattner, Porter, Jailer, Wagoner, Gilder, Miniaturist, ChickenButcher, GloveMaker,
    Jeweler, Parchmenter, Smelter, Cooper, Haenyeo, Roofer, GlassBlower
]
