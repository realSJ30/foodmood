import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { IFood, IFoodDetail } from "../../interface/food.interface";
import { fetchFoodDetailApi } from "../../utils/api";
import { addItemToCart } from "../../utils/redux/actions/cart.action";
import { fetchFoodDetailAction } from "../../utils/redux/actions/food.action";

interface IMenuCardProps {
  idx: number;
  food: IFood;
  fetchFoodDetailAction: Function;
  addItemToCart: Function;
}

const MenuCard: React.FC<IMenuCardProps> = (props) => {
  const { idx, food, fetchFoodDetailAction, addItemToCart } = props;
  const [image, setImage] = useState("");
  const cartState = useSelector((state: any) => state.cartState);
  const cart = useCart();
  const [loading, setLoading] = useState(false);

  const addItem = async (id: number) => {
    setLoading(true);
    await fetchFoodDetailApi(food.id)
      .then((res) => {
        const data: IFoodDetail = res.data;
        if (data) {
          addItemToCart(data);
          cart.addItem({
            ...data,
            id: data.id.toString(),
            quantity: 1,
            price: data.pricePerServing,
          });
          setLoading(false);
        }
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div
      key={idx}
      className="flex flex-col justify-end p-4 bg-gray-50 rounded-md shadow-lg h-60 relative text-center"
    >
      <img
        key={idx}
        className="w-32 h-32 rounded-full shadow-md -top-12 absolute z-10"
        src={image ? image : food.image}
        onError={() => setImage(require("../../assets/food.jpg"))}
        alt="FoodMood"
      />
      <h1 className="font-semibold text-lg mb-6">{food.title}</h1>
      <div className="flex gap-4">
        <button
          disabled={loading === true}
          onClick={() => addItem(food.id)}
          className="flex items-center gap-2 bg-orange-300 p-1 rounded-lg text-white shadow-md hover:bg-orange-400"
        >
          {!loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          ) : (
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>
        <button
          onClick={() => fetchFoodDetailAction(food.id)}
          className="bg-transparent border border-orange-300 rounded-lg p-1 text-orange-300 hover:border-orange-400 hover:text-orange-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFoodDetailAction: (id: number) => dispatch(fetchFoodDetailAction(id)),
    addItemToCart: (item: IFoodDetail) => dispatch(addItemToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuCard);
