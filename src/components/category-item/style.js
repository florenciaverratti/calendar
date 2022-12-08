import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 100,
        marginTop: '30%',
    },
    title:{
        fontFamily: 'Raleway-Thin',
        fontSize: 20,
        color: COLORS.white ,
    },
    containerContent: {
        flex: 1,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
})