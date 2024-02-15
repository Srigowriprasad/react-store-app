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
      <div className="video-login-container">
        <img
          className="video-content"
          src="https://cdn.dribbble.com/userupload/12926652/file/original-5a81fd4190f00a2851d529056ea3c972.jpg?resize=752x"
          alt=""
        />
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
      <div className="copyrights">
        Copyrights by Oasis.com (2024)
      </div>
      <div className="article">
        An oasis is an area made fertile by a source of freshwater in an otherwise dry and arid region. Oases (more than one oasis) are irrigated by natural springs or other underground water sources. They vary in size from a cluster of date palms around a well or a spring to a city and its irrigated cropland. Dates, cotton, olives, figs, citrus fruits, wheat and corn (maize) are common oasis crops.

        Underground water sources called aquifers supply most oases. In some cases, a natural spring brings the underground water to the surface. At other oases, manmade wells tap the aquifer. In some oasis settlements, these wells might be centuries old and might have been diligently maintained for generations to preserve access to their life-giving water.

        Sands blown by desert winds threaten wells as well as agricultural areas in oases. Sand can destroy crops and pollute water. Communities have traditionally planted strong trees, such as palms, around the perimeter of oases to keep the desert sands from their delicate crops and water.

        Some of the world's largest supplies of underground water exist beneath the Sahara Desert, supporting about 90 major oases there. The Sahara is the largest desert on Earth—about the size of the continental United States. Though there are many oases there, traveling between them can take days because the desert is so vast.

        For this reason, oases in the Sahara and throughout the world have become important stops along trade routes. Merchants and traders who travel along these routes must stop at oases to replenish food and water supplies. This means that whoever controls an oasis also controls the trade along the route—making oases desirable to political, economic, and military leaders.

        Al-Hasa, Saudi Arabia, has been an important farming area for the Arabian Peninsula for thousands of years. Today, it continues to be a leading agricultural region, producing dates, rice, corn, sheep, cattle, and eggs. The al-Hasa region also lies above one of the richest oil fields in the world, making the oasis an important center of international trade.

        Rivers that flow through some deserts provide permanent sources of water for large, elongated oases. The fertile Nile River valley and delta in Egypt, supplied with water from the Nile River, is an example of this type of large oasis. At 22,000 square kilometers, it might be the largest oasis in the world.
      </div>
    </div>
  );
};

export default Login;
