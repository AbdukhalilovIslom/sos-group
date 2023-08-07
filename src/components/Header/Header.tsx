import "./header.scss";

import button from "../../assets/icons/header__button.svg";
import people from "../../assets/icons/people.svg";
import view from "../../assets/icons/view.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__logo">Tarixmanba.uz</div>
        <button className="header__left__button">
          Manbalar <img src={button} alt="header__button" />
        </button>
        <nav className="header__left__nav">
          <ul className="header__left__nav__ul">
            <li>Biz haqimizda</li>
            <li>Yangiliklar</li>
            <li>Kutubxona</li>
            <li>Bog’lanish</li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="header__right__nav">
          <ul className="header__right__nav__ul">
            <li>
              <img src={people} alt="button__icon" /> Shaxsiy xona
            </li>
            <li>
              <img src={view} alt="button__icon" /> Zaif koʻruvchilar uchun
            </li>
          </ul>
        </nav>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
