import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './button.scss';

const Button = ({
	className,
	content,
	disabled,
	loading,
	onClick,
	style,
	type,
}) => (
	<button
		className={cn(
			"button",
			(loading && (type !== 'link' || !disabled)) && 'button--loading',
			disabled && 'button--disabled',
			type === 'primary' && 'button--primary',
			type === 'link' && "button--link",
			className
		)}
		style={style}
		onClick={onClick}
	>
		{content}
	</button>
);

Button.propTypes = {
	/**
	 * Pode renderizar um texto ou um elemento.
	 */
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	/**
	 * Adicionar uma classe ao botão.
	 */
	className: PropTypes.string,
	/**
	 * O estilo básico para aplicar ao botão.
	 */
	type: PropTypes.oneOf([
		'primary',
		'default',
		'link'
	]),
	/**
	 * Define o botão como desabilitado.
	 */
	loading: PropTypes.bool,
	/**
	 * Define o botão como carregando.
	 */
	disabled: PropTypes.bool,
	/**
	 * Handler para ser chamado quando o botão for clicado.
	 */
	onClick: PropTypes.func,
}

Button.defaultProps = {
	type: 'default',
	className: '',
	content: "Button",
	disabled: false,
	loading: false,
	onClick: () => 0,
}

export default Button;