import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
getWeather = async (e)=>{
  e.preventDefault();
  const city = e.target[0].value
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=924ae961640b41306a47c0e47cf70843`);
  console.log(response);
}
  render(){
    return(
      <div className='App'>
        {
          <form onSubmit={this.getWeather}>
          <input type="text" placeholder='enter your city' id='ii'/>
          <br/>
          <input type="submit" value='get weather'/>
          </form>
        }
      </div>
    );
  }
}

export default App;
