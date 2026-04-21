import { Item, useCart } from "react-use-cart";
import fallbackFoodImage from "../../assets/food.jpg";
import { useState } from "react";

interface CartItemProps {
  food: Item;
}

function CartItem({ food }: CartItemProps) {
  const { removeItem, updateItemQuantity } = useCart();
  const [img, setImg] = useState<string>(food.image || fallbackFoodImage);

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5 shadow-sm">
      <img
        src={img}
        onError={() => setImg(fallbackFoodImage)}
        alt={food.title}
        className="h-16 w-16 shrink-0 rounded-xl object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-forest-700 truncate">{food.title}</h4>
        {food.sourceName && (
          <p className="text-[11px] text-forest-600/60 truncate">{food.sourceName}</p>
        )}
        <div className="mt-1 inline-flex items-center rounded-full bg-cream-100 ring-1 ring-black/5">
          <button
            onClick={() =>
              updateItemQuantity(food.id, Math.max(1, (food.quantity ?? 1) - 1))
            }
            className="h-6 w-6 grid place-items-center text-forest-600 hover:text-forest-700"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-xs font-semibold text-forest-700 px-2 min-w-[16px] text-center">
            {food.quantity ?? 1}
          </span>
          <button
            onClick={() => updateItemQuantity(food.id, (food.quantity ?? 1) + 1)}
            className="h-6 w-6 grid place-items-center text-forest-600 hover:text-forest-700"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full gap-2">
        <button
          onClick={() => removeItem(food.id)}
          aria-label={`Remove ${food.title}`}
          className="text-forest-600/50 hover:text-rose-500"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <span className="font-semibold text-sm text-forest-700 tabular-nums">
          ${Number(food.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
