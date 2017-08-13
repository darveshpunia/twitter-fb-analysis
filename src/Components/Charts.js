import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      ChartData: {
        labels: ['one', 'two', 'three'],
        datasets: [
          {
            label: 'Population',
            data:this.props.value,
            backgroundColor:[
              'red',
              'green',
              'indigo',
              'steelblue'
            ]
          }
        ]
      }
    }
  }
  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.ChartData}
          width = {400}
          height = {400}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Chart;
