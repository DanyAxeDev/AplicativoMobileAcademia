import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../CommonStyles';

export default function AtividadeItem(props){
	return(
		<View style={styles.containerItem} id={props.atividade.codigo}>
			<Text style={styles.textItem}>{props.atividade.nome}</Text>
			<Text style={styles.textItem}>Horario: {props.atividade.horario}</Text>
			<Text style={styles.textItem}>Duração: {props.atividade.duracao}</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
					<Text style={styles.buttonText}>X</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}