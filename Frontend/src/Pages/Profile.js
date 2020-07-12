 /*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.css';
import profile from '../photos/profileIcon.png';

import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom';

class Men extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    mobile: '',
  };
  render() {    
    
    var user = JSON.parse(localStorage.getItem('user'));
  if(user ==null || undefined) {
    return <Redirect to ="/login"/>
  }

    const {name,username, email, mobile} = user;
    console.log(name);
    return (
      <div>
        <center>

          <div>
            <h2 className='welcome mt-4'>
              Welcome to Your Profile
            </h2>
          </div>
          <div class="card mb-3 yoo mt-5" style={{maxWidth: "50%"}}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={profile} style={{padding: "10%"}} class="card-img" alt="..." />
              </div>
              <div class="col-md-8  boo">
                <div class="card-body">
                  <h1>Username : divya</h1>
                  <p class="title">Name : divya</p>
                  <p>Email : divya@gmail.com</p> 
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='orderrr'>
          <div class="card border-dark mb-3" style={{maxWidth: "18rem" , marginRight: 
          "5%"}}>
            <div class="card-header">Following <span>count</span></div>
            <div class="card-body text-primary">
              <p class="card-text">item names and quatity</p>
            </div>
          </div>
          <div class="card border-dark mb-3" style={{maxWidth: "18rem" , marginRight: 
          "5%"}}>
            <div class="card-header">Followers <span>count</span></div>
            <div class="card-body text-primary">
              <p class="card-text">item names and quatity</p>
            </div>
          </div>
          </div>
          
          <br />
          <br />          
        </center>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state.user);
  return { user: state.user };
};

export default connect(mapStatetoProps)(Men);
