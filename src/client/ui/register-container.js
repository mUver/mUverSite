import React from 'react';
import { Link, browserHistory } from 'react-router';
import Register from "ui/register";
import { addNewUser } from "api/data";

require('assets/styles/register.scss');

export default React.createClass({
  getInitialState() {
    return {
      username: "" ,
      password: "",
      confirm: "",
      mover: false
    }
  },

    handleChange: function(e) {
      var val = e.target.value;
      if (e.target.id === "username") {
        this.setState({
          username: val,
          password: this.state.password,
          confirm: this.state.confirm
        })
      } else if (e.target.id === "password") {
        this.setState({
          username: this.state.username,
          password: val,
          confirm: this.state.confirm
        })
      } else {
      	this.setState({
	      	username: this.state.username,
	      	password: this.state.password,
	      	confirm: val
	    })
      }
    },

    handleSubmit: function(e){
   		e.preventDefault();
        if (this.state.password === this.state.confirm) {
          addNewUser(this.state.username, this.state.password).then(function(resp){
            browserHistory.push("/")
          })
          .catch(function(err){
            console.log(err);
          });
        }
    },

    render: function() {
      return (
        <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      )
    }
  });