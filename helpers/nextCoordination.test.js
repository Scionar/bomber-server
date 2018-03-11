const nextCoordination = require('./nextCoordination');

describe('NextCoordination helper', () => {
  test('nextCoordination returns object with x and y propetries with int value', () => {
    const x = 1;
    const y = 1;
    const direction = 'down';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number)
      })
    );
  });

  test('Moving up decreases y position by 1', () => {
    const x = 1;
    const y = 1;
    const direction = 'up';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x,
        y: y - 1
      })
    );
  });

  test('Moving down increases y position by 1', () => {
    const x = 1;
    const y = 1;
    const direction = 'down';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x,
        y: y + 1
      })
    );
  });

  test('Moving left decreases x position by 1', () => {
    const x = 1;
    const y = 1;
    const direction = 'left';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x: x - 1,
        y
      })
    );
  });

  test('Moving right increases x position by 1', () => {
    const x = 1;
    const y = 1;
    const direction = 'right';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x: x + 1,
        y
      })
    );
  });

  test('Without specified direction, return same directions', () => {
    const x = 1;
    const y = 1;
    const direction = 'Argh!';

    expect(nextCoordination(x, y, direction)).toEqual(
      expect.objectContaining({
        x,
        y
      })
    );
  });
});
