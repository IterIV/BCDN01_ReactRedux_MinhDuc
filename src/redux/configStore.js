import {combineReducers, createStore} from 'redux'
import OanTuTiReducer from './Reducers/OanTuTiReducer';
import DatVePhimReducer from './Reducers/DatVePhimReducer';
const rootReducer = combineReducers({
    OanTuTiReducer,
    DatVePhimReducer
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());