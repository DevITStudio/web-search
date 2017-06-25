import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Web Extractor</h2>
        </div>
        <p className="App-intro">
          Extract Information from Web
        </p>
<form onSubmit={this.handleSubmit} method="get" action="http://google.com/search">
<input type="text" name="query" value={this.state.value}onChange={this.handleChange}/>
<input type="submit" value="Google Search" />
</form>
</div>
    );
  }
handleChange(event) {
this.setState({value: event.target.value});
}

handleSubmit() {
var url = 'http://google.com/search?query='
var query = this.state.value;
alert(url + query);
}
}

export default App;
