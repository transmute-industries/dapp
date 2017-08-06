// import {characters} from './characters';
// import {characterDetails} from './characterDetails';
// import {users} from './users';
// import {comments} from './comments';
// import {StoreState} from '../types/index';
// import {ratings} from './ratings';

import { routerReducer } from 'react-router-redux';
import { reducer as transmuteReducer } from './transmute';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import { reducer as bioidReducer } from '../store/bioid/reducer'

export default combineReducers({
    form: formReducer,
    transmute: transmuteReducer,
    bioid: bioidReducer,
    router: <any>routerReducer
});
