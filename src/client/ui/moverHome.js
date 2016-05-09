import React from "react";
import Nav from "ui/nav";
import { getJobs } from "api/data";
import store from "store";
import { Link, browserHistory } from 'react-router';

require('assets/styles/moverHome.scss');

export default React.createClass({
	getInitialState: function () {
    return {
      jobs: []
    }
  },

  componentWillMount: function () {
  	getJobs();
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        jobs: currentStore.jobsReducer.jobs
      })
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

  handleClick: function (data, e) {
  	store.dispatch({
  		type:"GET_JOB",
  		job:data
  	})
  	// e.preventDefault();
    browserHistory.push("/jobView")
  },

	render:function () {
		return (
			<div>
				<Nav />
				<div id="moverMain">
					<h2> Jobs In Your Area </h2>
					<div className="jobList">
						{this.state.jobs.map(function(data){				
							return (
								<div className="jobBox">
									<a className="titleBox">{data.title}</a>
									<a className="priceBox">${data.price}</a>
									<a className="distanceBox">24 miles</a>
									<button onClick={this.handleClick.bind(this, data)} className="jobView" > View Job </button>
								</div>
							)
						}.bind(this))}
					</div>
				</div>
			</div>
		)
	}
})