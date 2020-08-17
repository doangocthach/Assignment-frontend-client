import { GET_PRODUCT, ADD_PRODUCT, GET_PRODUCT_BY_ID } from "./actionTypes";
import productService from "./productService";
import createAction from "../utils/createAction";

export const getProducts = ({ page, limit, from, to, searchString }) =>
  createAction({
    type: GET_PRODUCT,
    params: { page, limit, from, to, searchString },
    process: productService.fetchProducts,
  });
export const addProduct = ({ state }) =>
  createAction({
    type: ADD_PRODUCT,
    params: {
      state,
    },
    process: productService.addProduct,
  });
export const getProduct = ({ id }) =>
  createAction({
    type: GET_PRODUCT_BY_ID,
    params: { id },
    process: productService.getProduct,
  });
