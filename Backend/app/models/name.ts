import RaceEnums from "../enums/raceEnums";
import SexEnums from "../enums/sexEnums";

export default class Name {
  constructor(value: string, race: RaceEnums, sex: SexEnums) {
    this.sex = sex;
    this.value = value;
    this.race = race;
  }

  value: string;
  sex: SexEnums;
  race: RaceEnums;
}
