import Rogue from '.';

describe('Rogue', () => {
  describe('#talk', () => {
    xit('quitely greets you and whispers their name', () => {
      const character = new Rogue('Balthazar');
      expect(character.talk()).toBe('hello. my name is balthazar.');
    });
  });

  describe('#attack', () => {
    describe('by default when attacked', () => {
      xit('does not take damage', () => {
        const character = new Rogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(50);
      });

      xit('returns 5 points damage', () => {
        const character = new Rogue('Balthazar');
        const counterDamage = character.attack();
        expect(counterDamage).toBe(5);
      });
    });
    describe('every 5th time attacked', () => {
      xit('takes 5 points damage', () => {
        const character = new Rogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(45);

        character.attack();
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(40);
      });

      xit('returns standard damage', () => {
        const character = new Rogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        let counterDamage = character.attack();
        expect(counterDamage).toBe(1);

        character.attack();
        character.attack();
        character.attack();
        character.attack();
        counterDamage = character.attack();
        expect(counterDamage).toBe(1);
      });
    });
  });
});
