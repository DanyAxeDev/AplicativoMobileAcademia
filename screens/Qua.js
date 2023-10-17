import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaQua from '../AtividadeListaQua';
import AtividadeForm from '../AtividadeForm';

const QuartaStack = createStackNavigator();

export default function QuartaStackScreen(){
    return(
        <QuartaStack.Navigator screenOptions={{headerShown: false}}>
            <QuartaStack.Screen name='ListaAtiv' component={AtividadeListaQua}/>
            <QuartaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </QuartaStack.Navigator>
    );
}