import React , { useEffect }from "react";
import {filterProducts, selectProduct} from '../../store/actions/index';
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { ProductItem } from '../../components';
import {styles} from './style';

const ProductList = ({navigation}) => {
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterProducts(category.id));
    }, []);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('Product', { title: item.title });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    );
    return(
        <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default ProductList;