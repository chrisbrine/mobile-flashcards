export const DECK_RECEIVE = 'DECK_RECEIVE';
export const DECK_NEW = 'DECK_NEW';
export const DECK_DELETE = 'DECK_DELETE';

export function deckReceive(decks) {
	return {
		type: DECK_RECEIVE,
		decks,
	};
}

export function deckNew(deck) {
	return {
		type: DECK_NEW,
		deck,
	};
}

export function deckDelete(deck) {
	return {
		type: DECK_DELETE,
		deck,
	};
}