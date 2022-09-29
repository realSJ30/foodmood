import { useCookies } from "react-cookie";
import { IFoodDetail } from "../../../interface/food.interface";
import { CartConstants } from "../constants/cart.constants";

export const addItemToCart = (item: IFoodDetail) => {
  return (dispatch: any) => {
    // const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
    // setCookie("cart", [item]);
    dispatch({
      type: CartConstants.ADD_ITEM_TO_CART,
      payload: item,
    });
  };
};

export const removeItemToCart = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: CartConstants.REMOVE_ITEM_TO_CART,
      payload: id,
    });
  };
};

export const fetchCartItems = (cart: IFoodDetail[]) => {
  return (dispatch: any) => {
    dispatch({
      type: CartConstants.FETCH_CART_ITEMS,
      payload: cart,
    });
  };
};
