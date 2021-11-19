export default class Skill {
    name: string;
    value: number;
    isProficient: boolean = false;

    constructor(name: string) {
        this.name = name;
    }
}
