import React from "react";
import store from "store";
import { Link, browserHistory } from 'react-router';
import Nav from "ui/nav";

require('assets/styles/jobHistory.scss');

export default React.createClass({
	render: function() {
		return (
			<div>
				<Nav />
				<div className="historyBox">
				</div>
			</div>
		)
	}
})