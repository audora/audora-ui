import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import responsive from '../../styles/responsive';
import { supportsCSSGrid } from '../../utils/detectFeature';

const { columnWidth } = responsive;

const getLecacySizedStyles = sizes => {
  return {
    display: 'inline-block',

    [responsive.xs]: {
      display: 'block',
      width: '100%'
    },

    [responsive.sm]: {
      width: `${(sizes.sm || 1) * columnWidth}px`
    },

    [responsive.md]: {
      width: `${(sizes.md || sizes.sm || 1) * columnWidth}px`
    },

    [responsive.mdLg]: {
      width: `${(sizes.mdLg || sizes.md || sizes.sm || 1) * columnWidth}px`
    },

    [responsive.lg]: {
      width: `${(sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1) *
        columnWidth}px`
    },

    [responsive.xl]: {
      width: `${(sizes.xl ||
        sizes.lg ||
        sizes.mdLg ||
        sizes.md ||
        sizes.sm ||
        1) * columnWidth}px`
    }
  };
};

const getSizedStyles = sizes => {
  return {
    [responsive.sm]: {
      gridColumn: `span ${sizes.sm || 1}`
    },

    [responsive.md]: {
      gridColumn: `span ${sizes.md || sizes.sm || 1}`
    },

    [responsive.mdLg]: {
      gridColumn: `span ${sizes.mdLg || sizes.md || sizes.sm || 1}`
    },

    [responsive.lg]: {
      gridColumn: `span ${sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1}`
    },

    [responsive.xl]: {
      gridColumn: `span ${sizes.xl ||
        sizes.lg ||
        sizes.mdLg ||
        sizes.md ||
        sizes.sm ||
        1}`
    }
  };
};

const Column = props => {
  const { sizes } = props;

  if (props.sizes.xs) {
    console.warn(
      'Support of size xs passed to column!',
      'This will be ignored. All columns in the xs screen size are full width. ',
      'Remove this setting. Approved sizes: ',
      props.sizes
    );
  }

  const styles = supportsCSSGrid()
    ? getSizedStyles(sizes)
    : getLecacySizedStyles(sizes);

  return <div style={[styles, props.style]}>{props.children}</div>;
};

Column.propTypes = {
  /**
   * Object where the keys are breakpoint and the value is the number of columns
   * to be hit at that breakpoint.
   * */
  sizes: PropTypes.shape({
    xs: PropTypes.number, // nunca deve ser passado
    sm: PropTypes.number,
    md: PropTypes.number,
    mdLg: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }),
  /**
   * Props of theme provided by `Themer`.
   */
  style: PropTypes.object
};

Column.defaultProps = {
  sizes: {}
};

export default Radium(Column);
