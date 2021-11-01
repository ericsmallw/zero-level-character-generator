export default interface INamesBase {
  getHumanFirstName(sex: number): string;
  getHumanLastName(): string;
  getHalflingFirstName(sex: number): string;
  getHalflingLastName(): string;
  getDwarfFirstName(sex: number): string;
  getDwarfLastName(): string;
  getGnomeFirstName(sex: number): string;
  getGnomeLastName(): string;
  getElfFirstName(sex: number): string;
  getElfLastName(): string;
  getTieflingFirstName(sex: number): string;
  getOrcFirstName(sex: number): string;
  getDragonbornFirstName(sex: number): string;
  getDragonbornLastName(): string;
}
