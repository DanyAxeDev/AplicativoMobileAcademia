import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Signin() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Poggers Academy');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Poggers Academy' }],
        });
    }

    return (
        <View style={styles.container}>
            <Animatable.View
                delay={500}
                animation={'fadeInLeft'}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite um email..." style={styles.input} />
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Sua senha" style={styles.input} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <View style={styles.registerView}>
                    <Text style={styles.registerText}>Não possui uma conta?</Text>
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F19D25'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 16,
        marginTop: 28,
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#F19D25',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        fontSize: 16,
        color: '#F19D25',
        textAlign: 'center'
    },
    registerText: {
        color: '#a1a1a1',
        alignItems: 'center'
    },
    registerView: {
        flexDirection: 'row',
        marginTop: 14,
        alignItems: 'center'
    }
})
