import React from "react";
import MoverHome from "ui/moverHome";
import { Link, browserHistory } from 'react-router';

export default React.createClass({
	

	render: function() {
		return (
			<MoverHome onClick={this.onClick} />
		)
	}
})