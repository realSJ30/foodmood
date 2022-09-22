import React from "react";
import MenuList from "../components/menu/MenuList";

function MenuPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto">
      <div className="flex flex-1 h-full flex-col font-nunito relative">
        <div className="w-full mx-auto md:mx-0 text-center md:text-justify mt-16 z-10">
          <div className="flex gap-2 items-center p-2 border-2 border-gray-400 rounded-xl w-full md:max-w-sm group hover:border-orange-400 active:text-orange-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-400 cursor-text group-hover:text-orange-400 active:text-orange-400"
            >
              <path
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              name="search"
              className="border-none outline-none w-full font-nunito"
              placeholder="Search"
            />
          </div>
          {/* foods */}
          <MenuList />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
