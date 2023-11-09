import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../../CommonStyles";

export default function GruposMusculares({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Selecione um grupo muscular:</Text>
            <View style={styles.containerM}>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Peito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Costas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Perna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Abdomen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Biceps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Triceps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItemM}>
                    <Text style={styles.textItem}>Panturrilha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}