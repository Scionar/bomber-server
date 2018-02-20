const initialState = { running: false };

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME': {
      return { ...state, running: true };
    }
    case 'STOP_GAME': {
      return { ...state, running: false };
    }
    default:
      return state;
  }
};

module.exports = players;
