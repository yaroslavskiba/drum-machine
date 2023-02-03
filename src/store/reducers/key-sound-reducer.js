import keySoundState from "../state/key-sound-state";

const keySoundReducer = (state = keySoundState, action) => {
  switch (action.type) {
    case 'SOUND':
      return state;
    default: 
      return state;
  }
};
 
export default keySoundReducer;