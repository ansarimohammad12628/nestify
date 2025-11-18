import "./App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Router/Navbar";
import WrapperDown from "./Components/WrapperDown";
import Footer from "./Components/Footer";
import DealsPage from "./Components/DealsPage";
import AboutPage from "./Components/AboutPage";
import ShopPage from "./Components/ShopPage";
import VendorPage from "./Components/VendorPage";
import MegaMenu from "./Components/MegaMenu";
import BlogPage from "./Components/BlogPage";
import ContactPage from "./Components/ContactPage";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { CartPage } from "./Components/CartPage";

function App() {
  return (
    <>
    <Provider store ={store}>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/deals" element={<DealsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/megamenu" element={<MegaMenu />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        
       
        <WrapperDown/>
        <Footer />

      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
