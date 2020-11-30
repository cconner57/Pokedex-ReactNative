import React from 'react';
import { View, Text, Button } from 'react-native';
import DefaultStyles from '../default-styles';

import { pokemonGenre } from '../Data/pokemon-data';

const Menu = (props) => {
	return (
		<View style={DefaultStyles.Pokedex}>
			<View style={DefaultStyles.Pokedex__Container}>
				{pokemonGenre.map((genre, id) => (
					<View key={id} style={DefaultStyles.Pokedex__Button}>
						<Button
							title={`${genre.name} ${genre.gen}`}
							color='white'
							onPress={() => {
								props.navigation.navigate({
									routeName: 'PokemonListScreen',
									params: { categoryId: genre.id },
								});
							}}
						/>
					</View>
				))}
			</View>
			<View style={DefaultStyles.Pokedex__ChecklistContainer}>
				<Text style={DefaultStyles.Pokedex__Title}>Galar - Sword & Shield</Text>
				<View style={DefaultStyles.Pokedex__Button}>
					<Button
						title='Checklist'
						color='white'
						onPress={() => {
							props.navigation.navigate('ChecklistScreen');
						}}
					/>
				</View>
			</View>
		</View>
	);
};

Menu.navigationOptions = {
	headerTitle: 'Pokémon',
};

export default Menu;
