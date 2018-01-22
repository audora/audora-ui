import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import { spacing, borderRadius } from '../../styles';
import { lighten, colorContrast } from '../../utils';
import Icon from './icon';

const baseStyles = {
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  MozOsxFontSmoothing: 'grayscale',
  transition: 'background-color .1s',
  userSelect: 'none',
  verticalAlign: 'middle',
  alignItems: 'center',
  position: 'relative',
  backgroundImage: 'none',
  ...borderRadius.BORDER_RADIUS_MD,
  display: 'inline-flex',
  touchAction: 'manipulation',
  WebkitFontSmoothing: 'antialiased',
  whiteSpace: 'nowrap',

  ':focus': {
    outline: 'none'
  }
};

const sizeStyles = {
  tiny: {
    ...spacing.PADDING_X_XS,
    height: 24,
    fontSize: 11,
    textTransform: 'uppercase'
  },
  small: {
    ...spacing.PADDING_X_XS,
    fontSize: 12,
    height: 28
  },
  medium: {
    ...spacing.PADDING_X_SM,
    fontSize: 14,
    height: 36
  },
  large: {
    ...spacing.PADDING_X_MD,
    fontSize: 16,
    height: 42
  },
  full: {
    width: '100%',
    justifyContent: 'center'
  }
};

const getTypeStyles = ({ colors }) => ({
  primary: {
    backgroundColor: colors.primary,
    color: '#fff',

    ':hover': {
      backgroundColor: colors.primaryHover
    },
    ':active': {
      backgroundColor: colors.primaryActive
    }
  },
  default: {
    backgroundColor: colors.default,
    color: '#555',

    ':hover': {
      backgroundColor: colors.defaultHover
    },
    ':active': {
      backgroundColor: colors.defaultActive
    }
  },
  subtle: {
    backgroundColor: 'transparent',
    color: '#555',

    ':hover': {
      backgroundColor: colors.default
    },
    ':active': {
      backgroundColor: lighten(colors.primary, 40),
      color: colors.primary
    }
  },
  link: {
    backgroundColor: 'transparent',
    color: colors.primary,
    ...spacing.PADDING_X_XS,
    height: 24,

    ':hover': {
      textDecoration: 'underline'
    },
    ':focus': {
      textDecoration: 'underline'
    }
  },
  icon: {
    ...spacing.PADDING_X_XS
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'default'
  },
  loading: {
    color: '#333',
    pointerEvents: 'none',
    cursor: 'default'
  },
  loadingContent: {
    backgroundColor: colors.default,
    ...borderRadius.BORDER_RADIUS_MD,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Button = props => {
  const typeStyles = getTypeStyles(props.theme);
  const ElementType = props.href ? 'a' : 'button';

  const finalProps = {
    href: props.href ? props.href : '#',
    target: props.href && props.target && props.target,
    style: [
      baseStyles,
      sizeStyles[props.size],
      typeStyles[props.type],
      props.disabled && typeStyles.disabled,
      props.icon && !props.content && typeStyles.icon,
      props.loading && props.type !== 'link' && typeStyles.loading,
      props.full && sizeStyles.full,
      props.style
    ],
    onClick: e => {
      if (props.disabled || props.loading) {
        e.preventDefault();
        return;
      }

      props.onClick(e, props);
    }
  };

  if (props.href) {
    finalProps.href = props.href;
  }

  if (props.icon && !props.content) {
    return (
      <ElementType {...finalProps}>
        {props.loading && (
          <span style={typeStyles.loadingContent}>
            <Icon name="loader" size="small" spin />
          </span>
        )}
        <Icon name={props.icon} size="small" />
      </ElementType>
    );
  }

  if (props.icon && props.content && props.iconPosition === 'left') {
    return (
      <ElementType {...finalProps}>
        {props.loading && (
          <span style={typeStyles.loadingContent}>
            <Icon name="loader" size="small" spin />
          </span>
        )}
        <Icon name={props.icon} size="small" />
        <span style={{ ...spacing.MARGIN_RIGHT_XS }} />
        {props.content}
      </ElementType>
    );
  }

  if (props.icon && props.content && props.iconPosition === 'right') {
    return (
      <ElementType {...finalProps}>
        {props.loading && (
          <span style={typeStyles.loadingContent}>
            <Icon name="loader" size="small" spin />
          </span>
        )}
        {props.content}
        <span style={{ ...spacing.MARGIN_LEFT_XS }} />
        <Icon name={props.icon} size="small" />
      </ElementType>
    );
  }

  return (
    <ElementType {...finalProps}>
      {props.loading && (
        <span style={typeStyles.loadingContent}>
          <Icon name="loader" size="small" spin />
        </span>
      )}
      {props.content}
    </ElementType>
  );
};

Button.propTypes = {
  /**
   * Text to be rendered.
   */
  content: PropTypes.string,
  /**
   * Provide a URL to the buttons when with the `link` type.
   */
  href: PropTypes.string,
  /**
   * Pass the target to a link within the component, if href is provided.
   */
  target: PropTypes.string,
  /**
   * Adds an icon to the button.
   */
  icon: PropTypes.string,
  /**
   * Chooce the side of the icon.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Type of button.
   */
  type: PropTypes.oneOf(['primary', 'default', 'subtle', 'link']),
  /**
   * Button desiabled.
   */
  loading: PropTypes.bool,
  /**
   * Button loading.
   */
  disabled: PropTypes.bool,
  /**
   * Handler to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Sizes of buttons.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Width 100%.
   */
  full: PropTypes.bool,
  /**
   * Optitional style replacement.
   */
  style: PropTypes.object,
  /**
   * Props of theme provided by `Themer`.
   */
  theme: themePropTypes
};

Button.defaultProps = {
  content: '',
  disabled: false,
  full: false,
  href: '',
  icon: '',
  iconPosition: 'left',
  loading: false,
  onClick: () => 0,
  size: 'medium',
  style: {},
  target: '',
  type: 'default'
};

export default withTheme(Radium(Button));
