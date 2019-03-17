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
      input: '',
      location: ''
    }
  
  }
J
  //Input from the form by the user sets to a state
  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  //Button click picks location from its state and gets the weather
  onButtonSubmit = (e) => {
    this.setState({location: this.state.input}, () =>
    console.log(this.state.location))
  } 
  
  
  async componentDidMount(){
    
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
