import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import TextField from '../TextField';
import TextButton from '../TextButton';

import { cardNew } from '../../Redux/actions/cards';
import { createId } from '../../utils/helpers';

import { styleCardNew } from '../styles';

class CardNew extends Component {
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		return {
			title: `${state.params.title}`,
		};
	}
	state = {
		question: '',
		answer: '',
	}
	onChange = (field, text) => {
		this.setState({
			...this.state,
			[field]: text,
		});
	}
	onSubmit = () => {
		const { question, answer } = this.state;
		const { dispatch } = this.props;
		const { deckId } = this.props.navigation.state.params;
		if (question.trim() && answer.trim()) {
			const card = {
				id: createId(question.trim()),
				question: question.trim(),
				answer: answer.trim(),
				deckId: deckId,
			};
			dispatch(cardNew(card, deckId));
			this.setState({
				question: '',
				answer: '',
			});
			this.props.navigation.goBack(null);
		} else {
			alert('You have to fill out both the question and the answer before creating the card.');
		}
	}
	render() {
		return (
			<View style={styleCardNew.container}>
				<View style={styleCardNew.textContainer}>
					<View style={styleCardNew.textField1}>
						<TextField 
							onChange={(text) => this.onChange('question', text)} 
							value={this.state.question} 
							placeholder='Enter your question' 
						/>
					</View>
					<View style={styleCardNew.textField2}>
						<TextField 
							onChange={(text) => this.onChange('answer', text)} 
							value={this.state.answer} 
							placeholder='Enter your answer' 
						/>
					</View>
				</View>
				<View style={styleCardNew.button}>
					<TextButton 
						onPress={this.onSubmit}
						type='start' 
						title='Submit'
					/>
				</View>
			</View>
		);
	}
}

function mapStateToProps({ cards, decks }) {
	return {
		cards,
		decks,
	};
}

export default connect(mapStateToProps)(CardNew);