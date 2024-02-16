import "./Login.css";
import { useNavigate } from "react-router-dom";
import GoogleLogo from './images/google-logo.png';
import GithubLogo from './images/github-logo.png';

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
      <div className="image-shade"></div>
      <div className="image-login-container">
        <div className="image-container">
          <img
            className="image-content"
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
          <div className="button-container">
            <button className="login-button" onClick={onClickingLogin}>
              Login
            </button>
            <button className="signup-button" onClick={onClickingLogin}>
              Sign Up
            </button>
          </div>
          <div className="other-login-container">
            <a className="forgot-password" href="/product">
              Forgot Password?
            </a>
            <div className="login-using-container">
              <span>Or login using :</span>
              <a href="/product">
              <img src={GoogleLogo} alt=""></img>
              </a>
              <a href="/product">
              <img src={GithubLogo} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        &copy; Copyrights by Oasis.com (2024)
      </div>
    </div>
  );
};

export default Login;
