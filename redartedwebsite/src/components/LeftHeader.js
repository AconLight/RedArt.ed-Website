import React, { Component } from 'react';
import '../styles/leftheader.css'
class LeftHeader extends Component {
  onClickHomepage = () => {
    this.props.onChangeTopic('');
  }

  render() {
    return ( 
      <div>
        <div className="leftheader">
          <div>
            <img class="leftheader-img" src={require('../assets/LOGO_male.png')} onClick={this.onClickHomepage}/>
          </div>
          <div className="leftheader-media">
            <div className="leftheader-media-inside">
              <a className="leftheader-media-icon-container" href="https://www.facebook.com/RedArted/" target="_blank">
                <img className="leftheader-media-icon" src={require('../assets/fb.png')} />
              </a>
              <a className="leftheader-media-icon-container" href="https://twitter.com/RedArt_edGames" target="_blank">
                <img className="leftheader-media-icon-bigger" src={require('../assets/twitter.png')} />
              </a>
            </div>
            <div className="leftheader-media-inside">
              <a className="leftheader-media-icon-container" href="https://www.instagram.com/redart.edgames/" target="_blank">
                <img className="leftheader-media-icon" src={require('../assets/instagram.png')} />
              </a>
              <a className="leftheader-media-icon-container" href="https://twitter.com/RedArt_edGames" target="_blank">
                <img className="leftheader-media-icon" src={require('../assets/youtube.png')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftHeader;