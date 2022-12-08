import { Text, FlatList} from "react-native";
import React from "react";
import {styles} from './style'
import { COLORS } from "../../constants/themes";
import { ProductItem} from '../../components';
import {PRODUCTS} from    "../../constants/data/index"

const ProductList = ({navigation, route}) => {
    
    const onSelected = (item) => {
        navigation.navigate('ProductItem', { title: item.title });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    );
    return(
        <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor = {(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default ProductList;