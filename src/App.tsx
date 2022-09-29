import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";

function App(props: any) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])
  

  return (
    <div className="max-w-[880px] lg:max-w-[1080px] xl:container mx-auto p-4 h-screen bg-white relative">
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Cart openCart={openCart} setOpenCart={setOpenCart} />
          <Drawer
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            setOpenCart={setOpenCart}
          />
          <Navbar setOpenDrawer={setOpenDrawer} setOpenCart={setOpenCart} />
          <Routes>
            <Route
              path="/"
              element={<LandingPage setOpenCart={setOpenCart} />}
            />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
