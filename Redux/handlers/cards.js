import { AsyncStorage } from 'react-native';

const CARD_STORAGE_KEY = 'MobileCards:Cards';

const defaultCards = {
	'card1': {
		id: 'card1',
		question: 'Does React Native work with Android?',
		answer: 'Yes, of course!',
		deckId: 'tempdeck',
	},
	'card2': {
		id: 'card2',
		question: 'Does React Native work with iOS?',
		answer: 'Yes, of course!',
		deckId: 'tempdeck',
	},
	'card3': {
		id: 'card3',
		question: 'Does React Native work with Blackberry OS?',
		answer: 'No. Too old.',
		deckId: 'tempdeck',
	},
};

const setCards = (state) => {
	return AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(state));
}

export function initCards () {
	return AsyncStorage.getItem(CARD_STORAGE_KEY)
		.then(results => {
			if (results === null) {
				setCards(defaultCards);
				return defaultCards;
			} else {
				return JSON.parse(results);
			}
		});
}

export function handleCardReceive (state, cards) {
	const newState = {
		...state,
		...cards,
	};

	setCards(newState);
	return newState;
}

export function handleCardNew (state, card, deckId) {
	const newState = {
		...state,
		[card.id]: card,
	};

	setCards(newState);
	return newState;
}

export function handleCardDeckDelete (state, deck) {
	Object.keys(state)
		.filter(key => state[key].deckId === deck.id)
		.forEach(key => delete state[key]);

	const newState =  { ...state };

	setCards(newState);
	return newState;
}