import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return(
    <header className="header">
          <div className="navBar">
            <ul>
              <h1>Bar Hoppers</h1>
              {props.auth
                ? <li onClick={props.logOut}><Link className="navlink" to='/'><h3>logout</h3></Link></li>
                : ''}
              {!props.auth
                ? <li><NavLink className="navlink" exact to='/register'><h3>register</h3></NavLink></li>
                : ''}
              {!props.auth
                ? <li><NavLink className="navlink" exact to='/login'><h3>login</h3></NavLink></li>
                : ''}
              {props.auth
                ?<li><NavLink className="navlink" exact to='/profile'><h3>profile</h3></NavLink></li>
                : ''}
              <li>
                <NavLink className="navlink" exact to='/'><h3>home</h3></NavLink>
              </li>
            </ul>
          </div>
    </header>
  )
}

export default Header;
