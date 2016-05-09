import React from "react";
import Nav from "ui/nav";
import store from "store";
import { Link, browserHistory } from 'react-router';
import { getMoverId, confirmJob } from "api/data";

require('assets/styles/jobView.scss');

export default React.createClass({
	getInitialState: function () {
	    return {
	      job: {} ,
	      mover_profile: ""
	    }
	  },

	componentWillMount: function () {
		getMoverId();
	    this.unsubscribe = store.subscribe(function(){
	      let currentStore = store.getState();
	      this.setState({
	        job: currentStore.jobsReducer.job,
	        mover_profile: currentStore.userReducer.mover_profile
	      })
	    }.bind(this));
	  },

	  componentWillUnmount: function () {
	  	this.unsubscribe();
	  },

	  handleClick: function () {
	    browserHistory.push("/home")
	  },

	  confirmClick: function () {
	    confirmJob(this.state.job.id, this.state.mover_profile);
	  	browserHistory.push("/home")
	  },

	render:function() {
		return(
			<div>
				<Nav />
				<div className="singleJob">
					<div className="singleHead">
						<h1> {this.state.job.title} </h1>
					</div>
					<div className="singleBody">
						<img className="jobImage" src= {this.state.job.image_url} />
						<li> Description: </li>
						<li>{this.state.job.description}</li>
						<br />
						<li> Price: </li>
						<li>${this.state.job.price}</li>
						<br />
						<li> Distance: </li>
						<li> {this.state.job.distance} miles </li>
						<br />
						<button onClick={this.handleClick} className="cancelButton"> Cancel </button>
						<button onClick={this.confirmClick} className="confirmJob"> Confirm Job </button>
					</div>
				</div>
			</div>
		)
	}
})