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
    this.props.submit(user)
      .then(this.props.closeModal)
      .then(this.props.history.push('/listings'));
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
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
      <option value={month} key={month}>{month}</option>
    ))

    const days = [];
    let i = 1
    while (i < 32) {
      days.push(<option value={String(i)} key={String(i)}>{String(i)}</option>);
      i++;
    }

    const years = [];
    let j = 2019
    while (j > 1920) {
      years.push(<option value={String(j)} key={String(j)}>{String(j)}</option>);
      j--;
    }


    return (
      <div className="session-form-container">
        {/* {this.renderErrors()} */}

        {/* <div className="session-content-container"> */}
          <div className="session-input-container">
          
            <div className="form-header-container">
              <div className="form-header"> 
                Sign up for your new account below!
              </div>
              <div className="line">
                ___________________________________________________________________________________
              </div>
            </div>

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


              <div className="bday-container">
                <div className="bday-head">
                  Birthday
                </div>
                <div className="bday-legal">
                  To sign up, you must be 18 or older. Other people won’t see your birthday.
                </div>
                <div className="bday-inputs-container">
                  <div className="bday-input">
                    <div className="bday-month">
                      <select className="month">
                        { months }
                      </select>
                    </div>

                  <div className="bday-day">
                    <select className="day">
                      { days }
                    </select>
                  </div>

                  <div className="bday-year">
                    <select className="year">
                      { years }
                    </select>
                  </div>

                </div>
                </div>
              </div>

              <div className="funny">
                We’ll send you marketing promotions, special offers, inspiration, and bunch of other stuff  you probably don't want!
              </div>

              <div className="session-button">
                <button onClick={this.handleSubmit} className="signup">Sign up</button>
              </div>
            </form>
          </div>

          <div className="form-foot-container">
            <div className="line">
              ___________________________________________________________________________________
            </div>

            <div className="switch-form">
              Already have a VanBnb account? { this.props.switchForm }
            </div>
          
          </div>

        {/* </div> */}

      </div>
    )
  }

}

export default SignupForm;