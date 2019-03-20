import React, { Component } from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


const api = '184eeddb6d9ee109f6cf62b5ddd96170';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      input: ``,
      weather: [],
      wind: {},
      sys: {},
      name: ``
    }
  }

 
  getWeather = async (location) => {
    try {	
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api}`)  
      const data = await res.json();	
      console.log(`Response goes here:`, data);	
      this.setState({
        weather: data.weather,
        wind: data.wind,
        sys: data.sys,
        name: data.name
      })
      console.log(this.state.weather)
   
    } 	
    catch(error) {	
     console.log(error);	
   } 
  }



  //Input from the form by the user sets to a state
  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  //Button click picks location from its state and gets the weather
  onButtonSubmit = () => {
    this.getWeather(this.state.input)
  } 
  

  componentDidMount(){
    this.getWeather();
  }
  
  

  render() {
    return (
      <div className="App">
        <Title/>
        <Form 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          weather={this.state.weather}
          degree={this.state.wind}
          country={this.state.sys}
          city={this.state.name}
        />
        <Weather/>
      </div>
    );
  }
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?q=Uyo&APPID=60904ad34cc4a921e9b3bcaccc9529f4
