import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import GestorDados from '../../dados/GestorDados'

const ModalComponent = ({ modalVisible, toggleModal }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Usuário não encontrado</Text>
          <TouchableOpacity style={styles.botao} onPress={toggleModal}>
            <Text style={{ fontWeight: 'bold' }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

export default function Signin() {
    const gestor = new GestorDados();
    [usuario, setUsuario] = useState([]);
    [email, setEmail] = useState('');
    [senha, setSenha] = useState('');
    [login, setLogin] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        gestor.obterUsuarios().then(objs => setUsuario(objs));
    });

    const navigation = useNavigation();

    const handleLogin = () => {
        usuario.map((user) => {
            if (user.email == email && user.senha == senha) {
                setLogin(true);
            } else {
                return (
                    <View style={styles.container}>
                        <ModalComponent modalVisible={modalVisible} toggleModal={toggleModal} />
                    </View>
                )
            }
            if (login) {
                navigation.navigate('Poggers Academy');
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Poggers Academy' }],
                });
            }
        })
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
                <TextInput placeholder="Digite um email..." style={styles.input} value={email} onChangeText={setEmail} />
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Sua senha" style={styles.input} value={senha} onChangeText={setSenha} />
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
