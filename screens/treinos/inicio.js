import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Treinos({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ margin: 10, fontWeight: 'bold' }}>Você não possui nenhum treino, aperte o botão "+" para criar seu treino</Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Text style={{color: 'white', fontSize: 30, bottom: '3%'}}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={{ color: 'white', fontSize: 20, bottom: '5%' }}>x</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('grupos')}>
              <Text style={{fontWeight: 'bold'}}>Montar seu próprio treino</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('grupos')}>
              <Text style={{fontWeight: 'bold'}}>Acessar um Treino Pronto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 280,
    right: 60,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '60%',
    height: '20%',
    alignItems: 'center',
  },
  botao:{
    padding: 20,
    backgroundColor: 'orange',
    borderRadius: 15,
    margin: 5,
    width: '100%',
    elevation: 5
  }
});