import { View, Text,FlatList} from "react-native";
import React from "react";
import {styles} from './style'
import { COLORS } from "../../constants/themes";
import { ORDERS} from "../../constants/data";
import {OrderItem} from '../../components/index'

const Orders = ({navigation}) => {
    const onDelete = (id) =>{

    }
    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
    return (
        <View style={styles.container}>
            <FlatList 
            data={ORDERS} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    )
}
export default Orders;