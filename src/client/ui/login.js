import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="login">
        <h2 className="loginHead"> Login </h2> 
        <form className="loginForm" onSubmit={this.props.handleSubmit}>
          <span className="entypo-user"> </span><input type="username" onChange={this.props.handleChange} id="username" className="username" placeholder="Username" /> <br/>
          <span className="entypo-lock"> </span><input type="password" onChange={this.props.handleChange} id="password" className="password" placeholder="Password" /><br/>
          <button className="loginButton">Login</button>
        </form>
        <h3 className="accountHead" > Don't have an account? </h3>
          <button className="registerButton" onClick={this.props.onClick}>Register</button>
      </div>
    )
  }
});
