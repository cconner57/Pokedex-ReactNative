import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { pokemonGenre, pokemonGen8 } from '../Data/pokemon-data';

const PokemonList = (props) => {
	const catId = props.navigation.getParam('categoryId');
	const selectedCategory = pokemonGenre.find((cat) => cat.id === catId);

	return (
		<View>
			<Text>Pokémon List</Text>
			<Text>{selectedCategory.name}</Text>
			<FlatList keyExtractor={(item, index) => item.id} data={pokemonGen8} renderItem={pokemonData => (
				<View>
					<Text>{pokemonData.item.name}</Text>
				</View>
			)} />
		</View>
	);
};

PokemonList.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = pokemonGenre.find((cat) => cat.id === catId);
	return {
		headerTitle: `${selectedCategory.name} Pokédex`,
	};
};

export default PokemonList;
