import React, { Component } from 'react';
import ErronSlide1 from '../erronSlides/ErronSlide1';

class ErronSlide2 extends Component {
  static get title() {
    return 'erron-title2';
  }
  static get prev() {
    return ErronSlide1;
  }
  static get next() {
    return null;
  }
  render() {
    return (
        <div>
            erron slide 2 :D
        </div>
    );
  }
}

export default ErronSlide2;