/*eslint-disable*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom';

import '../App.css';
  class Dashboard extends React.Component {

   async loginCheck() {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user == null || undefined ) {
      alert("Please login first")
      return window.location.replace('/login');
    }
   }

    render() {
      return (

        <div className="mb-5">
           <center>

            <div>
               <h2 className='welcome mt-4'>All Blogs</h2>
            </div>
            
            <div className="mt-4 mb-4">
                <a href="/create"><button className="btn btn-success" >CREATE YOUR OWN BLOG</button></a>
            </div>

            <div className="all mt-4">

            <div className="card">
              <div className="card-header">
                 <span id ="floatLeft"><h6>Post_By {/* Username */}</h6> </span> <button className="btn btn-primary" onClick={() => this.loginCheck()} style={{"margin-left": "68%"}}> Follow</button> 
              </div>
              <div className="card-body">
                <p className="card-text"> Content {/* Content */}</p>
              </div>
              <div className="card-header">
                <button  id ="floatLeft" className ="btn btn-success mr-2" type="button">Like  <span>Count {/* Count */}</span> </button>
                <button  id ="floatLeft" className ="btn btn-primary" type="button">Comment</button>
              </div>

              
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma
                    gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons
                    equal.
                </p>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            </div>

            
          

          </center>
        </div>

      );
    }
  }



  export default Dashboard;