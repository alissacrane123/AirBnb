import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.submit(user);
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

  render() {
    return (
      <div className="session-form-container">
        {/* {this.renderErrors()} */}

        {/* <div className="session-content-container"> */}
          <div className="session-input-container">

            <form className="session-form">

              <label htmlFor="email-login">
                <input onChange={this.update("email")} id="email-login" type="email" placeholder="Email Address" />
              </label>
              <label htmlFor="password-login">
                <input onChange={this.update("password")} id="password-login" type="password" placeholder="Password" />
              </label>

              <button onClick={this.handleSubmit} className="login-button">Log in</button>

            </form>
          </div>

        {/* </div> */}

      </div>
    )
  }
  
}

export default LoginForm;