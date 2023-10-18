import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import SegundaStackScreen from './Seg';
import TercaStackScreen from './Ter';
import QuartaStackScreen from './Qua';
import QuintaStackScreen from './Qui';
import SextaStackScreen from './Sex';
import SabadoStackScreen from './Sab';

const Tab = createMaterialTopTabNavigator();

export default function TabScreen(){
	return(
			<Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'orange', // Define a cor quando o item está ativo
                tabBarInactiveTintColor: 'gray', // Define a cor quando o item está inativo
                tabBarIndicatorStyle: { backgroundColor: 'orange' },
            })}>
				<Tab.Screen name="Seg" component={SegundaStackScreen} />
        		<Tab.Screen name="Ter" component={TercaStackScreen} />
        		<Tab.Screen name="Qua" component={QuartaStackScreen} />
        		<Tab.Screen name="Qui" component={QuintaStackScreen} />
        		<Tab.Screen name="Sex" component={SextaStackScreen} />
        		<Tab.Screen name="Sáb" component={SabadoStackScreen} />
			</Tab.Navigator>
	);
}