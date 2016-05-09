import React from "react";
import Nav from "ui/nav";
import { addNewJob } from "api/data";
import store from "store";
import { Link, browserHistory } from 'react-router';

require('assets/styles/newJob.scss');

export default React.createClass({
	getInitialState() {
	    return {
	    	title: "",
	    	description: "",
	    	price:"",
	    	image_url:"",
	    	destination_a:"",
	    	destination_b:"",
	    	phone_number:"",
	    }
	},

	componentWillUnmount: function () {
		this.unsubscribe();
	},

	handleChange: function() {
		this.setState({
			title: this.refs.title.value,
	    	description: this.refs.description.value,
	    	price: this.refs.price.value,
	    	image_url: this.refs.image_url.value,
	    	destination_a: this.refs.destination_a.value,
	    	destination_b: this.refs.destination_b.value,
	    	phone_number: this.refs.phone_number.value
		})
	},

	handleSubmit:function(e) {
		e.preventDefault();
		addNewJob({
			title: this.state.title,
			description: this.state.description,
	    	price: this.state.price,
	    	image_url: this.state.image_url,
	    	destination_a: this.state.destination_a,
	    	destination_b: this.state.destination_b,
	    	phone_number:this.state.phone_number,
		})
		browserHistory.push("/home")
	},

	render:function() {
		return (
			<div>
				<Nav />
				<div id="newjob">
					<h2 className="jobHead" > Create A New Job </h2>
					<form className="jobForm" onSubmit={this.handleSubmit}>
			          <label htmlFor="title" id="jobLabel"> Job Title </label><br/>
			          <input type="text" ref="title" onChange={this.handleChange} id="title" className="jobTitle" placeholder="Job Title" value={this.state.title} /> <br/>
			          <label htmlFor="price" id="priceLabel"> Price </label><br/>
			          <input type="number" ref="price" onChange={this.handleChange} id="price" className="price" placeholder="Price" value={this.state.price} /><br/>
			          <label htmlFor="image_url" id="imageLabel"> Image </label><br/>
			          <input type="text" ref="image_url" onChange={this.handleChange} id="image_url" className="image" placeholder="Image URL" value={this.state.image_url} /> <br/>
			          <label htmlFor="destination_a" id="locationLabel"> Location </label><br/>
			          <input type="address" ref="destination_a" onChange={this.handleChange} id="destination_a" className="location" placeholder="Location" value={this.state.destination_a} /> <br/>
			          <label htmlFor="destination_b" id="destinationLabel"> Destination </label><br/>
			          <input type="text" ref="destination_b" onChange={this.handleChange} id="destination_b" className="destination" placeholder="Destination" value={this.state.destination_b} /> <br/>
			          <label htmlFor="phone" id="phoneLabel"> Phone Number </label><br/>
			          <input type="phone" ref="phone_number" onChange={this.handleChange} id="phone" className="phone" placeholder="Phone" value={this.state.phone_number} /> <br/>
			          <label htmlFor="description" id="descLabel"> Description </label><br/>
			          <textarea ref="description" onChange={this.handleChange} id="description" className="desc" placeholder="Description" value={this.state.description} /><br/>
			          <button className="jobSub">Submit</button>
			        </form>
				</div>
			</div>	
		)
	}
})