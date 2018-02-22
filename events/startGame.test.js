const startGame = require('./startGame');
const actions = require('../actions');
const store = require('../store');

describe('Start game event', () => {
  test('Sets board layout', () => {
    startGame();
    expect(store.getState().board.cells.length).toBeGreaterThan(1);
  });

  test('Adds position to every player', () => {
    store.dispatch(actions.createPlayer('John'));
    startGame();
    store.getState().players.forEach(current => {
      expect(current).toHaveProperty(
        'position',
        expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number)
        })
      );
    });
  });
});
