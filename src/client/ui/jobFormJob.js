import React from "react";
import store from "store";

export default React.createClass({
	getInitialState() {
	    return {
	    	title: "",
	    	description: "",
	    	price:"",
	    	image_url:"",
	    	destination_b:""
	    }
	},

	handleChange: function() {
		this.setState({
			title: this.refs.title.value,
	    	description: this.refs.description.value,
	    	price: this.refs.price.value,
	    	image_url: this.refs.image_url.value,
	    	destination_b: this.refs.destination_b.value
		})
	},

	autofill: function(e) {
		e.preventDefault();
		this.setState({
			title: "Ten 2x4's",
	    	description: "These 2x4's are about 10 ft long.",
	    	price: "75",
	    	image_url: this.refs.image_url.value,
	    	destination_b: "10636 Calf Creek Ct Las Vegas, NV 89129"
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
			type:"JOB_FORM",
			title: this.state.title,
		  	description: this.state.description,
		  	price: this.state.price,
          	image_url: this.state.image_url,
          	destination_b: this.state.destination_b
		})
    },

	render:function() {
		return (
			<div>				
				<label htmlFor="title" id="jobLabel"> Job Title </label><br/>
			    <input type="text" ref="title" onChange={this.handleChange} id="title" className="jobTitle" placeholder="Job Title" value={this.state.title} /> <br/>
			    <label htmlFor="price" id="priceLabel"> Price </label><br/>
			    <input type="number" ref="price" onChange={this.handleChange} id="price" className="price" placeholder="Price" value={this.state.price} /><br/>
			    <label htmlFor="image_url" id="imageLabel"> Image </label><br/>
			    <input name="file" type="file" 
   				className="cloudinary-fileupload" data-cloudinary-field="image_id" 
   				data-form-data=" ... html-escaped JSON data ... " ></input><br />
   				<input type="text" ref="image_url" onChange={this.handleChange} id="image_url" className="image_url" value={this.state.image_url} />					 
			    <label htmlFor="destination_b" id="destinationLabel"> Destination </label><br/>
			    <input type="text" ref="destination_b" onChange={this.handleChange} id="destination_b" className="destination" placeholder="Destination" value={this.state.destination_b} /> <br/>
			    <label htmlFor="description" id="descLabel"> Description </label><br/>
			    <textarea ref="description" onChange={this.handleChange} id="description" className="desc" placeholder="Description" value={this.state.description} /><br/>
			    <button className="auto2" onClick={this.autofill}> Demo </button>
			    <button className="continue2" onClick={this.continue2}> Continue </button>
			</div>
		)
	}
})