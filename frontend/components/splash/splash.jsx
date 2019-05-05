import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10].map(num => (
      <option className="splash-guests" placeholder="Guests">{num}</option>
    ))

    return (
      <div className="splash">
        
        <header>
          <NavBarContainer />
        </header>

        <div className="splash-body">
          <div className="splash-search-container">
            <div className="splash-search">
              <div className="splash-search-head">
                <div className="splash-head-text">
                  Vans, vans, vans and more vans!
                </div>

                <div className="splash-search-inputs">

                  <div className="splash-input-container">
                    <p className="splash-input-label">WHERE</p>
                    <div className="splash-input-div">
                      <input className="splash-input" type="text" placeholder="San Francisco, CA, United States" />
                    </div>
                  </div>

                  <div className="splash-input-container">
                    <p className="splash-input-label">CHECK-IN</p>
                    <div className="splash-input-div">
                      <input className="splash-input" type="text" placeholder="mm/dd/yyyy" />
                    </div>
                  </div>

                  <div className="splash-input-container">
                    <p className="splash-input-label">GUESTS</p>
                    <div className="splash-input-div">
                      
                      <select className="splash-guests" placeholder="Guests">
                        {guests}
                      </select>
                    </div>
                  </div>

                  <div className="splash-submit-wrap">
                    <button className="splash-submit">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Splash;