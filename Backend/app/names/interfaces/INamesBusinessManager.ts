import SexEnum from "../../enums/sexEnum";

export default interface INamesBusinessManager {
  getHumanName(sex: SexEnum): string;
  getHalflingName(sex: SexEnum): string;
  getDwarfName(sex: SexEnum): string;
  getGnomeName(sex: SexEnum): string;
  getHalfElfName(sex: SexEnum): string;
  getElfName(sex: SexEnum): string;
  getTieflingName(sex: SexEnum): string;
  getHalfOrcName(sex: SexEnum): string;
  getDragonbornName(sex: SexEnum): string;
}
