import React from "react";
import MoverHome from "ui/moverHome";

export default React.createClass({
	

	render: function() {
		return (
			<MoverHome onClick={this.onClick} />
		)
	}
})