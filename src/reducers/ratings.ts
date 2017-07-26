// import {StoreState, RatingsState} from '../types/index';
// import {SET_RATING} from '../constants/ratings';

// interface CustomAction {
//   type: string;
//   rating: number;
// }

// export function ratings(state: StoreState, action: CustomAction): RatingsState {
//   switch (action.type) {
//     case SET_RATING:
//       const loggedInUser = state.users.filter(user => user.isLoggedIn)[0];

//       const _ratingsState = Object.assign({}, state.ratings);

//       const id = `${loggedInUser.id}-${state.characterDetails.id}`;

//       _ratingsState[id] = {
//         value: action.rating,
//         userId: loggedInUser.id,
//         characterId: state.characterDetails.id,
//       };

//       const selectedCharacter = state.characters.filter(
//         (character) => character && character.id === state.characterDetails.id
//       )[0];

//       // TODO: side effect
//       selectedCharacter.rating = selectedCharacter.rating + action.rating;

//       return _ratingsState;
//     default:
//       return state.ratings ? state.ratings : {};
//   }
// }
