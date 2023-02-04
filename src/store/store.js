import { legacy_createStore as createStore, combineReducers} from 'redux'
import keySoundBank1Reducer from './reducers/key-sound-bank1-reducer'
import keySoundBank2Reducer from './reducers/key-sound-bank2-reducer';
import powerReducer from './reducers/power-reducer';
import toneReducer from './reducers/tone-reducer';
import volumeReducer from './reducers/volume-reducer';

const combineStore = combineReducers({
  bank1: keySoundBank1Reducer,
  bank2: keySoundBank2Reducer,
  power: powerReducer,
  tone: toneReducer,
  volume: volumeReducer
})

const store = createStore(combineStore);

export default store;