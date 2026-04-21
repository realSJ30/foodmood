import { Link } from "react-router-dom";
import Button from "./ui/Button";

interface NavbarProps {
  setOpenDrawer: (open: boolean) => void;
  setOpenCart: (open: boolean) => void;
}

const navLinks: { label: string; to: string; hasCaret?: boolean }[] = [
  { label: "Product", to: "/", hasCaret: true },
  { label: "Recipes", to: "/menu", hasCaret: true },
  { label: "Categories", to: "/menu", hasCaret: true },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/about" },
];

function Caret() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      className="w-3 h-3 opacity-70"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function Navbar({ setOpenDrawer }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full pt-5 px-4 md:px-8 pointer-events-none">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center pointer-events-auto">
        <nav className="flex w-full items-center gap-2 rounded-full bg-forest-700 px-3 py-2 text-cream-50 shadow-[0_18px_40px_-20px_rgba(19,41,26,0.7)] md:w-auto md:min-w-[720px]">
          <Link
            to="/"
            className="pl-4 pr-2 text-lg font-display font-semibold tracking-tight"
          >
            Food<span className="text-orange-300">mood</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 ml-2 text-sm font-semibold text-cream-100/90">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="flex items-center gap-1 rounded-full px-3 py-2 hover:bg-white/10 transition-colors"
                >
                  {link.label}
                  {link.hasCaret && <Caret />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex-1" />

          <Button
            size="sm"
            variant="ghost"
            className="!rounded-full !bg-white !text-forest-700 hover:!bg-cream-50"
          >
            Download App
          </Button>

          <button
            aria-label="Open menu"
            onClick={() => setOpenDrawer(true)}
            className="md:hidden ml-1 mr-1 rounded-full p-2 text-cream-50 hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
