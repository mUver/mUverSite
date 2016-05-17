import React from "react";
import UserProgress from "ui/userProgress";
import UserHomeContainer from "ui/userHome-container";

export default React.createClass({

  render: function () {
    return (
      this.props.in_progress ? <UserProgress current_job={this.props.current_job} /> : <UserHomeContainer />
    )
  }
})