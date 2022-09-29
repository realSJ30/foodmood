import { FoodConstants } from "../constants/food.constant";

const initialState = {
  loading: false,
  foods: [],
  error: "",
};

export const foodsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // FETCH
    case FoodConstants.FETCH_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FoodConstants.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.payload,
      };
    case FoodConstants.FETCH_FOOD_FAIL:
      return {
        ...state,
        loading: false,
        foods: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const foodDetailReducer = (state = {}, { type, payload }: any) => {
  switch (type) {
    // FETCH
    case FoodConstants.FETCH_FOOD_DETAIL_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case FoodConstants.FETCH_FOOD_DETAIL_SUCCESS:
      return {
        ...payload,
      };
    case FoodConstants.FETCH_FOOD_DETAIL_FAIL:
      return {};
    default:
      return state;
  }
};
