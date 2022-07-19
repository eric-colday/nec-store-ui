import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );;
};

export default App;