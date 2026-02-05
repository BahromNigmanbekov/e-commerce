import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Detailes from "./pages/detailes/Detailes";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // faqat 1 marta ishlasin
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailes/:id" element={<Detailes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
