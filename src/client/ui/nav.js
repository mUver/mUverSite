import React from "react";
import store from "store";
import { getUser, getCompletedJobs, logout } from "api/data";
import { Link, browserHistory } from 'react-router';

require('assets/styles/nav.scss');
var img = require("assets/images/logo.png");

export default React.createClass({
	getInitialState: function () {
    return {
      completed_jobs: [],
      profile: {
      	user: {
      		username:""
      	}
      }
    }
  },

  componentWillMount: function () {
    getUser();
    getCompletedJobs();
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        profile: currentStore.userReducer.profile,
        user: currentStore.userReducer.profile.user,
        username: currentStore.userReducer.profile.user.username,
        completed_jobs: currentStore.jobsReducer.completed_jobs
      })
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

  onClick:function () {
    browserHistory.push("/home")
  },

  logoutClick:function() {
    store.dispatch({
      type: "LOGOUT",
      username: ""
    })
    logout();
  },

	render:function() {
		return (
			<div className="nav">
				<li className="title"><img onClick={this.onClick} className="logo" src={img}/></li>
				<li className="profile">
					<a className="userTag">{this.state.profile.user.username}</a><br/>
          <ul className="settingsUL">
            Settings
            <ul className="dropdown">
  				    <li><Link to="/profile" className="profileTag"> Profile </Link></li>
              <li><Link to="/history" className="historyTag"> Job History </Link></li>
  					  <li><Link to="/" onClick={this.logoutClick} className="logoutTag"> Logout </Link></li>
            </ul>
          </ul>
				</li>
			</div>
		)
	}
})