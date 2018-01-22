import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { Portal } from '../../utils';
import { zIndex, borderRadius, spacing } from '../../styles';
import Icon from '../general/icon';
import Button from '../general/button';
import ButtonGroup from '../general/buttonGroup';

const modalContainerStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: '100%'
};

const maskStyle = {
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  height: '100%',
  ...zIndex.Z_INDEX8
};

const modalStyle = {
  backgroundColor: '#fff',
  position: 'relative',
  margin: '0 auto',
  top: '100px',
  ...zIndex.Z_INDEX9
};

const withStyle = {
  small: {
    width: 400
  },
  medium: {
    width: 600
  },
  large: {
    width: 800
  },
  huge: {
    width: 968
  },
  full: {
    width: '100%'
  }
};

const scrollStyle = {
  overflow: 'auto'
};

const borderRadiusStyle = {
  ...borderRadius.BORDER_RADIUS_MD
};

const headerStyle = {
  ...spacing.PADDING_XS,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ccc'
};

const footerStyle = {
  ...spacing.PADDING_XS,
  borderTop: '1px solid #ccc'
};
const contentStyle = {
  ...spacing.PADDING_XS
};

const btnCloseStyle = {
  cursor: 'pointer',
  color: '#333',

  ':hover': {
    color: '#666'
  }
};

const renderFooter = ({ footer }) => {
  if (onCancel) {
    return (
      <ButtonGroup>
        <Button content="Fechar" type="subtle" onClick={onCancel} />
        <Button content="Okay" type="primary" />
      </ButtonGroup>
    );
  }

  return <div style={footerStyle}>{footer}</div>;
};

const Modal = ({
  bordded,
  content,
  footer,
  onClose,
  onCancel,
  scrollBehaviorset,
  title,
  visible,
  width
}) => {
  if (visible) {
    document.body.style.overflow = 'hidden';

    return (
      <Portal
        content={
          <div style={modalContainerStyle}>
            <div
              style={[
                maskStyle,
                scrollBehaviorset === 'outside' && scrollStyle
              ]}
              onClick={onClose}
            />
            <div
              style={[
                modalStyle,
                withStyle[width],
                bordded && borderRadiusStyle
              ]}
            >
              <div style={headerStyle}>
                {title}
                <Icon
                  name="x"
                  size="medium"
                  onClick={onClose}
                  style={btnCloseStyle}
                />
              </div>
              <div
                style={[
                  contentStyle,
                  scrollBehaviorset === 'inside' && scrollStyle
                ]}
              >
                {content}
              </div>
              {footer && renderFooter(footer, onCancel)}
            </div>
          </div>
        }
      />
    );
  }

  document.body.style.overflow = 'auto';
  return <div />;
};

Modal.propTypes = {
  /**
   * Conteudo do Modal.
   */
  content: PropTypes.node,
  /**
   * O rodapé do Modal.
   */
  footer: PropTypes.node,
  /**
   * Função que será chamada para iniciar a transição de saída.
   */
  onClose: PropTypes.func,
  /**
   * Define uma borda no corpo do modal.
   */
  bordded: PropTypes.bool,
  /**
   * O título do Modal; renderiza no header.
   */
  title: PropTypes.string,
  /**
   * Define se o modal está visível ou não.
   */
  visible: PropTypes.bool,
  /**
   * Largura do modal.
   */
  width: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'full']),
  /**
   * Onde o comportamento de rolagem deve ser originado. Quando "inside" só
   * ocorre no corpo modal. Quando "outside", todo o modal irá rolar dentro da mask.
   */
  scrollBehaviorset: PropTypes.oneOf(['inside', 'outside'])
};

Modal.defaultProps = {
  bordded: true,
  onClose: () => 0,
  onCancel: () => 0,
  scrollBehaviorset: 'inside',
  title: '',
  visible: false,
  width: 'medium'
};

export default Radium(Modal);
