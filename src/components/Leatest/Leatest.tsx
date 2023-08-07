import leatest from "../../assets/icons/leatest.svg";

import "./leatest.scss";

export default function Leatest() {
  return (
    <section className="leatest container">
      <h2 className="leatest__title">
        <img src={leatest} alt="" className="leatest__title__img" />
        Oxirgi qo’shilganlar
      </h2>
      <div className="leatest__table">
        <div className="leatest__table__h">
          <span>Qo’shilgan</span>
          <span>Kategoriya</span>
          <span>Manba nomi</span>
        </div>
        <hr />
        <div className="leatest__table__b">
          <span>31.03.2023</span>
          <span>Matbuot</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
        </div>
        <div className="leatest__table__b">
          <span>31.03.2023</span>
          <span>Arxiv hujjatjar</span>
          <span>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className="leatest__table__b">
          <span>31.03.2023</span>
          <span>Epigrafik manbalar</span>
          <span>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </span>
        </div>
        <div className="leatest__table__b">
          <span>31.03.2023</span>
          <span>Muhrlar</span>
          <span>Laboris nisi ut aliquip ex ea commodo consequat</span>
        </div>
        <div className="leatest__table__b">
          <span>31.03.2023</span>
          <span>Numizmatika</span>
          <span>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </span>
        </div>
      </div>
    </section>
  );
}
