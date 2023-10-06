import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
		width: '100%',
		padding: 5
	},
	scrollContainer:{
		width: '100%'
	},
	itemsContainer:{
		marginTop: 10,
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		alignItems: 'stretch',
		backgroundColor: '#fff',
	},
	containerItem:{
		flex: 1,
		backgroundColor: '#F5DEB3',
		marginTop: 10,
		width: '100%',
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#F4A460',
		elevation: 10,
		shadowColor: '#52006A',
	},
	inputContainer:{
		flex: 1,
		marginTop: 30,
		marginLeft: '5%',
		width: '90%',
		padding: 20,
		alignItems: 'stretch',
		backgroundColor: '#fff'
	},
	buttonContainer:{
		flexDirection: 'row-reverse',
		alignItems: 'flex-end',
		paddingBottom: 10,
		marginTop: 10	
	},
	input:{
		marginTop: 10,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingHorizontal: 24,
		fontSize: 24,
		alignItems: 'stretch'
	},
	button:{
		marginTop: 10,
		marginBottom: 10,
		height: 60,
		backgroundColor: 'black',
		borderRadius: 10,
		paddingHorizontal: 24,
		fontSize: 16,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 20,
		shadowOpacity: 20,
		shadowColor: '#ccc'
	},
	buttonText:{
		color: '#fff',
		fontWeight: 'bold'
	},
	buttonTextBig:{
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 24
	},
	textItem:{
		fontSize: 20
	},
	deleteButton:{
		marginLeft: 10,
		height: 40,
		width: 40,
		backgroundColor: 'red',
		borderRadius: 10,
		padding: 10,
		fontSize: 12,
		elevation: 10,
		shadowOpacity: 10,
		shadowColor: '#ccc',
		alignItems: 'center',
	}
});