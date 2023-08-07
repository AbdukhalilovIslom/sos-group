import "./mostViewed.scss";
import icon1 from "../../assets/icons/most_viewed/Rectangle 32-1.svg";
import icon2 from "../../assets/icons/most_viewed/Rectangle 32-2.svg";
import icon3 from "../../assets/icons/most_viewed/Rectangle 32-3.svg";
import icon4 from "../../assets/icons/most_viewed/Rectangle 32.svg";
import img from "../../assets/images/Tarixmanba (1)/Rectangle 25-1.jpg";

export default function MostViewedCard() {
  return (
    <article className="most__viewed__card">
      <img src={img} alt="most__viewed" className="viewed__img" />
      <div className="viewed__content">
        <div className="viewed__infos">
          <div className="viewed__info">
            Asarnomi: <b>Tarixi tabariy</b>
          </div>
          <div className="viewed__info">
            Yili: <b>839-923</b>
          </div>
          <div className="viewed__info">
            Tili: <b>Arab tili</b>
          </div>
          <div className="viewed__info">
            Yeri: <b>Eron</b>
          </div>
        </div>
        <div className="viewed__tools">
          <div className="viewed__tool">
            Audio <img src={icon4} alt="tools" />
          </div>
          <div className="viewed__tool">
            Rasm <img src={icon1} alt="tools" />
          </div>
          <div className="viewed__tool">
            Tekst <img src={icon2} alt="tools" />
          </div>
          <div className="viewed__tool">
            Xarita <img src={icon3} alt="tools" />
          </div>
        </div>
      </div>
    </article>
  );
}
