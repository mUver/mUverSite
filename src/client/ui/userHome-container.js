import React from "react";
import UserHome from "ui/userHome";
import { Link, browserHistory } from 'react-router';

export default React.createClass({
	onClick:function(e) {
		e.preventDefault();
		browserHistory.push("/cardInfo")
	},

	render:function(){
		return(
			<UserHome onClick={this.onClick} />
		)
	}
})