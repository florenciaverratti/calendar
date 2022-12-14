import {AddItem, CustomCalendar, CustomFlatList, CustomModal, Header}  from '../../components/index';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/themes';
import {Ionicons} from '@expo/vector-icons';
import { styles } from './styles';

const Home = ({navigation}) =>{
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
        <Ionicons name="close-outline" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  )
  
  const borrarTurno = (id) =>{
    setListaTurno(listaTurno.filter((item) => item.id !== id));
    setSeleccionarTurno(null);
  }

  return (
    <View style={styles.container}>
      {/*<CustomCalendar />*/}
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
        <TouchableOpacity style={styles.circulo}  onPress={() => modalagregarTurno()}>
          <Ionicons name="add-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;