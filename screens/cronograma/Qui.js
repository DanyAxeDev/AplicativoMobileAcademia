import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaQui from '../atividade/AtividadeListaQui';
import AtividadeForm from '../atividade/AtividadeForm';

const QuintaStack = createStackNavigator();

export default function QuintaStackScreen(){
    return(
        <QuintaStack.Navigator screenOptions={{headerShown: false}}>
            <QuintaStack.Screen name='ListaAtiv' component={AtividadeListaQui}/>
            <QuintaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </QuintaStack.Navigator>
    );
}