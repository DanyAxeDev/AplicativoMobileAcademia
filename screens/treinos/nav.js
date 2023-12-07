import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Treinos from './inicio';
import GruposMusculares from './GruposMusculares';

const Stack = createStackNavigator();

export default function NavTreino(){
    return(
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='inicio'>
                <Stack.Screen name='inicio' component={Treinos}/>
                <Stack.Screen name='grupos' component={GruposMusculares}/>
            </Stack.Navigator>
    )
}