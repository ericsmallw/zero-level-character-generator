import INamesDataManager from "../interfaces/INamesDataManager";
import {inject, injectable} from "inversify";
import types from "../../inversify/types";
import INamesDataObject from "../interfaces/INamesDataObject";

@injectable()
export default class NamesDataManager implements INamesDataManager {
  constructor(@inject(types.NamesDataObject) private readonly _dao: INamesDataObject) {
  }

  getFirstName(sex: number): string {
        return this._dao.getFirstName(sex);
    }

  getDragonbornFirstName(sex: number): string {
    return this._dao.getDragonbornFirstName(sex);
  }

  getDragonbornLastName(): string {
    return this._dao.getDragonbornLastName();
  }

  getDwarfFirstName(sex: number): string {
    return this._dao.getDwarfFirstName(sex);
  }

  getDwarfLastName(): string {
    return this._dao.getDwarfLastName();
  }

  getElfFirstName(sex: number): string {
    return this._dao.getElfFirstName(sex);
  }

  getElfLastName(): string {
    return this._dao.getElfLastName();
  }

  getGnomeFirstName(sex: number): string {
    return this._dao.getGnomeFirstName(sex);
  }

  getGnomeLastName(): string {
    return this._dao.getGnomeLastName();
  }

  getOrcFirstName(sex: number): string {
    return this._dao.getOrcFirstName(sex);
  }

  getHalflingFirstName(sex: number): string {
    return this._dao.getHalflingFirstName(sex);
  }

  getHalflingLastName(): string {
    return this._dao.getHalflingLastName();
  }

  getHumanFirstName(sex: number): string {
    return this._dao.getHumanFirstName(sex);
  }

  getHumanLastName(): string {
    return this._dao.getHumanLastName();
  }

  getTieflingFirstName(sex: number): string {
    return this._dao.getTieflingFirstName(sex);
  }

}
