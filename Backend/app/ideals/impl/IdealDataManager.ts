import IIdealDataManager from "../interfaces/IIdealDataManager";
import {inject, injectable} from "inversify";
import "reflect-metadata";
import Ideal from "../../models/ideal";
import types from "../../inversify/types";
import IIdealDataObject from "../interfaces/IIdealDataObject";

@injectable()
export default class IdealDataManager implements IIdealDataManager {
    constructor(@inject(types.IdealDataObject) private readonly _idealDataObject: IIdealDataObject) {
    }

    getRandomIdeal(): Promise<Ideal> {
        return this._idealDataObject.getRandomIdeal();
    }

}
