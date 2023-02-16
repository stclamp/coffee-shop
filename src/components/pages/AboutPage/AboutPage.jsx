import bg from "../../../assets/images/about_bg.jpg";
import Hero from "../../Hero/Hero";
function AboutPage() {
  return (
    <div className="about">
      <Hero bg={bg}>
        <h1>About Page</h1>
        <p>This is an about page</p>
      </Hero>
    </div>
  );
}
export default AboutPage;
