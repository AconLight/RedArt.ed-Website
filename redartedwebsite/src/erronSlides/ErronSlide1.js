import React, { Component } from 'react';
import ErronSlide2 from './ErronSlide2';

class ErronSlide1 extends Component {
  static get title() {
    return 'What is Erron? -> Devlog';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return ErronSlide2;
  }
  render() {
    return (
      <div className="row row-center full-height">
        <div>
        <p>
          Erron is the project that we are currently working on.
          A puzzle-platformer with unique time travel mechanic and great story.
          Messing with time, unraveling the past of the protagonist and remeding his life during great adventure with perfect music and storytelling.
        </p>
        <p>  
          see devlog ->
        </p>
        </div>
      </div>
    );
  }
}

export default ErronSlide1;