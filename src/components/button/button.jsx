import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './button.scss';

import Icon from '../icon';

const renderLoading = () => (
	<span style={{ display: 'flex', alignItems: 'center' }}>
		<Icon name="loader" size="small" />
		<span className="ml-10">Carregando...</span>
	</span>
);

const renderIcon = (icon, content, type) => (
	<span style={{ display: 'flex', alignItems: 'center' }}>
		<Icon name={icon} reversed={type === "primary"} size="small" />
		<span className="ml-10">{content}</span>
	</span>
);

const Button = ({
	className,
	content,
	disabled,
	icon,
	loading,
	onClick,
	style,
	type,
	href,
	target,
}) => (
	<button
		href={(type === "link" && href) ? href : ''}
		target={(href && target) && target}
		className={cn(
			"button",
			(loading && (type !== 'link' || !disabled)) && 'button--loading',
			(loading || !!icon) && 'button--icon',
			disabled && 'button--disabled',
			type === 'primary' && 'button--primary',
			type === 'link' && "button--link",
			type === 'subtle' && "button--subtle",
			className
		)}
		style={style}
		onClick={onClick}
	>
		{loading
			? renderLoading()
			: !!icon
				? renderIcon(icon, content, type)
				: content
		}
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
	 * Fornece um URL para os botões serem usados como um link.
	 */
	href: PropTypes.string,
	/**
	 * Fornece um URL para os botões serem usados como um link.
	 */
	target: PropTypes.string,
	/**
	 * Passe o target para um link dentro do componente, se href for fornecido.
	 */
	type: PropTypes.oneOf([
		'primary',
		'default',
		'subtle',
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
	href: '',
	target: '',
	content: "Button",
	disabled: false,
	loading: false,
	onClick: () => 0,
}

export default Button;