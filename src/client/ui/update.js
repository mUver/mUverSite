import React from "react";
import Nav from "ui/nav";
import { becomeMover, moverUser, getId } from "api/data";
import { Link, browserHistory } from 'react-router';
import UpdateTabs from "ui/updateTabs";
import UpdateUser from "ui/updateUser";
import UpdateLocation from "ui/updateLocation";
import UpdateBank from "ui/updateBank";
import store from "store";

require('assets/styles/update.scss');

export default React.createClass({
	getInitialState() {
	    return {
	    	tab1: true,
    		tab2: false,
    		tab3: false,
    		user_id: "",
    		display_name: "",
    		phone_number: "",
	    	first_name: "",
	    	last_name: "",
	    	dob_day:"",
	    	dob_month:"",
	    	dob_year:"",
	    	address_line_one:"",
	    	address_line_two:"",
	    	address_city:"",
	    	address_state:"",
	    	postal_code:"",
	    	ssn_last_four:"",
	    	account_number:"",
	    	routing_number:""
	    }
	},

	componentWillMount: function () {
	  getId();
      this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
        	user_id: currentStore.userReducer.user_id,
        	tab1: currentStore.showReducer.tab1,
        	tab2: currentStore.showReducer.tab2,
        	tab3: currentStore.showReducer.tab3,
        	display_name: currentStore.updateReducer.display_name,
    		phone_number: currentStore.updateReducer.phone_number,
	    	first_name: currentStore.updateReducer.first_name,
	    	last_name: currentStore.updateReducer.last_name,
	    	dob_day: currentStore.updateReducer.dob_day,
	    	dob_month: currentStore.updateReducer.dob_month,
	    	dob_year: currentStore.updateReducer.dob_year,
	    	address_line_one: currentStore.updateReducer.address_line_one,
	    	address_line_two: currentStore.updateReducer.address_line_two,
	    	address_city: currentStore.updateReducer.address_city,
	    	address_state: currentStore.updateReducer.address_state,
	    	postal_code: currentStore.updateReducer.postal_code,
	    	ssn_last_four: currentStore.updateReducer.ssn_last_four,
	    	account_number: currentStore.updateReducer.account_number,
	    	routing_number: currentStore.updateReducer.routing_number
        })
      }.bind(this));
    },

    componentWillUnMount:function(){
    	this.unsubscribe();
    },

	handleSubmit:function(e) {
		e.preventDefault();
		moverUser(this.state.user_id, {
			display_name: this.state.display_name,
			phone_number: this.state.phone_number
		})
		becomeMover({
			first_name: this.state.first_name,
			last_name: this.state.last_name,
	    	dob_day: this.state.dob_day,
	    	dob_month: this.state.dob_month,
	    	dob_year: this.state.dob_year,
	    	address_line_one: this.state.address_line_one,
	    	address_line_two:this.state.address_line_two,
	    	address_city: this.state.address_city,
	    	address_state: this.state.address_state,
	    	postal_code: this.state.postal_code,
	    	ssn_last_four: this.state.ssn_last_four,
	    	account_number: this.state.account_number,
	    	routing_number: this.state.routing_number
			}).then(browserHistory.push("/home"))
	},

	render:function() {
		return (
			<div>
				<Nav />
				<UpdateTabs />
				<form className="updateForm" onSubmit={this.handleSubmit}>
						{this.state.tab1 ? <UpdateUser /> : ""}			   
			        	{this.state.tab2 ? <UpdateLocation /> : ""}
			        	{this.state.tab3 ? <UpdateBank /> : ""}
				</form>
			</div>
		)
	}
})