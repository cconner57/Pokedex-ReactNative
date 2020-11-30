import React from 'react';
import { enableScreens } from 'react-native-screens';

import PokedexNavigator from './navigation/PokedexNavigator';

enableScreens();

export default function App() {
	return <PokedexNavigator />;
}
