import { data, books } from "../data/data";

import "./main.scss";

import Books from "../components/Books/Books";
import Cards from "../components/Cards/Cards";
import Slider from "../components/Slider/Slider";
import Leatest from "../components/Leatest/Leatest";
import MostViewed from "../components/MostViewed/MostViewed";
import News from "../components/News/News";
import Categories from "../components/Categories/Categories";
import Hero from "../components/Hero/Hero";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Categories />
      <Cards data={data.First} background="" />
      <Cards data={data.Second} background="background" />
      <Cards data={data.Third} background="" />
      <Cards data={data.Fourth} background="background" />
      <Slider />
      <Books data={books} />
      <Leatest />
      <MostViewed />
      <News />
    </div>
  );
}
