import React from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Converter from './Converter.js';
import Footer from './Footer.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
