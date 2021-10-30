import {Character} from "../../models/character";
import RacialMix from "../../enums/racialMixEnum";
import SexEnums from "../../enums/sexEnums";

export default interface ICharactersBusinessManager {
  generateCharacter(racialMix: RacialMix, sex: SexEnums, minAge: number, maxAge: number): Promise<Character>;
}
