import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartItem from "./CartItem";
import { IFood } from "../../interface/food.interface";

function Cart(props: any) {
  const { openCart, setOpenCart } = props;
  const [foods, setFoods] = useState<IFood[]>([
    {
      id: 1,
      name: "Premium Ceasar Salad",
      description: "vegetables, salad, green.",
      price: "125.5",
    },
    {
      id: 2,
      name: "Large Premium Ceasar Salad",
      description: "vegetables, salad, green.",
      price: "155.5",
    },
  ]);
  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-10 block" onClose={setOpenCart}>
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

        <div className="fixed inset-0 overflow-hidden font-nunito">
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
                        onClick={() => setOpenCart(false)}
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
                        Orders
                      </Dialog.Title>
                    </div>
                    <div className="flex flex-col gap-4 mt-6 px-4 sm:px-6 my-4">
                      {/* Replace with your content */}
                      {foods.map((food: IFood) => (
                        <CartItem
                          id={food.id}
                          key={food.id}
                          description={food.description}
                          name={food.name}
                          price={food.price}
                        />
                      ))}
                      {/* /End replace */}
                    </div>
                    <hr className="m-6" />
                    <div className="flex flex-col gap-4 items-center px-4 sm:px-6 ">
                      <div className="flex justify-between items center w-full">
                        <h1 className="text-gray-400">Subtotal</h1>
                        <p className="font-semibold">$250.10</p>
                      </div>
                      <div className="flex justify-between items center w-full">
                        <h1 className="text-gray-400">Shipping</h1>
                        <p className="font-semibold">$80</p>
                      </div>
                    </div>
                    <hr className="m-6" />
                    <div className="items-center px-4 sm:px-6 flex-1">
                      <div className="flex justify-between items center w-full">
                        <h1 className="font-semibold">Total</h1>
                        <p className="font-bold text-lg">$330.10</p>
                      </div>
                     
                    </div>
                    <button className="bg-orange-400 text-white p-2 mx-4 rounded-lg font-semibold" onClick={()=>setOpenCart(false)}>
                      Place order
                    </button>
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

export default Cart;
