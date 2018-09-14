import React, { Component } from 'react';
import '../styles/centerheader.css'
import PropTypes from 'prop-types';
import Logo from './Logo';

const optionsNumber = 2;
let start, start2;
class CenterHeader extends Component {
  constructor(props) {
    super(props);
    start = true;
  }

  onClickErron = () => {
    this.props.onChangeTopic('erron');
  }

  onClickTetragonic = () => {
    this.props.onChangeTopic('tetragonic');
  }

  render() {
    let myChange = false;
    if (start) {
      myChange = true;
      start = false;
    }
    return (
      <div className="centerheader">
        <div className="centerheader-center">
            {
              <Logo 
                change={myChange || this.props.change}
                game={this.props.currentGame}
              />
            }
        </div>
        <div className="centerheader-right-triangle">
          <div className="centerheader-menu-button">
            <div>
              games ->
            </div>
            <div className="centerheader-menu-button-bar1">
            </div>
            <div className="centerheader-menu-button-bar2">
            </div>
            <div className="centerheader-menu-button-bar3">
            </div>
          </div>
          <div className="centerheader-menu">
            <div className="centerheader-right-triangle-on">
            </div>
            <div className="centerheader-menu-box">
            </div>
            <div className="centerheader-menu-box2">
            <div className="centerheader-center-inside-title-container">
              <img className="centerheader-center-inside-title" onClick={this.onClickErron} src={require('../assets/erron.png')}/>
            </div>
            <div className="centerheader-center-inside-title-container">
              <img className="centerheader-center-inside-title" onClick={this.onClickTetragonic} src={require('../assets/tetragonic.png')}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CenterHeader.propTypes = {
  onChangeTopic: PropTypes.function,
};

export default CenterHeader;