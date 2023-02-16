import { Link } from "react-router-dom";
import { coffeeDb } from "../../../db";

import bg from "../../../assets/images/about_bg.jpg";
import aboutImg from "../../../assets/images/about_img.png";
import Hero from "../../Hero/Hero";
import Title from "../../Title/Title";
import Underline from "../../Underline/Underline";

import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <Hero bg={bg}>
        <h1>For your pleasure</h1>
      </Hero>
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={aboutImg} alt="About" />
          </div>
          <div className="about__text">
            <Title>About our goods</Title>
            <Underline color={"black"} />
            <p className="about__text-descr">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="about__text-descr">
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
        <ul className="about__all">
          {coffeeDb &&
            coffeeDb.map((item, i) => {
              return (
                <li className="about__product" key={i}>
                  <Link to={`../products/${item.link}`}>
                    <img
                      className="about__product-img"
                      src={item.src}
                      alt={item.title}
                    />
                    <h3 className="about__product-title">{item.title}</h3>
                    <h4 className="about__product-country">{item.country}</h4>
                    <h5 className="about__product-price">{item.price}</h5>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default AboutPage;
