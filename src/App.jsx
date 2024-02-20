
import Navbar from './components/navbar/Navbar'
import './App.css'
import Products from './components/pages/products/Products'
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import Cart from './components/pages/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Footer from './components/footer/Footer';


function App() {
 
  return (
    <>
      <div className="bg-[#fff8f6] font-overall font-medium overflow-x-hidden overflow-y-hidden">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
        </Router>
        {/* footer  */}
        <Footer />
      </div>
    </>
  );
}

export default App
