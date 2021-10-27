import IProfessionsDataObject from "../interfaces/IProfessionsDataObject";
import {injectable} from "inversify";
import ProfessionTypeEnum from "../../enums/professionTypeEnum";
import Profession from "../../models/profession";
import {Professions} from "../../constants/professions";
import {sample} from "lodash";

// @ts-ignore
@injectable()
export default class ProfessionsDataObject implements IProfessionsDataObject {
    getRandomProfessionByType(professionType: ProfessionTypeEnum): Promise<Profession | undefined> {
        const professions = Professions.filter(profession => profession.type === professionType);
        const profession: Profession | undefined = sample(professions);
        return Promise.resolve(profession);
    }

}
