import Profession from "../models/profession";
import {ConSavingThrows, Investigation, Medicine, Perception, SleightOfHand, SmithsTools} from "./proficiencies";
import {Club, Dagger, LightHammer, Shortsword} from "./weapons";
import {Common, Costume} from "./clothes";
import {Abacus, HealersKit, SackOfManure, SpeakingTrumpet, ThievesTools} from "./items";
import ProfessionTypeEnum from "../enums/professionTypeEnum";

export const Blacksmith = new Profession(1, "Blacksmith", "d12 sp", SmithsTools, LightHammer, SmithsTools, Common, ProfessionTypeEnum.Strength);

export const Pickpocket = new Profession(1, "Pickpocket", "d12 gp", SleightOfHand, Shortsword, ThievesTools, Common, ProfessionTypeEnum.Dexterity);

export const GongFarmer = new Profession(1, "GongFarmer", "d12 cp", ConSavingThrows, Club, SackOfManure, Common, ProfessionTypeEnum.Constitution);

export const Bookkeeper = new Profession(1, "Bookkeeper", "d8 sp", Investigation, Dagger, Abacus, Common, ProfessionTypeEnum.Intelligence);

export const Herbalist = new Profession(1, "Herbalist", "d12 sp", Medicine, Club, HealersKit, Common, ProfessionTypeEnum.Wisdom);

export const Barker = new Profession(1, "Barker", "d8 gp", Perception, Club, SpeakingTrumpet, Costume, ProfessionTypeEnum.Charisma);

export const Professions = [
  Blacksmith, Pickpocket, GongFarmer, Bookkeeper, Herbalist, Barker
]
