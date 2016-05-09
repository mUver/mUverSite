import React from "react";
import UserHomeContainer from "ui/userHome-container";
import MoverHomeContainer from "ui/moverHome-container";
import store from "store";
import { getMover } from "api/data";

export default React.createClass({
  getInitialState: function () {
    return {
      mover: false
    }
  },

  componentWillMount: function () {
    getMover();
      this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
          mover: currentStore.userReducer.profile.mover
        })
      }.bind(this));
    },

    componentWillUnmount: function () {
      this.unsubscribe();
    },

  render: function () {
    return (
      this.state.mover ? <MoverHomeContainer /> : <UserHomeContainer />
    )
  }
})