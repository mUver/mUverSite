import React from "react";
import MoverProgress from "ui/moverProgress";
import MoverHomeContainer from "ui/moverHome-container";

export default React.createClass({
  render: function () {
    return (
      this.props.in_progress ? <MoverProgress current_job={this.props.current_job} /> : <MoverHomeContainer />
    )
  }
})