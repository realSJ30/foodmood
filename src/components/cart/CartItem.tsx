import React from "react";
import { IFood } from "../../interface/food.interface";

function CartItem(food: IFood) {
  return (
    <div
      key={food.id}
      className="font-nunito flex items-center justify-between"
    >
      <img
        className="w-20 h-20 rounded-lg shadow-md"
        src={require("../../assets/food.jpg")}
        alt="FoodMood"
      />
      <div className="flex flex-col flex-1 px-4 gap-0">
        <h1 className="font-semibold">{food.name}</h1>
        <p className="text-xs">{food.description}</p>
      </div>
      <p className="font-semibold">${food.price}</p>
    </div>
  );
}

export default CartItem;
