export default class Weapon {
  constructor(id: number, name: string, damage: string, range: any) {
    this.id = id;
    this.range = range;
    this.damage = damage;
    this.name = name;
  }

  damage: string;
  name: string;
  range: number;
  id: number;
}
