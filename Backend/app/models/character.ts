import AbilityModifiers from "./abilityModifiers";
import DragonbornAncestry from "./dragonbornAncestry";
import Race from "./race";
import Profession from "./profession";
import SexEnum from "../enums/sexEnum";
import Personality from "./personality";
import Ideal from "./ideal";
import Bond from "./bond";
import Flaw from "./flaw";
import Skills from "./skills";
import Mannerism from "./mannerism";

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
    personalityTraits: Personality[];
    ideal: Ideal;
    bond: Bond;
    flaw: Flaw;
    skills: Skills;
    mannerism: string;
    talent: string;
}
