import { BrowserRouter, Route } from 'react-router-dom';
/* import { useState } from 'react' */
import './App.css';

// Components
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Monarker from './components/Monarker'
import Monark from './components/Monark'
import MonarkerSoegning from './components/MonarkerSoegning'
import MonarkOpret from './components/MonarkOpret'
import MonarkAdmin from './components/MonarkAdmin'
import MonarkRet from './components/MonarkRet'
import Vejret from './components/Vejret'
import Nyheder from './components/Nyheder'




// Pages 
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

 {console.log("Så langt, så godt")}

      <BrowserRouter>
      
      <Header />
      <Navbar />
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Monarker">
        <Monarker />
      </Route>
      
      <Route exact path="/Monark">
        <Monark />
      </Route>
      
      <Route exact path="/MonarkerSoegning">
        <MonarkerSoegning />
      </Route>
      
      <Route exact path="/MonarkOpret">
        <MonarkOpret />
      </Route>

      <Route exact path="/MonarkAdmin">
        <MonarkAdmin />
      </Route>

      <Route exact path="/Vejret">
        <Vejret />
      </Route>

      <Route exact path="/Nyheder">
        <Nyheder />
      </Route>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
