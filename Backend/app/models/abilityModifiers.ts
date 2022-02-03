export default class AbilityModifiers {

  constructor(
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    initiative: number = 0
  ) {
    this.Strength = strength;
    this.StrengthModifier = this.setModifier(strength);
    this.Dexterity = dexterity
    this.DexterityModifier = this.setModifier(dexterity);
    this.Constitution = constitution;
    this.ConstitutionModifier = this.setModifier(constitution);
    this.Intelligence = intelligence;
    this.IntelligenceModifier = this.setModifier(intelligence);
    this.Wisdom = wisdom;
    this.WisdomModifier = this.setModifier(wisdom);
    this.Charisma = charisma;
    this.CharismaModifier = this.setModifier(charisma);
    this.Initiative = initiative;
  }

  Strength: number;
  StrengthModifier: number;
  StrengthAbbr = 'STR';
  Dexterity: number;
  DexterityModifier: number;
  DexterityAbbr = 'DEX'
  Constitution: number;
  ConstitutionModifier: number;
  ConstitutionAbbr = 'CON';
  Intelligence: number;
  IntelligenceModifier: number;
  IntelligenceAbbr = 'INT';
  Wisdom: number;
  WisdomModifier: number;
  WisdomAbbr = 'WIS'
  Charisma: number;
  CharismaModifier: number;
  CharismaAbbr = 'CHA';
  Initiative: number;

  private setModifier(score: number) {
    if (score === 3) {
      return -4;
    }

    if (score === 4 || score === 5) {
      return -3;
    }

    if (score === 6 || score === 7) {
      return -2
    }

    if (score === 8 || score === 9) {
      return -1
    }

    if (score === 10 || score === 11) {
      return 0
    }

    if (score === 12 || score === 13) {
      return 1
    }

    if (score === 14 || score === 15) {
      return 2
    }

    if (score === 16 || score === 17) {
      return 3
    }

    if (score === 18 || score === 19) {
      return 4
    }

    return 5
  }
}
