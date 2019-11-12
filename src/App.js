import React from 'react';
import './App.css';
import Section from './components/SectionComponent';
import FaqSection from './components/FaqSection';
import Navbar from "./components/Navbar";
import dummyText from "./components/DummyText";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Product from './components/Product';
import ProductImages from './components/ProductImages';
import Order from './components/Order';
import ContactUs from './components/ContactUs';
import data from './data/data';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home
          title="Home"
          subtitle={dummyText}
          dark={true}
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
          title="The Product"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <ProductImages />
        <Order
          title="Order"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <ContactUs
          title="Contact Us"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Section
          title="FAQ"
          dark={false}
          id="section6" 
        />
        <FaqSection  
           questAns = {data.faq}
        />
      </div>
  );
}

export default App;
