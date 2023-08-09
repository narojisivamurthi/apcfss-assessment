import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import { MainBody } from './Components/style';
import PrimaryNavigation from './Components/PrimaryNavigation/PrimaryNavigation';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainBody>
            <PrimaryNavigation/>
            <AboutUs/>
        </MainBody>
    </div>
  );
}

export default App;
