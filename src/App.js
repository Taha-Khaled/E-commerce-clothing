import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componant';
import Header from './components/header/header.component';
import signinandsignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';

const Hatpage = (props) =>(
<div>
  <h1>Hats Page</h1>
  <button onClick = {()=> props.history.push('/')}>back</button>
</div>
);

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user}); 

      console.log(user);
    });
  }
  
  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop/hats' component={Hatpage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={signinandsignup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
