import React from 'react';
import { Component } from 'react';
import Example from './Search';



class Results extends Component{
	constructor(){
		super();
		this.state = {
			doctors : []
		};
	}


	// componentDidMount(){
	// 	fetch(`https://api.betterdoctor.com/2016-03-01/doctors?insurance_uid=capitalbluecross-capitalbckeystonehealthplancentralhmo&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=b277ca758b6d6b1634f652b3010348e1`)
	// 	.then(results => {
	// 		return results.json();
	// 	}).then(data => {
	// 		// let doctors = data.results.map((doc)=>{
	// 		// 	return(
	// 		// 		<div key={doc.results}>
	// 		// 		{doc.results}
	// 		// 		</div>
	// 		// 		)
	// 		// })
	// 		this.setState({doctors : doctors});
	// 		console.log("state", this.state.doctors);
	// 	})
	// }




	render(){
		return(
			<div>
				<div>
				
				HELP!!!!
				</div>
			</div>
	
			);

	}
}


export default Results