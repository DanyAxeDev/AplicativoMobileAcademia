import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaTer from '../AtividadeListaTer';
import AtividadeForm from '../AtividadeForm';

const TercaStack = createStackNavigator();

export default function TercaStackScreen(){
    return(
        <TercaStack.Navigator screenOptions={{headerShown: false}}>
            <TercaStack.Screen name='ListaAtiv' component={AtividadeListaTer}/>
            <TercaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </TercaStack.Navigator>
    );
}