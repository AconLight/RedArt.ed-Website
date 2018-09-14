import React, { Component } from 'react';
import '../styles/page.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="Page-header">
            <div className="Page-header-left">
            </div>
            <div className="Page-header-center">
                Czym jest RedArt.ed games?
            </div>
        </div>
        <div className="Page">
            <div className="Page-content">
                Jesteśmy grupą "opóźnionych" artystów, którzy próbują robić gry.
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;