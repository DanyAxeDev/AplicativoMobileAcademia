import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabScreen from './screens/TabScreen';

const Stack = createStackNavigator();

export default function App(){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Poggers Academy' options={{title: 'Poggers Academy', headerStyle:{backgroundColor: 'orange'}}} component={TabScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
