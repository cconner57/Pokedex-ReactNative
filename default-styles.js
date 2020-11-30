import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	Pokedex: {
		alignItems: 'center',
		flex: 1,
	},
	Pokedex__Heading: {
		textAlign: 'center',
		paddingTop: 40,
		paddingBottom: 15,
		fontSize: 40,
		width: '100%',
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#e83030',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	Pokedex__Title: {
		fontSize: 24,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	Pokedex__Container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		height: 425,
		paddingTop: 50,
		borderColor: 'red',
	},
	Pokedex__Button: {
		marginVertical: 12,
		marginHorizontal: 10,
		width: '40%',
		height: 50,
		justifyContent: 'center',
		borderColor: 'hsl(232, 66%, 36%)',
		borderWidth: 2,
		borderRadius: 7,
		backgroundColor: 'hsl(230, 91%, 65%)',
	},
	Pokedex__ChecklistContainer: {
		alignItems: 'center',
	},
});
