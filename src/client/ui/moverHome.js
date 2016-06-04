import React from "react";
import Nav from "ui/nav";
import { getJobs, sortJobs,filterJobs } from "api/data";
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
  		},function(){
        sortJobs("?lat=" + this.state.lat + "&" + "lng=" + this.state.long);
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

  handleClick: function (data, e) {
  	store.dispatch({
  		type:"GET_JOB",
  		job:data
  	})    
    browserHistory.push("/jobView")
  },

  handleDistance: function (param) {
    let jobs = param === 'high' ? this.state.jobs.sort((a,b)=>Number(a.distance) > Number(b.distance)) : this.state.jobs.sort((a,b)=>Number(b.distance) > Number(a.distance))
    
    this.setState(jobs)
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
              <div className="priceTable"><button className="entypo-up-open-mini" onClick={()=>{filterJobs({filter:'PRICE_LOW'})}}></button><br /> Price <br /> <button className="entypo-down-open-mini" onClick={()=>{filterJobs({filter:'PRICE_HIGH'})}}></button></div>
              <div className="distanceTable"><button className="entypo-up-open-mini" onClick={()=>{this.handleDistance('low')}}></button><br /> Distance From <br /><button className="entypo-down-open-mini" onClick={()=>{this.handleDistance('high')}}></button></div>
              <div className="tripTable"><button className="entypo-up-open-mini" onClick={()=>{filterJobs({filter:'TRIP_LOW'})}}></button><br /> Trip Distance <br /><button className="entypo-down-open-mini" onClick={()=>{filterJobs({filter:'TRIP_HIGH'})}}></button></div>
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