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
        this.acrobatics.value = abilityModifiers.DexterityModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("acrobatics") >= 0) {
            this.acrobatics.value += 2;
            this.acrobatics.isProficient = true;
        }

        this.animalHandling.value = abilityModifiers.WisdomModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("animal") >= 0) {
            this.animalHandling.value += 2;
            this.animalHandling.isProficient = true;
        }

        this.arcana.value = abilityModifiers.IntelligenceModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("arcana") >= 0) {
            this.arcana.value += 2;
            this.arcana.isProficient = true;
        }

        this.athletics.value = abilityModifiers.StrengthModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("athletics") >= 0) {
            this.athletics.isProficient = true;
            this.athletics.value += 2;
        }

        this.deception.value = abilityModifiers.CharismaModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("charisma") >= 0) {
            this.deception.isProficient = true;
            this.deception.value += 2;
        }

        this.history.value = abilityModifiers.IntelligenceModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("history") >= 0) {
            this.history.value += 2;
            this.history.isProficient = true;
        }

        this.insight.value = abilityModifiers.WisdomModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("insight") >= 0) {
            this.insight.isProficient = true;
            this.insight.value += 2;
        }

        this.intimidation.value = abilityModifiers.CharismaModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("intimidation") >= 0) {
            this.intimidation.isProficient = true;
            this.intimidation.value += 2;
        }

        this.investigation.value = abilityModifiers.IntelligenceModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("investigation") >= 0) {
            this.investigation.isProficient = true;
            this.investigation.value += 2;
        }

        this.medicine.value = abilityModifiers.WisdomModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("medicine") >= 0) {
            this.medicine.isProficient = true;
            this.medicine.value += 2;
        }

        this.nature.value = abilityModifiers.IntelligenceModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("nature") >= 0) {
            this.nature.isProficient = true;
            this.nature.value += 2;
        }

        this.perception.value = abilityModifiers.WisdomModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("perception") >= 0) {
            this.perception.isProficient = true;
            this.perception.value += 2;
        }

        this.performance.value = abilityModifiers.CharismaModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("performance") >= 0) {
            this.performance.isProficient = true;
            this.performance.value += 2;
        }

        this.persuasion.value = abilityModifiers.CharismaModifier
        if(profession.proficiency.name.toLowerCase().indexOf("persuasion") >= 0) {
            this.persuasion.isProficient = true;
            this.persuasion.value += 2;
        }

        this.religion.value = abilityModifiers.IntelligenceModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("religion") >= 0) {
            this.religion.isProficient = true;
            this.religion.value += 2;
        }

        this.sleightOfHand.value = abilityModifiers.DexterityModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("sleight") >= 0) {
            this.sleightOfHand.isProficient = true;
            this.sleightOfHand.value += 2;
        }

        this.stealth.value = abilityModifiers.DexterityModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("stealth") >= 0) {
            this.stealth.isProficient = true;
            this.stealth.value += 2;
        }

        this.survival.value = abilityModifiers.WisdomModifier;
        if(profession.proficiency.name.toLowerCase().indexOf("survival") >= 0) {
            this.survival.isProficient = true;
            this.survival.value += 2;
        }
    }


}
