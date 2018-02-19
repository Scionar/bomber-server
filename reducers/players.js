const initialState = [];
let idIndex = 0;

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER': {
      const newState = [...state, { id: idIndex, name: action.name }];
      idIndex++;
      return newState;
    }
    case 'REMOVE_PLAYER': {
      const newPlayers = state.filter(current => current.id !== action.id);
      return [...newPlayers];
    }
    default:
      return state;
  }
};

module.exports = players;
