import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'MobileCards:Decks';

const defaultDecks = {
		'tempdeck': {
			id: 'tempdeck',
			name: 'Deck 1',
			cards: { 'card1': 'card1', 'card2': 'card2', 'card3': 'card3'},
		},
		'deck2': {
			id: 'deck2',
			name: 'Deck 2',
			cards: {},
		}
};

const setDecks = (state) => {
	return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state));
}

export function initDecks () {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then(results => {
			if (results === null) {
				setDecks(defaultDecks);
				return defaultDecks;
			} else {
				return JSON.parse(results);
			}
		});
}

export function handleDeckReceive (state, decks) {
	const newState = {
		...state,
		...decks,
	};

	setDecks(newState);
	return newState;
}

export function handleDeckNew (state, deck) {
	const newState = {
		...state,
		[deck.id]: deck,
	};

	setDecks(newState);
	return newState;
}

export function handleDeckDelete (state, deck) {
	delete state[deck.id];

	const newState = { ...state };

	setDecks(newState);
	return newState;
}

export function handleDeckCardNew (state, card, deckId) {
	const newState = {
		...state,
		[deckId]: {
			...state[deckId],
			cards: {
				...state[deckId].cards,
				[card.id]: card.id,
			},
		}
	}

	setDecks(newState);
	return newState;
}
