import React, { Component } from 'react';
import ErronSlide2 from './ErronSlide2';

class ErronSlide1 extends Component {
  static get title() {
    return 'erron-title1';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return ErronSlide2;
  }
  render() {
    return (
        <div>
            erron slide 1 :D
        </div>
    );
  }
}

export default ErronSlide1;