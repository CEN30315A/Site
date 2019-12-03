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
import Footer from './components/Footer';
import Data from './data/data';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import EmailForm from './components/EmailForm';
import LoginSection from "./components/LoginSection";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  let index = 0

  const About = () => (
    <AboutUs
          title="About Us"
          id={"aboutus"}
        />
  
  ); 

  const Procedure = () => (
    <div className='procedures'>
      <ProductImages 
            title="Procedures"
            //id={"proc"}
          />
    </div>
  );

  const Efficacy = () => (
    <div className='efficacy'>
      <ClinicalEfficacy
            title="Clinical Efficacy"
            id={"eff"}
          />
    </div>
  );

  const Base = () => (
  <div className='baser'>
  <Home
    title="Home"
    dark={index++ % 2 === 0}
    id={"section1"}
    data={Data}
  />
  <Product
    title="Digi-Clamp"
    dark={index++ % 2 === 0}
    id={"section2"}
  />
  <ContactUs
    title="Contact Us"
    dark={index++ % 2 === 0}
    id={"section3"}
  />

  <FaqSection  
    questAns={Data.faq}
  title="FAQ"
  dark={index++ % 2 === 0}
  id={"section4"}
  />
  </div>
  );


  return (
    <Provider store={store}>
    <Router>
    <div className="App">

        <Header/>
        <Navbar />


         
        <LoginSection
        title="Login"
        dark={0}
        id={"section8"}
        />

        <Route exact path="/" component={Base}  />
        <Route exact path="/home" component={Base} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/procedures" component={Procedure}/>
        <Route exact path="/efficacy" component={Efficacy}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
         <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        <Footer />
      </div>
      </Router>
      </Provider>

  );
}

export default App;
