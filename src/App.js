import React, { Component } from 'react';
import Header from './home/header/Header';
import Section from './home/body/Section';
import Footer from './home/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-background">
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
