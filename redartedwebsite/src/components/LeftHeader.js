import React, { Component } from 'react';
import '../styles/leftheader.css'
class LeftHeader extends Component {
  render() {
    return ( 
      <div>
        <div className="leftheader">
          <div>
            <img class="leftheader-img" src={require('../assets/LOGO_male.png')} />
          </div>
          <div className="leftheader-media">
              <a className="leftheader-fb" href="https://www.facebook.com/RedArted/" target="_blank">
                  facebook
              </a>
              <a className="leftheader-twitter" href="https://twitter.com/RedArt_edGames" target="_blank">
                  twitter
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftHeader;