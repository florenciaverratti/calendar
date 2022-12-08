import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    time:{
        fontFamily: 'Raleway-Regular',
        fontSize:15,
    },
    price:{
        fontFamily: 'Raleway-Regular',
        fontSize: 15,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginHorizontal:10, 
        marginVertical:10,
        backgroundColor: COLORS.gray,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
})