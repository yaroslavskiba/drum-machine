import keySoundBank1State from "../state/key-sound-bank1-state";

const keySoundBank1Reducer = (state = keySoundBank1State, action) => {
  switch (action.type) {
    case 'BANK1':
      return state;
    default: 
      return state;
  }
};
 
export default keySoundBank1Reducer;