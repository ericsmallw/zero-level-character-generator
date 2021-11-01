import {Character} from "../../models/character";

export default interface ICharactersBusinessManager {
  generateCharacter(racialMix: number, sex: number, minAge: number, maxAge: number): Promise<Character>;
}
