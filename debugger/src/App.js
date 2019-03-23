import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ""}
  }
  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
       .then(json => this.setState({title: json.tile}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js!!!</code> and save to reload.
          </p>
          <button onClick = {this.getData}>Get My Data</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h3>Data Says the title is:  {this.state.title}</h3>
        </header>
      </div>
    );
  }
}

export default App;
