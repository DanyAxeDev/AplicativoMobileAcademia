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

export default function Register() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        delay={500}
        animation={'fadeInLeft'}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre sua conta(a)</Text>
      </Animatable.View>
      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        <Text style={styles.title}>Cadastre um Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />
        <Text style={styles.title}>Cadastre uma Senha</Text>
        <TextInput placeholder="Sua senha" style={styles.input} />
        <Text style={styles.title}>Confirmação de senha</Text>
        <TextInput placeholder="Confirmar senha" style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SingIn')}>
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
