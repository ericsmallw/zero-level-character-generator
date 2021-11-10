import IPersonalityTraitsDataManager from "../interfaces/IPersonalityTraitsDataManager";
import PersonalityTrait from "../../models/personalityTrait";
import {inject, injectable} from "inversify";
import 'reflect-metadata';
import types from "../../inversify/types";
import IPersonalityTraitsDataObject from "../interfaces/IPersonalityTraitsDataObject";

@injectable()
export default class PersonalityTraitsDataManager implements IPersonalityTraitsDataManager {
    constructor(
        @inject(types.PersonalityTraitsDataObject) private readonly personalityDataObject: IPersonalityTraitsDataObject
    ) {
    }

    getRandomPersonalityTraits(count: number): Promise<PersonalityTrait[]> {
        return this.personalityDataObject.getRandomPersonalityTraits(count);
    }

}
