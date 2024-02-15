import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const onClickingLogin = () => {
    // fetch("http://localhost:3001/product/getAll/")
    //   .then((res) => res.json())
    //   .then((data) => {});
    navigate("/product");
  };

  return (
    <div className="login-container">
      <Header />
      <div>
        <div className="video-login-container">
          <div className="video-container">
            <img
              className="video-content"
              src="https://cdn.dribbble.com/userupload/12926652/file/original-5a81fd4190f00a2851d529056ea3c972.jpg?resize=752x"
              alt=""
            />
          </div>
          <div className="login-fields-container">
            <span className="app-title">Oasis</span>
            <input
              id="username"
              type="text"
              className="userName"
              placeholder="User Name"
            ></input>
            <input
              id="password"
              className="pass"
              type="password"
              placeholder="Password"
            ></input>
            <button className="login-button" onClick={onClickingLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
