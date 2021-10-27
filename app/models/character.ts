import AbilityModifiers from "./abilityModifiers";
import DragonbornAncestry from "./dragonbornAncestry";
import Race from "./race";
import Profession from "./profession";
import SexEnums from "../enums/sexEnums";

export class Character {
    name: string;
    race: Race | undefined;
    abilityModifiers: AbilityModifiers;
    dragonBornAncestry: DragonbornAncestry;
    hitPoints: number;
    proficiency: number;
    initiative: number;
    armorClass: number;
    age: number;
    profession: Profession | undefined;
    sex: string;
    coin: string;
}
