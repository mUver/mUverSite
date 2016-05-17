import React from "react";
import store from "store";
import { Link, browserHistory } from 'react-router';

require('assets/styles/cardInfo.scss');

export default React.createClass({
	getInitialState() {
	    return {
	    	first_name: "",
	    	last_name: "",
	    	dob_day:"",
	    	dob_month:"",
	    	dob_year: "",
	    	ssn_last_four: "",
	    	account_number:"",
	    	routing_number:""
	    }
	},

	handleChange: function() {
		this.setState({
			first_name: this.refs.first_name.value,
	    	last_name: this.refs.last_name.value,
	    	dob_day: this.refs.dob_day.value,
	    	dob_month: this.refs.dob_month.value,
	    	dob_year: this.refs.dob_year.value,
	    	ssn_last_four: this.refs.ssn_last_four.value,
	    	account_number: this.refs.account_number.value,
	    	routing_number: this.refs.routing_number.value
		}) 
	},
	handleClick: function(){
		store.dispatch({
			type: 'MOVER_BANK',
			first_name: this.state.first_name,
	    	last_name: this.state.last_name,
	    	dob_day: this.state.dob_day,
	    	dob_month: this.state.dob_month,
	    	dob_year: this.state.dob_year,
	    	ssn_last_four: this.state.ssn_last_four,
	    	account_number: this.state.account_number,
	    	routing_number: this.state.routing_number

		})
	},

	render:function() {
		return (
			<div>
				<h2 className="updateHead"> Bank Info </h2>
				<label htmlFor="first_name" id="fnameLabel"> First Name </label><br/>
	          		<input type="text" ref="first_name" onChange={this.handleChange} id="first_name" className="fname" placeholder="First Name" value={this.state.first_name} /> <br/>
	          		<label htmlFor="last_name" id="lnameLabel"> Last Name </label><br/>
	          		<input type="text" ref="last_name" onChange={this.handleChange} id="last_name" className="lname" placeholder="Last Name" value={this.state.last_name} /> <br/>
	          		<label htmlFor="dob_day" id="birthLabel"> Date of Birth </label><br/>
	          		<select id="dob_day" ref="dob_day">
			            <option> Day </option>
			            <option value="1"> 1 </option>
			            <option value="2"> 2 </option>
			            <option value="3"> 3 </option>
			            <option value="4"> 4 </option>
			            <option value="5"> 5 </option>
			            <option value="6"> 6 </option>
			            <option value="7"> 7 </option>
			            <option value="8"> 8 </option>
			            <option value="9"> 9 </option>
			            <option value="10"> 10 </option>
			            <option value="11"> 11 </option>
			            <option value="12"> 12 </option>
			            <option value="13"> 13 </option>
			            <option value="14"> 14 </option>
			            <option value="15"> 15 </option>
			            <option value="16"> 16 </option>
			            <option value="17"> 17 </option>
			            <option value="18"> 18 </option>
			            <option value="19"> 19 </option>
			            <option value="20"> 20 </option>
			            <option value="21"> 21 </option>
			            <option value="22"> 22 </option>
			            <option value="23"> 23 </option>
			            <option value="24"> 24 </option>
			            <option value="25"> 25 </option>
			            <option value="26"> 26 </option>
			            <option value="27"> 27 </option>
			            <option value="28"> 28 </option>
			            <option value="29"> 29 </option>
			            <option value="30"> 30 </option>
			            <option value="31"> 31 </option>
			        </select>
			        <select id="dob_month" ref="dob_month">
			            <option> Month </option>
			            <option value="1"> Jan </option>
			            <option value="2"> Feb </option>
			            <option value="3"> March </option>
			            <option value="4"> April </option>
			            <option value="5"> May </option>
			            <option value="6"> June </option>
			            <option value="7"> July </option>
			            <option value="8"> Aug </option>
			            <option value="9"> Sept </option>
			            <option value="10"> Oct </option>
			            <option value="11"> Nov </option>
			            <option value="12"> Dec </option>
			        </select>
			        <input type="text" ref="dob_year" onChange={this.handleChange} id="dob_year" className="dob_year" min="1920" max="2050" placeholder="Year" value={this.state.dob_year} /> <br />		
	          		<label htmlFor="ssn_last_four" id="ssnLabel"> Last 4 digits of Social Security </label><br/>
	          		<input type="text" ref="ssn_last_four" onChange={this.handleChange} id="ssn_last_four" className="ssn_last_four" placeholder="Social" value={this.state.ssn_last_four} /> <br/>
	          		<label htmlFor="account_number" id="accountLabel"> Account Number </label><br/>
	          		<input type="text" ref="account_number" onChange={this.handleChange} id="account_number" className="account_number" placeholder="Account Number" value={this.state.account_number} /> <br/>
	          		<label htmlFor="routing_number" id="routeLabel"> Routing Number </label><br/>
	          		<input type="text" ref="routing_number" onChange={this.handleChange} id="routing_number" className="routing_number" placeholder="Routing Number" value={this.state.routing_number} /> <br/>
			    <button className="jobSub" onClick={this.handleClick} >Submit</button>
			</div>
		)
	}
})