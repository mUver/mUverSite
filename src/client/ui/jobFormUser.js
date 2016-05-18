import React from "react";
import store from "store";

export default React.createClass({
	getInitialState() {
	    return {
	    	pickup_for: "",
	    	destination_a: "",
	    	phone_number: ""
	    }
	},

	handleChange: function() {
		this.setState({
			pickup_for: this.refs.pickup_for.value,
	    	destination_a: this.refs.destination_a.value,
	    	phone_number: this.refs.phone_number.value
		})
	},

	autofill: function(e) {
		e.preventDefault();
		this.setState({
			pickup_for: "Jim",
	    	destination_a: "3111 S Valley View Blvd #106, Las Vegas, NV 89102",
	    	phone_number: "7025551212"
		})
	},

	continue1: function(e) {
    	e.preventDefault();
    	store.dispatch({
    		type:"SHOW_TAB",
    		tab1: false,
    		tab2: true,
    		tab3: false
    	})
    	store.dispatch({
			type:"CLASS_TAB",
			class1: "tab",
			class2: "active",
			class3: "tab"
		})
		store.dispatch({
			type:"USER_FORM",
			pickup_for: this.state.pickup_for,
		  	destination_a: this.state.destination_a,
		  	phone_number: this.state.phone_number
		})
    },

	render:function() {
		return (
			<div>
				<label htmlFor="pickup_for" id="pickupLabel"> Name </label><br/>
			    <input type="text" ref="pickup_for" onChange={this.handleChange} id="pickup_for" className="pickupTitle" placeholder="Your Name" value={this.state.pickup_for} /> <br/>
			    <label htmlFor="phone" id="phoneLabel"> Phone Number </label><br/>
			    <input type="text" ref="phone_number" onChange={this.handleChange} id="phone" className="phone" placeholder="Phone" value={this.state.phone_number} /> <br/>
			    <label htmlFor="destination_a" id="locationLabel"> Location </label><br/>
			    <input type="text" ref="destination_a" onChange={this.handleChange} id="destination_a" className="location" placeholder="Location" value={this.state.destination_a} /> <br/>
			    <button className="auto1" onClick={this.autofill}> Demo </button>
			    <button className="continue1" onClick={this.continue1}> Continue </button>
			</div>
		)
	}
})