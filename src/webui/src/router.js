import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './modules/home';
import Detail from './modules/detail';
import Footer from './components/Footer';

const RouterApp = () => {
  return (
    <Router>
      <div className="page-full-height">
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/(search/:keyword)?" component={ Home } />
            <Route exact path="/detail/@:scope/:package" component={Detail} />
            <Route exact path="/detail/:package" component={Detail} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default RouterApp;
