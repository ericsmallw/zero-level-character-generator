import SizeEnum from "../enums/sizeEnum";
import RaceEnum from "../enums/raceEnum";
import AbilityBonus from "./abilityBonus";

export default class Race {
  id: number;
  name: string;
  size: SizeEnum;
  speed: number;
  extraLanguage: string;
  abilityBonus: AbilityBonus;
  racialAbility: string;
}
