import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bg from "../../../assets/images/main_bg.jpg";
import Hero from "../../Hero/Hero";
import Title from "../../Title/Title";
import Underline from "../../Underline/Underline";

import { coffeeDb } from "../../../db.js";

import "./MainPage.scss";

const MainPage = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    coffeeLoaded(coffeeDb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coffeeLoaded = (coffee) => {
    shuffleArray(coffee);
  };

  const shuffleArray = (array) => {
    setCoffee(array.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="main">
      <Hero bg={bg} height={"640px"}>
        <div className="container">
          <h1 className="main__title">Everything You Love About Coffee</h1>
          <Underline color={"white"} />
          <h2 className="main__subtitle">
            We makes every day full of energy and taste
          </h2>
          <h3 className="main__try-title">Want to try our beans?</h3>
          <Link className="main__btn" to="/products">
            More
          </Link>
        </div>
      </Hero>
      <div className="container">
        <Title>About Us</Title>
        <Underline color={"black"} />
        <p className="main__text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>
        <p className="main__text second">
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </div>
      <div className="main__best">
        <div className="container">
          <Title>Our Best</Title>
          <div className="main__wrapper">
            {coffee.slice(0, 3).map((coffee, i) => {
              return (
                <Link
                  to={`/products/${coffee.link}`}
                  key={i}
                  className="main__coffee"
                >
                  <img
                    className="main__coffee-img"
                    src={coffee.src}
                    alt={coffee.title}
                  />
                  <h4 className="main__coffee-title">{coffee.title}</h4>
                  <h5 className="main__coffee-price">{coffee.price}</h5>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
