import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { coffeeDb } from "../../../db";

import bg from "../../../assets/images/products_bg.jpg";
import Hero from "../../Hero/Hero";
import Title from "../../Title/Title";
import Underline from "../../Underline/Underline";

import "./SingleProductPage.scss";

const SingleProductPage = () => {
  useEffect(() => {
    getCurrentCoffee();
    console.log(coffee);
  }, []);
  const [coffee, setCoffee] = useState(coffeeDb);
  const params = useParams();

  const getCurrentCoffee = () => {
    setCoffee((coffee) =>
      coffeeDb.find((coffee) => coffee.link === params.product)
    );
  };

  console.log(params);
  return (
    <div className="product">
      <Hero bg={bg}>
        <h1>Our Coffee</h1>
      </Hero>
      <div className="container">
        <div className="product__wrapper">
          <div className="product__image">
            <img src={coffee.srcBig} alt={coffee.title} />
          </div>
          <div className="product__about">
            <Title>About it</Title>
            <Underline color={"black"} />
            <div className="product__country">
              <h4 className="product__title">Country:</h4>
              <span className="product__subtitle">{coffee.country}</span>
            </div>
            <div className="product__description">
              <h4 className="product__title">Description:</h4>
              <span className="product__subtitle">{coffee.description}</span>
            </div>
            <div className="product__price">
              <h4 className="product__title">Price:</h4>
              <span className="product__subtitle-price">{coffee.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProductPage;
