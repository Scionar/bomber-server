const validateMove = require('./validateMove');
const store = require('../store');
const actions = require('../actions');
const events = require('../events');
const data = require('../data');

describe('ValidateMove helper with open board', () => {
  let stateId;

  beforeEach(() => {
    store.dispatch(actions.reset());
    store.dispatch(actions.createPlayer('John'));
    store.dispatch(actions.setBoard(data.openBoard));
    events.startGame();
    stateId = store.getState().players[0].id;
  });

  test('Returns true on success up', () => {
    expect(validateMove(stateId, 'up')).toBeTruthy();
  });

  test('Returns true on success down', () => {
    expect(validateMove(stateId, 'down')).toBeTruthy();
  });

  test('Returns true on success left', () => {
    expect(validateMove(stateId, 'left')).toBeTruthy();
  });

  test('Returns true on success right', () => {
    expect(validateMove(stateId, 'right')).toBeTruthy();
  });

  test('Returns false if user not found', () => {
    expect(validateMove(9999999, 'up')).toBe(false);
  });

  test('Returns false if direction not defined', () => {
    expect(validateMove(stateId, 'Argh!')).toBe(false);
  });
});

describe('ValidateMove helper with closed board', () => {
  let stateId;

  beforeEach(() => {
    store.dispatch(actions.reset());
    store.dispatch(actions.createPlayer('John'));
    store.dispatch(actions.setBoard(data.closedBoard));
    events.startGame();
    stateId = store.getState().players[0].id;
  });

  test('Returns false when hits wall on up', () => {
    expect(validateMove(stateId, 'up')).toBeFalsy();
  });

  test('Returns false when hits wall on down', () => {
    expect(validateMove(stateId, 'down')).toBeFalsy();
  });

  test('Returns false when hits wall on left', () => {
    expect(validateMove(stateId, 'left')).toBeFalsy();
  });

  test('Returns false when hits wall on right', () => {
    expect(validateMove(stateId, 'right')).toBeFalsy();
  });
});
