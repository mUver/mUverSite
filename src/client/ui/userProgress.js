import React from "react";
import Nav from "ui/nav";
import store from "store";
import { userConfirm, reportMover } from "api/data";
import ReportForm from "ui/reportForm";
import { browserHistory } from 'react-router';
import { getCurrentJob, changeColor } from 'api/data';

require('assets/styles/userProgress.scss');

export default React.createClass({
  getInitialState:function(){
    return {
      status1: "",
      status2: "",
      status3: "",
      mover_profile: "",
      show:false
    }
  },

  componentWillMount:function(){
    this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
          status1: currentStore.statusReducer.status1,
          status2: currentStore.statusReducer.status2,
          status3: currentStore.statusReducer.status3
        })
      }.bind(this));
    this.check = setInterval(function(){
      getCurrentJob();
    },10000)
  },

  componentWillUnmount:function(){
    clearInterval(this.check);
  },

  completeClick:function(item, e){
    userConfirm(item.id);
    browserHistory.push("/history");
  },

  reportClick:function(data){
    //reportMover(data.mover_profile);
    this.setState({
      show:true
    })
  },

	render: function() {
		return (
			<div>
        {this.state.show ? <ReportForm /> : ""}
				<Nav />
          <ul className="statusBar">
            <li className={this.state.status1}> Waiting for mover </li>
            <li className="space"></li>
            <li className={this.state.status2}> Mover is on the way </li>
            <li className="space"></li>
            <li className={this.state.status3}> Job is Complete </li>
          </ul>
					<div className="UprogressBox">
						<h2 className="UprogressHead"> Current Job </h2>
						<div className="UcurrentJob">
						    {this.props.current_job.map(function(data, i){
                if (data.mover_profile === null) {    
                  return (
                    <div key={i} className="UjobBox">
                      <a className="Ustatus"> Status: </a>
                      <div className="UstatusBox"> {data.status} </div><br />
                      <a className="Utitle"> Title: </a><br />
                      <div className="UtitleBox">{data.title}</div><br />
                      <a className="Uprice"> Price: </a><br />
                      <div className="UpriceBox">${data.price}</div><br />
                      <a className="Ulocation"> Location: </a><br />
                      <div className="UlocationBox">{data.destination_a}</div><br />
                      <a className="Udestination"> Destination: </a><br />
                      <div className="UdestinationBox">{data.destination_b}</div><br />
                      <a className="Uphone"> Your Phone Number: </a><br />
                      <div className="UphoneBox">{data.phone_number}</div><br />
                      <button className="UreportGray" >Report Mover</button>
                      <button className="UcompleteGray" >Job Complete</button>               
                    </div>
                  )} else {
                    return (
                    <div key={i} className="UjobBox">
                      <a className="Ustatus"> Status: </a>
                      <div className="UstatusBox"> {data.status} </div><br />
                      <a className="Utitle"> Title: </a><br />
                      <div className="UtitleBox">{data.title}</div><br />
                      <a className="Uprice"> Price: </a><br />
                      <div className="UpriceBox">${data.price}</div><br />
                      <a className="Ulocation"> Location: </a><br />
                      <div className="UlocationBox">{data.destination_a}</div><br />
                      <a className="Udestination"> Destination: </a><br />
                      <div className="UdestinationBox">{data.destination_b}</div><br />
                      <a className="Uphone"> Your Phone Number: </a><br />
                      <div className="UphoneBox">{data.phone_number}</div><br />                
                      <button className="Ureport" onClick={this.reportClick.bind(this, data)} >Report Mover</button>
                      <button className="Ucomplete" onClick={this.completeClick.bind(this, data)} >Job Complete</button>
                    </div>
                  )
                  }
                }.bind(this))}	
						</div>
					</div>
			</div>
		)
	}
})