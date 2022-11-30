import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export const styles = StyleSheet.create({
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
    mas:{
        color: 'white',
        fontSize: 32,
    },
    botonMas:{
      alignItems: 'flex-end',
      marginBottom: 30,
      marginRight: 30,
    }
})