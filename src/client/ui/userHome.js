import React from "react";
import Nav from "ui/nav";
import { Link, browserHistory } from 'react-router';

require('assets/styles/userHome.scss');
var user = require("assets/images/user.jpg");
var mover = require("assets/images/truck.jpg");

export default React.createClass({
	onClick:function(e) {
		e.preventDefault();
		browserHistory.push("/update")
	},

	render:function () {
		return (
			<div>
				<Nav />
				<div id="userMain">
					<button className="toJobForm" onClick={this.props.onClick} ><img src={user} /><br />Request a Mover</button>
					<button className="becomeMover" onClick={this.onClick} ><img src={mover} /><br /> Become a Mover</button>
				</div>
			</div>
		)
	}
})