import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submit(user)
      .then(this.props.closeModal)
      .then(this.props.history.push('/listings'));
  }

  render() {
    return (
      <div className="login-form-container">
        {/* {this.renderErrors()} */}

        {/* <div className="session-content-container"> */}
          <div className="session-input-container">

            <form className="login-form">

              <label htmlFor="email-login">
                <input onChange={this.update("email")} id="input-session" type="email" placeholder="Email Address" />
              </label>
              <label htmlFor="password-session">
                <input onChange={this.update("password")} id="input-session" type="password" placeholder="Password" />
              </label>

              <div className="remember">
                <label>Remember me
                  <input type="checkbox" name="" id="remember"/>
                </label>
              
              </div>

              <div className="session-button">
                <button onClick={this.handleSubmit} className="login">Log in</button>
              </div>

              <div className="forgot">
                <div className="forgot-text">Forgot password? Too bad!</div>
              </div>

              <div className="login-line">
              _____________________________________________________________________________________
              </div>

              <div className="switch-form-login">
                Don't have an account? {this.props.switchForm}
              </div>
            </form>
          </div>

        {/* </div> */}

      </div>
    )
  }

    // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  
}

export default LoginForm;