import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ContentArea from "./components/ContentArea";
import BlogList from "./components/BlogList";
import Details from "./components/Details";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";
import BlogDetail from "./components/BlogDetail";
import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={ContentArea} exact />
        <Route path="/ProductList" component={ProductList} exact />
        <Route path="/About" component={About} exact />
        <Route path="/BlogList" component={BlogList} exact />
        <Route path="/Details" component={Details} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/blogDetail" component={BlogDetail} />
        <Route component={Error} />
      </Switch>
      <Modal />
    </BrowserRouter>
  );
}
export default App;
