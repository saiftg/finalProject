import React, { Component } from 'react';


class NavBar extends Component{
	render(){
		return(
		<div className="navbar-fixed">
		    <nav>
		      <div className="nav-wrapper">
		        <a href="#!" className="brand-logo left">Logo</a>
		        <ul className="right hide-on-med-and-down">
		        	 <li><a href="sass.html">Search</a></li>
		          <li><a href="sass.html">Login</a></li>
		          <li><a href="badges.html">Profile</a></li>
		        </ul>
		      </div>
		    </nav>
  		</div>

			)
	}
}

export default NavBar;
