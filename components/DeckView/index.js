import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { navigation } from 'react-navigation';

import TextButton from '../TextButton';

import { red, black, white } from '../../utils/colors';

import { deckDelete } from '../../Redux/actions/decks';

import { styleDeckView } from '../styles';

class DeckView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		return {
			title: `${state.params.title}`,
		};
	}
	getCount = (cards) => {
		const cardCount = Object.keys(cards).length;
		if (cardCount === 1) {
			return '1 card';
		} else {
			return `${cardCount} cards`;
		}
	}
	onAddCard = (deckId) => {
		const { navigate } = this.props.navigation;
		navigate('3', {
			deckId: deckId,
			title: 'Add Card',
		});
	}
	onStart = (deckId) => {
		const { navigate } = this.props.navigation;
		navigate('4', {
			deckId: deckId,
			start: true,
			index: 0,
			title: 'Quiz',
		});
	}
	onDelete = (deckId) => {
		const { dispatch, decks } = this.props;
		dispatch(deckDelete(decks[deckId]));
		this.props.navigation.goBack(null);
	}
	render() {
		const { decks } = this.props;
		const { deckId } = this.props.navigation.state.params;
		if (decks[deckId] !== undefined) {
			return (
				<View style={styleDeckView.container}>
					<View style={styleDeckView.deck}>
						<Text style={styleDeckView.name}>
							{decks[deckId].name}
						</Text>
						<Text style={styleDeckView.count}>
							{this.getCount(decks[deckId].cards)}
						</Text>
						<TextButton 
							type='add' 
							onPress={() => this.onAddCard(deckId)} 
							title='Add Card' 
						/>
						<TextButton 
							type='start' 
							onPress={() => this.onStart(deckId)} 
							title='Start Quiz' 
						/>
						<TextButton 
							type='delete' 
							onPress={() => this.onDelete(deckId)} 
							title='Delete Deck'
						/>
					</View>
				</View>
			);
		} else {
			return (
				<View>
					<Text>
						Deleted.
					</Text>
				</View>
			);
		}
	}
}

function mapStateToProps({ decks, cards }) {
	return {
		decks,
		cards,
	};
}

export default connect(mapStateToProps)(DeckView);