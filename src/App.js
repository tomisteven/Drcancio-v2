import React from 'react';
//import './scss/App.scss';
import './app.css';

//Components
import Footer from './components/footer/Footer';
import AboutUs from './components/about/About-Us';
import Header from './components/header/Header'
import Properties from './components/properties/Properties';
import HowItWork from './components/how-it-work/How-it-work';
import Testmonials from './components/testimonials/testimonials';


function App() {
  return (
      <div className="site-container">
        <Header/>
        <AboutUs/>
        <Properties/>
        <HowItWork/>
        <Testmonials/>
        <Footer/>
      </div>

  )
}

export default App;


