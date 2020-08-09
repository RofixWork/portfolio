import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    < >
      <Navigation LogoTitle='React Project'/>
      <Header title='stylish portfolio' button='find out more'/>
      <Offer/>
    </>
  );
}

export default App;
