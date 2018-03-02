jest.mock('../actions');
jest.mock('../store');
jest.mock('./startGame');
const store = require('../store');
const addPlayer = require('./addPlayer');
const startGame = require('./startGame');
const actions = require('../actions');
const config = require('../config');

describe('Add player event', () => {
  test('calls createPlayer action maker', () => {
    const mockState = { players: [{}] };
    store.__setMockState(mockState);
    addPlayer('Mary');
    expect(actions.createPlayer.mock.calls.length).toBe(1);
  });

  test('calls startGame action maker if playeramount goes to macPlayers amount', () => {
    const mockState = {
      players: [...Array(config.maxPlayers)].map(() => ({}))
    };
    store.__setMockState(mockState);
    addPlayer('Mary');
    expect(startGame.mock.calls.length).toBe(1);
  });
});
