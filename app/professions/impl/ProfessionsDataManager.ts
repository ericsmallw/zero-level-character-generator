import IProfessionsBase from "../interfaces/IProfessionsBase";
import ProfessionTypeEnum from "../../enums/professionTypeEnum";
import Profession from "../../models/profession";
import {inject, injectable} from "inversify";
import types from "../../inversify/types";
import IProfessionsDataObject from "../interfaces/IProfessionsDataObject";

// @ts-ignore
@injectable()
export default class ProfessionsDataManager implements IProfessionsBase {
    constructor(@inject(types.ProfessionsDataObject) private readonly _dao: IProfessionsDataObject) {
    }

    getRandomProfessionByType(professionType: ProfessionTypeEnum): Promise<Profession | undefined> {
        return this._dao.getRandomProfessionByType(professionType);
    }

}
