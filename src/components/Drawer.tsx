import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Drawer(props: any) {
  const { openDrawer, setOpenDrawer, setOpenCart } = props;

  const handleCart = () => {
    setOpenDrawer(false);
    setOpenCart(true);
  };
  return (
    <Transition.Root show={openDrawer} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 block md:hidden"
        onClose={setOpenDrawer}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpenDrawer(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="flex items-center justify-between px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Menu
                      </Dialog.Title>
                      <button
                        onClick={() => handleCart()}
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
                        <p className="absolute -top-2 z-10 -right-2 shadow-sm text-xs text-bold text-white bg-orange-400 px-1 rounded-full group-hover:animate-bounce">
                          4
                        </p>
                      </button>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="flex flex-col">
                        <ul className="flex flex-col md:hidden font-semibold justify-between text-center items-center mx-20 gap-10 text-gray-600">
                          <li className="flex-1 hover:text-black active:text-black cursor-pointer">
                            <Link to={"/"} onClick={() => setOpenDrawer(false)}>
                              Home
                            </Link>
                          </li>
                          <li className="flex-1 hover:text-black active:text-black cursor-pointer">
                            <Link
                              to={"/menu"}
                              onClick={() => setOpenDrawer(false)}
                            >
                              Menu
                            </Link>
                          </li>
                          <li className="flex-1 hover:text-black active:text-black cursor-pointer">
                            <Link
                              to={"/about"}
                              onClick={() => setOpenDrawer(false)}
                            >
                              About
                            </Link>
                          </li>
                        </ul>
                        <div className="flex flex-col md:hidden items-center gap-4 justify-end mt-6">
                          <button className="flex w-full justify-center items-center gap-1 border rounded-2xl border-gray-700 p-2 text-gray-700 hover:text-orange-400 hover:border-orange-400 transition-colors ease-in-out duration-200">
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
                          <button className="flex w-full justify-center items-center gap-1 border rounded-2xl border-orange-400 bg-orange-100 text-orange-400 bg-opacity-90 p-2 hover:text-white hover:bg-orange-400 transition-colors ease-in-out duration-200">
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
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Drawer;
