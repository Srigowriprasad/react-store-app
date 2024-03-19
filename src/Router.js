import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
