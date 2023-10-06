import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm';

const Stack = createStackNavigator();

export default function App(){
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName='ListaAtiv'>
				<Stack.Screen name='ListaAtiv' options={{title: 'Infinity Gyn'}} component={AtividadeLista}/>
				<Stack.Screen name='NovoAtiv' options={{title: 'Nova Atividade'}} component={AtividadeForm}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
