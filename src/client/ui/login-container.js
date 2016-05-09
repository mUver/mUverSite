import React from 'react';
import { Link, browserHistory } from 'react-router';
import { login } from "api/data";
import Login from "ui/login";

require('assets/styles/login.scss');

export default React.createClass({
  getInitialState() {
    return {
      username: "" ,
      password: "" 
    }
  },

    handleChange: function(e) {
      var val = e.target.value;
      if (e.target.id === "username") {
        this.setState({
          username: val,
          password: this.state.password
        })
      } else {
        this.setState({
          username: this.state.username,
          password: val
        })
      }
    },

    handleSubmit: function(e){
        e.preventDefault();
        login(this.state.username, this.state.password).then(function(resp){
          browserHistory.push("/home")
        })
        .catch(function(err){
          console.log(err);
        });
    },

    onClick: function(e){
      e.preventDefault();
      browserHistory.push("/register")
    },

    render: function() {
      return (
        <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} onClick={this.onClick}/>
      )
    }
  });