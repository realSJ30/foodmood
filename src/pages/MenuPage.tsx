import React, { useEffect, useMemo, useState } from "react";
import { connect, useSelector } from "react-redux";
import FoodDetailsModal from "../components/menu/FoodDetailsModal";
import MenuList from "../components/menu/MenuList";
import CategoryFilter, {
  CATEGORIES,
  Category,
} from "../components/menu/CategoryFilter";
import Pill from "../components/ui/Pill";
import Button from "../components/ui/Button";
import { fetchFoodAction } from "../utils/redux/actions/food.action";
import emptyImage from "../assets/empty.png";

function MenuPage(props: any) {
  const { fetchFoodAction } = props;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const [resultCount] = useState(20);

  const food = useSelector((state: any) => state.foodState);

  useEffect(() => {
    fetchFoodAction(category.query, resultCount);
  }, [fetchFoodAction, category.query, resultCount]);

  const doSearch = (query: string) => {
    if (!query.trim()) return;
    fetchFoodAction(query, resultCount);
  };

  const [featured, rest] = useMemo(() => {
    const list = food?.foods ?? [];
    return [list.slice(0, 3), list.slice(3)] as const;
  }, [food?.foods]);

  return (
    <div className="pb-24 pt-4">
      <FoodDetailsModal />

      {/* hero / header */}
      <section className="relative">
        <Pill
          leading={<span>🔥</span>}
          className="text-forest-600/80"
        >
          Fresh recipes updated daily
        </Pill>
        <h1 className="mt-4 font-display font-bold tracking-tight text-forest-700 text-4xl sm:text-5xl leading-[1.05]">
          Explore the menu <br />
          <span className="text-forest-700/70">built for every craving.</span>
        </h1>
        <p className="mt-3 max-w-xl text-forest-600/70 text-base">
          Thousands of chef-approved recipes across every meal of the day —
          filter by category, search by keyword, and save your favorites.
        </p>

        {/* search */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-1 rounded-full bg-white ring-1 ring-black/5 px-5 py-3 shadow-[0_8px_24px_-14px_rgba(19,41,26,0.25)]">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-forest-600/60" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3-3" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && doSearch(search)}
              placeholder="Search for recipes, ingredients…"
              className="flex-1 bg-transparent text-sm font-medium text-forest-700 placeholder:text-forest-600/50 outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-forest-600/40 hover:text-forest-700"
                aria-label="Clear"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <Button size="lg" onClick={() => doSearch(search)} className="sm:w-auto">
            Search
          </Button>
        </div>
      </section>

      {/* categories */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-forest-700 text-lg">Categories</h2>
          <span className="text-xs text-forest-600/60">{CATEGORIES.length} types</span>
        </div>
        <CategoryFilter
          active={category.id}
          onChange={(c) => {
            setCategory(c);
            setSearch("");
          }}
        />
      </section>

      {/* featured */}
      {!food.loading && !food.error && featured.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-forest-700 text-lg">Featured this week</h2>
              <p className="text-xs text-forest-600/60">Hand-picked recipes our community loves</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((f: any) => (
              <a
                key={f.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group relative h-56 overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_24px_60px_-30px_rgba(19,41,26,0.3)]"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-forest-700/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-forest-700">
                    {category.label}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <h3 className="font-display font-semibold text-lg leading-tight line-clamp-2">
                    {f.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-cream-100/80 mt-1">
                    <span className="inline-flex items-center gap-1">⏱ 30 min</span>
                    <span className="inline-flex items-center gap-1 text-amber-300">★ 4.8</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* trending / full grid */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-forest-700 text-lg">
            {search ? `Results for "${search}"` : `Trending ${category.label.toLowerCase()} recipes`}
          </h2>
          {food?.foods?.length > 0 && (
            <span className="text-xs text-forest-600/60">{food.foods.length} recipes</span>
          )}
        </div>

        {food.error ? (
          <div className="flex flex-col items-center justify-center text-center rounded-3xl bg-white ring-1 ring-black/5 py-14 px-6">
            <img src={emptyImage} alt="" className="w-40 h-40 object-contain mb-4 opacity-80" />
            <h3 className="font-display font-bold text-forest-700 text-lg">Daily limit reached</h3>
            <p className="text-sm text-forest-600/70 mt-1 max-w-sm">
              The Spoonacular free tier has been exceeded. Please try again
              tomorrow or add your API key in <code>.env</code>.
            </p>
          </div>
        ) : (
          <MenuList
            foods={rest.length > 0 ? rest : food.foods ?? []}
            loading={food.loading || !food.foods}
          />
        )}
      </section>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchFoodAction: (query: string, resultCount: number) =>
    dispatch(fetchFoodAction(query, resultCount)),
});

export default connect(null, mapDispatchToProps)(MenuPage);
