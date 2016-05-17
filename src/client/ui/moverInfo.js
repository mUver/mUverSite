import React from "react";
import store from "store";

export default React.createClass({
	render:function() {
		return (
			<div>
				<a className="UmoverName"> Mover's Name: </a><br />
                <div className="UmoverNameBox">{data.mover_profile.display_name}</div><br /> 
                <a className="UmoverPhone"> Mover's Phone Number: </a><br />
                <div className="UmoverPhoneBox">{data.mover_profile.phone_number}</div><br />
			</div>
		)
	}
})