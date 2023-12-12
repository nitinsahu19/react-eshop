import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartProvider } from "./components/cart-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/Pages/About";
import Product from "./components/Products/Products";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);

  const hideCartHandler = () => setShowCart(false);

  const router = createBrowserRouter([
    { path: "/", element: <Product onShowCart={showCartHandler} /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/home", element: <Home /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  );
};

export default App;
