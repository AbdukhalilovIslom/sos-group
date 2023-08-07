import "./news.scss";

import arrow from "../../assets/icons/card_icons/arrowsmallright.svg";
import news from "../../assets/images/news.jpg";
import news2 from "../../assets/images/Tarixmanba (2)/Rectangle 25-1.jpg";

export default function News() {
  return (
    <section className="news container">
      <div className="news__title">
        <h2>Yangiliklar</h2>
        <button>BARCHASI</button>
      </div>
      <div className="news__cards">
        <div className="news__card_f child1">
          <div className="news__card_f__content">
            <h2 className="news__card_f__title">Lorem ipsum dolor sit amet</h2>
            <div className="news__card_f__date">12.03.2022</div>
            <div className="news__card_f__btn">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <img src={news} alt="news" />
        </div>
        <div className="news__card_f child2">
          <div className="news__card_f__content">
            <h2 className="news__card_f__title">Lorem ipsum dolor sit amet</h2>
            <div className="news__card_f__date">12.03.2022</div>
            <div className="news__card_f__btn">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <img src={news} alt="news" />
        </div>

        <div className="news__card_s child3">
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="news__card_s__card">
            <img src={news2} alt="news" />
            Duis aute irure dolor in reprehenderit
          </div>
        </div>
      </div>
      <h3 className="news__h3">Tarixmanba.uz</h3>
      <p className="news__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}
