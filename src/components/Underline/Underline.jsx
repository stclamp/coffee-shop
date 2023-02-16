import underlineBeansWhite from "../../assets/images/underline_beans-white.png";
import underlineBeans from "../../assets/images/underline_beans.png";

import "./Underline.scss";

const Underline = ({ color }) => {
  return (
    <div className={`underline underline-${color}`}>
      <img
        className="underline__image"
        src={color === "black" ? underlineBeans : underlineBeansWhite}
        alt="Beans"
      />
    </div>
  );
};
export default Underline;
