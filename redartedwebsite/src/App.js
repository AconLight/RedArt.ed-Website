import React, { Component } from 'react';
import './App.css';
import './styles/page.css'
import './styles/overlay.css'
import Cover from './components/Cover';
import Overlay from './components/Overlay';
import Page from './components/Page';
import ReactPlayer from 'react-player'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      slides: '',
      change: false,
      videoCover: true,
    };
    this.onChangeSlides = this.onChangeSlides.bind(this);
    setTimeout(() => {
      this.setState({
        ...this.state,
        videoCover: false,
      });
    }, 3000);
  }

  videoUrlYt = 'https://youtu.be/-AnQJYyu-k8';
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
    let height2 = window.screen.width*224.0/398.0;
    let width2 = window.screen.width;
    if (height2 < window.screen.height) {
      height2 = window.screen.height;
      width2 = height2*398.0/224.0;
    }

    return (
      <div className="App">
        <div className="bg-vid">
          <ReactPlayer
            url={this.videoUrlYt}
            playing
            loop
            muted
            height={height2}
            width={width2}
            config={{
              youtube: {
                playerVars: { controls: 0, disablekb: 1, iv_load_policy: 3, modestbranding: 0 }
              },
            }}
          />
        </div>
        <Cover cover={this.state.videoCover} />
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
