import bg from "../../../assets/images/about_bg.jpg";
import Hero from "../../Hero/Hero";

function Page404() {
  return (
    <div className="about">
      <Hero bg={bg} height={"80vh"}>
        <h1>404</h1>
        <p>This page was not found</p>
      </Hero>
    </div>
  );
}
export default Page404;
