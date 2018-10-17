import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { navigation } from 'react-navigation';

import TextButton from '../TextButton';

import { styleCard } from '../styles';

class Card extends Component {
	state = {
		currentText: '',
		currentButtonText: 'Answer',
		correct: 0,
		incorrect: 0,
		total: 0,
		index: 0,
		cardId: '',
		cards: {},
	}
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		return {
			title: `${state.params.title}`,
		};
	}
	constructor (props) {
		super(props);
		const { decks, cards } = this.props;
		const { deckId } = this.props.navigation.state.params;
		this.state.total = Object.keys(decks[deckId].cards).length;
		if (this.state.total > 0) {
			this.state.cards = Object.keys(decks[deckId].cards)
			const cardId = this.state.cards[this.state.index];
			this.state.currentText = cards[cardId].question;
			this.state.cardId = cardId;
		}
	}
	onAnswer = (answer) => {
		let nextCardId = this.state.cardId;
		if (this.state.index < (this.state.total - 1)) {
			nextCardId = this.state.cards[this.state.index + 1];
		}
		this.setState({
			...this.state,
			currentText: this.props.cards[nextCardId].question,
			currentButtonText: 'Answer',
			cardId: nextCardId,
			index: this.state.index + 1,
			[answer]: this.state[answer] + 1,
		});
	}
	flipCard = () => {
		this.setState({
			...this.state,
			currentText: this.state.currentButtonText === 'Question'
				? this.props.cards[this.state.cardId].question
				: this.props.cards[this.state.cardId].answer,
			currentButtonText: this.state.currentButtonText === 'Question'
				? 'Answer'
				: 'Question',
		});
	}
	calculateScore = () => {
		return Math.round(((this.state.correct * 1.0) / this.state.total) * 100);
	}
	render() {
		const { cards, decks } = this.props;
		const { deckId } = this.props.navigation.state.params;
		return (
			<Fragment>
				{this.state.total <= 0
				? /* Are there no cards at all? Show this part then */
					(
						<View style={styleCard.noCardsContainer}>
							<View>
								<Text style={styleCard.noCardsText}>
									Sorry, you cannot take a quiz because there are no cards in the deck.
								</Text>
							</View>
						</View>
					)
				: this.state.total <= this.state.index
				? /* Is it done? Show the results */
					(
						<View style={styleCard.resultContainer}>
							<View style={styleCard.resultCorrectContainer}>
								<Text style={styleCard.resultCorrectHeader}>
									Correct
								</Text>
								<Text style={styleCard.resultCorrectText}>
									{this.state.correct}
								</Text>
							</View>
							<View style={styleCard.resultIncorrectContainer}>
								<Text style={styleCard.resultIncorrectHeader}>
									Incorrect
								</Text>
								<Text style={styleCard.resultIncorrectText}>
									{this.state.incorrect}
								</Text>
							</View>
							<View style={styleCard.resultScoreContainer}>
								<Text style={styleCard.resultScoreHeader}>
									Score
								</Text>
								<Text style={styleCard.resultScoreText}>
									{this.calculateScore()}%
								</Text>
							</View>
						</View>
					)
				: /* If showing a card currently */
					(
						<View style={styleCard.cardContainer}>
							<View style={styleCard.cardInfoContainer}>
								<Text style={styleCard.cardInfo}>
									{this.state.index} / {this.state.total}
								</Text>
							</View>
							<View style={styleCard.cardTextContainer}>
								<View style={styleCard.cardTextFieldContainer}>
									<Text style={styleCard.cardTextField}>
										{this.state.currentText}
									</Text>
								</View>
								<View style={styleCard.cardTextButton}>
									<TextButton
										onPress={this.flipCard} 
										type='cardFlip' 
										title={`Show ${this.state.currentButtonText}`}
									/>
								</View>
							</View>
							<View style={styleCard.cardButtons}>
								<TextButton 
									onPress={() => this.onAnswer('correct')} 
									type='cardCorrect' 
									title='Correct' 
								/>
								<TextButton 
									onPress={() => this.onAnswer('incorrect')} 
									type='cardIncorrect' 
									title='Incorrect' 
								/>
							</View>
						</View>
					)
				}
			</Fragment>
		);
	}
}

function mapStateToProps({ cards, decks }) {
	return {
		cards,
		decks,
	};
}

export default connect(mapStateToProps)(Card);