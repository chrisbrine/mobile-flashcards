import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './Redux';

import MobileCardApp from './components/App';

import { blue } from './utils/colors';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MobileCardApp />
			</Provider>
		);
	}
}