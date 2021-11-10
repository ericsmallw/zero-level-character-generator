import IIdealDataObject from "../interfaces/IIdealDataObject";
import Ideal from "../../models/ideal";
import {injectable} from "inversify";
import "reflect-metadata";
import {sample} from "lodash";
import Ideals from "../../constants/ideals";
@injectable()
export default class IdealDataObject implements IIdealDataObject {
    getRandomIdeal(): Promise<Ideal> {
        const ideal = sample(Ideals);
        // @ts-ignore
        return Promise.resolve(ideal);
    }

}
