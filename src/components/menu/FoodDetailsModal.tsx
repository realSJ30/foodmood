import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { IFoodDetail } from "../../interface/food.interface";
import { removeFoodDetails } from "../../utils/redux/actions/food.action";
import fallbackFoodImage from "../../assets/food.jpg";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Skeleton from "../ui/Skeleton";

const TABS = [
  { id: 0, title: "Summary" },
  { id: 1, title: "Instructions" },
] as const;

function MetaChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 text-forest-700 text-xs font-semibold px-3 py-1.5 ring-1 ring-black/5">
      <span>{icon}</span>
      {label}
    </span>
  );
}

function FoodDetailsModal(props: any) {
  const { removeFoodDetails } = props;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>(fallbackFoodImage);
  const [index, setIndex] = useState(0);
  const { addItem } = useCart();

  const foodDetail: IFoodDetail = useSelector(
    (state: any) => state.foodDetailState
  );

  useEffect(() => {
    if (foodDetail && Object.keys(foodDetail).length > 0) {
      setOpen(true);
      if (foodDetail.image) setImage(foodDetail.image);
    }
  }, [foodDetail]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => removeFoodDetails(), 600);
      return () => clearTimeout(t);
    }
  }, [open, removeFoodDetails]);

  const loading = !foodDetail || Object.keys(foodDetail).length === 0;

  return (
    <Modal open={open} onClose={setOpen} size="lg">
      {loading ? (
        <div className="space-y-4">
          <Skeleton rounded="2xl" className="h-56 w-full" />
          <Skeleton rounded="md" className="h-6 w-3/5" />
          <Skeleton rounded="md" className="h-4 w-full" />
          <Skeleton rounded="md" className="h-4 w-4/5" />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative h-56 sm:h-64 -mx-6 -mt-4 overflow-hidden">
            <img
              src={image}
              onError={() => setImage(fallbackFoodImage)}
              alt={foodDetail.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-700/75 via-forest-700/10 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2">
              {typeof foodDetail.readyInMinutes === "number" && (
                <MetaChip icon="⏱" label={`${foodDetail.readyInMinutes} min`} />
              )}
              {typeof foodDetail.servings === "number" && (
                <MetaChip icon="🍴" label={`${foodDetail.servings} servings`} />
              )}
              {foodDetail.vegetarian && <MetaChip icon="🌱" label="Vegetarian" />}
              {foodDetail.glutenFree && <MetaChip icon="🌾" label="Gluten-free" />}
            </div>
          </div>

          <div className="pt-5">
            <h2 className="font-display font-bold text-2xl text-forest-700 leading-tight">
              {foodDetail.title}
            </h2>
            {foodDetail.sourceName && (
              <p className="text-xs text-forest-600/60 mt-1">
                Source:{" "}
                <a
                  href={foodDetail.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400 underline-offset-2"
                >
                  {foodDetail.sourceName}
                </a>
              </p>
            )}

            {/* tabs */}
            <div className="mt-5 flex items-center border-b border-forest-700/5">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(t.id)}
                  className={`relative flex-1 text-center py-3 text-sm font-semibold transition ${
                    t.id === index
                      ? "text-forest-700"
                      : "text-forest-600/60 hover:text-forest-700"
                  }`}
                >
                  {t.title}
                  {t.id === index && (
                    <span className="absolute inset-x-6 -bottom-px h-0.5 rounded-full bg-orange-400" />
                  )}
                </button>
              ))}
            </div>

            <div className="max-h-64 overflow-y-auto text-sm text-forest-600/85 leading-relaxed pr-2 mt-4 prose-none">
              {index === 0
                ? foodDetail.summary && parse(foodDetail.summary)
                : foodDetail.instructions
                ? parse(foodDetail.instructions)
                : <p className="text-forest-600/60">No instructions available.</p>}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={() => {
                  addItem({
                    ...foodDetail,
                    id: foodDetail.id.toString(),
                    quantity: 1,
                    price: foodDetail.pricePerServing ?? 5,
                  });
                  setOpen(false);
                }}
              >
                Add to cart
              </Button>
              <Button variant="outline" size="lg" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  removeFoodDetails: () => dispatch(removeFoodDetails()),
});

export default connect(null, mapDispatchToProps)(FoodDetailsModal);
