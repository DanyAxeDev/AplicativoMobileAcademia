import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabScreen from './TabTopScreen';
import Financeiro from './financeiro/financeiro';
import Treinos from './treinos/treinos';

const Bottom = createMaterialBottomTabNavigator();

export default function TabBottom(){
    return(
        <Bottom.Navigator
            barStyle={{backgroundColor: '#FFDEAD'}}
        >
            <Bottom.Screen name='cronograma' component={TabScreen}
                options={{tabBarLabel: "Horários",
				tabBarIcon: ({color}) => (<MaterialCommunityIcons name='alarm' color={color} size={26}/>),
				}}
            />
            <Bottom.Screen name='financeiro' component={Financeiro}
                options={{tabBarLabel: "Financeiro",
				tabBarIcon: ({color}) => (<MaterialCommunityIcons name='currency-usd' color={color} size={26}/>)
				}}
            />
            <Bottom.Screen name='treinos' component={Treinos}
                options={{tabBarLabel: "Treinos",
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name='dumbbell' color={color} size={26}/>)
                }}
            />
        </Bottom.Navigator>
    )
}