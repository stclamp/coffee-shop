import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = ({ color }) => {
  return (
    <div className="container">
      <nav className={`menu menu-${color}`}>
        <ul
          className="menu__list"
          style={
            color === "black"
              ? { justifyContent: "center" }
              : { justifyContent: "flex-start" }
          }
        >
          <li className={`menu__list-item menu__list-logo--${color}`}>
            <Link to="/">CoffeeHouse</Link>
          </li>
          <li className="menu__list-item">
            <Link to="/products">Our Coffee</Link>
          </li>
          <li className="menu__list-item">
            <Link to="/about">For your pleasure</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
