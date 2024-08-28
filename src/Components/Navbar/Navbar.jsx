import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../Context/CoinContext";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to='/learning-center'>Learn</Link>
      </div>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="INR">INR</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
