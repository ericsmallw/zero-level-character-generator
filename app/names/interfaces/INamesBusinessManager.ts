import SexEnums from "../../enums/sexEnums";

export default interface INamesBusinessManager {
  getHumanName(sex: SexEnums): string;
  getHalflingName(sex: SexEnums): string;
  getDwarfName(sex: SexEnums): string;
  getGnomeName(sex: SexEnums): string;
  getHalfElfName(sex: SexEnums): string;
  getElfName(sex: SexEnums): string;
  getTieflingName(sex: SexEnums): string;
  getHalfOrcName(sex: SexEnums): string;
  getDragonbornName(sex: SexEnums): string;
}
