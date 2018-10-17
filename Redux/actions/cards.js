export const CARD_RECEIVE = 'CARD_RECEIVE';
export const CARD_NEW = 'CARD_NEW';

export function cardReceive(cards = {}) {
	return {
		type: CARD_RECEIVE,
		cards,
	};
}

export function cardNew(card, deckId) {
	return {
		type: CARD_NEW,
		card,
		deckId,
	};
}