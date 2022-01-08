import Personality from "../../models/personality";

export default interface IPersonalityTraitsBase {
    getRandomPersonalityTraits(count: number): Promise<Personality[]>;
}
