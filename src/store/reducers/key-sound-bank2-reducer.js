import keySoundBank2State from "../state/key-sound-bank2-state";

const keySoundBank2Reducer = (state = keySoundBank2State, action) => {
  switch (action.type) {
    case 'BANK2':
      return state;
    default: 
      return state;
  }
};
 
export default keySoundBank2Reducer;