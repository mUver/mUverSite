import React from "react";
import Nav from "ui/nav";
import { getJobs, sortJobs } from "api/data";
import store from "store";
import { browserHistory } from 'react-router';

require('assets/styles/moverHome.scss');

export default React.createClass({
	getInitialState: function () {
    return {
      jobs: [],
      lat: "",
      long: "",
      cords: "",
      sortValue: ""
    }
  },

  componentWillMount: function () {
  	var c = function(pos){
  		var lat = pos.coords.latitude,
  			long = pos.coords.longitude,
  			cords = lat + "," + long;
  			console.log(cords)
  		this.setState({
  			lat: lat,
  			long: long,
  			cords: cords
  		})
      if (!cords) {
        this.setState({
          showLoc: false
        })
      } else {
        this.setState({
          showLoc: true
        })
      }
  	}.bind(this)
    getJobs();
  	navigator.geolocation.getCurrentPosition(c);
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        jobs: currentStore.jobsReducer.jobs,
      })
    }.bind(this));

    this.check = setInterval(function(){
      sortJobs(this.refs.sortBy.value);
    }.bind(this) ,10000)
  },

  componentWillUnmount: function () {
    this.unsubscribe();
    clearInterval(this.check);
  },

  handleChange: function() {
    sortJobs(this.refs.sortBy.value); 
  },


  handleClick: function (data, e) {
  	store.dispatch({
  		type:"GET_JOB",
  		job:data
  	})
    
    browserHistory.push("/jobView")
  },

  locClick: function(){
    sortJobs("?lat=" + this.state.lat + "&" + "lng=" + this.state.long);
  },

	render:function () {
		return (
			<div>
				<Nav />
				<div id="moverMain">
					<h2> Jobs In Your Area </h2>
          {this.state.showLoc ? <button className="locButton" onClick={this.locClick}> Use Current Location </button> : ""}
          <br />
            <select id="sortBy" ref="sortBy" onChange={this.handleChange}>
              <option value="?"> Most Recent </option>
              <option value="?sort=price-low"> Price Low to High </option>
              <option value="?sort=price-high"> Price High to Low </option> 
            </select><br />
					<div className="jobList">
            <div className="tableHead">
              <span className="titleTable"> Title </span>
              <span className="priceTable"> Price </span>
              <span className="distanceTable"> Distance from you </span>
              <span className="tripTable"> Trip Distance </span>
              <span className="infoTable"> More Info </span>
            </div>
						{this.state.jobs.map(function(data, i){				
							return (
								<div key={i} className="jobBox">
									<a className="titleBox">{data.title}</a>
									<a className="priceBox">${data.price}</a>
									<a className="distanceBox">{data.trip_distance} mi</a>
									<button onClick={this.handleClick.bind(this, data)} className="jobView" > View Job </button>
								</div>
							)
						}.bind(this))}
					</div>
				</div>
			</div>
		)
	}
})