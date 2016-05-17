import React from "react";

require('assets/styles/reportForm.scss');

export default React.createClass({
	cancelClick:function(e) {
		e.preventDefault();

	},

	submitClick:function(e) {
		e.preventDefault();
	},

	render:function() {
		return (
			<div className="reportBack">
				<div className="reportBox">
					<h2 className="reportHead"> Report </h2>
					<form>
						<textarea ref="desc" onChange={this.handleChange} placeholder="Enter text here" className="reportDesc" />
						<button className="cancelReport" onClick={this.cancelClick}> Cancel </button>
						<button className="submitReport"> Submit </button>
					</form>
				</div>
			</div>
		)
	}
})