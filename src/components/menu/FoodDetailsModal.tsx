import { Dialog, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { Fragment, useEffect, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { IFoodDetail } from "../../interface/food.interface";
import { removeFoodDetails } from "../../utils/redux/actions/food.action";

export const FoodDetailsModal = (props: any) => {
  const { removeFoodDetails } = props;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [index, setIndex] = useState(0);
  const [tabs, setTabs] = useState([
    { id: 0, title: "Summary" },
    { id: 1, title: "Instructions" },
  ]);
  const { addItem } = useCart();

  const foodDetail: IFoodDetail = useSelector(
    (state: any) => state.foodDetailState
  );

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (Object.keys(foodDetail).length > 0) setOpen(true);
  }, [foodDetail]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        removeFoodDetails();
      }, 1000);
    }
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 font-nunito">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {Object.keys(foodDetail).length === 0 ? (
                  <div>loading</div>
                ) : (
                  <div className="flex flex-col ">
                    <img
                      className="w-full h-64"
                      src={
                        Object.keys(foodDetail).length > 0
                          ? foodDetail.image
                          : require("../../assets/food.jpg")
                      }
                      onError={() => setImage(require("../../assets/food.jpg"))}
                      alt="FoodMood"
                    />
                    <div className="flex flex-col p-4">
                      <h1 className="font-medium">{foodDetail.title}</h1>
                      <div className="flex items-center justify-around text-sm text-gray-400 relative my-2 py-2">
                        {tabs.map((tab: any, indx: number) => (
                          <h1
                            key={indx}
                            onClick={() => setIndex(tab.id)}
                            className={
                              tab.id === index
                                ? "hover:text-orange-400 cursor-pointer text-orange-400 w-full text-center"
                                : "hover:text-orange-400 cursor-pointer w-full text-center"
                            }
                          >
                            {tab.title}
                          </h1>
                        ))}
                        <div className="absolute h-[1px] bg-gray-200 inset-x-0 bottom-0"></div>
                        <div
                          style={{
                            left: `calc(calc(100%/2)*${index})`,
                          }}
                          className="flex absolute h-[1px] w-[calc(100%/2)] bg-orange-400 transition-all ease-in-out duration-300 bottom-0 z-10"
                        />
                      </div>
                      <div className="h-64 w-full overflow-auto text-sm">
                        {index === 0
                          ? parse(foodDetail.summary)
                          : parse(foodDetail.instructions)}
                      </div>
                      <button
                        onClick={() => {
                          addItem({
                            ...foodDetail,
                            id: foodDetail.id.toString(),
                            quantity: 1,
                            price: foodDetail.pricePerServing,
                          });
                          setOpen(false);
                        }}
                        className="flex items-center justify-center gap-2 bg-orange-400 text-white shadow-md rounded-md w-full p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <p>Add to cart</p>
                      </button>
                      <button
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="flex items-center justify-center gap-2 bg-transparent text-gray-400 rounded-md w-full p-2 mt-2"
                      >
                        <p>Close</p>
                      </button>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFoodDetails: () => dispatch(removeFoodDetails()),
  };
};

export default connect(null, mapDispatchToProps)(FoodDetailsModal);
