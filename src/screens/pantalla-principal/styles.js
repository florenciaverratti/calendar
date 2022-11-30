import {StyleSheet} from 'react-native';
import {colors} from "./../../constants/color";
import react from "react";

export const styles = StyleSheet.create({
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