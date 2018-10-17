import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

import { green, red, white, black } from '../utils/colors';

// Component: App, primary app component
exports.styleApp = StyleSheet.create({
	container: {
		flex: 1,
	},
});

// For the status bar
exports.styleStatusBar = StyleSheet.create({
	statusBar: {
		height: Constants.statusBarHeight,
	},
});

// Component: Decks, if there are any decks
exports.styleDeck = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	deck: {
		flex: 1,
		alignItems: 'center',
	},
	deckName: {
		marginTop: 20,
		flex: 1,
		fontSize: 35,
	},
	count: {
	},
});

// Component: Decks, if there are no decks
exports.styleNoDeck = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	text: {
		fontSize: 30,
		color: red,
		marginLeft: 30,
		marginRight: 30,
		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',
	},
});

// Component: DeckView
exports.styleDeckView = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	deck: {
		alignItems: 'center',
	},
	name: {
		marginTop: 20,
		fontSize: 25,
	},
});

// Component: DeckNew
exports.styleDeckNew = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		marginTop: 25,
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 15,
		fontSize: 35,
		textAlign: 'center',
	},
	button: {
		marginBottom: 35,
	}
});

// Component: Card
exports.styleCard = StyleSheet.create({
	noCardsContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	noCardsText: {
		fontSize: 25,
		marginLeft: 30,
		marginRight: 30,
		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',
	},

	cardContainer: {
		flex: 1,
		justifyContent: 'space-around',
	},
	cardTextContainer: {
		flex: 3,
	},
	cardInfoContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	cardInfo: {
		fontSize: 20,
		textAlign: 'left',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignSelf: 'stretch',
	},
	cardTextFieldContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	cardTextField: {
		fontSize: 25,
		marginLeft: 30,
		marginRight: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	cardTextButton: {
		flex: 1,
		alignItems: 'center',
	},
	cardButtons: {
		flex: 2,
		marginBottom: 50,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	resultContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultCorrectContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultCorrectHeader: {
		justifyContent: 'flex-end',
		fontWeight: 'bold',
		fontSize: 35,
		color: green,
	},
	resultCorrectText: {
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'flex-start',
	},
	resultInorrectContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultIncorrectHeader: {
		justifyContent: 'flex-end',
		fontWeight: 'bold',
		fontSize: 35,
		color: red,
	},
	resultIncorrectText: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		textAlign: 'center',
	},
	resultScoreContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultScoreHeader: {
		justifyContent: 'flex-end',
		fontWeight: 'bold',
		fontSize: 35,
		color: black,
	},
	resultScoreText: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		textAlign: 'center',
	},
});

// Component: CardNew
exports.styleCardNew = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	textField1: {
		flex: 1,
		marginTop: 15,
		marginBottom: 15,
		justifyContent: 'flex-end',
	},
	textField2: {
		flex: 1,
		marginTop: 15,
		marginBottom: 15,
		justifyContent: 'flex-start',
	},
	button: {
		flex: 2,
		justifyContent: 'flex-end',
		marginBottom: 75,
	}
});

// Component: TextButton
exports.styleButton = {
	add: StyleSheet.create({
		button: {
			marginTop: 200,
			borderColor: black,
			backgroundColor: white,
			borderWidth: 2,
			borderRadius: 5,
		},
		text: {
			color: black,
		},
	}),
	start: StyleSheet.create({
		button: {
			marginTop: 20,
			borderColor: white,
			backgroundColor: black,
			borderWidth: 2,
			borderRadius: 5,
		},
		text: {
			color: white,
		},
	}),
	delete: StyleSheet.create({
		button: {
		},
		text: {
			color: red,
		},
	}),
	create: StyleSheet.create({
		button: {
			marginTop: 20,
			borderColor: white,
			backgroundColor: black,
			borderWidth: 2,
			borderRadius: 5,
		},
		text: {
			color: white,
		},
	}),
	cardFlip: StyleSheet.create({
		button: {
		},
		text: {
			color: red,
		},
	}),
	cardCorrect: StyleSheet.create({
		button: {
			marginTop: 20,
			borderColor: white,
			backgroundColor: green,
			borderWidth: 2,
			borderRadius: 5,
		},
		text: {
			color: white,
		},
	}),
	cardIncorrect: StyleSheet.create({
		button: {
			marginTop: 20,
			borderColor: white,
			backgroundColor: red,
			borderWidth: 2,
			borderRadius: 5,
		},
		text: {
			color: white,
		},
	}),
	default: StyleSheet.create({
		button: {
			height: 50,
			width: Dimensions.get('window').width * 0.75,
			justifyContent: 'center',
			alignItems: 'center',
		},
		text: {
			textAlign: 'center',
		},
	}),
};

// Component: TextField
exports.styleInput = StyleSheet.create({
	input: {
		backgroundColor: white,
		height: 40,
		width: Dimensions.get('window').width * 0.90,
		borderWidth: 2,
		borderRadius: 5,
	},
});