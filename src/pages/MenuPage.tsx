import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import FoodDetailsModal from "../components/menu/FoodDetailsModal";
import MenuList from "../components/menu/MenuList";
import { fetchFoodAction } from "../utils/redux/actions/food.action";

function MenuPage(props: any) {
  const { fetchFoodAction } = props;
  const [search, setSearch] = useState("a");
  const [resultCount, setResultCount] = useState(20);

  const food = useSelector((state: any) => state.foodState);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchFoodAction(search, resultCount);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto">
      <FoodDetailsModal />
      <div className="flex flex-1 h-full flex-col font-nunito relative">
        {food.error ? (
          <div className="w-full mx-auto md:mx-0 flex flex-col items-center text-center mt-16 z-10">
            <img
              className="w-64 h-60 mt-12"
              src={require("../assets/empty.png")}
              alt="Empty cart"
            />
            <h1 className="text-gray-400">
              Limit has reached come back again tomorrow
            </h1>
          </div>
        ) : (
          <div className="w-full mx-auto md:mx-0 text-center md:text-justify mt-16 z-10">
            {/* search */}
            <div className="flex gap-2 items-center p-2 border-2 border-gray-400 rounded-xl w-full md:max-w-sm group hover:border-orange-400 focus:text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 cursor-text group-hover:text-orange-400 focus:text-orange-400"
              >
                <path
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {
                    fetchFoodAction(search, resultCount);
                  }
                }}
                onChange={handleSearch}
                type="text"
                name="search"
                className="border-none outline-none w-full font-nunito"
                placeholder="Search"
              />
            </div>
            {/* foods */}
            <MenuList foods={food.foods} loading={food.loading} />
          </div>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFoodAction: (query: string, resultCount: number) =>
      dispatch(fetchFoodAction(query, resultCount)),
  };
};

export default connect(null, mapDispatchToProps)(MenuPage);
