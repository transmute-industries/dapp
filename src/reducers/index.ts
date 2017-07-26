// import {characters} from './characters';
// import {characterDetails} from './characterDetails';
// import {users} from './users';
// import {comments} from './comments';
// import {StoreState} from '../types/index';
// import {ratings} from './ratings';

import { routerReducer } from 'react-router-redux';

import {reducer as transmuteReducer} from './transmute'

import { reducer as formReducer } from 'redux-form'

import {  combineReducers } from 'redux';

// function rootReducer(
//   state: StoreState,
//   action: any
// ) {
//   return {
//     router: routerReducer,
//     form: formReducer,
//     characters: characters(state.characters, action),
//     characterDetails: characterDetails(state.characterDetails, action),
//     users: users(state.users, action),
//     comments: comments(state, action),
//     ratings: ratings(state, action),
//     transmute: transmuteReducer(state, action)
//   };
// }

// export default rootReducer;

export default combineReducers({
   form: formReducer,
   transmute: transmuteReducer,
   router: <any>routerReducer
})
