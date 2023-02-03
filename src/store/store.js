import { legacy_createStore as createStore, combineReducers} from 'redux'
import keySoundReducer from './reducers/key-sound-reducer'

const store = createStore(keySoundReducer);

export default store;