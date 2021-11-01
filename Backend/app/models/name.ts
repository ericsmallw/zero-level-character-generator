import RaceEnum from "../enums/raceEnum";
import SexEnum from "../enums/sexEnum";

export default class Name {
  constructor(value: string, race: number, sex: number) {
    this.sex = sex;
    this.value = value;
    this.race = race;
  }

  value: string;
  sex: number;
  race: number;
}
