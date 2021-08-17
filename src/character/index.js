/**
 * Base class for all Characters
 * contains base behaviors
*/
export default class Character {
  /**
   * @param {string} name - the character's name
   */
  constructor(name = '') {
    this.name = name;
    this.health = 50;
  }

  /**
   *
   * @returns string - the character's response
   */
  talk() {
    return `Hello! My name is ${this.name}.`;
  }

  /**
   * reduces the character's health and counter-attacks
   * @returns number - the amount of counter damage the character returns when attacked
   */
  attack() {
    this.health -= 1;
    return 1;
  }
}
