import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="register">
        <h2 className="registerHead"> Register </h2> 
        <form className="registerForm" onSubmit={this.props.handleSubmit}>
          <label htmlFor="username" id="usernameLabel"> Username </label><br/>
          <input type="username" onChange={this.props.handleChange} id="username" className="username" placeholder="Username" /> <br/>
          <label htmlFor="password" id="passwordLabel"> Password </label><br/>
          <input type="password" onChange={this.props.handleChange} id="password" className="password" placeholder="Password" /><br/>
          <label htmlFor="confirm" id="confirmLabel"> Confirm Password </label><br/>
          <input type="password" onChange={this.props.handleChange} id="confirm" className="confirm" placeholder="Confirm Password" /><br/>
          <button className="confirmReg">Register</button>
        </form>
      </div>
    )
  }
});