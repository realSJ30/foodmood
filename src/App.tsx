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
    <div className="min-h-screen bg-cream-100 relative overflow-x-hidden">
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
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/menu"
              element={
                <div className="mx-auto max-w-6xl px-6 pt-8">
                  <MenuPage />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="mx-auto max-w-6xl px-6 pt-8">
                  <AboutPage />
                </div>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
