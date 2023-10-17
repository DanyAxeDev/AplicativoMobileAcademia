import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AtividadeListaSab from '../AtividadeListaSab';
import AtividadeForm from '../AtividadeForm';

const SabadoStack = createStackNavigator();

export default function SabadoStackScreen(){
    return(
        <SabadoStack.Navigator screenOptions={{headerShown: false}}>
            <SabadoStack.Screen name='ListaAtiv' component={AtividadeListaSab}/>
            <SabadoStack.Screen name='NovoAtiv' component={AtividadeForm}/>
        </SabadoStack.Navigator>
    );
}