const boardReducer = require('./board');
const data = require('../data');

describe('Board reducer', () => {
  test('SET_BOARD returns given board object as a new board state', () => {
    const action = {
      type: 'SET_BOARD',
      layout: data.defaultBoard
    };
    expect(boardReducer(undefined, action)).toEqual(action.layout);
  });

  test('SET_BOARD returns old state if board not valid', () => {
    const action = {
      type: 'SET_BOARD',
      layout: { ...data.defaultBoard, width: undefined }
    };
    expect(boardReducer(undefined, action)).toEqual({});
  });
});
