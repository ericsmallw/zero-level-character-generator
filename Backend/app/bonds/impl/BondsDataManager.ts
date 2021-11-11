import {injectable, inject} from "inversify";
import "reflect-metadata";
import IBondsDataManager from "../interfaces/IBondsDataManager";
import Bond from "../../models/bond";
import types from "../../inversify/types";
import IBondsDataObject from "../interfaces/IBondsDataObject";

@injectable()
export default class BondsDataManager implements IBondsDataManager {
    constructor(@inject(types.BondsDataObject) private readonly _bondsDataObject: IBondsDataObject) {}

    getRandomBond(): Promise<Bond> {
        return this._bondsDataObject.getRandomBond();
    }

}
