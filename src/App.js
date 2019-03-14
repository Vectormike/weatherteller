import React, { Component } from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


const api = '60904ad34cc4a921e9b3bcaccc9529f4';

class App extends Component {

  state = {
    input: '',
    location: ''
  }

  //Input from the form by the user sets to a state
  onInputChange = (e) => {
    console.log(e.target.value)
    this.setState({location: e.target.value})
  }

  //Button click picks location from its state and gets the weather
  onButtonSubmit = (e) => {
    console.log(e.target.value)
    
  } 

  render() {
    return (
      <div className="App">
        <Title/>
        <Form 
        onInputChange={this.onInputChange}/>
        <Weather/>
      </div>
    );
  }
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?q=Uyo&APPID=60904ad34cc4a921e9b3bcaccc9529f4
