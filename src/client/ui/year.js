import React from "react";

export default React.createClass({
	render:function() {
		return (

		)
	}
})

<select id="year" name="year">
	{function(){
		var myDate = new Date();
		var year = myDate.getFullYear();
		for(var i = 1900; i < year+1; i++){
			return (
				<option value="i">i</option>
			) 
		}
	}
	}
</select>