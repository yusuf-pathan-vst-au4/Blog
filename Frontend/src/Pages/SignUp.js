/*eslint-disable*/

import React from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    messageFromServer: '',
    showError: false,
    registerError: false,
    loginError: false,
  };

  HandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  HandleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, email, password } = this.state;
    console.log(this.state, 'state');
    try {
      const response = await axios.post('http://localhost:5000/user/signup', {
        name,
        username,
        mobile,
        password,
      });
      console.log(response.data.message);
      if (response.data.message == 'user created') {
        this.setState({
          messageFromServer: response.data.message,
          showError: false,
          loginError: false,
          registerError: false,
        });
      }

      if (response.data.message === 'username already taken') {
        this.setState({
          showError: true,
          loginError: true,
          registerError: false,
        });
      }
    } catch (error) {
      // console.error(error.response.data);
    }
  };
  render() {
    const {
      name,
      username,
      email,
      password,
      messageFromServer,
      showError,
      loginError,
      registerError,
    } = this.state;

    if (messageFromServer === '') {
      return (
        <div>
          <div className='container mt-5 mb-5 col-md-4 offset-md-3'>
            <div className='card ml-5' style={{ width: '34rem' }}>
              <div className='card-body'>
                <h4 className='display-4 ml-3'>Signup with Blog</h4>
                <br />
                <form onSubmit={this.HandleSubmit}>
                  <div className='form-group col-md-8 offset-md-2 mt-3'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                      id='name'
                      name='name'
                      required
                      onChange={this.HandleChange}
                    />
                  </div>
                  <div className='form-group col-md-8 offset-md-2 mt-4'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Username'
                      id='username'
                      name='username'
                      required
                      onChange={this.HandleChange}
                    />
                  </div>
                  <div className='form-group mt-4 col-md-8 offset-md-2'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Your Email Address'
                      id='useremail'
                      name='email'
                      required
                      onChange={this.HandleChange}
                    />
                  </div>
                  <div className='form-group col-md-8 offset-md-2 mt-4'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Choose Password'
                      id='password'
                      name='password'
                      required
                      onChange={this.HandleChange}
                    />
                  </div>

                  <div>
                    <button
                      className='btn col-md-8 offset-md-2 mt-4'
                      id='signup'>
                      REGISTER
                    </button>
                  </div>
                </form>
                <div className='auto mt-3 offset-md-3'>
                  <h6 className=''>
                    Already have an account?{' '}
                    <Link
                      to='/login'
                      className='ml-1'
                      style={{ color: '#05ff69' }}>
                      Login
                    </Link>
                  </h6>
                </div>
                {showError === true && loginError === true && (
                  <div style ={{color: "yellow"}}>
                    <p>
                      That username is already registered with us. Please login
                      to move further
                    </p>
                    <Link to='/login'>Login</Link>
                    <p>
                      if you are a new user, please register with a different
                      username
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (messageFromServer === 'user created') {
      return (
        <div>
          <h3>User successfully registered!</h3>
          <p>Please login to move further</p>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }
}

export default SignUp;
