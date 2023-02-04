import powerState from "../state/power-state";

const powerReducer = (state = powerState, action) => {
  switch (action.type) {
    case 'POWER':
      return { power: action.payload };
    default:
      return state;
  }
}

export default powerReducer;