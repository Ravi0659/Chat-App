import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import {toast , ToastContainer} from 'react-toastify';

class App extends Component{
  showToast = (type, message) => {
    switch(type){
      case 0:
      toast.warning(message)
      break;
      case 1:
        toast.success(message)
        
        default:
          break;
    }
  }

  // constructor(){
  //   super();
  //   // this.state = {
  //   //   authenticated: false,
  //   //   loading: true
  //   // };

  //  componentDidMount(){
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user){
  //       this.setState({
  //         authenticated : true,
  //         loading: false
  //       });

  //     }else{
  //       this.setState({
  //         authenticated: false,
  //         loading: false
  //       });
  //     }
  //   })
  //   }
    
      // return this.state.loading === true ?(
      //   <div className="spinner-border text-success " role= 'status'>
      //     <span className="sr-only">Loading.......</span>
      //   </div>
      // ): 
      render(){
     return (
        <Router>
          <ToastContainer 
          autoClose={2000}
          hideProgressBar={toast.POSITION.BOTTOM_CENTER}
          />
          <Switch>
            <Route
            exact
            path = "/"
            render={pros => <Home {...pros}/>}> 
            </Route>
            
            <Route
            path= "/login"
            render = {props => <Login showToast={this.showToast}{...props}/>}>
              </Route>

           <Route
            path= "/profile"
            render = {props => <Profile showToast={this.showToast}{...props}/>}>
              </Route>

           <Route
            path= "/signup"
            render = {props => <Signup showToast={this.showToast}{...props}/>}>
              </Route>

           <Route
            path= "/chat"
            render = {props => <Chat showToast={this.showToast}{...props}/>}>
              </Route>

          </Switch>
        </Router>
      )
    }
  }

export default App