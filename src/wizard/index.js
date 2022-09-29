import Character from '../character';

class Wizard extends Character {
  constructor(name = '') {
    super(name);
    this.health = 50;
    this.spellProtection = false;
    this.spellDuration = 0;
  }

  talk() {
    return `HELLO! MY NAME IS ${this.name.toUpperCase()}.`;
  }

  attack() {
    // first attack: if false, set spell protection and duration
    if (this.spellProtection === false) {
      this.spellProtection = true;
      this.spellDuration = 3;
    }
    // subsequent attacks: when attack is called, it runs:
    if (this.spellProtection === true && this.spellDuration > 0) {
      this.spellDuration -= 1;
      return 2; // twice as strong counter-attack
    }

    // when spellDuration is zero:
    this.health -= 10;/// health now decreases by TEN for each attack
    return 1; // counter attacks return to normal after spell protection is done
  }
}

export default Wizard;
