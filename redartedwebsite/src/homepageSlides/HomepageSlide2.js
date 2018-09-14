import React, { Component } from 'react';
import HomepageSlide1 from './HomepageSlide1';
import '../styles/content.css';

class HomepageSlide2 extends Component {
  static get title() {
    return 'What we do? -> GameJams!';
  }
  static get prev() {
    return HomepageSlide1;
  }
  static get next() {
    return null;
  }
  render() {
    return (
        <div className="row row-col row-center">
          <p>
            We make games: stupid, smart, good, bad, hard and casual.
          </p>
          <p>
            We want people to have fun playing them.
          </p>
          <p>
            We belive that a game can change one's live.
          </p>
          <p>  
            Chances are you find us sleeping on a game jam :)
          </p>
          <p>
            See our craps ->
          </p>
        </div>
    );
  }
}

export default HomepageSlide2;