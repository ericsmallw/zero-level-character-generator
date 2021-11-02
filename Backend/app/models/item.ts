export default class Item {
  constructor(id: number, name: string, ac: number = 0, acBonus = 0) {
    this.id = id;
    this.name = name;
    this.ac = ac;
    this.acBonus = acBonus
  }

  id: number;
  name: string;
  ac: number;
  acBonus: number;

}
