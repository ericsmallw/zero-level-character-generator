import IPersonalityTraitsDataObject from "../interfaces/IPersonalityTraitsDataObject";
import {injectable} from "inversify";
import 'reflect-metadata';
import Personality from "../../models/personality";
import randomNumber from 'random-number';
import personalityTraits from "../../constants/personalityTraits";

@injectable()
export default class PersonalityTraitsDataObject implements IPersonalityTraitsDataObject {
    getRandomPersonalityTraits(count: number): Promise<Personality[]> {
        let numberGenerator = randomNumber.generator({
            min: 0,
            max: personalityTraits.length - 1,
            integer: true
        });

        let personalityTraitsCopy = personalityTraits.slice();

        let randIndex = numberGenerator();
        const trait1 = personalityTraitsCopy[randIndex];

        personalityTraitsCopy.splice(randIndex, 1);

        numberGenerator = randomNumber.generator({
            min: 0,
            max: personalityTraitsCopy.length - 1,
            integer: true
        });

        randIndex = numberGenerator();
        const trait2 = personalityTraitsCopy[randIndex];

        // @ts-ignore
        return Promise.resolve([trait1, trait2]);
    }

}
