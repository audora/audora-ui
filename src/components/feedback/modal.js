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
  ...zIndex.Z_INDEX8,
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  bottom: 0,
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'fixed',
  right: 0,
  top: 0
};

const modalStyle = {
  ...zIndex.Z_INDEX9,
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  position: 'relative'
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
  borderBottom: '1px solid #e2e2e2'
};

const footerStyle = {
  ...spacing.PADDING_XS,
  alignItems: 'center',
  borderTop: '1px solid #e2e2e2',
  display: 'flex',
  justifyContent: 'space-between'
};
const contentStyle = {
  ...spacing.PADDING_XS,
  display: 'flex',
  flexDirection: 'column',
  flex: 1
};

const btnCloseStyle = {
  cursor: 'pointer',
  color: '#333',

  ':hover': {
    color: '#666'
  }
};

const Modal = ({
  bordded,
  cancelText,
  children,
  closable,
  confirmLoading,
  footer,
  footerContent,
  fullscreen,
  height,
  okText,
  onCancel,
  onOk,
  scrollBehaviorset,
  title,
  top,
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
              onClick={onCancel}
            />
            <div
              style={[
                modalStyle,
                withStyle[fullscreen ? 'full' : width],
                { top: fullscreen ? 0 : top },
                { height: fullscreen ? '100%' : height },
                bordded && !fullscreen && borderRadiusStyle
              ]}
            >
              <div style={headerStyle}>
                {title}
                {closable && (
                  <Icon
                    name="x"
                    size="small"
                    onClick={onCancel}
                    style={btnCloseStyle}
                  />
                )}
              </div>
              <div
                style={[
                  contentStyle,
                  scrollBehaviorset === 'inside' && scrollStyle
                ]}
              >
                {children}
              </div>
              {footer === null ? (
                <div />
              ) : footer ? (
                <div style={footerStyle}>{footer}</div>
              ) : (
                <div style={footerStyle}>
                  <div>{footerContent}</div>
                  <ButtonGroup>
                    <Button
                      content={cancelText}
                      type="subtle"
                      onClick={onCancel}
                    />
                    <Button
                      content={okText}
                      type="primary"
                      onClick={onOk}
                      loading={confirmLoading}
                    />
                  </ButtonGroup>
                </div>
              )}
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
   * Modal content.
   */
  children: PropTypes.node,
  /**
   * Whether a close (x) button is visible on top right of the modal dialog or not.
   */
  closable: PropTypes.bool,
  /**
   * Footer content with default buttons.
   */
  footerContent: PropTypes.node,
  /**
   * Footer content, set as `footer={null}` when you don't need default buttons.
   */
  footer: PropTypes.node,
  /**
   * Function that will be called to start the exit transition.
   */
  onCancel: PropTypes.func,
  /**
   * Margin top.
   */
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Height modal.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Specify a function that will be called when the user clicks the OK button.
   */
  onOk: PropTypes.func,
  /**
   * Set a border radius on modal.
   */
  bordded: PropTypes.bool,
  /**
   * Modal with height and width 100%.
   */
  fullscreen: PropTypes.bool,
  /**
   * Modal title; render on header.
   */
  title: PropTypes.string,
  /**
   * Whether to apply loading visual effect for OK button or not.
   */
  confirmLoading: PropTypes.bool,
  /**
   * Text of the OK button.
   */
  okText: PropTypes.string,
  /**
   * Text of the Cancel button.
   */
  cancelText: PropTypes.string,
  /**
   * Defines whether the modal is visible or not.
   */
  visible: PropTypes.bool,
  /**
   * Modal width.
   */
  width: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'full']),
  /**
   * Where the scrolling behavior should be. When "inside" occurs only in the
   * modal body. When "outside", all modal will scroll inside the mask.
   */
  scrollBehaviorset: PropTypes.oneOf(['inside', 'outside'])
};

Modal.defaultProps = {
  bordded: true,
  cancelText: 'Cancel',
  closable: true,
  confirmLoading: false,
  height: '',
  okText: 'OK',
  onCancel: () => 0,
  onOk: () => 0,
  fullscreen: false,
  scrollBehaviorset: 'inside',
  title: '',
  top: 100,
  visible: false,
  width: 'medium'
};

export default Radium(Modal);
