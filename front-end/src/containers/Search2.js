import Autosuggest from 'react-autosuggest';
import React from 'react'
import Insurance from './Insurance'
import Specialty from './Specialties'
 
// Imagine you have a list of languages that you'd like to autosuggest. 
const insurance = Insurance
const specialty = Specialty
 

// console.log(insurance);
 
// Teach Autosuggest how to calculate suggestions for any given input value. 
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : insurance.filter(lang =>
    lang.Network.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 
const getSuggestions2 = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : specialty.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
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

const getSuggestionValue2 = suggestion2 => suggestion2.name;
 
// Use your imagination to render suggestions. 
const renderSuggestion2 = suggestion2 => (
  <div>
    {suggestion2.name}

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
      suggestions: [],
      suggestions2: []
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

  onSuggestionsFetchRequested2 = ({ value }) => {
    this.setState({
      suggestions2: getSuggestions2(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested2 = () => {
    this.setState({
      suggestions2: []
    });
  };
  handleSubmit(event){
  	event.preventDefault()
      console.log(this.state.value);
      console.log(this.state.specialty);
    	for (let i=0; i<= Insurance.length; i++){

    		
    		
    		
    		if(this.state.value === Insurance[i].Network){
    			console.log(Insurance[i].uid)
    			break
    			
    		}
    	}


    	
    	
    }

   
 
  render() {
    const { value, specialty, suggestions, suggestions2 } = this.state;
 
    // Autosuggest will pass through all these props to the input. 
    const inputProps = {

      placeholder: 'Insurance...',
      value,
      specialty,
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
      <Autosuggest  id="test" className="col 6" 
        suggestions={suggestions2}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested2}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested2}
        getSuggestionValue={getSuggestionValue2}
        renderSuggestion={renderSuggestion2}
        inputProps={inputProps}

      />
{/*      <Specialties id="test"/>
*/}      <button type="submit" className="btn btn-primary  pulse">Search</button>

      </form>
      </div>


    );
  }
}


export default Example