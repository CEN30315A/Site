import React from 'react';
import './App.css';
import FaqSection from './components/FaqSection';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Product from './components/Product';
import ProductImages from './components/ProductImages';
import ClinicalEfficacy from './components/ClinicalEfficacy';
import Order from './components/Order';
import ContactUs from './components/ContactUs';
import Data from './data/data';
//import Footer from './components/Footer';

function App() {
  let index = 0
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Home
        title="Home"
        dark={index++ % 2 === 0}
        id={"section" + index}
        data={Data}
      />
      <AboutUs
        title="About Us"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      <Product
        title="Digi-Clamp"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      <ProductImages />
      <ClinicalEfficacy
        title="Clinical Efficacy"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      <Order
        title="Order"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      <ContactUs
        title="Contact Us"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      <FaqSection  
        questAns={Data.faq}
        title="FAQ"
        dark={index++ % 2 === 0}
        id={"section" + index}
      />
      
    </div>
  );
}

export default App;
