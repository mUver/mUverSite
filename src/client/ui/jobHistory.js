import React from "react";
import store from "store";
import { browserHistory } from 'react-router';
import Nav from "ui/nav";
import { getCompletedJobs } from "api/data";
import moment from 'moment';

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
							<div className="CtitleHead"> Title </div>
							<div className="CmoverHead"> Mover Name </div>
							<div className="CuserHead"> Customer Name </div>
							<div className="CpriceHead"> Price </div>
							<div className="CtimeHead"> Completed On </div>
						</div>
						{this.state.completed_jobs.map(function(data, i){			
							return (
								<div key={i} className="jobBox">
									<a className="CtitleBox">{data.title}</a>
									<a className="Cmover">{data.mover_profile.display_name}</a>
									<a className="Cuser">{data.pickup_for}</a>
									<a className="CpriceBox">${data.price}</a>
									<a className="timeBox"> {moment(data.modified_at).format('MM/DD/YY')} </a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
})