import React from "react";
import Nav from "ui/nav";
import store from "store";
import { browserHistory } from 'react-router';
import { moverConfirm } from "api/data";
import ReportForm from "ui/reportForm";
import { getCurrentJob } from "api/data";

require('assets/styles/moverProgress.scss');

export default React.createClass({
  getInitialState:function(){
    return {
      show:false
    }
  },

  componentWillMount:function(){
    this.check = setInterval(function(){
      getCurrentJob();
    },2000)
  },

  componentWillUnmount:function(){
    clearInterval(this.check);
  },
  
  completeClick:function(item, e){
    moverConfirm(item.id).then(function(){
      browserHistory.push("/history");
    });   
  },

  reportClick:function() {
    // this.setState({
    //   show:true
    // })
  },

	render: function() {
		return (
			<div>
      {this.state.show ? <ReportForm /> : ""}
				<Nav />
        {this.props.current_job.map(function(data, i){ 
                  if (data.confirmation_user === true) {       
                  return (
                    <div key={i}>
                      <ul className="statusBar">
                        <li className="start"> Waiting for mover </li>
                        <li className="space"></li>
                        <li className="middle"> Mover is on the way </li>
                        <li className="space"></li>
                        <li className="activeStatus"> Job is Complete </li>
                      </ul>
            					<div className="MprogressBox">
            						<h2 className="MprogressHead"> Current Job </h2>
            						<div className="McurrentJob">
                                <div className="MjobBox">
                                  <a className="Mstatus"> Status: </a>
                                  <div className="MstatusBox"> {data.status} </div><br />
                                  <a className="Mtitle"> Title: </a><br />
                                  <div className="MtitleBox">{data.title}</div><br />
                                  <a className="Mtitle"> Name: </a><br />
                                  <div className="MtitleBox">{data.pickup_for}</div><br />
                                  <a className="Mprice"> Price: </a><br />
                                  <div className="MpriceBox">${data.price}</div><br />
                                  <a className="Mlocation"> Location: </a><br />
                                  <div className="MlocationBox">{data.destination_a}</div><br />
                                  <a className="Mdestination"> Destination: </a><br />
                                  <div className="MdestinationBox">{data.destination_b}</div><br />
                                  <a className="Mphone"> Phone Number: </a><br />
                                  <div className="MphoneBox">{data.phone_number}</div><br />
                                  <button className="Mreport">Report User</button>
                                  <button className="Mcomplete" onClick={this.completeClick.bind(this, data)} >Job Is Complete</button>
                                </div>
                        </div>
                      </div>
                    </div>
                  )} else {
                    return (
                      <div key={i}>
                        <ul className="statusBar">
                          <li className="start"> Waiting for mover </li>
                          <li className="space"></li>
                          <li className="activeStatus"> Mover is on the way </li>
                          <li className="space"></li>
                          <li className="end"> Job is Complete </li>
                        </ul>
                        <div className="MprogressBox">
                          <h2 className="MprogressHead"> Current Job </h2>
                          <div className="McurrentJob">
                            <div className="MjobBox">
                              <a className="Mstatus"> Status: </a>
                              <div className="MstatusBox"> {data.status} </div><br />
                              <a className="Mtitle"> Title: </a><br />
                              <div className="MtitleBox">{data.title}</div><br />
                              <a className="Mtitle"> Name: </a><br />
                              <div className="MtitleBox">{data.pickup_for}</div><br />
                              <a className="Mprice"> Price: </a><br />
                              <div className="MpriceBox">${data.price}</div><br />
                              <a className="Mlocation"> Location: </a><br />
                              <div className="MlocationBox">{data.destination_a}</div><br />
                              <a className="Mdestination"> Destination: </a><br />
                              <div className="MdestinationBox">{data.destination_b}</div><br />
                              <a className="Mphone"> Phone Number: </a><br />
                              <div className="MphoneBox">{data.phone_number}</div><br />
                              <button className="Mreport">Report User</button>
                              <button className="McompleteGray" >Job Is Complete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  )
                  }
                }.bind(this))}	         
			</div>
		)
	}
})
