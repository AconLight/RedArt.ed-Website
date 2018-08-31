import React, { Component } from 'react';
import '../styles/centerheader.css'
class CenterHeader extends Component {
  render() {
    return (
      <div className="centerheader">
        <div className="centerheader-center">
          <div className="centerheader-center-inside">
            <div className="centerheader-center-inside-title">
              Erron
            </div>
            <div className="centerheader-center-inside-title">
            Tetragonic
            </div>
          </div>
        </div>
        <div className="centerheader-right-triangle">
        </div>
      </div>
    );
  }
}

export default CenterHeader;