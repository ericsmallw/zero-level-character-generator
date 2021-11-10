import IPersonalityTraitsDataObject from "../interfaces/IPersonalityTraitsDataObject";
import {injectable} from "inversify";
import 'reflect-metadata';
import PersonalityTrait from "../../models/personalityTrait";
import {sample} from "lodash";
import * as personalityTraits from "../../constants/personalityTraits";

@injectable()
export default class PersonalityTraitsDataObject implements IPersonalityTraitsDataObject {
    getRandomPersonalityTraits(count: number): Promise<PersonalityTrait[]> {
        const personalityTraits: (PersonalityTrait | undefined)[] = [...Array(count).keys()].map(() => sample(personalityTraits));
        // @ts-ignore
        return Promise.resolve(personalityTraits);
    }

}
