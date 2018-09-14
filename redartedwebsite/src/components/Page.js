import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Erron from './Erron';

class Page extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Erron currentGame={this.props.slides} />
      </div>
    );
  }
}

export default Page;