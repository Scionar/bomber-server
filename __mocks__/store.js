const store = jest.genMockFromModule('../store');

let state = {};

const __setMockState = newState => {
  state = newState;
};

store.__setMockState = __setMockState;

store.getState = () => state;

module.exports = store;
