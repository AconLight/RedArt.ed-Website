import React, { Component } from 'react';
import TetragonicSlide2 from './TetragonicSlide2';

class TetragonicSlide1 extends Component {
  static get title() {
    return 'tetragonic-title1';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return TetragonicSlide2;
  }
  render() {
    return (
        <div>
            tetragonic slide 1 :D
        </div>
    );
  }
}

export default TetragonicSlide1;