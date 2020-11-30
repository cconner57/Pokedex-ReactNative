import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from '../screens/Menu';
import PokemonList from '../screens/PokemonList';
import Checklist from '../screens/Checklist';
import Colors from '../constants/Colors';

const PokedexNavigator = createStackNavigator(
	{
		MenuScreen: Menu,
		PokemonListScreen: PokemonList,
		ChecklistScreen: Checklist,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTintColor:
				Platform.OS === 'android' ? 'white' : Colors.primaryColor,
		},
	}
);

export default createAppContainer(PokedexNavigator);
