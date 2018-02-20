const startGame = require('./startGame');
const store = require('../store');

describe('Start game event', () => {
  test('Star game sets board layout', () => {
    startGame();
    expect(store.getState().board.cells.length).toBeGreaterThan(1);
  });
});
