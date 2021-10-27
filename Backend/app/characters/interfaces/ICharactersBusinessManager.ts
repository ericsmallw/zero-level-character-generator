import {Character} from "../../models/character";
import RacialMix from "../../enums/racialMixEnum";

export default interface ICharactersBusinessManager {
  generateCharacter(racialMix: RacialMix): Promise<Character>;
}
