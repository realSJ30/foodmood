import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (v: boolean) => void;
  setOpenCart: (v: boolean) => void;
}

const links: { label: string; to: string }[] = [
  { label: "Product", to: "/" },
  { label: "Recipes", to: "/menu" },
  { label: "Categories", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/about" },
];

function Drawer({ openDrawer, setOpenDrawer, setOpenCart }: DrawerProps) {
  const close = () => setOpenDrawer(false);
  const openCart = () => {
    close();
    setOpenCart(true);
  };

  return (
    <Transition.Root show={openDrawer} as={Fragment}>
      <Dialog as="div" className="relative z-50 md:hidden" onClose={setOpenDrawer}>
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
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full p-3">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-400"
              enterFrom="translate-x-[110%]"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-[110%]"
            >
              <Dialog.Panel className="pointer-events-auto w-[86vw] max-w-sm">
                <div className="flex h-full flex-col overflow-y-auto rounded-3xl bg-cream-50 shadow-[0_40px_80px_-20px_rgba(19,41,26,0.55)] ring-1 ring-black/5">
                  <div className="flex items-center justify-between px-6 pt-6">
                    <Dialog.Title className="text-lg font-display font-bold text-forest-700">
                      Food<span className="text-orange-400">mood</span>
                    </Dialog.Title>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      className="rounded-full bg-white p-2 text-forest-700 ring-1 ring-black/5 hover:bg-cream-100"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <nav className="px-4 mt-6 flex-1">
                    <ul className="flex flex-col gap-1">
                      {links.map((l) => (
                        <li key={l.label}>
                          <Link
                            to={l.to}
                            onClick={close}
                            className="flex items-center justify-between rounded-2xl px-4 py-3 text-forest-700 font-semibold hover:bg-white transition"
                          >
                            {l.label}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 opacity-50">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="px-4 pb-6 flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="!w-full justify-between"
                      onClick={openCart}
                    >
                      <span>View cart</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </Button>
                    <Button variant="primary" className="!w-full">
                      Download App
                    </Button>
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

export default Drawer;
