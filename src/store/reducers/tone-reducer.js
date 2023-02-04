import toneState from "../state/tone-state";

const toneReducer = (state = toneState, action) => {
  switch (action.type) {
    case 'TONE':
      return { tone: action.payload };
    default:
      return state;
  }
}

export default toneReducer;