import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Nav from '../Nav';

import { handleInitialData } from '../../Redux/actions';

import { styleStatusBar, styleApp } from '../styles';

import { blue } from '../../utils/colors';

function CardsStatusBar ({ backgroundColor, ...props}) {
	return (
		<View style={[styleStatusBar.statusBar, { backgroundColor }]}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}

class App extends Component {
	componentDidMount () {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}
	render() {
		return (
			<View style={styleApp.container}>
				<CardsStatusBar backgroundColor={blue} barStyle='light-content' />
				<Nav />
			</View>
		);
	}
}

export default connect()(App);