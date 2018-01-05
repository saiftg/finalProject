import Autosuggest from 'react-autosuggest';
import React from 'react'
import Specialty from './Specialty'
 
// Imagine you have a list of languages that you'd like to autosuggest. 
const specialty = Specialty
 


 
// Teach Autosuggest how to calculate suggestions for any given input value. 
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : specialty.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input 
// based on the clicked suggestion. Teach Autosuggest how to calculate the 
// input value for every given suggestion. 
const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}

  </div>
);
 
class Specialties extends React.Component {
  constructor() {
    super();
 
    // Autosuggest is a controlled component. 
    // This means that you need to provide an input value 
    // and an onChange handler that updates this value (see below). 
    // Suggestions also need to be provided to the Autosuggest, 
    // and they are initially empty because the Autosuggest is closed. 
    this.state = {
      value: '',

      suggestions: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
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
  handleChange(event){
  	// event.preventDefault()
    
    	for (let i=0; i<= Specialty.length; i++){
    		
    		
    		
    		if(this.state.value === Specialty[i].name){
    			console.log(Specialty[i].uid);
          console.log(this.props);
    			break
    		}
    	}
    	
    }
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input. 
    const inputProps = {

      placeholder: 'Specialty...',
      value,
      onChange: this.onChange
    };



    // Finally, render it! 

    return (

    
    	

    	
      <Autosuggest onSubmit={this.handleChange} id="test" className="col 6" 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}

      />
      

    

    );
  }
}



export default Specialties
