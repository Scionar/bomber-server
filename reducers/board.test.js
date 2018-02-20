const boardReducer = require('./board');

describe('Board reducer', () => {
  test('SET_BOARD returns given board object as a new board state', () => {
    const action = {
      type: 'SET_BOARD',
      layout: { height: 2, width: 2, cells: [0, 0, 0, 0] }
    };
    expect(boardReducer(undefined, action)).toEqual(action.layout);
  });
});
