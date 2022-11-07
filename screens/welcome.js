import { StyleSheet, Text, View } from "react-native";

import React from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
});

const Welcome= () =>{
    return (
        <View style={styles.container}>
            <Text >Welcome</Text>
        </View>
    )
} 

export default Welcome;