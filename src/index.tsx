import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CartProvider>
  </React.StrictMode>
);
