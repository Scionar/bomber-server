const authentication = require('./authentication');

describe('Authentication helper', () => {
  test('It hashes input', () => {
    const input = 'exampleInput';
    const hashedInput = authentication.hash(input);
    expect(input).not.toBe(hashedInput);
  });

  test('It returns true if hashed string is created from clean one', () => {
    const input = 'exampleInput';
    const hashedInput = authentication.hash(input);
    expect(authentication.check(input, hashedInput)).toBeTruthy();
  });

  test('It returns false if hashed string is NOT created from clean one', () => {
    const input = 'exampleInput';
    const hashedInput = authentication.hash(input) + 'ruinHash';
    expect(authentication.check(input, hashedInput)).toBeFalsy();
  });
});
