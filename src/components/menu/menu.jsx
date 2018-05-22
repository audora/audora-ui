import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Avatar from '../avatar';
import Button from '../button';
import configTheme from '../../theme/config';

/**
 * TODO: add tooltip and remove title on AvatarImgComponent
 */

const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme: { menu } }) => menu.bg};
  color: ${({ theme: { menu } }) => menu.color};
  display: flex;
  flex: 1;

  /**
  * SIZES
  */

  ${({ minimal }) => (minimal ? css`
    flex-direction: column;
    min-width: ${({ theme: { menu } }) => menu.width.sm};
    max-width: ${({ theme: { menu } }) => menu.width.sm};
  ` : css`
    flex-direction: column;
    min-width: ${({ theme: { menu } }) => menu.width.md};
    max-width: ${({ theme: { menu } }) => menu.width.md};
  `)}
`;

Container.defaultProps = { theme: configTheme({}) };

const MenuContent = styled.div`
  overflow-y: auto;
  padding: 5px 10px 10px 10px;
  flex: 1;
`;

MenuContent.defaultProps = { theme: configTheme({}) };

const MenuHeader = styled.div`
  padding: 10px 10px 0px 10px;
  display: flex;
  align-items: center;
`;

MenuHeader.defaultProps = { theme: configTheme({}) };

const MenuHeaderTitle = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const MenuHeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const MenuHeaderButton = styled(Button)`
  padding: 5px;
  height: 42px;
  justify-content: flex-start;
`;

const MenuItem = styled(Button)`
  padding: 0px 5px;
  margin-top: 5px;
  overflow: hidden;

  ${({ minimal }) => (minimal ? css`
    justify-content: center;
    text-transform: uppercase;
  ` : css`
    justify-content: flex-start;
  `)}
`;

const renderHeader = (header, minimal) => {
  if (typeof header === 'string') {
    return (
      <MenuHeader>
        <MenuHeaderButton
          appearance="subtle"
          full
          title={header.name}
          content={(
            <MenuHeaderContent>
              <Avatar
                style={{ cursor: 'pointer' }}
                name={header}
                square
              />
              <MenuHeaderTitle>{header}</MenuHeaderTitle>
            </MenuHeaderContent>
          )}
        />
      </MenuHeader>
    );
  }

  if (typeof header === 'object') {
    return (
      <MenuHeader>
        <MenuHeaderButton
          appearance="subtle"
          full
          onClick={header.onClick}
          title={header.name}
          content={(
            <MenuHeaderContent>
              <Avatar
                style={{ cursor: 'pointer' }}
                icon={header.icon}
                img={header.image}
                name={header.name}
                color={header.color}
                background={header.background}
                square
              />
              {!minimal && (
                <MenuHeaderTitle>{header.name}</MenuHeaderTitle>
              )}
            </MenuHeaderContent>
          )}
        />
      </MenuHeader>
    );
  }

  return (
    <MenuHeader>
      {header}
    </MenuHeader>
  );
};

const Menu = ({
  header, action, items, footer, ...props
}) => (
  <Container {...props}>
    {header && renderHeader(header, props.minimal)}
    {action && (
      <div style={{ padding: '10px 10px 0px 10px' }}>
        <Button
          full
          icon={action.icon}
          title={action.content}
          content={props.minimal ? '' : action.content}
          onClick={action.onClick}
          appearance="primary"
        />
      </div>
    )}
    <MenuContent>
      {items.map(item => (
        <MenuItem
          key={item.key}
          minimal={props.minimal}
          content={props.minimal ? item.content.substr(0, 2) : item.content}
          title={item.content}
          onClick={e => item.onClick(e, item)}
          appearance={item.active ? 'default' : 'subtle'}
          full
        />
      ))}
    </MenuContent>
    {footer && (
      <div style={{ padding: '0px 10px 10px 10px' }}>
        <Button
          full
          icon={footer.icon}
          title={footer.content}
          content={props.minimal ? '' : footer.content}
          onClick={footer.onClick}
          appearance="subtle"
        />
      </div>
    )}
  </Container>
);

Menu.propTypes = {
  /**
   * Set menu as vertical.
   */
  vertical: PropTypes.bool,
  /**
   * Menu size.
   */
  minimal: PropTypes.bool,
  /**
   * Menu action.
   */
  action: PropTypes.object,
  /**
   * Menu footer.
   */
  footer: PropTypes.object,
  /**
   * Menu items.
   */
  items: PropTypes.array,
  /**
   * Menu Header.
   */
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

Menu.defaultProps = {
  vertical: false,
  header: null,
  action: null,
  footer: null,
  items: null,
  minimal: false,
};

export default Menu;
