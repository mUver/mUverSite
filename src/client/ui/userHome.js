import React from "react";
import Nav from "ui/nav";
import { Link, browserHistory } from 'react-router';

require('assets/styles/userHome.scss');

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
					<button onClick={this.props.onClick} >Create New Job</button><br />
					<button className="becomeMover" onClick={this.onClick} > Become a Mover</button>
				</div>
			</div>
		)
	}
})