import { GET_PRODUCT, ADD_PRODUCT, GET_PRODUCT_BY_ID } from "../actionTypes";

const initialState = {
  pending: true,
  products: [],
  product: {},
  error: null,
  addProductPending: false,
  productIdAdded: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PRODUCT}_PENDING`:
      return { ...state, pending: true };
    case `${GET_PRODUCT}_SUCCESS`:
      return {
        ...state,
        pending: false,
        products: action.payload,
      };
    case `${GET_PRODUCT}_ERROR`:
      return { ...state, pending: false, err: action.payload };
    case `${ADD_PRODUCT}_PENDING`:
      return { ...state, addProductPending: true };
    case `${ADD_PRODUCT}_SUCCESS`:
      const incrProduct = state.products;
      incrProduct.unshift(action.payload);
      return {
        ...state,
        productIdAdded: action.payload,
        addProductPending: false,
      };
    case `${ADD_PRODUCT}_ERROR`:
      return { ...state, err: action.payload };
    case `${GET_PRODUCT_BY_ID}_PENDING`:
      return { ...state, pending: true };
    case `${GET_PRODUCT_BY_ID}_SUCCESS`:
      return { ...state, product: action.payload, pending: false };
    case `${GET_PRODUCT_BY_ID}_ERROR`:
      return { ...state, err: action.payload, pending: false };
    default:
      return state;
  }
};

export default productsReducer;
