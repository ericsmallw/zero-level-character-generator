import 'reflect-metadata';
import ICharactersDataManager from "../interfaces/ICharactersDataManager";
import Profession from "../../models/profession";
import Race from "../../models/race";
import {inject, injectable} from "inversify";
import types from "../../inversify/types";
import ICharactersDataObject from "../interfaces/ICharactersDataObject";

// @ts-ignore
@injectable()
export default class CharactersDataManager implements ICharactersDataManager {
  constructor(
    @inject(types.CharactersDataObject) private readonly charactersDataObject: ICharactersDataObject
  ) {
  }

  getName(): Promise<string> {
    return this.charactersDataObject.getName();
  }

  getProfession(): Promise<Profession | undefined> {
    return this.charactersDataObject.getProfession();
  }

  getRaceByName(name: string): Promise<Race | undefined> {
    return Promise.resolve(this.charactersDataObject.getRaceByName(name));
  }

}
