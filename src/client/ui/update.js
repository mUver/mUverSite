import React from "react";
import Nav from "ui/nav";
import { becomeMover } from "api/data";
import { Link, browserHistory } from 'react-router';

require('assets/styles/update.scss');

export default React.createClass({
	getInitialState() {
	    return {
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

	handleChange: function() {
		this.setState({
			first_name: this.refs.first_name.value,
	    	last_name: this.refs.last_name.value,
	    	dob_day: this.refs.dob_day.value,
	    	dob_month: this.refs.dob_month.value,
	    	dob_year: this.refs.dob_year.value,
	    	address_line_one: this.refs.address_line_one.value,
	    	address_line_two: this.refs.address_line_two.value,
	    	address_city: this.refs.address_city.value,
	    	address_state: this.refs.address_state.value,
	    	postal_code: this.refs.postal_code.value,
	    	ssn_last_four: this.refs.ssn_last_four.value,
	    	account_number: this.refs.account_number.value,
	    	routing_number: this.refs.routing_number.value
		})
	},

	handleSubmit:function(e) {
		e.preventDefault();
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
				<form className="updateForm" onSubmit={this.handleSubmit}>
					<h2 className="updateHead"> Update Your Info </h2>
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
	          		<label htmlFor="address_line_one" id="address1Label"> Address 1 </label><br/>
	          		<input type="text" ref="address_line_one" onChange={this.handleChange} id="address_line_one" className="address_line_1" placeholder="Address 1" value={this.state.address_line_one} /> <br/>
	          		<label htmlFor="address_line_two" id="address2Label"> Address 2 (optional) </label><br/>
	          		<input type="text" ref="address_line_two" onChange={this.handleChange} id="address_line_two" className="address_line_2" placeholder="Address 2" value={this.state.address_line_two}/> <br/>
	          		<label htmlFor="address_city" id="cityLabel"> City </label><br/>
	          		<input type="text" ref="address_city" onChange={this.handleChange} id="address_city" className="address_city" placeholder="City" value={this.state.address_city} /> <br/>
	          		<label htmlFor="address_state" id="stateLabel"> State </label><br/>
	          		<select id="address_state" ref="address_state" >
	          			<option >Select a State</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select><br />
					<label htmlFor="postal_code" id="zipLabel"> Zipcode </label><br/>
	          		<input type="text" ref="postal_code" onChange={this.handleChange} id="postal_code" className="postal_code" placeholder="Zipcode" value={this.state.postal_code} /> <br/>
	          		<label htmlFor="ssn_last_four" id="ssnLabel"> Last 4 digits of Social Security </label><br/>
	          		<input type="text" ref="ssn_last_four" onChange={this.handleChange} id="ssn_last_four" className="ssn_last_four" placeholder="Social" value={this.state.ssn_last_four} /> <br/>
	          		<label htmlFor="account_number" id="accountLabel"> Account Number </label><br/>
	          		<input type="text" ref="account_number" onChange={this.handleChange} id="account_number" className="account_number" placeholder="Account Number" value={this.state.account_number} /> <br/>
	          		<label htmlFor="routing_number" id="routeLabel"> Routing Number </label><br/>
	          		<input type="text" ref="routing_number" onChange={this.handleChange} id="routing_number" className="routing_number" placeholder="Routing Number" value={this.state.routing_number} /> <br/>
	          		<button className="updateButton"> Submit </button>
				</form>
			</div>
		)
	}
})