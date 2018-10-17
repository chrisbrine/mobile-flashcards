import { 
	CARD_RECEIVE, 
	CARD_NEW, 
} from '../actions/cards';
import {
	DECK_DELETE,
} from '../actions/decks';
import {
	handleCardReceive,
	handleCardNew,
	handleCardDeckDelete,
} from '../handlers/cards';

function cards (state = {}, action) {
	switch(action.type) {
		case CARD_RECEIVE:
			return handleCardReceive(state, action.cards);
		case CARD_NEW:
			return handleCardNew(state, action.card, action.deckId);
		case DECK_DELETE:
			return handleCardDeckDelete(state, action.deck);
		default:
			return state;
	}
}

export default cards;