import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaSeg from '../atividade/AtividadeListaSeg';
import AtividadeForm from '../atividade/AtividadeForm';

const SegundaStack = createStackNavigator();

export default function SegundaStackScreen(){
    return(
        <SegundaStack.Navigator screenOptions={{headerShown: false}}>
            <SegundaStack.Screen name='ListaAtiv' component={AtividadeListaSeg}/>
            <SegundaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </SegundaStack.Navigator>
    );
}