import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Converter from './components/Converter/Converter.js';
import Footer from './components/Footer/Footer.js';

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Navigation />
        <Converter />
        <Footer />
      </div>
    );
  }
}

export default App;
