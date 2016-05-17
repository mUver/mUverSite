import React from "react";
import UserSwitch from "ui/userSwitch";
import MoverSwitch from "ui/moverSwitch";
import store from "store";
import { getMover, getProgress, getCurrentJob } from "api/data";

export default React.createClass({
  getInitialState: function () {
    return {
      mover: false,
      in_progress: "",
      current_job: []
    }
  },

  componentWillMount: function () {
    getMover()
    getProgress();
    getCurrentJob();
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        mover: currentStore.userReducer.profile.mover,
        in_progress:currentStore.userReducer.in_progress,
        current_job: currentStore.jobsReducer.current_job
      })
    }.bind(this));
    },

    componentWillUnmount: function () {
      this.unsubscribe();
    },

  render: function () {
    return (
      this.state.mover ? <MoverSwitch current_job={this.state.current_job} mover={this.state.mover} in_progress={this.state.in_progress} /> : <UserSwitch current_job={this.state.current_job} mover={this.state.mover} in_progress={this.state.in_progress} />
    )
  }
})