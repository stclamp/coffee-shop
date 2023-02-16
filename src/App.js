import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import {
  AboutPage,
  MainPage,
  Page404,
  ProductsPage,
  SingleProductPage,
} from "./components/pages";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu color={"white"} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:title" element={<SingleProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
