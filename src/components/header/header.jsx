import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import configTheme from '../../theme/config';

const Container = styled.div`
  background-color: ${({ theme: { color } }) => color.primaryDark};
  box-sizing: border-box;
  color:${({ theme: { color } }) => color.textPrimary};
  display: flex;
  min-height: 50px;
  justify-content: center;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  width: 100%;
  z-index: 9999;
`;

Container.defaultProps = { theme: configTheme({}) };

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ full, theme: { wrapper } }) => (full ? '100%' : wrapper)};
`;

Container.defaultProps = { theme: configTheme({}) };

const Header = ({ children, ...props }) => (
  <Container fixed={props.fixed} style={props.styleContainer}>
    <HeaderComponent full={props.full} style={props.style}>
      {children}
    </HeaderComponent>
  </Container>
);

Header.propTypes = {
  /**
   * Content render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Header position fixed.
   */
  fixed: PropTypes.bool,
  /**
   * Header width 100%. When full is false, the width is value of wrapper (1080px).
   * You can set a new width for wrapper using the prop `config` on Theme.
   */
  full: PropTypes.bool,
  /**
   * Optitional container style replacement.
   */
  styleContainer: PropTypes.object,
  /**
   * Optitional style replacement.
   */
  style: PropTypes.object,
};

Header.defaultProps = {
  style: {},
  styleContainer: {},
  fixed: false,
  full: true,
};

export default Header;
