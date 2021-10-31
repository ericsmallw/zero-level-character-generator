import 'reflect-metadata';
import INamesDataObject from "../interfaces/INamesDataObject";
import {injectable} from "inversify";
import {FirstNames, LastNames} from "../../constants/names";
import RaceEnums from "../../enums/raceEnums";
import SexEnums from "../../enums/sexEnums";

@injectable()
export default class NamesDataObject implements INamesDataObject {

  getDragonbornFirstName(sex: SexEnums): string {
    const dragonBornFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Dragonborn && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });
    const randomName = dragonBornFirstNames[Math.floor(Math.random() * dragonBornFirstNames.length)];
    return randomName.value;
  }

  getDragonbornLastName(): string {
    const dragonBornLastNames = LastNames.filter(name => name.race === RaceEnums.Dragonborn);
    const randomName = dragonBornLastNames[Math.floor(Math.random() * dragonBornLastNames.length)];
    return randomName.value;
  }

  getDwarfFirstName(sex: SexEnums): string {
    const dwarfFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Dwarf && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });
    const randomName = dwarfFirstNames[Math.floor(Math.random() * dwarfFirstNames.length)];
    return randomName.value;
  }

  getDwarfLastName(): string {
    const dwarfLastNames = LastNames.filter(name => name.race === RaceEnums.Dwarf);
    const randomName = dwarfLastNames[Math.floor(Math.random() * dwarfLastNames.length)];
    return randomName.value;
  }

  getElfFirstName(sex: SexEnums): string {
    const elfFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Elf && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });

    const randomName = elfFirstNames[Math.floor(Math.random() * elfFirstNames.length)];
    return randomName.value;
  }

  getElfLastName(): string {
    const elfLastNames = LastNames.filter(name => name.race === RaceEnums.Elf);
    const randomName = elfLastNames[Math.floor(Math.random() * elfLastNames.length)];
    return randomName.value;
  }

  getGnomeFirstName(sex: SexEnums): string {
    const gnomeFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Gnome && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });

    const randomName = gnomeFirstNames[Math.floor(Math.random() * gnomeFirstNames.length)];
    return randomName.value;
  }

  getGnomeLastName(): string {
    const gnomeLastNames = LastNames.filter(name => name.race === RaceEnums.Gnome);
    const randomName = gnomeLastNames[Math.floor(Math.random() * gnomeLastNames.length)];
    return randomName.value;
  }

  getOrcFirstName(sex: SexEnums): string {
    const halfOrcFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.HalfOrc && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });
    const randomName = halfOrcFirstNames[Math.floor(Math.random() * halfOrcFirstNames.length)];
    return randomName.value;
  }

  getHalflingFirstName(sex: SexEnums): string {
    const halflingFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Halfling && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });
    const randomName = halflingFirstNames[Math.floor(Math.random() * halflingFirstNames.length)];
    return randomName.value;
  }

  getHalflingLastName() {
    const halflingLastNames = LastNames.filter(name => name.race === RaceEnums.Halfling);
    const randomName = halflingLastNames[Math.floor(Math.random() * halflingLastNames.length)];
    return randomName.value;
  }

  getHumanFirstName(sex: SexEnums): string {
    const humanFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Human && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });

    const randomName = humanFirstNames[Math.floor(Math.random() * humanFirstNames.length)];
    return randomName.value;
  }

  getHumanLastName(): string {
    const humanLastNames = LastNames.filter(name => name.race == RaceEnums.Human);
    const randomName = humanLastNames[Math.floor(Math.random() * humanLastNames.length)];
    return randomName.value;
  }

  getTieflingFirstName(sex: SexEnums): string {
    const tieflingFirstNames = FirstNames.filter(name => {
      return name.race === RaceEnums.Tiefling && SexEnums[name.sex.toString() as keyof typeof SexEnums] === sex;
    });
    const randomName = tieflingFirstNames[Math.floor(Math.random() * tieflingFirstNames.length)];
    return randomName.value;
  }
}
