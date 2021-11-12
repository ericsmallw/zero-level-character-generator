import IFlawsDataObject from "../interfaces/IFlawsDataObject";
import Flaw from "../../models/flaw";
import {injectable} from "inversify";
import "reflect-metadata";
import {sample} from "lodash";
import flaws from "../../constants/flaws";

@injectable()
export default class FlawsDataObject implements IFlawsDataObject {
    getRandomFlaw(): Promise<Flaw> {
        // @ts-ignore
        return sample(flaws);
    }

}
