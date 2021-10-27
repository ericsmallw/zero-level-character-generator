import SizeEnum from "../enums/sizeEnum";
import RaceEnums from "../enums/raceEnums";
import AbilityBonus from "./abilityBonus";

export default class Race {
  id: RaceEnums;
  name: string;
  size: SizeEnum;
  speed: number;
  extraLanguage: string;
  abilityBonus: AbilityBonus;
  racialAbility: string;
}
