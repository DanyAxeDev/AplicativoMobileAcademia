import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import GestorDados from './dados/GestorDados';
import AtividadeItem from './AtividadeItem';
import {styles} from './CommonStyles';
import {useIsFocused} from '@react-navigation/native'

export default function AtividadeLista({navigation}){
	const gestor = new GestorDados();
	const[atividades, setAtividades] = useState([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		gestor.obterTodos().then(objs => setAtividades(objs));
	}, [isFocused]);

	const myKeyExtractor = item => {
		return item.codigo;
	}

	function excluirProduto(codigo){
		gestor.remover(codigo).then(gestor.obterTodos().then(objs => setAtividades(objs)));
	}

	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovoAtiv')}>
				<Text style={styles.buttonTextBig}>Nova Atividade</Text>		
			</TouchableOpacity>
			<FlatList 
				style={styles.scrollContainer} 
				data={atividades}
				contentContainerStyle={styles.itemsContainer}
				keyExtractor={myKeyExtractor}
				renderItem={({item}) => <AtividadeItem onDelete={() => excluirProduto(item.codigo)} atividade={item}/>}
			/>
		</View>
	);
}