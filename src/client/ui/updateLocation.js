import React from "react";
import store from "store";

export default React.createClass({
	getInitialState() {
	    return {
	    	address_line_one: "",
	    	address_line_two: "",
	    	address_city:"",
	    	address_state:"",
	    	postal_code:""
	    }
	},

	handleChange: function() {
		this.setState({
			address_line_one: this.refs.address_line_one.value,
	    	address_line_two: this.refs.address_line_two.value,
	    	address_city: this.refs.address_city.value,
	    	address_state: this.refs.address_state.value,
	    	postal_code: this.refs.postal_code.value
		})
	},

	continue2: function(e) {
    	e.preventDefault();
    	store.dispatch({
    		type:"SHOW_TAB",
    		tab1: false,
    		tab2: false,
    		tab3: true
    	})
    	store.dispatch({
			type:"CLASS_TAB",
			class1: "tab",
			class2: "tab",
			class3: "active"
		})
		store.dispatch({
			type:"MOVER_LOCATION",
			address_line_one: this.state.address_line_one,
		  	address_line_two: this.state.address_line_two,
		  	address_city: this.state.address_city,
          	address_state: this.state.address_state,
          	postal_code: this.state.postal_code
		})
    },

	render:function() {
		return (
			<div>
				<h2 className="updateHead"> Bank Info </h2>
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
			    <button className="continue2" onClick={this.continue2}> Continue </button>
			</div>
		)
	}
})