import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isEmpty from 'lodash/fp/isEmpty';

import imgDefault from './default.png';
import './avatar.scss';

const Avatar = ({
  onClick,
  className,
  size,
  img,
  square,
  name,
}) => (
  <div
    onClick={onClick}
    className={cn(
      "avatar",
      size !== "medium" && `avatar--${size}`,
      square && "avatar--square",
      className
    )}
    title={name || "Avatar"}
  >
    {isEmpty(img)
      ? name.substr(0, 2).toUpperCase()
      : (
        <span
          className="avatar-img"
          style={!isEmpty(img) ? {
            backgroundImage: `url(${img})`
          } : {
            backgroundImage: `url(${imgDefault})`
          }}
        />
      )
    }
  </div>
);

Avatar.propTypes = {
  /**
   * Titulo do elemento.
   */
  name: PropTypes.string,
  /**
   * URL da imagem do avatar.
   */
  img: PropTypes.string,
  /**
	 * Adicionar uma classe ao avatar.
   */
  className: PropTypes.string,
	/**
	 * Handler para ser chamado quando o botão for clicado.
	 */
  onClick: PropTypes.func,
  /**
   * Define o avatar como quadrado.
   */
  square: PropTypes.bool,
	/**
	 * Define os tamanhos dos avatares.
	 */
  size: PropTypes.oneOf([
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
  ]),
}

Avatar.defaultProps = {
  name: '',
  img: '',
  className: '',
  square: false,
  onClick: () => 0,
  size: 'medium',
}

export default Avatar;
