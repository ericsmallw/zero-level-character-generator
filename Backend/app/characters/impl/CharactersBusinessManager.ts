import 'reflect-metadata';
import ICharactersBusinessManager from '../interfaces/ICharactersBusinessManager';
import {Character} from '../../models/character';
import {inject, injectable} from 'inversify';
import types from '../../inversify/types';
import ICharactersDataManager from '../interfaces/ICharactersDataManager';
import RacialMix from '../../enums/racialMixEnum';
import randomNumber from 'random-number';
import {
  DefaultRacialMix,
  DragonbornAncestryTable,
  HighFantasyRacialMix,
  HumanDominatedRacialMix,
} from '../../constants';
import AbilityModifiers from '../../models/abilityModifiers';
import DragonbornAncestry from '../../models/dragonbornAncestry';
import Profession from '../../models/profession';
import ProfessionTypeEnum from '../../enums/professionTypeEnum';
import SexEnums from '../../enums/sexEnums';
import INamesBusinessManager from '../../names/interfaces/INamesBusinessManager';
import Race from '../../models/race';
import RaceEnums from '../../enums/raceEnums';
import IProfessionsDataManager from "../../professions/interfaces/IProfessionsDataManager";

// @ts-ignore
@injectable()
export default class CharactersBusinessManager implements ICharactersBusinessManager {
  constructor(
    @inject(types.CharactersDataManager) private readonly _charactersDataManager: ICharactersDataManager,
    @inject(types.NamesBusinessManager) private readonly _namesBusinessManager: INamesBusinessManager,
    @inject(types.ProfessionsDataManager)  private readonly _professionsDataManager: IProfessionsDataManager
  ) {
  }

  async generateCharacter(racialMix: RacialMix, sex: SexEnums): Promise<Character> {
    const raceName = this.selectRace(racialMix);

    const character = new Character();
    character.age = this.getAge();
    character.race = await this._charactersDataManager.getRaceByName(raceName);
    let abilityModifiers = this.getAbilityModifiers(character.race);
    const randomSex = String(sex) == SexEnums[2] ? this.getSex() : sex;
    character.sex = SexEnums[randomSex];
    character.name = this.getName(character.race, randomSex);
    character.abilityModifiers = abilityModifiers;
    character.hitPoints = this.getHitPoints();
    character.proficiency = 2;
    character.initiative = abilityModifiers.Dexterity;
    character.armorClass = abilityModifiers.DexterityModifier + 10;
    character.profession = await this.setProfession(abilityModifiers);
    character.coin = character.profession ? this.getCoin(character.profession.coin) : "2 sp"

    if (raceName === 'Dragonborn') {
      character.dragonBornAncestry = this.getDragonBornAncestry();
    }

    return character;
  }

  private selectRace(racialMix: RacialMix): string {
    const numberGenerator = randomNumber.generator({
      min: 1,
      max: 100,
    });

    const number = Math.round(numberGenerator());

    let selectedRacialMix: any = DefaultRacialMix;
    if (racialMix === RacialMix.HighFantasy) {
      selectedRacialMix = HighFantasyRacialMix;
    }

    if (racialMix === RacialMix.HumanDominated) {
      selectedRacialMix = HumanDominatedRacialMix;
    }

    let raceKey = '';
    Object.keys(selectedRacialMix).forEach(key => {
      const range = key.split(',').map(item => parseInt(item));
      if (range.length > 1) {
        if (number >= range[0] && number <= range[1]) {
          raceKey = key;
        }
      } else {
        if (number === range[0]) {
          raceKey = key;
        }
      }
    });

    return selectedRacialMix[raceKey];
  }

  private getAbilityModifiers(race: Race | undefined): AbilityModifiers {
    const strengthBonus = race ? (race.abilityBonus.Strength || 0) : 0;
    const dexterityBonus = race ? (race.abilityBonus.Dexterity || 0): 0;
    const constitutionBonus = race ? (race.abilityBonus.Constitution || 0) : 0;
    const intelligenceBonus = race ? (race.abilityBonus.Intelligence || 0) : 0;
    const wisdomBonus = race ? (race.abilityBonus.Wisdom || 0) : 0;
    const charismaBonus = race ? (race.abilityBonus.Charisma || 0) : 0;
    return new AbilityModifiers(
      this.threeD6() + strengthBonus,
      this.threeD6() + dexterityBonus,
      this.threeD6() + constitutionBonus,
      this.threeD6() + intelligenceBonus,
      this.threeD6() + wisdomBonus,
      this.threeD6() + charismaBonus,
    );
  }

  private threeD6() {
    const d6 = randomNumber.generator({ min:1, max: 6 });
    return Math.round(d6() + d6() + d6());
  }

  private getDragonBornAncestry(): DragonbornAncestry {
    const numberGenerator = randomNumber.generator({
      min: 1,
      max: 100,
    });

    const number = numberGenerator();

    let ancestryKey = '';
    Object.keys(DragonbornAncestryTable).forEach(key => {
      const range = key.split(',').map(item => parseInt(item));

      if (number >= range[0] && number <= range[1]) {
        ancestryKey = key;
      }
    });

    return DragonbornAncestryTable[ancestryKey];
  }

  private getHitPoints(): number {
    const numberGenerator = randomNumber.generator({
      min: 1,
      max: 4,
    });

    return Math.round(numberGenerator());
  }

  private setProfession(abilityModifiers: AbilityModifiers): Promise<Profession | undefined> {
    const abilityModifiersDict: any = {
      Strength: abilityModifiers.Strength,
      Dexterity: abilityModifiers.Dexterity,
      Constitution: abilityModifiers.Constitution,
      Wisdom: abilityModifiers.Wisdom,
      Intelligence: abilityModifiers.Intelligence,
      Charisma: abilityModifiers.Charisma,
    };

    // Shuffle this list so that in case there is a tie between ability scores that the selected one will be random
    const keys = Object.keys(abilityModifiersDict);
    this.shuffleArray(keys);

    const values = keys.map(key => abilityModifiersDict[key]);
    const highestValIndex = values.indexOf(Math.max(...values));

    const professionTypeValue = keys[highestValIndex];
    const professionType = ProfessionTypeEnum[professionTypeValue as keyof typeof ProfessionTypeEnum];

    return this._professionsDataManager.getRandomProfessionByType(professionType);
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  private getSex(): SexEnums {
    const generator = randomNumber.generator({ min: 0, max: 1 });
    const sexEnumValue = SexEnums[Math.round(generator())];
    return SexEnums[sexEnumValue as keyof typeof SexEnums];
  }

  private getAge(): number {
    const generator = randomNumber.generator({ min: 18, max: 60 });

    return Math.round(generator());
  }

  private getName(race: Race | undefined, sex: SexEnums): string {
    if (typeof race === 'undefined') {
      return this._namesBusinessManager.getHumanName(sex);
    }

    switch (race.name) {
      case RaceEnums[RaceEnums.Halfling]:
        return this._namesBusinessManager.getHalflingName(sex);
      case RaceEnums[RaceEnums.Elf]:
        return this._namesBusinessManager.getElfName(sex);
      case RaceEnums[RaceEnums.Gnome]:
        return this._namesBusinessManager.getGnomeName(sex);
      case RaceEnums[RaceEnums.HalfElf]:
        return this._namesBusinessManager.getHalfElfName(sex);
      case RaceEnums[RaceEnums.Tiefling]:
        return this._namesBusinessManager.getTieflingName(sex);
      case RaceEnums[RaceEnums.HalfOrc]:
        return this._namesBusinessManager.getHalfOrcName(sex);
      case RaceEnums[RaceEnums.Dragonborn]:
        return this._namesBusinessManager.getDragonbornName(sex);
      case RaceEnums[RaceEnums.Dwarf]:
        return this._namesBusinessManager.getDwarfName(sex);
      default:
        return this._namesBusinessManager.getHumanName(sex);
    }
  }

  private getCoin(coinDie: string): string {
    const coinValArray = coinDie.split(" ");
    const die = parseInt(coinValArray[0].split("d")[1]);
    const generator = randomNumber.generator({min: 1, max: die});

    return `${Math.round(generator())} ${coinValArray[1]}`;
  }
}
