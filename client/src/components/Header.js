import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return (
      <nav>
        <div className="nav-wrapper grey darken-1">
          <a className="left brand-logo" href="/">Logo</a>
          <ul className="right">
            <li>
              <a href="/">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default Header;