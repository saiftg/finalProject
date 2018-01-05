import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './containers/Register';
import Home from './containers/Home';
import Example from './containers/Search';
import $ from 'jquery';
// import Results from './containers/SearchResults';
import Login from './containers/Login';
import Profile from './containers/Profile';



class App extends Component {
	constructor(props){

    super(props);
    this.state = {
      movies: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
// handleSubmit(event){
//     event.preventDefault();
//     var value= "Deadpool";
//     var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value
//     $.getJSON(url,(movieSearchData)=>{
//       this.setState({
//         movies: movieSearchData.results
//       })
//       console.log(movieSearchData.results);
//     })
//     }	




  render() {
  	
    return (
    <Router>	
      <div className="App">
		  <NavBar />
		  <div className='app-body'>
		  <Route exact path='/register' component={Register} />
		  <Route exact path='/search' component={Example} />
		  <Route exact path='/login' component={Login} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/profile' component={Profile}/>

		  </div>
      </div>
      </Router>
    );
  } 
}

export default App;
