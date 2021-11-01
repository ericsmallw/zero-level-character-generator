import jest from 'jest';
import NamesDataObject from "../../app/names/impl/NamesDataObject";
import SexEnum from "../../app/enums/sexEnum";

const namesDataObject = new NamesDataObject();
describe("Names Data Object", () => {
    it('should randomly select elf first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getElfFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select human first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getHumanFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select tiefling first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getTieflingFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select dragonborn first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getDragonbornFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select dwarf first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getDwarfFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select gnome first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getGnomeFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select orc first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getOrcFirstName(sex);
        expect(typeof name).toBe("string");
    });

    it('should randomly select halfling first name based on sex', () => {
        const sex = SexEnum.Male;
        const name = namesDataObject.getHalflingFirstName(sex);
        expect(typeof name).toBe("string");
    });
});


