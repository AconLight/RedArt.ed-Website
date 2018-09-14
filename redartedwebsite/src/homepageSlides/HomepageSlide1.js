import React, { Component } from 'react';
import HomepageSlide2 from './HomepageSlide2';

class HomepageSlide1 extends Component {
  static get title() {
    return 'homepage-title1';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return HomepageSlide2;
  }
  render() {
    return (
        <div>
            homepage slide 1 :D
        </div>
    );
  }
}

export default HomepageSlide1;