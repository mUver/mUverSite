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
  		this.setState({
  			lat: lat,
  			long: long,
  			cords: cords
  		})
  	}.bind(this)
    getJobs();
  	navigator.geolocation.getCurrentPosition(c);
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        jobs: currentStore.jobsReducer.jobs,
      })
    }.bind(this));

    // this.check = setInterval(function(){
    //   sortJobs();
    // }.bind(this) ,10000)
  },

  componentWillUnmount: function () {
    this.unsubscribe();
    clearInterval(this.check);
  },


  priceUp: function() {
    sortJobs("?sort=price-high")
  },

  priceDown: function() {
    sortJobs("?sort=price-low")
  },

  distanceDown: function() {
    sortJobs("?lat=" + this.state.lat + "&" + "lng=" + this.state.long);
  },

  tripUp: function() {
    sortJobs("?sort=dist-high")
  },

  tripDown: function() {
    sortJobs("?sort=dist-low")
  },

  handleClick: function (data, e) {
  	store.dispatch({
  		type:"GET_JOB",
  		job:data
  	})    
    browserHistory.push("/jobView")
  },

	render:function () {
		return (
			<div>
				<Nav />
				<div id="moverMain">
					<h2> Jobs In Your Area </h2>         
          <br />
					<div className="jobList">
            <div className="tableHead">
              <div className="titleTable"> Title </div>
              <div className="priceTable"><button className="entypo-up-open-mini" onClick={this.priceUp}></button><br /> Price <br /> <button className="entypo-down-open-mini" onClick={this.priceDown}></button></div>
              <div className="distanceTable"><button className="entypo-up-open-mini"></button><br /> Distance From <br /><button className="entypo-down-open-mini" onClick={this.distanceDown}></button></div>
              <div className="tripTable"><button className="entypo-up-open-mini" onClick={this.tripUp}></button><br /> Trip Distance <br /><button className="entypo-down-open-mini" onClick={this.tripDown}></button></div>
              <div className="infoTable"> More Info </div>
            </div>
						{this.state.jobs.map(function(data, i){				
							return (
								<div key={i} className="jobBox">
									<a className="titleBox">{data.title}</a>
									<a className="priceBox">${data.price}</a>
                  <a className="distanceBox">{data.distance} miles</a>
									<a className="distanceBox">{data.trip_distance} miles</a>
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