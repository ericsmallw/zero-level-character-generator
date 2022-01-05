import { createCharacter } from '../../app/characters/handler';

describe('create character handler', () => {
   describe('createCharacter function', () => {
      it('should create a character depending on the settings provided', async () => {
          const characterJSON = await createCharacter({
              body: JSON.stringify({racialMix: 1, sex: 0, minAge: 40, maxAge: 63})
          });

          const character: any = JSON.parse(characterJSON.body);

          expect(character.sex).toBe("Male");
          expect(character.age).toBeLessThanOrEqual(63);
          expect(character.age).toBeGreaterThanOrEqual(40);
      })
   });
});
