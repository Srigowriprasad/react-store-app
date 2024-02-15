import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import App from "./App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/product" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
