import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';



const App = () => {
  
	return (
    
		<View style={styles.container}>
			<Button
				title='Kart Dogrulama Butonu'
				onPress={() => {
					const card = require('kart-dogrulama');
console.log(card('5374661040114189'));
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
	},
});

export default App;