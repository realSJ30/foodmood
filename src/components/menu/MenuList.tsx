import { IFood } from "../../interface/food.interface";
import LoadingMenuCard from "./LoadingMenuCard";
import MenuCard from "./MenuCard";

interface MenuListProps {
  foods: IFood[];
  loading: boolean;
}

function MenuList({ foods, loading }: MenuListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <LoadingMenuCard key={i} />
        ))}
      </div>
    );
  }

  if (!foods || foods.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="h-16 w-16 rounded-full bg-cream-200 grid place-items-center text-2xl mb-3">🍽</div>
        <h3 className="font-display font-bold text-forest-700">No recipes found</h3>
        <p className="text-sm text-forest-600/70 mt-1">Try another keyword or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {foods.map((food, idx) => (
        <MenuCard key={food.id ?? idx} idx={idx} food={food} />
      ))}
    </div>
  );
}

export default MenuList;
