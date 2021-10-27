import ProfessionTypeEnum from "../enums/professionTypeEnum";
import Proficiency from "./proficiency";
import Weapon from "./weapon";
import Item from "./item";
import Clothes from "./clothes";

export default class Profession {
  constructor(
    value: number,
    name:string,
    coin: string,
    proficiency: Proficiency,
    weapon: Weapon,
    item: Item,
    clothes: Clothes,
    type: ProfessionTypeEnum)
  {
    this.value = value;
    this.name = name;
    this.coin = coin;
    this.weapon = weapon;
    this.item = item;
    this.clothes = clothes;
    this.type = type;
    this.proficiency = proficiency;
  }

  value: number;
  name: string;
  coin: string;
  proficiency: Proficiency;
  weapon: Weapon;
  item: Item;
  clothes: Clothes;
  type: ProfessionTypeEnum;
}
