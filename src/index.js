import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import App from './App';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
