import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Navbar(props: any) {
  const { setOpenDrawer, setOpenCart } = props;
  const { totalItems } = useCart();
  return (
    <nav className="flex justify-between font-nunito  text-gray-700 py-4">
      <p className="font-black text-2xl cursor-pointer group hover:text-orange-400 transition-colors ease-in-out duration-300">
        Food
        <span className="text-orange-400 group-hover:text-black transition-colors ease-in-out duration-300">
          mood
        </span>
      </p>
      {/* mobile menu icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onClick={() => setOpenDrawer(true)}
        className="w-6 h-6 block md:hidden text-gray-600 hover:text-black active:text-black cursor-pointer"
      >
        <path
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* desktop menu showcase*/}
      <ul className="hidden md:flex font-semibold justify-between text-center items-center mx-20 gap-14 text-gray-600">
        <li className="flex-1 hover:text-black active:text-black cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex-1 hover:text-black active:text-black cursor-pointer">
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li className="flex-1 hover:text-black active:text-black cursor-pointer">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer"
        >
          <path
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <button
          onClick={() => setOpenCart(true)}
          className="relative group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 group-hover:text-black active:text-black"
          >
            <path
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {totalItems > 0 ? (
            <p className="absolute -top-2 z-10 -right-2 shadow-sm text-xs text-bold text-white bg-orange-400 px-1 rounded-full group-hover:animate-bounce">
              {totalItems}
            </p>
          ) : (
            <></>
          )}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 block lg:hidden"
        >
          <path
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 block lg:hidden"
        >
          <path
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </div>
      <div className="hidden lg:flex items-center  gap-2 xl:gap-6 justify-end ">
        <button className="flex items-center gap-1 border rounded-2xl border-gray-700 py-[4px] px-4 text-gray-700 hover:text-orange-400 hover:border-orange-400 transition-colors ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          <p>sign in</p>
        </button>
        <button className="flex items-center gap-1 border rounded-2xl border-orange-400 bg-orange-100 text-orange-400 bg-opacity-90 py-[4px] px-4 hover:text-white hover:bg-orange-400 transition-colors ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>

          <p>sign up</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
