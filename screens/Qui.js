import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaQui from '../AtividadeListaQui';
import AtividadeForm from '../AtividadeForm';

const QuintaStack = createStackNavigator();

export default function QuintaStackScreen(){
    return(
        <QuintaStack.Navigator screenOptions={{headerShown: false}}>
            <QuintaStack.Screen name='ListaAtiv' component={AtividadeListaQui}/>
            <QuintaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </QuintaStack.Navigator>
    );
}