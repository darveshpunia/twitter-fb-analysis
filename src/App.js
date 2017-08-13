import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Charts';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 4
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    let params = 'fields=friends{location,birthday,languages}';
    let access_token = 'EAACEdEose0cBAJkYV5hogUzIxCr2zw03JnxdvEUioxI1VdcWFnNyCx7UeSLPZAxUzxOcw1X0pGaAu3gzSckqAy8a4HZCgjvhtBcklAZARg39nBFyEF65HVcmZBXFuvaoeK9m6pQyfiSutIeFGEBu7MwqzNxqUJhIUyNJA48mZCboZB4AZAHrfFXLLpuA5stZA0q2GzpFeDRZAwgZDZD';
    axios.get('https://graph.facebook.com/1077164308964085/?'+params+'&access_token='+access_token)
      .then((response)=>{
        console.log(response.data.friends.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  render() {
    var data = [70, 25, 5];
    return (
      <div className="App">
        <Chart value={data}/>
      </div>
    );
  }
}

export default App;
