import React from "react";
import Nav from "ui/nav";
import store from "store";
import { browserHistory } from 'react-router';
import { getMoverId, confirmJob } from "api/data";

require('assets/styles/jobView.scss');

export default React.createClass({
	getInitialState: function () {
	    return {
	      job: {} ,
	      mover_profile: "",
	      in_progress: false
	    }
	  },

	componentWillMount: function () {
		getMoverId();
	    this.unsubscribe = store.subscribe(function(){
	      let currentStore = store.getState();
	      this.setState({
	        job: currentStore.jobsReducer.job,
	        mover_profile: currentStore.userReducer.mover_profile,
	        in_progress: currentStore.userReducer.in_progress
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
	  	store.dispatch({
	  		type: "PROGRESS",
	  		in_progress: true
	  	})
	  	store.dispatch({
	  		type:"STATUS",
	  		status1: "start",
	  		status2: "active",
	  		status3: "end"
	  	})
	    confirmJob(this.state.job.id, this.state.mover_profile).then(function(){
	    	browserHistory.push("/home")
	    })
	  },

	render:function() {
		if (this.state.job.image_url === "") {
		return(
			<div>
				<Nav />
				<div className="singleJob">
					<div className="singleHead">
						<h1> {this.state.job.title} </h1>
					</div>
					<div className="singleBody">
						<li> Image: </li>
						<li> No image provided. </li>
						<br />
						<li> Description: </li>
						<li>{this.state.job.description}</li>
						<br />
						<li> Price: </li>
						<li>${this.state.job.price}</li>
						<br />
						<li> Distance: </li>
						<li> {this.state.job.trip_distance} miles </li>
						<br />
						<button onClick={this.handleClick} className="cancelButton"> Cancel </button>
						<button onClick={this.confirmClick} className="confirmJob"> Accept Job </button>
					</div>
				</div>
			</div>
		)} else { 
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
						<li> {this.state.job.trip_distance} miles </li>
						<br />
						<button onClick={this.handleClick} className="cancelButton"> Cancel </button>
						<button onClick={this.confirmClick} className="confirmJob"> Accept Job </button>
					</div>
				</div>
			</div>
		)
		}
	}
})