import React, { Component } from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


const API_KEY = '60904ad34cc4a921e9b3bcaccc9529f4';

class App extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Title/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?q=Uyo&APPID=60904ad34cc4a921e9b3bcaccc9529f4
