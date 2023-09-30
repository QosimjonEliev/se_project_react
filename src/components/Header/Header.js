import logo from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import "./Header.css";

const Header = ({ createModalOn, weatherCity }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__date">
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__avatar-button">
        <button type="button" onClick={createModalOn} className="header__button">
          + Add Clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img className="header__avatar" src={avatarImage} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
