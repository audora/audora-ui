import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import { normalize, globalTheme } from './index';

const getFonts = assetsUrl => {
  return `@font-face{
      font-family:Nunito;
      src:url('${assetsUrl}/Nunito/Nunito-Light.ttf') format("truetype");
      font-weight:300;
      font-style:normal
    }
    @font-face{
      font-family:Nunito;
      src:url('${assetsUrl}/Nunito/Nunito-Regular.ttf') format("truetype");
      font-weight:400;
      font-style:normal
    }
    @font-face{
      font-family:Nunito;
      src:url('${assetsUrl}/Nunito/Nunito-SemiBold.ttf') format("truetype");
      font-weight:500;
      font-style:normal
    }
    @font-face{
      font-family:Nunito;
      src:url('${assetsUrl}/Nunito/Nunito-Bold.ttf') format("truetype");
      font-weight:700;
      font-style:normal
    }
    @font-face{
      font-family:Nunito;
      src:url('${assetsUrl}/Nunito/Nunito-Black.ttf') format("truetype");
      font-weight:900;
      font-style:normal
    }`;
};

let fontLoaded = false;

const writeFonts = assetsUrl => {
  // if on server, just return
  if (typeof window === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = getFonts(assetsUrl);
  document.head.appendChild(style);
};

class Styles extends Component {
  static propTypes = {
    assetsUrl: PropTypes.string.isRequired
  };

  componentWillMount() {
    if (fontLoaded) {
      return;
    }

    writeFonts(this.props.assetsUrl);
    fontLoaded = true;
  }

  render() {
    return <Style rules={Object.assign({}, normalize, globalTheme)} />;
  }
}

export default Radium(Styles);
