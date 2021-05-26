import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';

// Components
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

// Pages 
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header />
      <Navbar />
      
      <Route exact path="/">
        <Home />
      </Route>

      
      
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
