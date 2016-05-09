import React from "react";
import store from "store";
import { getUser } from "api/data";
import { Link, browserHistory } from 'react-router';

require('assets/styles/nav.scss');
var img = require("assets/images/logo.png");

export default React.createClass({
	getInitialState: function () {
    return {
      profile: {
      	user: {
      		username:""
      	}
      }
    }
  },

  componentWillMount: function () {
    getUser();
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        profile: currentStore.userReducer.profile,
        user: currentStore.userReducer.profile.user,
        username: currentStore.userReducer.profile.user.username
      })
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

	render:function() {
		return (
			<div className="nav">
				<li className="title"><img className="logo" src={img}/></li>
				<li className="profile">
					<a className="userTag">{this.state.profile.user.username}</a><br/>
					<Link to="/settings" className="settingsTag"> Settings </Link>
					<Link to="/" className="logoutTag"> Logout </Link>
				</li>
			</div>
		)
	}
})