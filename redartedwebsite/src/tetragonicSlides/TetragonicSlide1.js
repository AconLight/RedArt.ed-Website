import React, { Component } from 'react';
import TetragonicSlide2 from './TetragonicSlide2';
import '../styles/content.css';

class TetragonicSlide1 extends Component {
  static get title() {
    return 'What is Tetragonic? -> Screenshots!';
  }
  static get prev() {
    return null;
  }
  static get next() {
    return TetragonicSlide2;
  }
  render() {
    return (
      <div className="row row-center full-height">
        <div>
        <img className="text-starting-img" src={require('../assets/tetragonic/5.jpg')} />
        </div>
        <div>
        <p>
          Quick idea, what if the blocks in tetris fell from all 4 sides of screen? That's what Tetragonic tries to implement.
        </p>
        <p>
          You can move your platform in 4 directions and rotate it by 90 degrees. Collect a whole frame of blocks so they can disappear and gain points!
        </p>
        <p>  
          see screenshots ->
        </p>
        </div>
      </div>
    );
  }
}

export default TetragonicSlide1;