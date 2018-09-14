import React, { Component } from 'react';
import HomepageSlide2 from './HomepageSlide2';
import '../styles/content.css';

class HomepageSlide1 extends Component {
  static get title() {
    return 'Who we are? -> What we do?';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return HomepageSlide2;
  }
  render() {
    return (
      <div className="row row-col row-center">
        <p>
          So we are a team of students that like creating amazing things.
        </p>
        <p>
          If my mom says it's amazing, it must be amazing, right?
        </p>
      </div>
    );
  }
}

export default HomepageSlide1;