import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/SectionComponent';
import FaqSection from './components/FaqSection';
import Navbar from "./components/Navbar";
import dummyText from "./components/DummyText";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';
import ContactUs from './components/ContactUs';


const questAns = [
  {id: 1, question: 'question1', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 2, question: 'question2', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 3, question: 'question3', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 4, question: 'question4', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
]

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home
          title="Home"
          subtitle={dummyText}
          dark={true}
          id="section1"
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
           questAns = {questAns}
        />
      </div>
  );
}

export default App;
