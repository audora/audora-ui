import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/fp/merge';
import cn from 'classnames';
import Icon from '../icon';

import './content.scss';

const Content = ({
  alignItems,
  children,
  className,
  column,
  flex,
  full,
  justifyContent,
  loading,
  padding,
  style,
}) => (
  <div
    className={cn(
      "content",
      !full ? "content--width" : '',
      column && "content--column",
      padding && "content--padding",
      loading && "content--loading",
      className,
    )}
    style={merge(style, { alignItems, justifyContent, flex })}
  >
    {loading
      ? (<Icon name="loader" />)
      : children
    }
  </div>
);

Content.propTypes = {
  /**
   * Alinha os filhos na *vertical* quando o prop **column** não está definido e alinha na *horizontal* quando o prop **column** está definido.
   */
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]),
  /**
   * Renderiza um elemento.
   */
  children: PropTypes.node.isRequired,
  /**
   * Adiciona uma nova class para o Content.
   */
  className: PropTypes.string,
  /**
   * Ordena a direção do tipo **Column** (quando false, a direção é **row**).
   */
  column: PropTypes.bool,
  /**
   * Define o cumprimento do Content.
   */
  flex: PropTypes.number,
  /**
   * Define a largura como **100%** (quando false, a largura máxima é **1200px**).
   */
  full: PropTypes.bool,
  /**
   * Alinha os filhos na *horizontal* quando o prop **column** não está definido e alinha na *vertical* quando o prop **column** está definido.
   */
  justifyContent: PropTypes.string,
  /**
   * Adiciona um Loader ao content substituindo o filho.
   */
  loading: PropTypes.bool,
  /**
   * Define um padding de 10px;
   */
  padding: PropTypes.bool,
  /**
   * Adiciona estilo ao Content.
   */
  style: PropTypes.object,
};

Content.defaultProps = {
  alignItems: '',
  className: '',
  column: false,
  padding: false,
  flex: null,
  full: false,
  justifyContent: '',
  loading: false,
  style: {},
};

export default Content;
