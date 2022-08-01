import INamesBusinessManager from "../interfaces/INamesBusinessManager";
import {inject, injectable} from "inversify";
import types from "../../inversify/types";
import INamesDataManager from "../interfaces/INamesDataManager";
import randomNumber from "random-number";

@injectable()
export default class NamesBusinessManager implements INamesBusinessManager {
  constructor(@inject(types.NamesDataManager) private readonly namesDataManager: INamesDataManager) {
  }

  getDragonbornName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getDragonbornLastName();
    return `${firstName} ${lastName}`;
  }

  getDwarfName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getDwarfLastName();
    return `${firstName} ${lastName}`;
  }

  getElfName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getElfLastName();
    return `${firstName} ${lastName}`;
  }

  getGnomeName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getGnomeLastName();
    return `${firstName} ${lastName}`;
  }

  getHalfElfName(sex: number): string {
    const generator = randomNumber.generator({min: 0, max: 1, integer: true});

    const firstName = this.namesDataManager.getHumanFirstName(sex);

    const lastName = generator() === 0
      ? this.namesDataManager.getElfLastName()
      : this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getHalfOrcName(sex: number): string {
    const generator = randomNumber.generator({min: 0, max: 1, integer: true});

    if(generator() === 0) {
      return this.namesDataManager.getOrcFirstName(sex);
    }

    const firstName = generator() === 0
      ? this.namesDataManager.getOrcFirstName(sex)
      : this.namesDataManager.getFirstName(sex);

    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getHalflingName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getHalflingLastName();

    return `${firstName} ${lastName}`;
  }

  getHumanName(sex: number): string {
    const firstName = this.namesDataManager.getFirstName(sex);
    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getTieflingName(sex: number): string {
    const generator = randomNumber.generator({min: 0, max: 1, integer: true});

    if(generator() === 0) {
      return this.namesDataManager.getFirstName(sex);
    }

    const firstName = this.namesDataManager.getFirstName(sex);

    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

}
