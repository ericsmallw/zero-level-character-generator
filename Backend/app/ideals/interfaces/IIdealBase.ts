import Ideal from "../../models/ideal";

export default interface IIdealBase {
    getRandomIdeal(): Promise<Ideal>;
}
