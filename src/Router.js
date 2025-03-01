import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
