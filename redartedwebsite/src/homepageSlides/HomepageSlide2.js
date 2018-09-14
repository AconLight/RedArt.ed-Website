import React, { Component } from 'react';
import HomepageSlide1 from './HomepageSlide1';

class HomepageSlide2 extends Component {
  static get title() {
    return 'homepage-title2';
  }
  static get prev() {
    return HomepageSlide1;
  }
  static get next() {
    return null;
  }
  render() {
    return (
        <div>
            homepage slide 2 :D
        </div>
    );
  }
}

export default HomepageSlide2;