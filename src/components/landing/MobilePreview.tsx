import { useEffect, useState } from "react";
import { fetchRecipeApi } from "../../utils/api";
import FloatingCard from "./FloatingCard";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const FALLBACK_RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Meat bowl with noodles",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: 2,
    title: "Fresh bowl of vegetable",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: 3,
    title: "Salmon poke bowl",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=70",
  },
];

const categories: { label: string; icon: string; tone: string }[] = [
  { label: "Breakfast", icon: "🍳", tone: "bg-amber-50" },
  { label: "Lunch", icon: "🍔", tone: "bg-amber-50" },
  { label: "Dinner", icon: "🍲", tone: "bg-amber-50" },
  { label: "Snack", icon: "🍡", tone: "bg-amber-50" },
  { label: "Drink", icon: "🥤", tone: "bg-amber-50" },
  { label: "Dessert", icon: "🧁", tone: "bg-amber-50" },
  { label: "More", icon: "•••", tone: "bg-lime-soft" },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-forest-700">
      <span>09:41</span>
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 20 12" className="w-4 h-3 fill-current">
          <path d="M1 6l2-2 2 2-2 2zM7 4l2-2 2 2-2 2zM13 2l2-2 2 2-2 2z" />
        </svg>
        <svg viewBox="0 0 20 14" className="w-4 h-3 fill-current">
          <path d="M10 13a2 2 0 110-4 2 2 0 010 4zm0-6a6 6 0 015.66 4h-1.2a4.8 4.8 0 00-8.92 0H4.34A6 6 0 0110 7zm0-4a10 10 0 019.43 6.67h-1.26A8.8 8.8 0 001.83 9.67H.57A10 10 0 0110 3z" />
        </svg>
        <div className="relative ml-0.5 h-3 w-6 rounded-sm border border-current">
          <div className="absolute inset-0.5 rounded-[1px] bg-current" />
          <div className="absolute -right-1 top-1 h-1 w-0.5 rounded-sm bg-current" />
        </div>
      </div>
    </div>
  );
}

function CategoryTile({
  label,
  icon,
  tone,
  active,
}: {
  label: string;
  icon: string;
  tone: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 rounded-2xl ${
        active ? "bg-lime-soft" : tone
      } py-2.5`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-[9px] font-semibold text-forest-700">{label}</span>
    </div>
  );
}

function MobilePreview() {
  const [recipes, setRecipes] = useState<Recipe[]>(FALLBACK_RECIPES);

  useEffect(() => {
    let cancelled = false;
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey || apiKey === "your_spoonacular_api_key") return;

    fetchRecipeApi("bowl", 6)
      .then((res) => {
        if (cancelled) return;
        const results = (res.data?.results ?? []) as Recipe[];
        if (results.length >= 2) setRecipes(results.slice(0, 3));
      })
      .catch(() => {
        /* keep fallback */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const [trending1, trending2] = recipes;

  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px]">
      {/* floating decorative cards around the phone */}
      <FloatingCard
        tone="peach"
        floatDelay={0.2}
        className="absolute -top-6 -right-4 z-20 hidden sm:block w-[110px] px-3 py-3"
      >
        <div className="text-[11px] mb-1">🍴</div>
        <div className="text-xs font-semibold leading-tight text-forest-700">Servings</div>
        <div className="text-xl font-display font-bold text-forest-700">
          4 <span className="text-xs font-semibold align-middle">peoples</span>
        </div>
      </FloatingCard>

      <FloatingCard
        floatDelay={0.8}
        className="absolute top-[27%] -left-6 z-20 hidden sm:flex items-center gap-2 pr-4 pl-2 py-2 w-[170px]"
      >
        <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-amber-100 text-sm">
          🍳
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-forest-700 truncate">Sausage egg</div>
          <div className="text-[9px] text-forest-600/70 flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            8 mins
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        floatDelay={1.4}
        className="absolute top-[44%] -left-10 z-20 hidden md:flex items-center gap-2 pr-5 pl-2 py-2 w-[200px]"
      >
        <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-emerald-50 text-sm">
          🥗
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-forest-700">Mix vegetables</div>
          <div className="text-[9px] text-forest-600/70 flex items-center gap-2">
            <span className="flex items-center gap-0.5">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
              </svg>
              3 mins
            </span>
            <span className="flex items-center gap-0.5 text-amber-500">
              ★ <span className="text-forest-600/70">4.5</span>
            </span>
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-forest-700" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </FloatingCard>

      <FloatingCard
        tone="lime"
        floatDelay={0.5}
        className="absolute bottom-[22%] -left-4 z-20 hidden sm:block w-[100px] px-3 py-3"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" />
        </svg>
        <div className="text-[10px] font-semibold text-forest-700">Cooking time</div>
        <div className="text-xl font-display font-bold text-forest-700">
          30 <span className="text-xs font-semibold align-middle">mins</span>
        </div>
      </FloatingCard>

      {/* phone frame */}
      <div className="relative z-10 mx-auto w-[280px] sm:w-[310px] md:w-[340px] rounded-[2.75rem] bg-gradient-to-b from-[#fff5ea] via-white to-white shadow-[0_40px_80px_-30px_rgba(19,41,26,0.45)] ring-1 ring-black/5 overflow-hidden">
        <div className="rounded-[2.75rem] border-[6px] border-white">
          <StatusBar />

          {/* profile header */}
          <div className="flex items-center justify-between px-5 mt-4">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                alt=""
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
              />
              <span className="text-xs font-semibold text-forest-700">Samantha William</span>
            </div>
            <div className="h-7 w-7 rounded-full bg-white shadow ring-1 ring-black/5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-forest-700" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>

          {/* hello / search */}
          <div className="px-5 mt-3">
            <div className="text-base font-display font-bold text-forest-700 leading-tight">
              What's cooking <br /> today?
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-black/5 shadow-sm px-3 py-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-forest-600/60" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M20 20l-3-3" />
              </svg>
              <span className="text-[10px] text-forest-600/50">Search here</span>
            </div>
          </div>

          {/* categories */}
          <div className="mt-4 grid grid-cols-4 gap-1.5 px-5">
            {categories.slice(0, 4).map((c) => (
              <CategoryTile key={c.label} {...c} />
            ))}
            {categories.slice(4).map((c, i) => (
              <CategoryTile key={c.label} {...c} active={i === 2} />
            ))}
          </div>

          {/* trending */}
          <div className="px-5 mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-display font-bold text-forest-700">Trending Recipe</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[trending1, trending2].filter(Boolean).map((r) => (
                <div
                  key={r.id}
                  className="relative h-28 rounded-2xl overflow-hidden ring-1 ring-black/5"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                  <div className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-white/90 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-rose-500" fill="currentColor">
                      <path d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-1.5 left-2 right-2 text-[9px] font-semibold text-white truncate">
                    {r.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom tab */}
          <div className="mt-5 mx-5 mb-5 flex items-center justify-between rounded-full bg-forest-700 px-3 py-2 text-cream-50">
            <button className="h-7 w-7 rounded-full bg-lime-soft flex items-center justify-center text-forest-700">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V11z" />
              </svg>
            </button>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 8v8M8 12h8" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h6v6H4zM14 6h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path strokeLinecap="round" d="M4 21a8 8 0 0116 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilePreview;
