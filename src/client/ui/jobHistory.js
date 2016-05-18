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
						<div className="completedHeading">
							<span className="CtitleHead"> Title </span>
							<span className="CmoverHead"> Mover Name </span>
							<span className="CuserHead"> Customer Name </span>
							<span className="CpriceHead"> Price </span>
							<span className="CtimeHead"> Completed On </span>
						</div>
						{this.state.completed_jobs.map(function(data, i){			
							return (
								<div key={i} className="jobBox">
									<a className="CtitleBox">{data.title}</a>
									<a className="Cmover">{data.mover_profile.display_name}</a>
									<a className="Cuser">{data.pickup_for}</a>
									<a className="CpriceBox">${data.price}</a>
									<a className="timeBox"> {data.modified_at} </a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
})