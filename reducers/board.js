const boardValidation = require('../helpers/boardValidation');
const initialState = {};

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD': {
      if (boardValidation(action.layout)) return { ...action.layout };
      return state;
    }
    default:
      return state;
  }
};

module.exports = board;
