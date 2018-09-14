import React, { Component } from 'react';
import '../styles/overlay.css';
import LeftHeader from './LeftHeader';
import CenterHeader from './CenterHeader';

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Overlay-header">
        <div className="Overlay-leftHeader">
            <LeftHeader
            onChangeTopic={this.props.onChangeSlides}
             />
        </div>
        <div className="Overlay-centerHeader">
            <CenterHeader
              currentGame={this.props.slides}
              change={this.props.change}
              onChangeTopic={this.props.onChangeSlides}
              />
        </div>
      </div>
    );
  }
}

export default Overlay;