import React, { Component } from 'react';
import '../styles/page.css';
import '../styles/slide.css';
import PageContentSlideWrapper from './PageContentSlideWrapper';
import ErronSlide1 from '../erronSlides/ErronSlide1';
import PropTypes from 'prop-types';
import HomepageSlide1 from '../homepageSlides/HomepageSlide1';
import TetragonicSlide1 from '../tetragonicSlides/TetragonicSlide1';

const erronSlides = [];
const tetragonicSlides = [];
const homepageSlides = [];

function addErronSlide(component) {
  erronSlides.push({ component, title: component.title });
}

function addHomepageSlide(component) {
  homepageSlides.push({ component, title: component.title });
}

function addTetragonicSlide(component) {
  tetragonicSlides.push({ component, title: component.title });
}

class Erron extends Component {
  constructor(props) {
    super(props);
    let slide = HomepageSlide1;
    addHomepageSlide(slide);
    while (slide.next) {
        slide = slide.next;
        addHomepageSlide(slide);
    }

    slide = ErronSlide1;
    addErronSlide(slide);
    while (slide.next) {
        slide = slide.next;
        addErronSlide(slide);
    }

    slide = TetragonicSlide1;
    addTetragonicSlide(slide);
    while (slide.next) {
        slide = slide.next;
        addTetragonicSlide(slide);
    }
    if (this.props.currentGame === 'erron') {
      this.state = {
        slide: erronSlides[0],
        currentSlides: erronSlides,
      };
    } else if (this.props.currentGame === 'tetragonic') {
      this.state = {
        slide: tetragonicSlides[0],
        currentSlides: tetragonicSlides,
      };
    } else {
      this.state = {
        slide: homepageSlides[0],
        currentSlides: homepageSlides,
      };
    }
  }

  onNext = () => {
    if (this.state.slide.component.next)
    {
        this.setState({
            slide: { component: this.state.slide.component.next, title: this.state.slide.component.next.title },
            currentSlides: this.state.currentSlides,
        });
    }
  }

  onPrev = () => {
    if (this.state.slide.component.prev)
    {
        this.setState({
            slide: { component: this.state.slide.component.prev, title: this.state.slide.component.prev.title },
            currentSlides: this.state.currentSlides,
        });
    }
  }

  render() {
    if (this.props.currentGame === 'erron') {
      if (this.state.currentSlides != erronSlides) {
        this.state = {
          slide: erronSlides[0],
          currentSlides: erronSlides,
        };
      }
    } else if (this.props.currentGame === 'tetragonic') {
      if (this.state.currentSlides != tetragonicSlides) {
        this.state = {
          slide: tetragonicSlides[0],
          currentSlides: tetragonicSlides,
        };
      }
    } else {
      if (this.state.currentSlides != homepageSlides) {
        this.state = {
          slide: homepageSlides[0],
          currentSlides: homepageSlides,
        };
      }
    }
    const currentSlide = this.state.slide;
    return (
        <div className="slide-row">
          <div className="left-arrow" onClick={this.onPrev}>
          </div>
          <div className="slide">
            {PageContentSlideWrapper( currentSlide.component, currentSlide.title )}
         </div>
         <div className="right-arrow" onClick={this.onNext}>
          </div>
        </div>
    );
  } 
}

Erron.propTypes = {
  currentGame: PropTypes.string,
};

export default Erron;