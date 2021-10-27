import 'reflect-metadata';
import ICharactersDataObject from "../interfaces/ICharactersDataObject";
import Profession from "../../models/profession";
import Race from "../../models/race";
import {injectable} from "inversify";
import Races from "../../constants/races";

// @ts-ignore
@injectable()
export default class CharactersDataObject implements  ICharactersDataObject {

  getName(): Promise<string> {
    return Promise.resolve("");
  }

  getProfession(): Promise<Profession | undefined> {
    return Promise.resolve(undefined);
  }

  async getRaceByName(name: string): Promise<Race | undefined> {
    return Races.find((race: Race) => race.name === name);
  }

}
