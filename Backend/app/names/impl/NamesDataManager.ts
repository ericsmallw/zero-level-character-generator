import INamesDataManager from "../interfaces/INamesDataManager";
import SexEnums from "../../enums/sexEnums";
import {inject, injectable} from "inversify";
import types from "../../inversify/types";
import INamesDataObject from "../interfaces/INamesDataObject";

@injectable()
export default class NamesDataManager implements INamesDataManager {
  constructor(@inject(types.NamesDataObject) private readonly _dao: INamesDataObject) {
  }

  getDragonbornFirstName(sex: SexEnums): string {
    return this._dao.getDragonbornFirstName(sex);
  }

  getDragonbornLastName(): string {
    return this._dao.getDragonbornLastName();
  }

  getDwarfFirstName(sex: SexEnums): string {
    return this._dao.getDwarfFirstName(sex);
  }

  getDwarfLastName(): string {
    return this._dao.getDwarfLastName();
  }

  getElfFirstName(sex: SexEnums): string {
    return this._dao.getElfFirstName(sex);
  }

  getElfLastName(): string {
    return this._dao.getElfLastName();
  }

  getGnomeFirstName(sex: SexEnums): string {
    return this._dao.getGnomeFirstName(sex);
  }

  getGnomeLastName(): string {
    return this._dao.getGnomeLastName();
  }

  getOrcFirstName(sex: SexEnums): string {
    return this._dao.getOrcFirstName(sex);
  }

  getHalflingFirstName(sex: SexEnums): string {
    return this._dao.getHalflingFirstName(sex);
  }

  getHalflingLastName(): string {
    return this._dao.getHalflingLastName();
  }

  getHumanFirstName(sex: SexEnums): string {
    return this._dao.getHumanFirstName(sex);
  }

  getHumanLastName(): string {
    return this._dao.getHumanLastName();
  }

  getTieflingFirstName(sex: SexEnums): string {
    return this._dao.getTieflingFirstName(sex);
  }

}
