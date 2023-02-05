import currentButtonState from "../state/current-button-state";

const currentButtonReducer = (state = currentButtonState, action) => {
  switch (action.type) {
    case 'CURRENT':
      return { current: action.payload };
    default:
      return state;
  }
}

export default currentButtonReducer;