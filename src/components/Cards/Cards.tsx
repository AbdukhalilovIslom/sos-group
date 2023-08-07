import Card from "../Card/Card";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

import "./cards.scss";

export interface data {
  title: string;
  items: item[];
}

export interface item {
  title: string;
  view: number;
  star: number;
}

export default function Cards({
  data,
  background,
}: {
  data: data;
  background: string;
}) {
  return (
    <section className={background ? "cards__bg orange__bg" : "cards__bg"}>
      <div className="cards__container container">
        <div className="cards__title">
          <h2>{data.title}</h2>
          <button className="all__btn">Barchasi</button>
          <div className="slider__btns">
            <button className="slider__btn">
              <img src={left} alt="left" />
            </button>
            <button className="slider__btn">
              <img src={right} alt="right" />
            </button>
          </div>
        </div>
        <div className="cards">
          {data.items.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
