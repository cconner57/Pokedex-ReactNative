import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { pokemonGen8 } from '../Data/pokemon-data';

const Checklist = () => {
	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={pokemonGen8}
				renderItem={(pokemonData) => (
					<View styles={styles.List}>
						<Text>
							{pokemonData.item.id} {pokemonData.item.name}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

Checklist.navigationOptions = {
	headerTitle: 'Galarian Pokémon',
};

const styles = StyleSheet.create({
    List: {
        
    }
})

export default Checklist;
