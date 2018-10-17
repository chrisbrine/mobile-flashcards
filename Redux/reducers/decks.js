import { 
	DECK_RECEIVE, 
	DECK_NEW, 
	DECK_DELETE, 
} from '../actions/decks';
import {
	CARD_NEW,
} from '../actions/cards';
import {
	handleDeckReceive,
	handleDeckNew,
	handleDeckDelete,
	handleDeckCardNew,
	handleDeckCardDelete,
} from '../handlers/decks';

function decks (state = {}, action) {
	switch(action.type) {
		case DECK_RECEIVE:
			return handleDeckReceive(state, action.decks);
		case DECK_NEW:
			return handleDeckNew(state, action.deck);
		case DECK_DELETE:
			return handleDeckDelete(state, action.deck);
		case CARD_NEW:
			return handleDeckCardNew(state, action.card, action.deckId);
		default:
			return state;
	}
}

export default decks;