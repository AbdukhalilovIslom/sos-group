import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
import Book from "../Book/Book";

import "./books.scss";

export interface book {
  title: string;
  author: string;
}

export default function Books({ data }: { data: book[] }) {
  return (
    <section className="books__bg orange__bg">
      <div className="books__container container">
        <div className="books__title">
          <h2>Elektron kutubxona</h2>
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
        <div className="books">
          {data.map((item, index) => {
            return <Book key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
