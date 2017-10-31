import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Client from "./Client";
// import AXON from "adfjlasjssdk";
// const AXON = require("./adfjlasjssdk");

class Login extends Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    "email": "vikramjeetsingh41@gmail.com",
    "password": "Test!234",
    "redirectToReferrer": false
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  doLogin() {
    console.log(this.state.email);
    // Client.login().then(data => {
    //   console.log(data);
    this.setState({ redirectToReferrer: true });
    // });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={"/dashboard"} />
      );
    }

    return (
      <div className="login-base">
        <div className="login-content-base">
          <div className="cross-gradient" />
          <div className="waves"></div>
          <div className="login-content">
            <div className="login-panel mdl-shadow--4dp">
              <div className="login-panel-header">
                <h2 className="sub-title">Welcome to</h2>
                <div className="logo-holder">
                  <img alt="logo" src="/#/assets/svg/axon-platform-logo.svg" />
                  <h2 className="title">Virtual Simulator</h2>
                </div>
              </div>
              <div className="login-panel-content">
                <form>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label gs-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    <label className="mdl-textfield__label" htmlFor="userid">Username</label>
                  </div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label gs-textfield--floating-label">
                    <input className="mdl-textfield__input" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <label className="mdl-textfield__label" htmlFor="userpass">Password</label>
                  </div>
                  <div>
                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect gs-checkbox" htmlFor="remember-pass-checkbox">
                      <input type="checkbox" id="remember-pass-checkbox" className="mdl-checkbox__input" />
                      <span className="mdl-checkbox__label">Remember</span>
                    </label>
                  </div>
                  <div className="login-btn-holder">
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect gs-button-primary flat" type="button" onClick={this.doLogin}>Login
                    </button>
                  </div>
                  {/* <div className="error-holder">
                    <div>Your xmpp has been disconnected. Please login again.</div>
                    <div>Your session token has expired. Please login again.</div>
                    <div>The password provided is incorrect</div>
                    <div>The email provided is incorrect</div>
                    <div>The email and/or password provided is not recognized for a valid account</div>
                    <div></div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="mdl-mini-footer ">
          <a href="https://abc.com/">© 2017 Greenwave Systems. All Rights Reserved. | v2.1</a>
        </footer>
      </div>
    );
  }
}

export default Login;
