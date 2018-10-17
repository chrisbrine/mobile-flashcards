import { initCards } from './cards';
import { initDecks } from './decks';

export function initData() {
	return Promise.all([
		initCards(),
		initDecks(),
	]).then(([cards, decks]) => ({
		cards: cards,
		decks: decks,
	}));
}