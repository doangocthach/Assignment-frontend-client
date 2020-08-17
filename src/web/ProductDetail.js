import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import useScript from "../utils/addJquery";
import Cart from "./components/Cart";
export default () => {
  // useScript();

  return (
    <React.Fragment>
      <Header />
      <ProductDetail />
      <Footer />
      <Cart />
    </React.Fragment>
  );
};
