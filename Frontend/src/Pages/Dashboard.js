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

  //  async commentLoginCheck() {
  //   var user = JSON.parse(localStorage.getItem('user'));
  //   if (user == null || undefined ) {
  //     alert("Please login first")
  //     return window.location.replace('/login');
  //   }
  //   else
  //    this.handleCollapse();
  //  }
   
   async handleCollapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var elems = document.getElementsByClassName('content');
        for (var i=0;i<elems.length;i+=1){
          if (elems[i].style.display === "block") {
            elems[i].style.display = "none";
          } else {
            elems[i].style.display = "block";
          }
        }
        
      });
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
                 <span id ="floatLeft"><h6>Post_By {/* Username */}</h6> </span> <button className="btn btn-primary" onClick={() => this.loginCheck()} style={{marginLeft: "68%"}}> Follow</button> 
              </div>
              <div className="card-body">
                <p className="card-text"> Content {/* Content */}</p>
              </div>
              <div className="card-header">
                <button  id ="floatLeft" className ="btn btn-success mr-2" onClick={() => this.loginCheck()} type="button">Like  <span>Count {/* Count */}</span> </button>
                
                <button  id ="floatLeft" className ="collapsible btn btn-primary" onClick={() => this.handleCollapse()} type="button">Comment</button>
                
              </div>
              <div className="content">
                  <p><strong><em>Username </em></strong> Comment </p>
                  <p><textarea name="comment" placeholder="Write your comment" cols="50" rows="1"></textarea></p>
                  <p><button className="btn btn-danger" onClick={() => this.loginCheck()}>Post</button></p>
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