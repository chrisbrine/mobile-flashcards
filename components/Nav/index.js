import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { 
	createBottomTabNavigator,
	createMaterialTopTabNavigator,
	createStackNavigator
} from 'react-navigation';

import Card from '../Card';
import CardNew from '../CardNew';
import Decks from '../Decks';
import DeckNew from '../DeckNew';
import DeckView from '../DeckView';

import { blue, white } from '../../utils/colors.js';

const TabData = {
	Decks: {
		screen: Decks,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
		},
	},
	DeckNew: {
		screen: DeckNew,
		navigationOptions: {
			tabBarLabel: 'Add Deck',
			tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
		},
	},
};

const TabOptions = {
	navitationOptions: {
		header: null,
	},
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? blue : white,
		style: {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? white : blue,
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowRadius: 6,
			shadowOpacity: 1,
		},
	},
};

const Tabs = Platform.OS === 'ios'
? createBottomTabNavigator(TabData, TabOptions)
: createMaterialTopTavNaigator(TabData, TabOptions);

const navigationOptions = {
	headerTintColor: white,
	headerStyle: {
		backgroundColor: blue,
	},
};

const StackData = {
	'1': {
		screen: Tabs,
		navigationOptions,
	},
	'2': {
		screen: DeckView,
		navigationOptions,
	},
	'3': {
		screen: CardNew,
		navigationOptions,
	},
	'4': {
		screen: Card,
		navigationOptions,
	},
};

const MainNav = createStackNavigator(StackData);

class MainNavigator extends Component {
	render () {
		const { loaded } = this.props;
			return <MainNav />;
	}
}

function mapStateToProps({ loaded }) {
	return {
		loaded,
	};
}

export default connect(mapStateToProps)(MainNavigator);