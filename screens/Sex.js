import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaSex from '../AtividadeListaSex';
import AtividadeForm from '../AtividadeForm';

const SextaStack = createStackNavigator();

export default function SextaStackScreen(){
    return(
        <SextaStack.Navigator screenOptions={{headerShown: false}}>
            <SextaStack.Screen name='ListaAtiv' component={AtividadeListaSex}/>
            <SextaStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </SextaStack.Navigator>
    );
}