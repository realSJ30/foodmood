import React, { useState } from "react";
import { connect } from "react-redux";
import { useCart } from "react-use-cart";
import { IFood, IFoodDetail } from "../../interface/food.interface";
import { fetchFoodDetailApi } from "../../utils/api";
import { addItemToCart } from "../../utils/redux/actions/cart.action";
import { fetchFoodDetailAction } from "../../utils/redux/actions/food.action";
import fallbackFoodImage from "../../assets/food.jpg";

interface IMenuCardProps {
  idx: number;
  food: IFood;
  fetchFoodDetailAction: Function;
  addItemToCart: Function;
}

const MenuCard: React.FC<IMenuCardProps> = (props) => {
  const { food, fetchFoodDetailAction, addItemToCart } = props;
  const [image, setImage] = useState(food.image || fallbackFoodImage);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addItem } = useCart();

  const addToCart = async () => {
    setLoading(true);
    try {
      const res = await fetchFoodDetailApi(food.id);
      const data: IFoodDetail = res.data;
      if (data) {
        addItemToCart(data);
        addItem({
          ...data,
          id: data.id.toString(),
          quantity: 1,
          price: data.pricePerServing,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="group relative flex flex-col rounded-3xl bg-white p-3 ring-1 ring-black/5 shadow-[0_18px_45px_-22px_rgba(19,41,26,0.22)] hover:shadow-[0_28px_60px_-22px_rgba(19,41,26,0.3)] transition-shadow">
      <div className="relative h-44 overflow-hidden rounded-2xl bg-cream-100">
        {!imgLoaded && (
          <div className="absolute inset-0 skeleton-shimmer rounded-2xl" aria-hidden />
        )}
        <img
          src={image}
          onError={() => {
            setImage(fallbackFoodImage);
            setImgLoaded(true);
          }}
          onLoad={() => setImgLoaded(true)}
          alt={food.title}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Unlike" : "Like"}
          className="absolute top-2.5 right-2.5 h-9 w-9 rounded-full bg-white/95 ring-1 ring-black/5 backdrop-blur grid place-items-center"
        >
          <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 transition-colors ${
              liked ? "text-rose-500 fill-rose-500" : "text-forest-600/70"
            }`}
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-1 pt-3 px-1">
        <h3 className="font-semibold text-forest-700 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
          {food.title}
        </h3>
        <div className="flex items-center gap-2 text-[11px] text-forest-600/60">
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            30 min
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1 text-amber-500">
            ★ <span className="text-forest-600/70">4.6</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 px-1 pb-1">
        <button
          onClick={() => fetchFoodDetailAction(food.id)}
          className="text-xs font-semibold text-forest-700 hover:text-orange-400 inline-flex items-center gap-1"
        >
          View recipe
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          disabled={loading}
          onClick={addToCart}
          aria-label="Add to cart"
          className="h-9 w-9 rounded-full bg-forest-700 text-cream-50 grid place-items-center hover:bg-forest-600 transition disabled:opacity-60"
        >
          {loading ? (
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="12" cy="12" r="9" className="opacity-30" />
              <path d="M21 12a9 9 0 00-9-9" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchFoodDetailAction: (id: number) => dispatch(fetchFoodDetailAction(id)),
  addItemToCart: (item: IFoodDetail) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(MenuCard);
