import { cardReceive } from './cards';
import { deckReceive } from './decks';

import { initData } from '../handlers';

const SET_LOADED = "SET_LOADED";

function setLoaded(loaded) {
	return {
		type: SET_LOADED,
		loaded
	};
}

export function handleInitialData() {
	return (dispatch) => {
		dispatch(setLoaded(false));
		return initData()
			.then(({cards, decks}) => {
				dispatch(cardReceive(cards));
				dispatch(deckReceive(decks));
				dispatch(setLoaded(true));
			});
	}
}