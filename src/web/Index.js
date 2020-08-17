import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Slide from "./components/Slide";
import Banner from "./components/Banner";
import Products from "./components/Products";
export default () => {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <Slide />
      <Banner />
      <Products />
      <Footer />
    </React.Fragment>
  );
};
