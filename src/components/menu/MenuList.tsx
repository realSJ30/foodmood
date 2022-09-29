import React from "react";
import { IFood } from "../../interface/food.interface";
import LoadingMenuCard from "./LoadingMenuCard";
import MenuCard from "./MenuCard";

interface MenuListProps {
  foods: IFood[];
  loading: boolean;
}

const MenuList: React.FC<MenuListProps> = (props) => {
  const { foods } = props;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 w-full gap-x-4 gap-y-20 my-20">
      {foods.length > 0 ? (
        foods.map((food: any, idx: number) => (
          <MenuCard key={idx} idx={idx} food={food} />
        ))
      ) : (
        <>
          <LoadingMenuCard />
          <LoadingMenuCard />
          <LoadingMenuCard />
          <LoadingMenuCard />
        </>
      )}
    </div>
  );
};

export default MenuList;
