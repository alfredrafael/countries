import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { GlobalStyle } from './AppGlobalStyle';
import Exploratory from './components/Exploratory';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FetchingCountries from './components/FetchingCountries';
import Country from './components/Country';


const App = () => {
  return (
    <React.Fragment>
       <Router>
        <Navbar/>      
       

       {/* //////////////////////////////////////////////////////////////////////// */}
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/exploratory" component={Exploratory}/>
           <Route path="/countries" component={FetchingCountries}/>
           <Route path="/:countryName" children={<Country />} />

         </Switch>
       {/* //////////////////////////////////////////////////////////////////////// */}
        

         <Footer/>
       </Router>
  
    
    </React.Fragment>
  );
}

export default App;
