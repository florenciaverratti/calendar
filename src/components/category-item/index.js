import { TouchableOpacity, View,Text } from "react-native";
import React from "react";
import {styles} from './style'
import { COLORS } from "../../constants/themes";

const CategoryItem = ({item, onSelected}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.containerContent, backgroundColor : COLORS.terciary}}
            onPress={() => onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CategoryItem;