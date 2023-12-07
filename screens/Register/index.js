import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Usuario } from '../../dados/Usuario';
import GestorDados from '../../dados/GestorDados';

export default function Register() {
  const gestor = new GestorDados();

  const gerarCodigoAleatorio = () => {
    const timestamp = new Date().getTime();
    const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere para o intervalo desejado
    return `${timestamp}-${numeroAleatorio}`;
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('normal');
  const salvar = () => {
    const codigoUser = gerarCodigoAleatorio();
    userAux = new Usuario(codigoUser, email, senha, tipoUsuario);
    gestor.adicionarUsuario(userAux).then(navigation.navigate('SingIn'));
  }

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre sua conta(a)</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Cadastre um Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.title}>Cadastre uma Senha</Text>
        <TextInput placeholder="Sua senha" style={styles.input} value={senha} onChangeText={setSenha} />
        <TouchableOpacity style={styles.button} onPress={salvar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.viewLogin}>
          <Text>Já possui conta?</Text>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate('SingIn')}
          >
            <Text>ir para login</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  registerText: {
    marginTop: 16,
    fontSize: 16,
    color: '#a1a1a1',
    textAlign: 'center'
  },

  viewLogin: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  login: { marginLeft: 5, color: '#F19D25' }
})
