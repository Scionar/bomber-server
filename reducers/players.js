const uuidv1 = require('uuid/v1');
const initialState = [];
let idIndex = 0;

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER': {
      const auth = uuidv1();
      const newState = [...state, { id: idIndex, name: action.name, auth }];
      idIndex++;
      return newState;
    }
    case 'SET_PLAYER_POSITION': {
      return state.map(current => {
        if (current.id === action.id)
          current.position = { y: action.y, x: action.x };
        return current;
      });
    }
    case 'REMOVE_PLAYER': {
      const newPlayers = state.filter(current => current.id !== action.id);
      return [...newPlayers];
    }
    case 'MOVE_PLAYER_UP': {
      return state.map(current => {
        if (current.id === action.id) {
          return {
            ...current,
            position: { ...current.position, y: current.position.y - 1 }
          };
        }
        return current;
      });
    }
    case 'MOVE_PLAYER_DOWN': {
      return state.map(current => {
        if (current.id === action.id) {
          return {
            ...current,
            position: { ...current.position, y: current.position.y + 1 }
          };
        }
        return current;
      });
    }
    case 'MOVE_PLAYER_LEFT': {
      return state.map(current => {
        if (current.id === action.id) {
          return {
            ...current,
            position: { ...current.position, x: current.position.x - 1 }
          };
        }
        return current;
      });
    }
    case 'MOVE_PLAYER_RIGHT': {
      return state.map(current => {
        if (current.id === action.id) {
          return {
            ...current,
            position: { ...current.position, x: current.position.x + 1 }
          };
        }
        return current;
      });
    }
    default:
      return state;
  }
};

module.exports = players;
