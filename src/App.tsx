import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="max-w-[880px] lg:max-w-[1080px] xl:container mx-auto p-4 h-screen bg-white relative">
      <Router>
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
        <Drawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          setOpenCart={setOpenCart}
        />
        <Navbar setOpenDrawer={setOpenDrawer} setOpenCart={setOpenCart} />
        <Routes>
          <Route path="/" element={<LandingPage setOpenCart={setOpenCart} />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
