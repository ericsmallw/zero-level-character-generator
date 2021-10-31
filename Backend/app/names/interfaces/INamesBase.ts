import SexEnums from "../../enums/sexEnums";

export default interface INamesBase {
  getHumanFirstName(sex: SexEnums): string;
  getHumanLastName(): string;
  getHalflingFirstName(sex: SexEnums): string;
  getHalflingLastName(): string;
  getDwarfFirstName(sex: SexEnums): string;
  getDwarfLastName(): string;
  getGnomeFirstName(sex: SexEnums): string;
  getGnomeLastName(): string;
  getElfFirstName(sex: SexEnums): string;
  getElfLastName(): string;
  getTieflingFirstName(sex: SexEnums): string;
  getOrcFirstName(sex: SexEnums): string;
  getDragonbornFirstName(sex: SexEnums): string;
  getDragonbornLastName(): string;
}
