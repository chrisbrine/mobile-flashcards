import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

import { red } from '../../utils/colors';

import { styleDeck, styleNoDeck } from '../styles';

class Decks extends Component {
	getCount = (cards) => {
		const cardCount = Object.keys(cards).length;
		if (cardCount === 1) {
			return '1 card';
		} else {
			return `${cardCount} cards`;
		}
	}
	openDeck = (deckId) => {
		const { navigate } = this.props.navigation;
		navigate('2', {
			deckId: deckId,
			title: this.props.decks[deckId].name,
		});
	}
	render() {
		const { decks } = this.props;
		if (Object.keys(decks).length < 1) {
			return (
				<View style={styleNoDeck.container}>
					<View>
						<Text style={styleNoDeck.text}>
							No decks available.
						</Text>
						<Text style={styleNoDeck.text}>
							Please add a deck.
						</Text>
					</View>
				</View>
			);
		}
		return (
			<View style={styleDeck.container}>
				<ScrollView style={styleDeck.scrollView}>
					<View style={{flex: 1}}>
					{Object.keys(decks).map((deckId) => (
						<View key={deckId} style={{flex: 1}}>
							<TouchableOpacity key={deckId} style={styleDeck.deck} onPress={() => this.openDeck(deckId)}>
								<Text style={styleDeck.deckName}>
									{decks[deckId].name}
								</Text>
								<Text style={styleDeck.count}>
									{this.getCount(decks[deckId].cards)}
								</Text>
							</TouchableOpacity>
						</View>
					))}
					</View>
				</ScrollView>
			</View>
		);
	}
}



function mapStateToProps({ decks, cards }) {
	return {
		decks,
		cards,
	};
}

export default connect(mapStateToProps)(Decks);