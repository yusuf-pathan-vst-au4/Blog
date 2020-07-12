/*eslint-disable*/

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import CreateBlog from './Pages/CreateBlog';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Logout';
import axios, { post } from 'axios';
import profile from './photos/profileIcon.png'
import blogImp from './photos/blog.png'

// import {StatusBar, Platform, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <a className='navbar-brand' href='/'>
            
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
              <img src={blogImp} alt='logo' style={{ width: '27px' }} />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            
            <li className="nav-item dropdown" >
              <a className="nav-link dropbtn" href="#">
                <img style={{width:"20px"}} className='profile' src={profile} alt="Profile" />
              </a>
              <span className="dropdown-content">
                <a href="/signup">SignUp</a>
                <a href="/login">Login</a>
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
              </span>
            </li>
      <input type="search" placeholder="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </ul>
        </nav>
        <br />
        <br />
        <br />
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/logout' component={Logout}></Route>
            <Route exact path='/create' component={CreateBlog}></Route>
            <Route exact path='/' component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
