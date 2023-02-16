import underlineBeansWhite from "../../assets/images/underline_beans-white.png";
import underlineBeans from "../../assets/images/underline_beans.png";

import "./Underline.scss";

const Underline = ({ color }) => {
  return (
    <div className={`underline underline-${color}`}>
      {/* <span
        style={{ backgroundColor: color }}
        className="underline__before"
      ></span> */}
      <img
        className="underline__image"
        src={color === "black" ? underlineBeans : underlineBeansWhite}
        alt="Beans"
      />
      {/* <span
        style={{ backgroundColor: color }}
        className="underline__after"
      ></span> */}
    </div>
  );
};
export default Underline;
