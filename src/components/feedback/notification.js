import React, { Component } from 'react';
import Radium from 'radium';
import { zIndex, borderRadius, spacing, boxShadow } from '../../styles';
import PropTypes from 'prop-types';
import { Portal } from '../../utils';

const baseStyle = {
  ...borderRadius.BORDER_RADIUS_MD,
  ...boxShadow.BOX_SHADOW1,
  ...spacing.PADDING_XS,
  ...zIndex.Z_INDEX8,
  background: '#fff',
  position: 'fixed'
};

const positionStyles = {
  TL: {
    top: 25,
    left: 25
  },
  TC: {
    top: 25,
    left: '50%'
  },
  TR: {
    top: 25,
    right: 25
  },
  CL: {
    top: '50%',
    left: 25
  },
  CC: {
    top: '50%',
    left: '50%'
  },
  CR: {
    top: '50%',
    right: 25
  },
  BL: {
    bottom: 25,
    left: 25
  },
  BC: {
    bottom: 25,
    left: '50%'
  },
  BR: {
    bottom: 25,
    right: 25
  }
};

class Notification extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    position: PropTypes.oneOf([
      'TL',
      'TC',
      'TR',
      'CL',
      'CC',
      'CR',
      'BL',
      'BC',
      'BR'
    ])
  };

  static defaultProps = {
    duration: 1.5,
    visible: false,
    onClose: () => 0,
    position: 'BR'
  };

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  close = () => {
    this.clearCloseTimer();
    this.props.onClose();
  };

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  getContentStyle = position => {
    if (position === 'TC' || position === 'CC' || position === 'BC') {
      return { right: '50%' };
    }

    return {};
  };

  render() {
    const contentStyle = this.getContentStyle(position);
    const { visible, position } = this.props;

    if (visible) {
      return (
        <Portal
          render={
            <div style={[baseStyle, positionStyles[position]]}>
              <div style={contentStyle}>notification</div>
            </div>
          }
        />
      );
    }

    return <div />;
  }
}

Notification.new = function newNotification(properties, callback) {
  console.log(typeof properties);
  console.log(...props);
};

export default Radium(Notification);
