import { FlatList} from "react-native";
import React from "react";
import {styles} from './style'

import { CategoryItem } from "../../components";
import {CATEGORIES} from    "../../constants/data/index"

const HamburgerMenu = ({navigation, route}) => {
    const onSelected = (item) =>{
        navigation.navigate('ProductList', {categoryid: item.id, title: item.title})
    };

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>; 
    return(
        <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor = {(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default HamburgerMenu;