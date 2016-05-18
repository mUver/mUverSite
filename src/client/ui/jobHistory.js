import React from "react";
import store from "store";
import { browserHistory } from 'react-router';
import Nav from "ui/nav";
import { getCompletedJobs } from "api/data";

require('assets/styles/jobHistory.scss');

export default React.createClass({
	getInitialState: function () {
    return {
    	completed_jobs: []
    }
  },

  componentWillMount: function () {
  	getCompletedJobs();
      this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
        	completed_jobs: currentStore.jobsReducer.completed_jobs
        })
      }.bind(this));
    },

    componentWillUnmount: function () {
      this.unsubscribe();
    },

	render: function() {
		return (
			<div>
				<Nav />
				<div className="historyBox">
					<h2> Completed Jobs </h2>
					<div className="historyList">
						{this.state.completed_jobs.map(function(data, i){				
							return (
								<div key={i} className="jobBox">
									<a className="titleBox">{data.title}</a>
									<a className="priceBox">${data.price}</a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
})