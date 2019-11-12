import React from 'react';
import './App.css';
import Section from './components/SectionComponent';
import FaqSection from './components/FaqSection';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import dummyText from "./components/DummyText";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Product from './components/Product';
import ProductImages from './components/ProductImages';
import Order from './components/Order';
import ContactUs from './components/ContactUs';
import data from './data/data';
import ClinicalEfficacy from './components/ClinicalEfficacy';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar />
        <Home
          title="Home"
          subtitle={dummyText}
          dark={false}
          id="section1"
          data={data}
        />
        <AboutUs
          title="About Us"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        
        <Product
          title="Product"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <ProductImages />
        <ClinicalEfficacy
          title="Clinical Efficacy"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Order
          title="Order"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
        <ContactUs
          title="Contact Us"
          subtitle={dummyText}
          dark={false}
          id="section6"
        />
        <Section
          title="FAQ"
          dark={false}
          id="section7" 
        />
        <FaqSection  
           questAns = {data.faq}
        /><br/>
      </div>
  );
}

export default App;
