const initialState = {};

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD': {
      const newState = action.layout;
      return { ...newState };
    }
    default:
      return state;
  }
};

module.exports = board;
