import MostViewedCard from "./MostViewedCard";
import star from "../../assets/icons/most_viewed/star.svg";

import "./mostViewed.scss";

export default function MostViewed() {
  return (
    <section className="most__viewed__bg">
      <div className="most__viewed container">
        <h2 className="most__viewed__title">
          <img src={star} alt="star" /> Ko’p ko'rilganlar
        </h2>
        <div className="most__viewed__cards">
          <MostViewedCard />
          <MostViewedCard />
          <MostViewedCard />
          <MostViewedCard />
        </div>
      </div>
    </section>
  );
}
