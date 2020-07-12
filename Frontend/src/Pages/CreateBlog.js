/*eslint-disable*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom';


import '../App.css';

  class CreateBlog extends React.Component {
    render() {
        var user = JSON.parse(localStorage.getItem('user'));
    if (user == null || undefined ) {
      alert("Please login first")
      return <Redirect to ="/login"/>
    }
      return (

        <div className="mb-5">
           <center>

            <div>
               <h2 className='welcome mt-4'>Welcome</h2>
            </div>
            
            <div className="container  mt-4">
                <h4>Write Your Own CreateBlog</h4>
                <br/>
            <textarea id="content" name="content" rows="3" cols="50"></textarea>
            <br/>
            <br/>
            <button className="btn btn-primary mr-3">Post</button> <a href="/"><button className="btn btn-danger">Cancel</button></a>
            </div>

          </center>
        </div>

      );
    }
  }

  export default CreateBlog;