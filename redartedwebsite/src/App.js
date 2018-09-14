import React, { Component } from 'react';
import './App.css';
import './styles/page.css'
import './styles/overlay.css'
import Overlay from './components/Overlay';
import Page from './components/Page';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      slides: '',
      change: false,
    };
    this.onChangeSlides = this.onChangeSlides.bind(this);
  }

  videoURL = 'https://video-frt3-2.xx.fbcdn.net/v/t42.1790-2/24194381_148344699145843_116900845064290304_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&oh=b8faece499e31ffd33a021e8094c1b93&oe=5B897465';

  onChangeSlides = (slides) => {
    this.setState({
      ...this.state,
      change: true,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        slides,
        change: false,
      });
    }, 250);
    
  }

  render() {
    return (
      <div className="App">
        <video id="background-video" loop autoPlay muted>
          <source src={this.videoURL} type="video/mp4" />
          <source src={this.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="Overlay-over">
          <div className="Overlay">
            <Overlay onChangeSlides={this.onChangeSlides} slides={this.state.slides} change={this.state.change}/>
          </div>
          <div className="Page-main">
            <Page slides={this.state.slides}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
