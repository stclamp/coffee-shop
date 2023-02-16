import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from "../../../assets/images/aromisto.png";
import bg from "../../../assets/images/products_bg.jpg";
import productsImage from "../../../assets/images/products_img.png";

import { coffeeDb } from "../../../db";

import Hero from "../../Hero/Hero";
import Title from "../../Title/Title";
import Underline from "../../Underline/Underline";

import "./ProductsPage.scss";

const ProductsPage = () => {
  const [coffee, setCoffee] = useState(coffeeDb);
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchCoffee();
  }, [search]);

  const filterCoffee = (country) => {
    setCoffee(coffeeDb);
    setCountry(country);
    country &&
      setCoffee((coffee) =>
        coffee.filter((coffee) => coffee.country === country)
      );
  };

  const setSearchCoffee = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchCoffee = () => {
    filterCoffee(country);
    setCoffee((coffee) =>
      coffee.filter((coffee) => coffee.title.toLowerCase().includes(search))
    );
  };

  return (
    <div className="products">
      <Hero bg={bg}>
        <h1>Our Coffee</h1>
      </Hero>
      <div className="container">
        <div className="products__wrapper">
          <div className="products__image">
            <img src={productsImage} alt="Products" />
          </div>
          <div className="products__about">
            <Title>About our beans</Title>
            <Underline color={"black"} />
            <p className="products__about-text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="products__about-text">
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
        <div className="products__filters">
          <div className="products__search">
            <label className="products__search-label">Looking for</label>
            <input
              value={search}
              onChange={setSearchCoffee}
              className="products__search-input"
              type="text"
              placeholder="start typing here..."
            />
          </div>
          <div className="products__filter">
            <span className="products__filter-label">Or filter</span>
            <div className="products__filter-buttons">
              <button
                className="products__filter-btn"
                onClick={() => filterCoffee("Brazil")}
              >
                Brazil
              </button>
              <button
                className="products__filter-btn"
                onClick={() => filterCoffee("Kenya")}
              >
                Kenya
              </button>
              <button
                className="products__filter-btn"
                onClick={() => filterCoffee("Columbia")}
              >
                Columbia
              </button>
              <button
                className="products__filter-btn"
                onClick={() => filterCoffee("")}
              >
                All
              </button>
            </div>
          </div>
        </div>
        <ul className="products__all">
          {coffee &&
            coffee.map((item, i) => {
              return (
                <li className="products__product" key={i}>
                  <Link to={item.link}>
                    <img
                      className="products__product-img"
                      src={item.src}
                      alt={item.title}
                    />
                    <h3 className="products__product-title">{item.title}</h3>
                    <h4 className="products__product-country">
                      {item.country}
                    </h4>
                    <h5 className="products__product-price">{item.price}</h5>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default ProductsPage;
