import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Caydens React Starter</h1>
        <h2>!Whats up ma Guys!</h2>
        <div class="date">
          {moment().format('MMMM Do YYYY, h:mm:ss a')};
        </div>
      </div>
    );
  }
}
