import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import React from 'react';
import { Navbar } from './UIComponents/Navbar';
import { Footer } from './UIComponents/Footer'
import { About } from './About';
import { Projects } from './Projects';
import { MyContext } from "./Context";
import { Blog } from './BlogComponents/Blog';

const home = ['Home', 'About', 'Projects', 'Blog'];


const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar arr={home} />
        <Switch>
          <Route path='/Home' exact={true} component={Home} />
          <Route path='/About' exact={true} component={About} />
          <Route path='/Projects' exact={true} component={Projects} />
          <Route path='/Blog' exact={true} component={Blog} />
          <Route path='/Projects/:project' exact={true} component={Projects} />
          <Route path='/Projects/' component={Projects} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


