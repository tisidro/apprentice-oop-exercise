# Overview :crossed_swords: :dragon:

Today we're creating characters for a game. Each `Character` has two __properties__ and two __methods__.

## Properties

- `name` (string) - The Character's name
- `health` (number) - A number between 0 and 50 representing the Character's current health

## Methods

- `talk` (function) - When spoken to, the character will greet you with their `name`
- `attack` (function) - When attacked, the character can:
   - take damage, decreasing their `health`
   - counter-attack by returning a number representing damage points against the attacker

# The Challenge

Given a base `Character` [class], implement an inherited class for one or more of the character types below. Your character should have the same __interface__ (properties and method) as described above. Your character _can_ have additional properties or methods if necessary, as long as it _also_ implements the above interface.

Your solution should utilize the following:
- [extends] to allow your character to inherit from the base `Character` class
- [super] to call and override methods from the base `Character` class when necessary


# Character Types
## Wizard

A wizard behaves as follows:

### `talk`
- When spoken to, a wizard loudly greets you and proclaims their name in all __UPPER CASE__.

### `attack`
- When first attacked, a wizard casts a protection spell.
- While the protection spell is active, the wizard receives no damage and counter-attacks are twice as powerful.
- The spell lasts for 3 attacks
- After the spell, the wizard recieves 10 points damage on every attack, and counter-attacks return to the default value.

## Rogue
A rogue behaves as follows:

### `talk`
- When spoken to, a rogue quietly greets you and whispers their name in all __lower case__.

### `attack`
- A rogue is difficult to attack. By default they will evade an attack, receive no damage, and return a 5 point counter-attack.
- On every 5th attack, a rogue lets their guard down and receives 5 points damage. In their weakened state, they return the default counter-attack value.


# Getting Started
This repo contains source code in the `src` repo to get you started, as well as [Jest] tests to validate your solution. To get started:

1. Clone this repo
1. `cd` into the directory and run `npm install`
1. Run the tests with `npm test:watch`
1. Locate the characters in the `src` directory and choose a character to implement.
   - __Note:__ `src/character` is the base class that the others will inherit from, so don't choose that one.
1. Locate the character's set of tests in `index.test.js`
1. Pending tests are marked with `xit`. Unpend a test by changing `xit` to `it`, watch it fail, and write the code necessary to make the test pass.
1. Repeat the last step for the rest of the tests in the suite.

## Bonus
How would you implement a solution without using the `class` keyword? For example, using a [factory function] and [object composition]?

[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[extends]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
[super]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
[Jest]: https://jestjs.io/
[factory function]: https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
[object composition]: https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd89480381