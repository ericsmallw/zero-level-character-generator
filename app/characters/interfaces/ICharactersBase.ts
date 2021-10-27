import Race from "../../models/race";
import Profession from "../../models/profession";

export default interface ICharactersBase {
  getName(): Promise<string>;
  getRaceByName(name: string): Promise<Race | undefined>;
  getProfession(): Promise<Profession | undefined>;
}
