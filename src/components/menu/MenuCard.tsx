import React from "react";

function MenuCard() {
  return (
    <div className="flex flex-col justify-end p-4 bg-gray-50 rounded-md shadow-lg h-60 relative text-center">
      <img
        className="w-32 h-32 rounded-full shadow-md -top-12 absolute z-10"
        src={require("../../assets/food.jpg")}
        alt="FoodMood"
      />
      <h1 className="font-semibold text-lg">Premium Ceasar Salad</h1>
      <p className="font-semibold text-2xl">$125.0</p>
      <p className="text-xs text-gray-400 mb-6">250g</p>
    </div>
  );
}

export default MenuCard;
