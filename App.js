import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabScreen from './screens/TabTopScreen';
import TabBottom from './screens/TabBottomScreen';

const Stack = createStackNavigator();

export default function App(){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Poggers Academy' options={{title: 'Poggers Academy', headerStyle:{backgroundColor: 'orange'}}} component={TabBottom}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
