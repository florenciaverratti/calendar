import { productsType } from "../types/";

const { SELECT_PRODUCT,FILTER_PRODUCTS } =  productsType;

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id,
})

export const filterProduct = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id,
})