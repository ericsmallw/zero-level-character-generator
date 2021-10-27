import INamesBusinessManager from "../interfaces/INamesBusinessManager";
import {inject, injectable} from "inversify";
import SexEnums from "../../enums/sexEnums";
import types from "../../inversify/types";
import INamesDataManager from "../interfaces/INamesDataManager";
import randomNumber from "random-number";

@injectable()
export default class NamesBusinessManager implements INamesBusinessManager {
  constructor(@inject(types.NamesDataManager) private readonly namesDataManager: INamesDataManager) {
  }

  getDragonbornName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getDragonbornFirstName(sex);
    const lastName = this.namesDataManager.getDragonbornLastName();
    return `${firstName} ${lastName}`;
  }

  getDwarfName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getDwarfFirstName(sex);
    const lastName = this.namesDataManager.getDwarfLastName();
    return `${firstName} ${lastName}`;
  }

  getElfName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getElfFirstName(sex);
    const lastName = this.namesDataManager.getElfLastName();
    return `${firstName} ${lastName}`;
  }

  getGnomeName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getGnomeFirstName(sex);
    const lastName = this.namesDataManager.getGnomeLastName();
    return `${firstName} ${lastName}`;
  }

  getHalfElfName(sex: SexEnums): string {
    const generator = randomNumber.generator({min: 0, max: 1});

    const firstName = generator() === 0
      ? this.namesDataManager.getElfFirstName(sex)
      : this.namesDataManager.getHumanFirstName(sex);

    const lastName = generator() === 0
      ? this.namesDataManager.getElfLastName()
      : this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getHalfOrcName(sex: SexEnums): string {
    const generator = randomNumber.generator({min: 0, max: 1});

    if(generator() === 0) {
      return this.namesDataManager.getHalfOrcFirstName(sex);
    }

    const firstName = generator() === 0
      ? this.namesDataManager.getHalfOrcFirstName(sex)
      : this.namesDataManager.getHumanFirstName(sex);

    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getHalflingName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getHalflingFirstName(sex);
    const lastName = this.namesDataManager.getHalflingLastName();

    return `${firstName} ${lastName}`;
  }

  getHumanName(sex: SexEnums): string {
    const firstName = this.namesDataManager.getHumanFirstName(sex);
    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

  getTieflingName(sex: SexEnums): string {
    const generator = randomNumber.generator({min: 0, max: 1});

    if(generator() === 0) {
      return this.namesDataManager.getTieflingFirstName(sex);
    }

    const firstName = generator() === 0
      ? this.namesDataManager.getTieflingFirstName(sex)
      : this.namesDataManager.getHumanFirstName(sex);

    const lastName = this.namesDataManager.getHumanLastName();

    return `${firstName} ${lastName}`;
  }

}
