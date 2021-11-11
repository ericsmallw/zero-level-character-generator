import IBondsDataObject from "../interfaces/IBondsDataObject";
import {injectable} from "inversify";
import "reflect-metadata";
import Bond from "../../models/bond";
import {sample} from "lodash";
import bonds from "../../constants/bonds";

@injectable()
export default class BondsDataObject implements IBondsDataObject {
    getRandomBond(): Promise<Bond> {
        // @ts-ignore
        return sample(bonds);
    }

}
