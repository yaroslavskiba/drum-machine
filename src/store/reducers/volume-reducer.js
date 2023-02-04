import volumeState from "../state/volume-state";

const volumeReducer = (state = volumeState, action) => {
  switch (action.type) {
    case 'VOLUME':
      return { volume: action.payload };
    default:
      return state;
  }
}

export default volumeReducer;