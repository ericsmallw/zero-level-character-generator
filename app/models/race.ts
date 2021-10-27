import SizeEnum from "../enums/sizeEnum";
import RaceEnums from "../enums/raceEnums";

export default class Race {
  id: RaceEnums;
  name: string;
  size: SizeEnum;
  speed: number;
  extraLanguage: string;
  abilityBonus: string;
  racialAbility: string;
}
