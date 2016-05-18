import React from "react";
import Nav from "ui/nav";
import store from "store";
import { Link, browserHistory } from 'react-router';
import JobFormTabs from "ui/jobFormTabs";
import JobFormUser from "ui/jobformUser";
import JobFormJob from "ui/jobFormJob";
import JobFormStripe from "ui/jobFormStripe";
import { addNewJob, addCustomer } from "api/data";
Stripe.setPublishableKey('pk_test_3RsaJVqvBeCubIJT7jd6Egny');

require('assets/styles/newJob.scss');

export default React.createClass({
	getInitialState: function () {
    return {
    	tab1: true,
    	tab2: false,
    	tab3: false,
    	title: "",
  		pickup_for: "",
  		description: "",
  		price: "",
  		image_url: "",
  		destination_a: "",
  		destination_b: "",
  		phone_number: "",
  		number: "",
  		exp_month: "",
  		exp_year: "",
  		cvc: ""
    }
  },

  componentWillMount: function () {
      this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
        	tab1: currentStore.showReducer.tab1,
        	tab2: currentStore.showReducer.tab2,
        	tab3: currentStore.showReducer.tab3,
        	title: currentStore.newJobReducer.title,
  			pickup_for: currentStore.newJobReducer.pickup_for,
  			description: currentStore.newJobReducer.description,
  			price: currentStore.newJobReducer.price,
  			image_url: currentStore.newJobReducer.image_url,
  			destination_a: currentStore.newJobReducer.destination_a,
 			destination_b: currentStore.newJobReducer.destination_b,
  			phone_number: currentStore.newJobReducer.phone_number,
  			number: currentStore.newJobReducer.number,
  			exp_month: currentStore.newJobReducer.exp_month,
  			exp_year: currentStore.newJobReducer.exp_year,
  			cvc: currentStore.newJobReducer.cvc
        })
      }.bind(this));
    },

    componentWillUnmount: function () {
      this.unsubscribe();
    },

    handleSubmit:function(e) {
		e.preventDefault();	
		Stripe.card.createToken({
		  number: this.state.number,
		  exp_month: this.state.exp_month,
		  exp_year: this.state.exp_year,
		  cvc: this.state.cvc
		}, function(status, response) {
			if (status === 200) {
				addCustomer(response.id);
				addNewJob({
					title: this.state.title,
					pickup_for: this.state.pickup_for,
					description: this.state.description,
	    			price: this.state.price,
	    			image_url: this.state.image_url,
	    			destination_a: this.state.destination_a,
	    			destination_b: this.state.destination_b,
	    			phone_number: this.state.phone_number
				}).then(function(){
          browserHistory.push("/home")         
        })
			}
		}.bind(this));
	},

	render:function() {
		return (
			<div>
				<Nav />
				<div id="newjob">
        <JobFormTabs />
					<h2 className="jobHead" > Create A New Job </h2>
					<form className="jobForm" onSubmit={this.handleSubmit}>			          
			        	{this.state.tab1 ? <JobFormUser /> : ""}			   
			        	{this.state.tab2 ? <JobFormJob /> : ""}
			        	{this.state.tab3 ? <JobFormStripe /> : ""}			        
			        </form>
				</div>
			</div>	
		)
	}
})