import React from "react";
import store from "store";

export default React.createClass({
	getInitialState() {
	    return {
	    	display_name: "",
	    	phone_number: ""
	    }
	},

	handleChange: function() {
		this.setState({
			display_name: this.refs.display_name.value,
	    	phone_number: this.refs.phone_number.value
		})
	},

	continue1: function(e) {
    	e.preventDefault();
    	store.dispatch({
    		type:"SHOW_TAB2",
    		tab1: false,
    		tab2: true,
    		tab3: false
    	})
    	store.dispatch({
			type:"CLASS_TAB2",
			class1: "tab",
			class2: "active",
			class3: "tab"
		})
		store.dispatch({
			type:"MOVER_USER",
			display_name: this.state.display_name,
		  	phone_number: this.state.phone_number
		})
    },

	render:function() {
		return (
			<div>
				<h2 className="updateHead"> Profile Info </h2>
				<label htmlFor="display_name" id="displayLabel"> Name </label><br/>
			    <input type="text" ref="display_name" onChange={this.handleChange} id="display_name" className="displayName" placeholder="Your Name" value={this.state.display_name} /> <br/>
			    <label htmlFor="phone" id="phoneLabel"> Phone Number </label><br/>
			    <input type="text" ref="phone_number" onChange={this.handleChange} id="phone" className="phone" placeholder="Phone" value={this.state.phone_number} /> <br/>
			    <button className="continue1" onClick={this.continue1}> Continue </button>
			</div>
		)
	}
})