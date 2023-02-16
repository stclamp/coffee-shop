import bg from "../../../assets/images/products_bg.jpg";
import Hero from "../../Hero/Hero";

const ProductsPage = () => {
  return (
    <div className="products">
      <Hero bg={bg}>
        <h1>Hero Page</h1>
        <p>This is the hero page</p>
      </Hero>
    </div>
  );
};
export default ProductsPage;
