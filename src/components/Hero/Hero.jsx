import "./Hero.scss";

const Hero = ({ bg, height, children }) => {
  console.log(bg);
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${bg})`, minHeight: height || "260px" }}
    >
      <div className="container">{children}</div>
    </div>
  );
};
export default Hero;
