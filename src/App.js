import React from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Signup from './Signup';
import Gallery from './Gallery';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
        <Router>
            <div>
              < Header />
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/service" component={Service}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/gallery" component={Gallery}/>
              </Switch>
               < Footer/> 
            </div>
        </Router>
      
  );
}

const Home = () => (
  <div className>
      < Slider/>
  </div>
);

export default App;
