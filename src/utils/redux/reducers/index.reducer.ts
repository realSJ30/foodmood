import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { foodDetailReducer, foodsReducer } from "./food.reducer";

const rootReducer = combineReducers({
  foodState: foodsReducer,
  foodDetailState: foodDetailReducer,
  cartState: cartReducer,
});

export default rootReducer;
