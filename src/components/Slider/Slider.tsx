import { useState } from "react";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

import "./slider.scss";

export default function Slider() {
  return (
    <section className="slider__container container">
      <div className="slider">
        <h3 className="slider__title">O'zbekiston tarixi</h3>
        <p className="slider__date">23.02.2022</p>
        <button className="slider__more">Batafsil</button>
        <div className="slider__btns">
          <button className="slider_btn">
            <img src={left} alt="" />
          </button>
          <button className="slider_btn">
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
