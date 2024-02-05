import { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";

//Store App
function App() {
  const [cartList, setCartList] = useState([]);
  const [quantityObj, setQuantityObj] = useState({});

  // add a product in to cart
  const getCartList = (product) => {
    // checks if cart already has product
    const hasProduct = cartList.find((cart) => cart.id === product.id);
    if (!hasProduct) {
      setCartList([...cartList, product]);
    }
  };

  // removes product from cart
  const removeCartList = (product) => {
    // checks if cart already has product
    let prIndex = 0;
    const hasProduct = cartList.find((cart, index) => {
      prIndex = index;
      return cart.id === product.id;
    });
    if (hasProduct) {
      cartList.splice(prIndex, 1);
      setCartList([...cartList]);
    }
  };

  // update quantity details
  const getQuantityObj = (obj) => {
    setQuantityObj(obj);
  };

  return (
    <div className="app">
      <Header />
      <Product
        getCartList={getCartList}
        quantityObj={quantityObj}
        getQuantityObj={getQuantityObj}
      />
      <Cart
        cartList={cartList}
        quantityObj={quantityObj}
        removeCartList={removeCartList}
      />
    </div>
  );
}

export default App;
