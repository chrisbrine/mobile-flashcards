import { combineReducers } from 'redux';

import { SET_LOADED } from '../actions';

import cards from './cards';
import decks from './decks';

function loaded(state = false, action) {
	switch(action.type) {
		case SET_LOADED:
			return { loaded: action.loaded } ;
		default:
			return state;
	}
}

export default combineReducers({
	cards,
	decks,
	loaded,
});