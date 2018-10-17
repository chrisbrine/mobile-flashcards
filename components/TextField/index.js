import React from 'react';
import { View, TextInput } from 'react-native';

import { styleInput } from '../styles';

export default function TextField ({ onChange, value, placeholder = {} }) {
	return (
		<View style={styleInput.container}>
			<TextInput 
				style={styleInput.input} 
				onChangeText={onChange} 
				value={value} 
				placeholder={placeholder}
			/>
		</View>
	);
}

