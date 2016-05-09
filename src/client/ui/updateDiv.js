import React from "react";
import { Link, browserHistory } from 'react-router';

require('assets/styles/updateDiv.scss');
var credit = require("assets/images/credit.png");

export default React.createClass({
	onClick:function(e) {
		e.preventDefault();
		browserHistory.push("/update")
	},

	render: function() {
		return (
			<div className="warning">
				<img className="credit" src={credit}/>
				<button onClick={this.onClick} className="update">Update</button>
			</div>
		)
	}
})