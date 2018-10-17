import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import TextButton from '../TextButton';
import TextField from '../TextField';

import { styleDeckNew } from '../styles';

import { deckNew } from '../../Redux/actions/decks';
import { createId } from '../../utils/helpers';

class DeckNew extends Component {
	state = {
		title: '',
	}
	onCreate = () => {
		if (this.state.title.trim()) {
			const deckId = createId(this.state.title.trim());
			this.props.dispatch(deckNew({
				id: deckId,
				name: this.state.title.trim(),
				cards: {},
			}));
			this.setState({
				title: '',
			});
			this.props.navigation.navigate('Decks');
		} else {
			alert('A name is required to create a deck.');
		}
	}
	render() {
		return (
			<View style={styleDeckNew.container}>
				<View>
					<Text style={styleDeckNew.header}>
						What is the title of your new deck?
					</Text>
					<View>
						<TextField 
							value={this.state.title} 
							onChange={(text) => this.setState({title: text})} 
							placeholder='Deck Title' 
						/>
					</View>
				</View>
				<View style={styleDeckNew.button}>
					<TextButton 
						type='create' 
						onPress={this.onCreate}
						title='Create Deck' 
					/>
				</View>
			</View>
		);
	}
}

function mapStateToProps({ decks }) {
	return {
		decks,
	};
}

export default connect(mapStateToProps)(DeckNew);