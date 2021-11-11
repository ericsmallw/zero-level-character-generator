import Flaw from "../../models/flaw";

export default interface IFlawsBase {
    getRandomFlaw(): Promise<Flaw>;
}
