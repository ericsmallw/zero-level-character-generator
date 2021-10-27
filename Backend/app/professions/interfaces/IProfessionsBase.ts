import ProfessionTypeEnum from "../../enums/professionTypeEnum";
import Profession from "../../models/profession";

export default interface IProfessionsBase {
    getRandomProfessionByType(professionType: ProfessionTypeEnum): Promise<Profession | undefined>;
}
