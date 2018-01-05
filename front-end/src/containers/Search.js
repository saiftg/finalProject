import Autosuggest from 'react-autosuggest';
import React from 'react'
import Insurance from './Insurance'
import Specialties from './Specialties'
import $ from 'jquery'
 
// Imagine you have a list of languages that you'd like to autosuggest. 
const insurance = Insurance
 

console.log(insurance);
 
// Teach Autosuggest how to calculate suggestions for any given input value. 
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : insurance.filter(lang =>
    lang.Network.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input 
// based on the clicked suggestion. Teach Autosuggest how to calculate the 
// input value for every given suggestion. 
const getSuggestionValue = suggestion => suggestion.Network;
 
// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div>
    {suggestion.Network}

  </div>
);
 
class Example extends React.Component {
  constructor() {
    super();
 
    // Autosuggest is a controlled component. 
    // This means that you need to provide an input value 
    // and an onChange handler that updates this value (see below). 
    // Suggestions also need to be provided to the Autosuggest, 
    // and they are initially empty because the Autosuggest is closed. 
    this.state = {
      value: '',
      specialty: '',
      suggestions: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
 
  onChange = (event, { newValue, specialty }) => {
    this.setState({
      value: newValue,
      specialty: specialty
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // handleSubmit(event){
  //   event.preventDefault();
  //   // var value= "Deadpool";
    // var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value
    // $.getJSON(url,(movieSearchData)=>{
    //   this.setState({
    //     movies: movieSearchData.results
    //   })
    //   console.log(movieSearchData.results);
    // })
    // } 

  handleSubmit(event){
  	event.preventDefault()
    var zip = event.target[0].value;
    var ins = event.target[1].value;
    var spec = event.target[2].value;

   for (let i=0; i<= Insurance.length; i++){

        
        
        
        if(ins === Insurance[i].Network){
          var insurance = ins;
          console.log(insurance);
          break
          
        }
      }
    
    var url= `https://api.betterdoctor.com/2016-03-01/doctors?insurance_uid=${insurance}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=b277ca758b6d6b1634f652b3010348e1`;
    $.getJSON(url,(doctorData)=>{
      this.setState({
        doctors: doctorData.results
      })
      
      console.log(doctorData);
    })

    	}

    	
    	
    

   
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input. 
    const inputProps = {

      placeholder: 'Insurance...',
      value,
      onChange: this.onChange
    };


 // console.log(Specialties)
    // Finally, render it! 

    return (
<div className="container col s12">
    <form className="search-box z-depth-5" onSubmit={this.handleSubmit}>


    	<input type="text" id="location-search" className="search-input col s3" placeholder="Location..." />
    
    	
      <Autosuggest id="Auto" className="col s3"
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}

      />
      <Specialties id="test"/>
      <button type="submit" className="btn btn-primary  pulse">Search</button>

      </form>
      </div>


    );
  }
}


export default Example