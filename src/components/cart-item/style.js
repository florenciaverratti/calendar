import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    height: 125,
        backgroundColor: COLORS.backgroundLight,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.backgroundDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        margin: 10,
    },

    header: {
        flex:1,
        fontSize: 16,
        fontFamily: 'Raleway-Bold',
        color: COLORS.text,
        marginBottom: 5,
    },
    contentContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
        flex: 1,
    },
    time :{
        fontSize: 16,
        fontFamily: 'Raleway-Bold',
        color: COLORS.text,
        marginVertical: 10,
    },
    price:{
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
        color: COLORS.text,
        marginVertical: 15, 
    },
})