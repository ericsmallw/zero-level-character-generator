import AbilityModifiers from "./abilityModifiers";
import Skill from "./skill";
import Profession from "./profession";

export default class Skills {
    acrobatics: Skill = new Skill("Acrobatics");
    animalHandling: Skill = new Skill("Animal Handling");
    arcana: Skill = new Skill("Arcana");
    athletics: Skill = new Skill("Athletics");
    deception: Skill = new Skill("Deception");
    history: Skill = new Skill("History");
    insight: Skill = new Skill("Insight");
    intimidation: Skill = new Skill("Intimidation");
    investigation: Skill = new Skill("Investigation");
    medicine: Skill = new Skill("Medicine");
    nature: Skill = new Skill("Nature");
    perception: Skill = new Skill("Perception");
    performance: Skill = new Skill("Performance");
    persuasion: Skill = new Skill("Persuasion");
    religion: Skill = new Skill("Religion");
    sleightOfHand: Skill = new Skill("Sleight of Hand");
    stealth: Skill = new Skill("Stealth");
    survival: Skill = new Skill("Survival");


    constructor(abilityModifiers: AbilityModifiers, profession: Profession) {
        this.acrobatics.value = abilityModifiers.DexterityModifier
            + (profession.proficiency.name.toLowerCase().indexOf("acrobatics") >= 0 ? 2 : 0);

        this.animalHandling.value = abilityModifiers.WisdomModifier
            + (profession.proficiency.name.toLowerCase().indexOf("animal") >= 0 ? 2 : 0);

        this.arcana.value = abilityModifiers.IntelligenceModifier
            + (profession.proficiency.name.toLowerCase().indexOf("arcana") >= 0 ? 2 : 0);

        this.athletics.value = abilityModifiers.StrengthModifier
            + (profession.proficiency.name.toLowerCase().indexOf("athletics") >= 0 ? 2 : 0);

        this.deception.value = abilityModifiers.CharismaModifier
            + (profession.proficiency.name.toLowerCase().indexOf("charisma") >= 0 ? 2 : 0);

        this.history.value = abilityModifiers.IntelligenceModifier
            + (profession.proficiency.name.toLowerCase().indexOf("history") >= 0 ? 2 : 0);

        this.insight.value = abilityModifiers.WisdomModifier
            + (profession.proficiency.name.toLowerCase().indexOf("insight") >= 0 ? 2 : 0);

        this.intimidation.value = abilityModifiers.CharismaModifier
            + (profession.proficiency.name.toLowerCase().indexOf("intimidation") >= 0 ? 2 : 0);

        this.investigation.value = abilityModifiers.IntelligenceModifier
            + (profession.proficiency.name.toLowerCase().indexOf("investigation") >= 0 ? 2 : 0);

        this.medicine.value = abilityModifiers.WisdomModifier
            + (profession.proficiency.name.toLowerCase().indexOf("medicine") >= 0 ? 2 : 0);

        this.nature.value = abilityModifiers.IntelligenceModifier
            + (profession.proficiency.name.toLowerCase().indexOf("nature") >= 0 ? 2 : 0);

        this.perception.value = abilityModifiers.WisdomModifier
            + (profession.proficiency.name.toLowerCase().indexOf("perception") >= 0 ? 2 : 0);

        this.performance.value = abilityModifiers.CharismaModifier
            + (profession.proficiency.name.toLowerCase().indexOf("performance") >= 0 ? 2 : 0);

        this.persuasion.value = abilityModifiers.CharismaModifier
            + (profession.proficiency.name.toLowerCase().indexOf("persuasion") >= 0 ? 2 : 0);

        this.religion.value = abilityModifiers.IntelligenceModifier
            + (profession.proficiency.name.toLowerCase().indexOf("religion") >= 0 ? 2 : 0);

        this.sleightOfHand.value = abilityModifiers.DexterityModifier
            + (profession.proficiency.name.toLowerCase().indexOf("sleight") >= 0 ? 2 : 0);

        this.stealth.value = abilityModifiers.DexterityModifier
            + (profession.proficiency.name.toLowerCase().indexOf("stealth") >= 0 ? 2 : 0);

        this.survival.value = abilityModifiers.WisdomModifier
            + (profession.proficiency.name.toLowerCase().indexOf("survival") >= 0 ? 2 : 0);
    }


}
