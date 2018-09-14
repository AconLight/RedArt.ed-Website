import React from 'react';
import '../styles/centerheader.css'
import PropTypes from 'prop-types';

const Logo = ({change, game}) => {
  const componentClasses1 = ['centerheader-img'];
  if (change) { componentClasses1.push('change'); }

  const componentClasses2 = ['centerheader-img'];
  if (change) { componentClasses2.push('change'); }

  const componentClasses3 = ['centerheader-img'];
  if (change) { componentClasses3.push('change'); }

  const componentClasses1link = ['centerheader-logo-link'];
  if (change) { componentClasses1link.push('change'); }

  const componentClasses2link = ['centerheader-logo-link'];
  if (change) { componentClasses2link.push('change'); }

  const componentClasses3link = ['centerheader-logo-link'];
  if (change) { componentClasses3link.push('change'); }
  
  let currentGame;
  if (game == 'erron') { componentClasses1.push('visible'); componentClasses1link.push('visible'); }
  else if (game == 'tetragonic') { componentClasses2.push('visible'); componentClasses2link.push('visible'); }
  else { componentClasses3.push('visible'); componentClasses3link.push('visible'); }

  return (
    <div className="centerheader-center-inside">
        <img class={componentClasses1.join(' ')} src={require('../assets/erron.png')}/>
        <img class={componentClasses2.join(' ')} src={require('../assets/tetragonic.png')}/>
        <a className="centerheader-logo-link-a" href="https://play.google.com/store/apps/details?id=com.redartedgames.tetragonic" target="_blank">
          <img class={componentClasses1link.join(' ')} src={require('../assets/erron_get.png')}/>
        </a>
        <a className="centerheader-logo-link-a" href="https://play.google.com/store/apps/details?id=com.redartedgames.tetragonic" target="_blank">
          <img class={componentClasses2link.join(' ')} src={require('../assets/tetragonic_get.png')}/>
        </a>
    </div>
  );
};

Logo.propTypes = {
    change: PropTypes.bool.isRequired,
    game: PropTypes.string
};

export default Logo;