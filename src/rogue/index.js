import Character from '../character';
// jest --watch --> helps shorten feedback loop!
// https://jestjs.io/blog/2016/09/01/jest-15#new-watch-command

class Rogue extends Character {
  constructor(name = '') {
    super(name);
    this.health = 50;
    this.timesAttacked = 0;
  }

  talk() {
    return `hello. my name is ${this.name.toLowerCase()}.`;
  }

  attack() {
    // add a counter for timesAttacked that increments up to 4
    this.timesAttacked += 1;
    // every 5th attack health damage increases significantly
    if (this.timesAttacked === 5) {
      this.health -= 5;
      this.timesAttacked = 0;
      return 1;
    }
    // by default, evade attack (health is unchanged) and return 5 pt counter attack
    return 5;
  }
}

export default Rogue;
