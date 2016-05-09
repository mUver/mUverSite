import React from "react";
import Nav from "ui/nav";
import store from "store";
import { Link, browserHistory } from 'react-router';
import { addCustomer } from "api/data";
Stripe.setPublishableKey('pk_test_3RsaJVqvBeCubIJT7jd6Egny');

require('assets/styles/cardInfo.scss');

export default React.createClass({
	getInitialState() {
	    return {
	    	number: "",
	    	exp_month: "",
	    	exp_year:"",
	    	cvc:""
	    }
	},

	handleChange: function() {
		this.setState({
			number: this.refs.number.value,
	    	exp_month: this.refs.exp_month.value,
	    	exp_year: this.refs.exp_year.value,
	    	cvc: this.refs.cvc.value
		})
	},

	handleSubmit:function(e) {
		e.preventDefault();
		Stripe.card.createToken({
		  number: '4242424242424242',
		  exp_month: 12,
		  exp_year: 2017,
		  cvc: '123'
		}, function(status, response) {
			addCustomer(response.id);
		  // response.id is the card token.
		});
		browserHistory.push("/newJob")
	},

	render:function() {
		return (
			<div>
				<Nav />
				<div className="cardContainer">
					<h2 className="cardHead"> Card Information </h2>
					<form className="cardForm" onSubmit={this.handleSubmit}>
						<label htmlFor="number" id="cardLabel"> Card Number </label><br/>
			          	<input type="text" ref="number" onChange={this.handleChange} id="number" className="card" placeholder="Card Number" value={this.state.number} /> <br/>
			          	<label htmlFor="exp_month" id="expLabel"> Expires </label>
			          	<label htmlFor="cvc" id="cvcLabel"> CVC </label><br/>
			          	<input type="number" ref="exp_month" onChange={this.handleChange} id="exp_month" className="exp_month" placeholder="Month" value={this.state.exp_month} />
			          	<input type="number" ref="exp_year" onChange={this.handleChange} id="exp_year" className="exp_year" placeholder="Year" value={this.state.exp_year} />
			          	<input type="text" ref="cvc" onChange={this.handleChange} id="cvc" className="cvc" placeholder="CVC" value={this.state.cvc} /> <br/>
			          	<button className="cardButton"> Submit </button>
					</form>
				</div>
			</div>
		)
	}
})