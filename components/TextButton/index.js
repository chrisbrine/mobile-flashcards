import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styleButton } from '../styles';

export default function TextButton ({ title, onPress, type = {} }) {
	return (
		<TouchableOpacity 
			onPress={onPress} 
			style={[styleButton[type].button, styleButton.default.button]} 
		>
			<Text 
				style={[styleButton[type].text, styleButton.default.text]} 
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

