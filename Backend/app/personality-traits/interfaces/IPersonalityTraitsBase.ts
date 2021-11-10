import PersonalityTrait from "../../models/personalityTrait";

export default interface IPersonalityTraitsBase {
    getRandomPersonalityTraits(count: number): Promise<PersonalityTrait[]>;
}
