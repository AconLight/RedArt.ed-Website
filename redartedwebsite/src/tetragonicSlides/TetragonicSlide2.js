import React, { Component } from 'react';
import TetragonicSlide1 from './TetragonicSlide1';
import Gallery from 'react-photo-gallery';

class TetragonicSlide2 extends Component {
  static get title() {
    return 'Screenshots! -> Gameplay';
  }
  static get prev() {
    return TetragonicSlide1;
  }
  static get next() {
    return null;
  }
  render() {
    return (
      <Gallery photos={PHOTO_SET} className="gallery-img"
        margin={0.5*window.screen.width/100}
      />
    );
  }
}

const PHOTO_SET = [
  {
    src: require('../assets/tetragonic/5.jpg'),
    width: 1,
    height: 1.8
  },
  {
    src: require('../assets/tetragonic/6.png'),
    width: 1,
    height: 1.8
  },
  {
    src: require('../assets/tetragonic/1.png'),
    width: 1,
    height: 1
  },
  {
    src: require('../assets/tetragonic/2.png'),
    width: 1,
    height: 1
  },
  {
    src: require('../assets/tetragonic/3.png'),
    width: 1,
    height: 1
  },
  {
    src: require('../assets/tetragonic/4.png'),
    width: 1,
    height: 1
  },
];

export default TetragonicSlide2;