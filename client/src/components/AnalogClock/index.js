import React, { Component } from 'react';
import Clock from 'react-clock';
import './style.css'

class AnalogClock extends Component {
  
  state = {
    date: new Date(),
  }
 
  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
 
  render() {
    return (
      <>
        <Clock value={this.state.date} size={200}/>
      </>
    );
  }
}

export default AnalogClock;