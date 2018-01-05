import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Example from './Search';

class NavBar extends Component{
	render(){
		return(
		<div className="navbar-fixed">
		    <nav>
		    
		      <div className="nav-wrapper">
		        <a href="#!" className="brand-logo left">Logo</a>
		        <ul className="right hide-on-med-and-down">
		          <li key={0}><Link to="/search">Search</Link></li>
		          <li key={1}><Link to="/home">Home</Link> </li>
		          <li key={2}><Link to="/register">Sign Up</Link> </li>
		          <li key={3}><Link to="/login">Login</Link> </li>

		        </ul>
		      </div>
		    </nav>
  		</div>

			)
	}
}

export default NavBar;
