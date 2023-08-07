import hero from "../../assets/icons/hero.svg";
import search from "../../assets/icons/search.svg";

export default function Hero() {
  return (
    <section className="hero__bg">
      <div className="hero">
        <img src={hero} alt="hero__image" className="hero__icon" />
        <div className="hero__text">
          Saytning toʻliq imkoniyatlaridan foydalanish uchun{" "}
          <button className="hero__text__btn">Roʻyxatdan oʻting</button>
          yoki shaxsiy xonaga
          <button className="hero__text__btn">kiring</button>
        </div>
        <div className="hero__search">
          <div className="hero__search__input">
            <input type="text" placeholder="Qidirmoq" />
            <button>
              <img src={search} alt="search" />
            </button>
          </div>
          <button className="hero__search__btn">Barcha manbalar</button>
        </div>
        <div className="hero__infos">
          <div className="hero__info">
            <p>Oʻzbek davlatchiligiga oid manbalar soni</p>
            <b>15 000</b>
          </div>
          <div className="hero__info">
            <p>Tarixmanba.uz satdagi manbalar soni</p>
            <b>430</b>
          </div>
        </div>
      </div>
    </section>
  );
}
