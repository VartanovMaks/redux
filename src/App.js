import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import {Header,Products, ProductDetails} from './Component'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <Redirect to="/products"/>
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id'>
            <ProductDetails />
          </Route>
          <Route path='/cart'>
            <div>cart</div>
          </Route>
          <Route path='/wishlist'>
            <div>wishlist</div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
