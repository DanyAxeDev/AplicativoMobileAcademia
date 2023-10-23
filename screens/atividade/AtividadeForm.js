import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Atividade} from '../../dados/Atividade';
import GestorDados from '../../dados/GestorDados';
import {styles} from '../../CommonStyles';

export default function AtividadeForm({navigation, route}){
	const gestor = new GestorDados();

	const gerarCodigoAleatorio = () => {
		const timestamp = new Date().getTime();
		const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere para o intervalo desejado
		return `${timestamp}-${numeroAleatorio}`;
	};

	const[horario, setHorario] = useState('');
	const[nome, setNome] = useState('');
	const[duracao, setDuracao] = useState('');
	const[dia, setDia] = useState(route.params.diaSelecionado || 'segunda')
	const salvar = () => {
		const codigo = gerarCodigoAleatorio();
		ativAux = new Atividade(codigo, horario, nome, duracao, dia);
		gestor.adicionar(ativAux).then(navigation.navigate('ListaAtiv'));
	}
	
	return(
		<View style={styles.inputContainer}>
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
			<Picker
				selectedValue={dia}
				onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
			>
				<Picker.Item label="Segunda-feira" value="segunda" />
        		<Picker.Item label="Terça-feira" value="terca" />
        		<Picker.Item label="Quarta-feira" value="quarta" />
        		<Picker.Item label="Quinta-feira" value="quinta" />
        		<Picker.Item label="Sexta-feira" value="sexta" />
        		<Picker.Item label="Sábado" value="sabado" />
			</Picker>
			<TouchableOpacity style={styles.button} onPress={salvar}>
				<Text style={styles.buttonTextBig}>Salvar</Text>
			</TouchableOpacity>
		</View>
	)
}