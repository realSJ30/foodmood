import { IFoodDetail } from "../../../interface/food.interface";
import { CartConstants } from "../constants/cart.constants";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartConstants.FETCH_CART_ITEMS:
      return {
        cart: action.payload,
      };

    case CartConstants.ADD_ITEM_TO_CART:
      return {
        cart: [...state.cart, action.payload],
      };

    case CartConstants.REMOVE_ITEM_TO_CART:
      return {
        cart: state.cart.filter(
          (cart: IFoodDetail) => cart.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
