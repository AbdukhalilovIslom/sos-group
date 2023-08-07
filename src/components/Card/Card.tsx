import { item } from "../Cards/Cards";

import img from "../../assets/images/Tarixmanba (1)/Rectangle 25-1.jpg";
import view from "../../assets/icons/card_icons/Group 79.svg";
import star from "../../assets/icons/card_icons/Rectangle 32.svg";
import comm from "../../assets/icons/card_icons/Rectangle 33.svg";
import arrow from "../../assets/icons/card_icons/arrowsmallright.svg";

import "./card.scss";

export default function Card({ data }: { data: item }) {
  return (
    <article className="card">
      <img className="card__img" src={img} alt="card__image" />
      <h2 className="card__title">{data.title}</h2>
      <div className="bottom">
        <div className="bottom__inner">
          <span className="span">
            <img src={view} alt="view" />
            {data.view}
          </span>
          <span className="span">
            <img src={star} alt="star" />
            {data.star}
          </span>
          <span className="span">
            <img src={comm} alt="comment" />2
          </span>
        </div>
        <button className="card__btn">
          <img src={arrow} alt="Arrow_right" className="card__btn__img" />
        </button>
      </div>
    </article>
  );
}
