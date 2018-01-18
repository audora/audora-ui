import React								from 'react';
import Radium								from 'radium';
import PropTypes						from 'prop-types';
import isEmpty							from 'lodash/fp/isEmpty';
import withTheme						from '../../styles/themer/withTheme';
import { themePropTypes }		from '../../styles/themer/utils'
import { spacing, colors } 	from '../../styles';
import Icon									from '../icon';
import { lighten }					from '../../utils';

const baseStyles = {
	border: 'none',
	cursor: 'pointer',
	fontWeight: 'bold',
	MozOsxFontSmoothing: 'grayscale',
	transition: 'background-color .1s',
	userSelect: 'none',
	verticalAlign: 'middle',
  alignItems: 'center',
  backgroundImage: 'none',
  borderRadius: 4,
  display: 'inline-flex',
  touchAction: 'manipulation',
  WebkitFontSmoothing: 'antialiased',
  whiteSpace: 'nowrap',

  ':focus': {
    outline: 'none'
  }
}

const sizeStyles = {
  tiny: {
    ...spacing.PADDING_X_XS,
    height: 24,
    fontSize: 11,
    textTransform: 'uppercase'
  },
  small: {
    ...spacing.PADDING_X_SM,
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
}

const renderLoading = () => (
	<span style={{ display: 'flex', alignItems: 'center' }}>
		<Icon name="loader" size="small" />
		<span className="ml-1">Carregando</span>
	</span>
);

const renderIcon = (icon, content, type, size) => isEmpty(content)
	? (
		<span style={{ display: 'flex', alignItems: 'center' }}>
			<Icon name={icon} reversed={type === "primary"} size={size} />
		</span>
	) :	(
		<span style={{ display: 'flex', alignItems: 'center' }}>
			<Icon name={icon} reversed={type === "primary"} size={size} />
			<span className="ml-2">{content}</span>
		</span>
	);

const getAuiStyles = ({ colors }) => ({
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
	disabled: {
		opacity: 0.50,
		pointerEvents: 'none',
		cursor: 'default'
	},
	loading: {
		backgroundColor: colors.default,
		color: '#555',
		pointerEvents: 'none',
		cursor: 'default'
	}
})

const Button = props => {
  const typeStyles = getAuiStyles(props.auiTheme);
	const ElementType = props.href ? 'a' : 'button';

	const finalProps = {
		href: props.href ? props.href : '#',
		target: (props.href && props.target) && props.target,
		style: [
			baseStyles,
			sizeStyles[props.size],
			typeStyles[props.type],
			props.disabled && typeStyles.disabled,
			(props.loading && props.type !== 'link') && typeStyles.loading,
			props.full && sizeStyles.full,
			props.style
		],
    onClick: e => {
      if (props.disabled || props.loading) {
        e.preventDefault()
        return
      }

      props.onClick(e, props)
    }
	}

  if (props.href) {
    finalProps.href = props.href
	}

	if (props.icon && !props.content) {
		return (<ElementType {...finalProps}>i</ElementType>);
	}
	
	if (props.icon && props.content && props.iconPosition === 'left') {
		return (
			<ElementType {...finalProps}>
				i 
				<span style={{ ...spacing.MARGIN_RIGHT_XS }} />
				{props.content}				
			</ElementType>
		);
	}

	if (props.icon && props.content && props.iconPosition === 'right') {
		return (
			<ElementType {...finalProps}>
				{props.content}				
				<span style={{ ...spacing.MARGIN_LEFT_XS }} />
				i 
			</ElementType>
		);
	}

	return (
		<ElementType {...finalProps}>
			{props.loading
				? 'carregando'
				: props.content
			}
		</ElementType>
	);
};

Button.propTypes = {
	/**
	 * Texto a ser renderizado.
	 */
	content: PropTypes.string,
	/**
	 * Fornece um URL para os botões serem usados como um link.
	 */
	href: PropTypes.string,
	/**
	 * Passe o target para um link dentro do componente, se href for fornecido.
	 */
	target: PropTypes.string,
	/**
	 * Adiciona um icone ao botão.
	 */
	icon: PropTypes.string,
	/**
	 * Escolhe o lado do icone.
	 */
	iconPosition: PropTypes.oneOf(['left', 'right']),
	/**
	 * Tipo de botão.
	 */
	type: PropTypes.oneOf(['primary', 'default', 'subtle', 'link']),
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
	/**
	 * Tamanho do botão.
	 */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),	
	/**
	 * Largue 100%.
	 */
  full: PropTypes.bool,
  /**
	 * Atributos do tema Aui fornecidos por `Themer`
	 */
  auiTheme: themePropTypes
}

Button.defaultProps = {
	type: 'default',
	href: '',
	target: '',
	content: '',
	icon: '',
	iconPosition: 'left',
	full: false,
	size: 'medium',
	disabled: false,
	loading: false,
	onClick: () => 0,
}

export default withTheme(Radium(Button));