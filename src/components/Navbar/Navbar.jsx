import "./Navbar.css";
import logo from "../../assets/Sameer Logo.png";
import icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "pkr": {
        setCurrency({ name: "pkr", symbol: "Rs" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="" />
      </Link>
      <ul>
        <Link style={{ color: " #ddd", textDecoration: "none" }} to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pkr">PKR</option>
        </select>
        <button>
          SignUp <img src={icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
