import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router,Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<App />}/>
       <Route exact path="/productdetails" element={<ProductDetails/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
       <Route exact path="/productdescription" element={<ProductDescription/>}/>
     </Routes>
     <Footer/>
   </Router>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
