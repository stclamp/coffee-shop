import bg from "../../../assets/images/products_bg.jpg";
import Hero from "../../Hero/Hero";

function SingleProductPage() {
  return (
    <div className="product">
      <Hero bg={bg}>
        <h1>Single product</h1>
        <p>This is a single page</p>
      </Hero>
    </div>
  );
}
export default SingleProductPage;
