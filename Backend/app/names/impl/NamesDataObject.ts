import 'reflect-metadata';
import INamesDataObject from "../interfaces/INamesDataObject";
import {injectable} from "inversify";
import {FirstNames, LastNames} from "../../constants/names";
import RaceEnum from "../../enums/raceEnum";

@injectable()
export default class NamesDataObject implements INamesDataObject {

  getDragonbornFirstName(sex: number): string {
    const dragonBornFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Dragonborn && name.sex === sex;
    });

    const randomName = dragonBornFirstNames[Math.floor(Math.random() * dragonBornFirstNames.length)];
    return randomName.value;
  }

  getDragonbornLastName(): string {
    const dragonBornLastNames = LastNames.filter(name => name.race === RaceEnum.Dragonborn);
    const randomName = dragonBornLastNames[Math.floor(Math.random() * dragonBornLastNames.length)];
    return randomName.value;
  }

  getDwarfFirstName(sex: number): string {
    const dwarfFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Dwarf && name.sex === sex;
    });

    const randomName = dwarfFirstNames[Math.floor(Math.random() * dwarfFirstNames.length)];
    return randomName.value;
  }

  getDwarfLastName(): string {
    const dwarfLastNames = LastNames.filter(name => name.race === RaceEnum.Dwarf);
    const randomName = dwarfLastNames[Math.floor(Math.random() * dwarfLastNames.length)];
    return randomName.value;
  }

  getElfFirstName(sex: number): string {
    const elfFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Elf && name.sex === sex;
    });

    const randomName = elfFirstNames[Math.floor(Math.random() * elfFirstNames.length)];
    return randomName.value;
  }

  getElfLastName(): string {
    const elfLastNames = LastNames.filter(name => name.race === RaceEnum.Elf);
    const randomName = elfLastNames[Math.floor(Math.random() * elfLastNames.length)];
    return randomName.value;
  }

  getGnomeFirstName(sex: number): string {
    const gnomeFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Gnome && name.sex === sex;
    });

    const randomName = gnomeFirstNames[Math.floor(Math.random() * gnomeFirstNames.length)];
    return randomName.value;
  }

  getGnomeLastName(): string {
    const gnomeLastNames = LastNames.filter(name => name.race === RaceEnum.Gnome);
    const randomName = gnomeLastNames[Math.floor(Math.random() * gnomeLastNames.length)];
    return randomName.value;
  }

  getOrcFirstName(sex: number): string {
    const halfOrcFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.HalfOrc && name.sex === sex;
    });
    const randomName = halfOrcFirstNames[Math.floor(Math.random() * halfOrcFirstNames.length)];
    return randomName.value;
  }

  getHalflingFirstName(sex: number): string {
    const halflingFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Halfling && name.sex === sex;
    });
    const randomName = halflingFirstNames[Math.floor(Math.random() * halflingFirstNames.length)];
    return randomName.value;
  }

  getHalflingLastName() {
    const halflingLastNames = LastNames.filter(name => name.race === RaceEnum.Halfling);
    const randomName = halflingLastNames[Math.floor(Math.random() * halflingLastNames.length)];
    return randomName.value;
  }

  getHumanFirstName(sex: number): string {
    const humanFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Human && name.sex === sex;
    });

    const randomName = humanFirstNames[Math.floor(Math.random() * humanFirstNames.length)];
    return randomName.value;
  }

  getHumanLastName(): string {
    const humanLastNames = LastNames.filter(name => name.race == RaceEnum.Human);
    const randomName = humanLastNames[Math.floor(Math.random() * humanLastNames.length)];
    return randomName.value;
  }

  getTieflingFirstName(sex: number): string {
    const tieflingFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnum.Tiefling && name.sex === sex;
    });

    const randomName = tieflingFirstNames[Math.floor(Math.random() * tieflingFirstNames.length)];
    return randomName.value;
  }
}
