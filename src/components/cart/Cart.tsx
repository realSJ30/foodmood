import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useCart } from "react-use-cart";
import Button from "../ui/Button";
import CartItem from "./CartItem";

interface CartProps {
  openCart: boolean;
  setOpenCart: (v: boolean) => void;
}

const SHIPPING_FLAT = 4.5;

function Cart({ openCart, setOpenCart }: CartProps) {
  const { items, cartTotal, isEmpty, emptyCart, totalItems } = useCart();
  const shipping = isEmpty ? 0 : SHIPPING_FLAT;
  const total = cartTotal + shipping;

  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpenCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-forest-700/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden font-nunito">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full p-3 sm:p-5">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-400"
              enterFrom="translate-x-[110%]"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-[110%]"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-cream-50 shadow-[0_40px_80px_-20px_rgba(19,41,26,0.5)] ring-1 ring-black/5">
                  {/* header */}
                  <div className="flex items-center justify-between px-6 pt-6">
                    <div>
                      <Dialog.Title className="text-xl font-display font-bold text-forest-700">
                        Your Orders
                      </Dialog.Title>
                      <p className="text-xs text-forest-600/60 mt-0.5">
                        {totalItems} item{totalItems === 1 ? "" : "s"} in cart
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Close cart"
                      onClick={() => setOpenCart(false)}
                      className="rounded-full bg-white p-2 text-forest-700 ring-1 ring-black/5 hover:bg-cream-100"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* items */}
                  <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3">
                    {isEmpty ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="h-20 w-20 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center mb-4">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 text-forest-600/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-forest-700">Your cart is empty</h3>
                        <p className="text-sm text-forest-600/70 mt-1 max-w-[260px]">
                          Browse the menu and add your favorite dishes to get started.
                        </p>
                      </div>
                    ) : (
                      items.map((food) => <CartItem food={food} key={food.id} />)
                    )}
                  </div>

                  {/* totals */}
                  {!isEmpty && (
                    <div className="border-t border-forest-700/5 bg-white/60 px-6 py-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-forest-600/70">Subtotal</span>
                        <span className="font-semibold text-forest-700">${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-forest-600/70">Shipping</span>
                        <span className="font-semibold text-forest-700">${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-forest-700/5">
                        <span className="font-display font-bold text-forest-700">Total</span>
                        <span className="font-display font-bold text-lg text-forest-700">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  )}

                  {/* footer */}
                  <div className="px-6 pb-6 pt-4 flex flex-col gap-2">
                    <Button
                      size="lg"
                      variant="primary"
                      disabled={isEmpty}
                      className="w-full"
                    >
                      {isEmpty ? "Add items to checkout" : "Place order"}
                    </Button>
                    {!isEmpty && (
                      <button
                        onClick={() => emptyCart()}
                        className="text-xs text-forest-600/60 hover:text-forest-700 py-1"
                      >
                        Clear cart
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;
