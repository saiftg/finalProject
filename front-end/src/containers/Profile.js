import React from 'react';
import { Component } from 'react';
import LoginAction from '../actions/LoginAction';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';




class Profile extends Component{
	render(){

		console.log((this.props.auth))
		return(

			<div>
			<div className="container">


		
		<div className="page-header">
				<h1>Welcome <small>{this.props.auth.name}</small></h1>
			</div>
			<div id="info" className="col s12">
				<div className="col s3">
					<img src="http://media.masslive.com/breakingnews/photo/2012/07/norrisjpg-02cf5b55dfb25bd6.jpg"/>
					<div className="col s12">
			<button className="btn btn-primary col s6" id="change-info-btn"><Link to="/home">Change Info</Link></button>
			<button className="btn btn-danger" id="exit-btn"><Link to="/home">Logout</Link></button>

	</div>
			</div>
			</div>	

				<div className="col s5">
					<table>
				<h4>Profile:</h4>

						  			<tr>
    				<th>Name:</th>
    			<td>{this.props.auth.name}</td>
  			</tr>
  			<tr>
    			<th>Email:</th>
    			<td>{this.props.auth.email}</td>
  			</tr>
  			<tr>
    			<th>Phone:</th>
    			<td>{this.props.auth.phone}</td>
  			</tr>

  			<tr>
    			<th>Address:</th>
   				<td >In Your Heart</td>
  			</tr>
  			<tr>
    			<th>City:</th>
   				<td >{this.props.auth.city}</td>
  			</tr>
  			<tr>
    			<th>State:</th>
   				<td >{this.props.auth.state}</td>
  			</tr>
  			<tr>
  				<th>Zipcode:</th>
  			<td>{this.props.auth.zipcode}</td>
			</tr>
	 

					<tr>
					
			<th>Insurance:</th>
			<td>{this.props.auth.insurance}</td>
		</tr>
		<tr>
			<th>Primary Care Physician:</th>
			<td>Dr.MARMADUKE</td>
		</tr>
	 
		
	</table>
			</div>	

		</div>
		</div>


	
			)

	}
};

function mapStateToProps(state){
	// state = RootReducer
	return{
		auth: state.auth,
		
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction,
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);