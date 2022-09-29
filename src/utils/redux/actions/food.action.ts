// import StoreApi from "../../utils/Api/store.api";
// import { StoreConstants } from "../constants/store.constant";

import { IFoodDetail } from "../../../interface/food.interface";
import { fetchFoodDetailApi, fetchRecipeApi } from "../../api";
import { FoodConstants } from "../constants/food.constant";

// const api = new StoreApi();

export const fetchFoodAction = (query: string, resultCount: number) => {
  return (dispatch: any) => {
    dispatch({ type: FoodConstants.FETCH_FOOD_REQUEST });
    fetchRecipeApi(query, resultCount)
      .then((res) => {
        const { results } = res.data;

        if (results) {
          dispatch({
            type: FoodConstants.FETCH_FOOD_SUCCESS,
            payload: results,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: FoodConstants.FETCH_FOOD_FAIL,
          payload: err,
        });
        console.log(err);
      });
  };
};

export const fetchFoodDetailAction = (id: number) => {
  return (dispatch: any) => {
    dispatch({ type: FoodConstants.FETCH_FOOD_DETAIL_REQUEST });
    fetchFoodDetailApi(id)
      .then((res) => {
        const data: IFoodDetail = res.data;
        console.log(data);
        if (data) {
          dispatch({
            type: FoodConstants.FETCH_FOOD_DETAIL_SUCCESS,
            payload: data,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: FoodConstants.FETCH_FOOD_DETAIL_FAIL,
        });
        console.log(err);
      });
  };
};

export const removeFoodDetails = () => {
  return (dispatch: any) => {
    dispatch({
      type: FoodConstants.FETCH_FOOD_DETAIL_FAIL,
    });
  };
};
