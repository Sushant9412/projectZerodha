import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter , Routes , Route } from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage.js';
import SignUP from './landingPage/signUp/SignUp.js';
import AboutPage from './landingPage/about/AboutPage.js';
import ProductPage from './landingPage/product/ProductPage.js';
import PricingPage from './landingPage/pricing/PricingPage.js';
import SupportPage from './landingPage/support/SupportPage.js';
import NavBar from './landingPage/Navbar.js';
import Footer from './landingPage/Footer.js';
import NotFound from './landingPage/NotFound.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignUP/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/product" element={<ProductPage/>} />
     <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/support" element={<SupportPage/>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);


