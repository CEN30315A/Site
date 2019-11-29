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
//import Footer from './components/Footer';


function App() {
  let index = 0
  return (
    <Provider store={store}>
    <Router>
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
        <ProductImages 
          title="Procedures"
          //dark={index++ % 2 === 0}
          //id={"section" + index}
        />
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
        
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
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
