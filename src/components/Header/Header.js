import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";

import "./Header.css";

const Header = ({ createModalOn, userLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate},{userLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={createModalOn}
          >
            + Add Clothes
          </button>
        </div>
        <Link to="/profile">Terrence Tegegne</Link>
        <div>
          <img src={avatarImage} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
