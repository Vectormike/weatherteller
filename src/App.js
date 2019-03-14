import React, { Component } from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


const api = '184eeddb6d9ee109f6cf62b5ddd96170';
var loc;

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      input: '',
      location: ''
    }
  
  }

  

  //Input from the form by the user sets to a state
  onInputChange = (e) => {
    this.setState({location: e.target.value})
  }

  //Button click picks location from its state and gets the weather
  onButtonSubmit = () => {
    loc = this.state.location
    console.log(loc)
  } 
  
  async componentDidMount(){
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${api}`)  
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      console.log(`Response goes here:`, data);
    } 
    catch(error) {
      console.log(error);
    } 
  }

  

  render() {
    return (
      <div className="App">
        <Title/>
        <Form 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Weather/>
      </div>
    );
  }
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?q=Uyo&APPID=60904ad34cc4a921e9b3bcaccc9529f4
