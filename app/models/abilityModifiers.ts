export default class AbilityModifiers {
  constructor(
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
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
  }

  Strength: number;
  StrengthModifier: number;
  Dexterity: number;
  DexterityModifier: number;
  Constitution: number;
  ConstitutionModifier: number;
  Intelligence: number;
  IntelligenceModifier: number;
  Wisdom: number;
  WisdomModifier: number;
  Charisma: number;
  CharismaModifier: number;

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
