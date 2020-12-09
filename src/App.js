import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componant';
import Header from './components/header/header.component';

const Hatpage = (props) =>(
<div>
  <h1>Hats Page</h1>
  <button onClick = {()=> props.history.push('/')}>back</button>
</div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={Hatpage}/>
          <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
