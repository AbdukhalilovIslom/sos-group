import Map from "../Map/Map";
import "./categories.scss";

import icon1 from "../../assets/icons/categories/Rectangle 24.svg";
import icon2 from "../../assets/icons/categories/Rectangle 25.svg";
import icon3 from "../../assets/icons/categories/Rectangle 26.svg";
import icon4 from "../../assets/icons/categories/Rectangle 27.svg";
import icon5 from "../../assets/icons/categories/Rectangle 28.svg";
import icon6 from "../../assets/icons/categories/Rectangle 29.svg";
import icon7 from "../../assets/icons/categories/Rectangle 30.svg";
import icon8 from "../../assets/icons/categories/Rectangle 31.svg";
import icon9 from "../../assets/icons/categories/Rectangle 32.svg";
import icon10 from "../../assets/icons/categories/Rectangle 33.svg";
import icon11 from "../../assets/icons/categories/Rectangle 34.svg";

export default function Categories() {
  return (
    <div className="categories container">
      <div className="categories__items">
        <div className="categories__item">
          <img src={icon1} alt="categories__icon" />
          <span>Arxeologik yodgorliklar</span>
        </div>
        <div className="categories__item">
          <img src={icon2} alt="categories__icon" />
          <span>Arxiv hujjatjar</span>
        </div>
        <div className="categories__item">
          <img src={icon3} alt="categories__icon" />
          <span>Epigrafik manbalar</span>
        </div>
        <div className="categories__item">
          <img src={icon4} alt="categories__icon" />
          <span>Foto va video manbalar</span>
        </div>
        <div className="categories__item">
          <img src={icon5} alt="categories__icon" />
          <span>Matbuot</span>
        </div>
        <div className="categories__item">
          <img src={icon6} alt="categories__icon" />
          <span>Meʻmorchilik</span>
        </div>
        <div className="categories__item">
          <img src={icon7} alt="categories__icon" />
          <span>Muhrlar va tamgʻalar</span>
        </div>
        <div className="categories__item">
          <img src={icon8} alt="categories__icon" />
          <span>Tangashunoslik</span>
        </div>
        <div className="categories__item">
          <img src={icon9} alt="categories__icon" />
          <span>Tarixiy hujjatlar</span>
        </div>
        <div className="categories__item">
          <img src={icon10} alt="categories__icon" />
          <span>Xalq og'zaki ijodi</span>
        </div>
        <div className="categories__item">
          <img src={icon11} alt="categories__icon" />
          <span>Yozma banbalar</span>
        </div>
      </div>
      <Map />
    </div>
  );
}
