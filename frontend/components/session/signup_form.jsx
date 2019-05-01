import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      birth_day: '',
      birth_month: '',
      birth_year: ''
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

              <label htmlFor="email-signup">
                <input onChange={this.update("email")} id="email-signup" type="email" placeholder="Email Address" />
              </label>
              <label htmlFor="password-signup">
                <input onChange={this.update("password")} id="password-signup" type="password" placeholder="Create a password" />
              </label>
              <label htmlFor="fname-signup">
                <input onChange={this.update("fname")} id="fname-signup" type="input" placeholder="First name" />
              </label>
              <label htmlFor="lname-signup">
                <input onChange={this.update("lname")} id="lname-signup" type="input" placeholder="Last name" />
              </label>




              
              <label htmlFor="bday-signup">
                <input onChange={this.update("bday")} id="bday-signup" type="input" placeholder="Day" />
              </label>
              <label htmlFor="bmon-signup">
                <input onChange={this.update("bmon")} id="bmon-signup" type="input" placeholder="Month" />
              </label>
              <label htmlFor="byear-signup">
                <input onChange={this.update("byear")} id="byear-signup" type="input" placeholder="Year" />
              </label>

              <button onClick={this.handleSubmit} className="signup-button">Sign up</button>

            </form>
          </div>

        {/* </div> */}

      </div>
    )
  }

}

export default SignupForm;