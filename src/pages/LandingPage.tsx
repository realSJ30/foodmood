import React, { useEffect, useState } from "react";
// import food from "../assets/food.jpg";

function LandingPage(props: any) {
  const { setOpenCart } = props;
  const [price, setPrice] = useState(125.5);
  const [count, setCount] = useState(1);
  const handleAddCount = () => {
    setCount((count) => (count < 10 ? count + 1 : count));
  };
  const handleMinusCount = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
  };

  useEffect(() => {
    const defaultPrice = 125.5;
    setPrice(defaultPrice * count);
  }, [count]);

  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto overflow-hidden md:overflow-visible">
      <div className="flex flex-1 h-full flex-col font-nunito relative">
        <div className="max-w-[80%] lg:w-[65%] xl:w-[70%] mx-auto md:mx-0 text-center md:text-justify mt-20 md:mt-40 z-10">
          <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl">
            Choose your <br />
            <span className="font-medium">favourite foods</span>
          </h1>
          <p className="text-gray-700 xl:text-lg">
            Different varities and cultures of food you can choose from. We
            provide the quality and affordable{" "}
            <span className="font-bold">ingredients</span>.
          </p>
          <p className="mt-4">Avail our recipe book now!</p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl">
            Total Price: <span className="font-bold">${price}</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-1 mt-8">
            <div className="flex flex-1 w-10/12 sm:w-1/2 p-2 items-center justify-around bg-white border-orange-400 border rounded-full">
              <button onClick={handleMinusCount}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 cursor-pointer"
                >
                  <path
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div className="h-5 border-l border-gray-700"></div>
              <p className="font-bold">{count}</p>
              <div className="h-5 border-l border-gray-700"></div>

              <button onClick={handleAddCount}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 cursor-pointer"
                >
                  <path strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => setOpenCart(true)}
              className="relative w-10/12 sm:w-1/2 text-center flex-1 rounded-full bg-black p-3 text-white group hover:bg-orange-400 transition-all ease-in-out duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 p-2 bg-orange-400 rounded-full absolute top-2 left-2 rotate-0 group-hover:bg-black group-hover:rotate-[360deg] group-hover:left-3/4 transition-all ease-in-out duration-300"
              >
                <path
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="font-medium">buy now</p>
            </button>
          </div>
        </div>
        <img
          className="block md:hidden rounded-full absolute -bottom-[10rem] sm:-bottom-[26rem] shadow-lg rotate-90 opacity-70"
          src={require("../assets/food.jpg")}
          alt="FoodMood"
        />
      </div>
      <div className="hidden md:flex flex-1 h-full flex-col relative">
        <img
          className="lg:h-[500px] lg:w-[500px] xl:h-[580px] xl:w-[580px] rounded-full absolute -left-10 top-8 lg:top-12 shadow-lg"
          src={require("../assets/food.jpg")}
          alt="FoodMood"
        />
      </div>
    </div>
  );
}

export default LandingPage;
