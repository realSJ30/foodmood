import React from "react";
import MenuCard from "./MenuCard";

function MenuList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 w-full gap-x-4 gap-y-20 my-20">
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
}

export default MenuList;
