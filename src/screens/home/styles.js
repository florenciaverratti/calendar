import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from "./../../constants/themes";
import react from "react";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D8E7E9',
      //justifyContent: 'center', //vertical
      //alignItems: 'center'//horizontal
    },
    calendar:{
      height: height * 0.1,
    },
    circulo:{
      backgroundColor: COLORS.secondary,
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
    },
    scroll:{
      flex: 1,
    }
  });