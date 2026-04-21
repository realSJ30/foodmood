import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";

const LEAF = "/hero-leaf1.png";

const features = [
  {
    icon: "🥗",
    title: "Thousands of recipes",
    body: "Powered by Spoonacular, we pull from a living library of chef-tested, globally inspired dishes.",
  },
  {
    icon: "⏱",
    title: "Cook with confidence",
    body: "Step-by-step instructions, smart timers, and servings scaling tailored to your table.",
  },
  {
    icon: "💚",
    title: "Mindful & inclusive",
    body: "Filter for vegan, gluten-free, dairy-free and more — we meet every diet where it is.",
  },
  {
    icon: "📱",
    title: "Beautifully on-the-go",
    body: "A native-feeling experience on mobile so you can cook, not fight the screen.",
  },
];

const testimonials = [
  {
    name: "Avery P.",
    quote:
      "Finally a recipe app that doesn't treat cooking like homework. Feels calm and joyful.",
    role: "Home cook, Brooklyn",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Milo R.",
    quote:
      "The category flow and search got me out of my weeknight rut. I cook 3× more than I used to.",
    role: "Frequent reviewer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Sami K.",
    quote:
      "Design matters in cooking, and Foodmood respects that. Clean, warm, never in the way.",
    role: "Culinary student",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
];

const stats = [
  { value: "12k+", label: "Recipes indexed" },
  { value: "2.4k", label: "5-star reviews" },
  { value: "48", label: "Cuisines covered" },
  { value: "100%", label: "Ad-free" },
];

function AboutPage() {
  return (
    <div className="relative pt-4 pb-24 font-nunito text-forest-700">
      {/* decorative leaf top-right */}
      <img
        src={LEAF}
        alt=""
        aria-hidden
        className="pointer-events-none hidden md:block absolute -top-10 -right-10 w-64 opacity-60 animate-floaty-slow"
      />

      {/* hero */}
      <section className="max-w-3xl">
        <Pill
          leading={<span>🌿</span>}
          className="text-forest-600/80"
        >
          About Foodmood
        </Pill>
        <h1 className="mt-4 font-display font-bold tracking-tight text-forest-700 text-5xl sm:text-6xl leading-[1.05]">
          Cooking should feel <br />
          <span className="text-forest-700/70">warm, not busy.</span>
        </h1>
        <p className="mt-5 text-forest-600/80 text-base sm:text-lg leading-relaxed">
          Foodmood started as a love letter to home cooking — a single place to
          discover recipes, follow along at your own pace, and build a library
          of dishes your people keep asking for. No banner ads. No clutter.
          Just food, clearly.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Button size="lg" variant="primary">Start cooking</Button>
          <Button size="lg" variant="ghost">Read the story</Button>
        </div>
      </section>

      {/* stats strip */}
      <section className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <Card key={s.label} className="px-5 py-5">
              <div className="font-display font-bold text-3xl text-forest-700">{s.value}</div>
              <div className="text-xs text-forest-600/60 mt-0.5">{s.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* mission / vision */}
      <section className="mt-20 grid md:grid-cols-2 gap-6">
        <Card className="p-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-lime-soft/50 blur-2xl" />
          <span className="relative text-xs font-semibold tracking-widest uppercase text-forest-600/60">Our mission</span>
          <h3 className="relative font-display font-bold text-2xl mt-2 text-forest-700">
            Help every home chef cook <em className="not-italic text-orange-500">one</em> more great meal.
          </h3>
          <p className="relative text-sm text-forest-600/80 mt-3 leading-relaxed">
            We believe a good dinner is the shortest path from any hard day to
            a better one. Our job is to remove the friction — ingredients,
            steps, timing — so you can spend your energy on the table, not the tabs.
          </p>
        </Card>
        <Card tone="lime" className="p-8 relative overflow-hidden">
          <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/50 blur-3xl" />
          <span className="relative text-xs font-semibold tracking-widest uppercase text-forest-600/70">Our vision</span>
          <h3 className="relative font-display font-bold text-2xl mt-2 text-forest-700">
            A global kitchen that fits in your pocket.
          </h3>
          <p className="relative text-sm text-forest-600/80 mt-3 leading-relaxed">
            A future where discovering a recipe from Oaxaca or Hanoi or your
            grandmother is equally delightful — and where the app respects
            your attention as much as your palate.
          </p>
        </Card>
      </section>

      {/* features */}
      <section className="mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-forest-600/60">Why Foodmood</span>
          <h2 className="mt-2 font-display font-bold text-forest-700 text-3xl sm:text-4xl leading-tight">
            Every feature earns its place on your home screen.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <Card key={f.title} className="p-6">
              <div className="h-11 w-11 grid place-items-center rounded-2xl bg-cream-100 text-xl">
                {f.icon}
              </div>
              <h3 className="mt-4 font-display font-bold text-forest-700">{f.title}</h3>
              <p className="mt-1.5 text-sm text-forest-600/75 leading-relaxed">{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* testimonials */}
      <section className="mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-forest-600/60">Community</span>
            <h2 className="mt-2 font-display font-bold text-forest-700 text-3xl sm:text-4xl leading-tight">
              Loved by people who really cook.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-amber-500">★★★★★</span>
            <span className="font-semibold text-forest-700">5.0</span>
            <span className="text-forest-600/60">· 2,400+ reviews</span>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 flex flex-col h-full">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-400 mb-3" fill="currentColor">
                <path d="M7 7h4v4H7v4H3V9a4 4 0 014-4v2zm10 0h4v4h-4v4h-4V9a4 4 0 014-4v2z" />
              </svg>
              <p className="text-sm text-forest-700/90 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-forest-700/5">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div className="text-xs">
                  <div className="font-semibold text-forest-700">{t.name}</div>
                  <div className="text-forest-600/60">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-forest-700 text-cream-50 p-8 sm:p-12">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-lime-soft/20 blur-3xl" />
          <img
            src={LEAF}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-8 right-4 w-56 opacity-40 animate-floaty-slow"
          />
          <div className="relative max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Ready to make cooking feel easy again?
            </h2>
            <p className="mt-3 text-cream-100/80">
              Download Foodmood and let your kitchen keep up with you — one
              weeknight at a time.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="ghost" className="!bg-white !text-forest-700 hover:!bg-cream-50">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="!text-cream-50 !border-cream-100/30 hover:!border-cream-100/70">
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* footer credit */}
      <footer className="mt-16 text-center text-xs text-forest-600/60">
        <p>
          Made with <span className="text-orange-400">♥</span> by SJ Moraga · React · Tailwind · HeadlessUI · Spoonacular API
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
