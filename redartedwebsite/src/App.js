import React, { Component } from 'react';
import './App.css';
import './styles/page.css'
import './styles/overlay.css'
import Overlay from './components/Overlay';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Page />
        </div>
        <div className="Overlay">
          <Overlay />
        </div>
      </div>
    );
  }
}

export default App;
