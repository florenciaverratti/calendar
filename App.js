import {AddItem, CustomCalendar, CustomFlatList, CustomModal, Header}  from './components/index';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { colors } from "./constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7E9',
    //justifyContent: 'center', //vertical
    //alignItems: 'center'//horizontal
  },
  circulo:{
    backgroundColor: colors.secondary,
    width:50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  l:{
    color: 'white',
    fontSize: 32,
  },
  textBarra: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 45  ,
  },
  barra: {
    height: 80,
    backgroundColor: '#40798c',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#579BB2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 20,
    color: '#000000',
  },
modalContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  paddingVertical: 20,
  height: 200,
},
modalTitle: {
  fontSize: 16
},
modalMessageContainer : {
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 10,
},
modalMessage: {
  fontSize: 14,
},
  botonMas:{
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 30,
  }
});

export default function App() {
  const [nuevoTurno, setNuevoTurno] = useState('');
  const [listaTurno, setListaTurno] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [seleccionarTurno, setSeleccionarTurno] = useState(null);
  
  const recibirTurno = (text) => {
    setNuevoTurno(text);
  }

  const agregarTurno = () => {
    setListaTurno((prevTurno) => [
      ...prevTurno,
      { id: Date.now(),value: nuevoTurno }
    ]);
    setNuevoTurno('');
    setModalVisible(!modalVisible);
  }
  
  const modalagregarTurno= () => {
    setModalVisible(!modalVisible);
  }

  const renderizar = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => borrarTurno(item.id)} >
        <Text> X </Text>
      </TouchableOpacity>
    </View>
  )
  
  const borrarTurno = (id) =>{
    setListaTurno(listaTurno.filter((item) => item.id !== id));
    setSeleccionarTurno(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Header/>
      </View>
      <CustomCalendar/>
      <CustomFlatList
        data={listaTurno}
        renderItem={renderizar}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      
      <CustomModal animationType='slide' visible={modalVisible}>
          
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Añadir Turno</Text>
          </View>
          <View style={styles.modalMessageContainer}> 
            <AddItem
              placeholder='nombre del Item' 
              selectionColor='#31081f' 
              placeholderTextColor={'#70a9a1'} 
              onChangeText={recibirTurno}
              item={nuevoTurno}

              textButton1='Guardar'
              addItem1={agregarTurno}
              color1='#40798c'

              textButton2='Cancelar'
              color2='#cccccc'
              addItem2={() => setModalVisible(!modalVisible)}
            />
          </View>   
      </CustomModal>
      <View style={styles.botonMas}>
        <TouchableOpacity style={styles.circulo} onPress={() => modalagregarTurno()}>
          <Text style={styles.l}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

