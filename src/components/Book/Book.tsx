import { book } from "../Books/Books";

import img from "../../assets/images/Rectangle 24.jpg";
import arrow from "../../assets/icons/card_icons/arrowsmallright.svg";

import "./book.scss";

export default function Book({ data }: { data: book }) {
  return (
    <article className="book">
      <img className="book__img" src={img} alt="book__image" />
      <h2 className="book__title">{data.title}</h2>
      <p className="author">{data.author}</p>
      <div className="book__button">
        <button className="book__btn">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </article>
  );
}
