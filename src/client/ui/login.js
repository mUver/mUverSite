import React from 'react';
import { login, reset } from "api/data";
import { browserHistory } from 'react-router';

var stripeimg = require("assets/images/outline.png");

export default React.createClass({

  Udemo: function() {
    reset(14, function(){
      login("test_customer", "pass_word").then(function(resp){
        browserHistory.push("/home")
      })  
    });
    
  },

  Mdemo: function() {
    reset(10, function(){
      login("mover_test", "pass_word").then(function(resp){
        browserHistory.push("/home")
      })  
    });
  },

  render: function () {
    return (
      <div className="loginBody">
      <div className="login">
        <div className="muverStripe"><h2 className="loginHead"> mUver</h2> <img className="stripeImg" src={stripeimg}/></div>
        <form className="loginForm" onSubmit={this.props.handleSubmit}>
          <span className="entypo-user"> </span><input type="username" onChange={this.props.handleChange} id="username" className="username" placeholder="Username" /> <br/>
          <span className="entypo-lock"> </span><input type="password" onChange={this.props.handleChange} id="password" className="password" placeholder="Password" /><br/>
          <button className="loginButton">Sign In</button>
        </form>
        <h3 className="accountHead" > Don't have an account? </h3>
          <button className="registerButton" onClick={this.props.onClick}>Register</button>
          <button className="UserTest" onClick={this.Udemo} > Demo Customer </button>
          <button className="MoverTest" onClick={this.Mdemo} > Demo Mover </button>
      </div>
      </div>
    )
  }
});
