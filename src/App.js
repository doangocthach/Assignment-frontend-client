import React from "react";
// import Header from "./components/web/Header";
// import Footer from "./components/web/Footer";
// import Cart from "./components/web/Cart";
// import Slide from "./components/web/Slide";
// import Banner from "./components/web/Banner";
// import Products from "./components/web/Products";
import ProductDetail from "./web/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductManagement from "./admin/components/ProductManager";
import IndexWeb from "./web/Index";
export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexWeb} />
          <Route path="/product-management" component={ProductManagement} />
          <Route path="/product-detail/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
