import Bond from "../../models/bond";

export default interface IBondsBase {
    getRandomBond(): Promise<Bond>;
}
