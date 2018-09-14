import React, { Component } from 'react';
import TetragonicSlide1 from './TetragonicSlide1';

class TetragonicSlide2 extends Component {
  static get title() {
    return 'tetragonic-title2';
  }
  static get prev() {
    return TetragonicSlide1;
  }
  static get next() {
    return null;
  }
  render() {
    return (
        <div>
            tetragonic slide 2 :D
        </div>
    );
  }
}

export default TetragonicSlide2;