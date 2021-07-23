import {createStore} from 'redux';
import authorReducer from './authorReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
const store = createStore(authorReducer,devToolsEnhancer());

export default store