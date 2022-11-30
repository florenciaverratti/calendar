import React, { Children } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const ButtonCircle = ({ onPress, title, color}) => {
        
    return (
        
      <View style={styles.botonMas}>
        <TouchableOpacity style={styles.circulo} >
            <Text style={styles.mas}></Text>
        </TouchableOpacity>
      </View>
    )
}
export default ButtonCircle;