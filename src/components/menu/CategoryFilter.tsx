export interface Category {
  id: string;
  label: string;
  icon: string;
  query: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", icon: "🍽", query: "a" },
  { id: "breakfast", label: "Breakfast", icon: "🥞", query: "breakfast" },
  { id: "lunch", label: "Lunch", icon: "🥗", query: "lunch" },
  { id: "dinner", label: "Dinner", icon: "🍲", query: "dinner" },
  { id: "snack", label: "Snack", icon: "🍡", query: "snack" },
  { id: "drink", label: "Drink", icon: "🥤", query: "drink" },
  { id: "dessert", label: "Dessert", icon: "🧁", query: "dessert" },
];

interface CategoryFilterProps {
  active: string;
  onChange: (c: Category) => void;
}

function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="-mx-6 px-6 overflow-x-auto no-scrollbar">
      <div className="flex gap-2 min-w-max">
        {CATEGORIES.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onChange(c)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ring-1 whitespace-nowrap ${
                isActive
                  ? "bg-forest-700 text-cream-50 ring-forest-700 shadow-[0_10px_24px_-12px_rgba(19,41,26,0.55)]"
                  : "bg-white text-forest-700 ring-black/5 hover:bg-cream-50"
              }`}
            >
              <span>{c.icon}</span>
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
