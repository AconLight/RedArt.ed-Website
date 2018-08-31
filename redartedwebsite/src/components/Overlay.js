import React, { Component } from 'react';
import '../styles/overlay.css';
import LeftHeader from './LeftHeader';
import CenterHeader from './CenterHeader';

class Overlay extends Component {
  render() {
    return (
      <div className="Overlay-header">
        <div className="Overlay-leftHeader">
            <LeftHeader />
        </div>
        <div className="Overlay-centerHeader">
            <CenterHeader />
        </div>
      </div>
    );
  }
}

export default Overlay;