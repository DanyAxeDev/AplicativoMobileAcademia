import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Atividade} from './dados/Atividade';
import GestorDados from './dados/GestorDados';
import {styles} from './CommonStyles';

export default function AtividadeForm({navigation}){
	const gestor = new GestorDados();
	const[codigo, setCodigo] = useState('');
	const[horario, setHorario] = useState('');
	const[nome, setNome] = useState('');
	const[duracao, setDuracao] = useState('');
	const salvar = () => {
		ativAux = new Atividade(codigo, horario, nome, duracao);
		gestor.adicionar(ativAux).then(navigation.navigate('ListaAtiv'));
	}
	
	return(
		<View style={styles.inputContainer}>
			<TextInput 
				style={styles.input} 
				placeholder='Codigo'
				keyboardType={'numeric'}
				value={codigo}
				onChangeText={setCodigo}
			/>
			<TextInput 
				style={styles.input} 
				placeholder='Horário'
				value={horario}
				onChangeText={setHorario}
			/>
			<TextInput
				style={styles.input}
				placeholder='Nome'
				value={nome}
				onChangeText={setNome}
			/>
			<TextInput
				style={styles.input}
				placeholder='Duração'
				value={duracao}
				onChangeText={setDuracao}
			/>
			<TouchableOpacity style={styles.button} onPress={salvar}>
				<Text style={styles.buttonTextBig}>Salvar</Text>
			</TouchableOpacity>
		</View>
	)
}