import {injectable, inject} from "inversify";
import "reflect-metadata";
import IFlawsDataManager from "../interfaces/IFlawsDataManager";
import types from "../../inversify/types";
import IFlawsDataObject from "../interfaces/IFlawsDataObject";
import Flaw from "../../models/flaw";

@injectable()
export default class FlawsDataManager implements IFlawsDataManager {
    constructor(@inject(types.FlawsDataObject) private readonly _flawsDataObject: IFlawsDataObject) {}

    getRandomFlaw(): Promise<Flaw> {
        return this._flawsDataObject.getRandomFlaw();
    }

}
