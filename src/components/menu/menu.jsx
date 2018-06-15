import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ContentLoader from 'react-content-loader'
import Avatar from '../avatar'
import Button from '../button'
import configTheme from '../../theme/config'

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

  ${({ collapsed }) =>
    collapsed
      ? css`
          flex-direction: column;
          min-width: ${({ theme: { menu } }) => menu.width.sm};
          max-width: ${({ theme: { menu } }) => menu.width.sm};
        `
      : css`
          flex-direction: column;
          min-width: ${({ theme: { menu } }) => menu.width.md};
          max-width: ${({ theme: { menu } }) => menu.width.md};
        `};
`

Container.defaultProps = { theme: configTheme({}) }

const MenuContent = styled.div`
  overflow-y: auto;
  padding: 5px 10px 10px 10px;
  flex: 1;
`

MenuContent.defaultProps = { theme: configTheme({}) }

const MenuHeader = styled.div`
  padding: 10px 10px 0px 10px;
  display: flex;
  align-items: center;
`

MenuHeader.defaultProps = { theme: configTheme({}) }

const MenuHeaderTitle = styled.span`
  margin-left: 10px;
  font-size: 16px;
`

const MenuHeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const MenuHeaderButton = styled(Button)`
  padding: 5px;
  height: 42px;
  justify-content: flex-start;
`

const MenuItem = styled(Button)`
  padding: 0px 5px;
  margin-top: 5px;
  overflow: hidden;

  ${({ collapsed }) =>
    collapsed
      ? css`
          justify-content: center;
          text-transform: uppercase;
        `
      : css`
          justify-content: flex-start;
        `};
`

const renderHeader = (header, collapsed) => {
  if (typeof header === 'string') {
    return (
      <MenuHeader>
        <MenuHeaderButton
          appearance="subtle"
          full
          title={header.name}
          content={
            <MenuHeaderContent>
              <Avatar style={{ cursor: 'pointer' }} name={header} square />
              <MenuHeaderTitle>{header}</MenuHeaderTitle>
            </MenuHeaderContent>
          }
        />
      </MenuHeader>
    )
  }

  return (
    <MenuHeader>
      <MenuHeaderButton
        appearance="subtle"
        full
        onClick={header.onClick}
        title={header.name}
        content={
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
            {!collapsed && <MenuHeaderTitle>{header.name}</MenuHeaderTitle>}
          </MenuHeaderContent>
        }
      />
    </MenuHeader>
  )
}

const renderContentItem = (content, icon, collapsed) => {
  if (collapsed) {
    if (icon) {
      return ''
    }

    return content.substr(0, 2)
  }
  return content
}

const Menu = ({ header, action, items, footer, loading, ...props }) => (
  <Container {...props}>
    {header && renderHeader(header, props.collapsed)}
    {action && (
      <div style={{ padding: '10px 10px 0px 10px' }}>
        <Button
          full
          icon={action.icon}
          disabled={action.disabled}
          loading={action.loading}
          title={action.content}
          content={props.collapsed ? '' : action.content}
          onClick={action.onClick}
          appearance="primary"
        />
      </div>
    )}
    <MenuContent>
      {loading ? (
        <ContentLoader
          height={130}
          width={props.collapsed ? 62 : 220}
          speed={1}
          primaryColor="#EAEAEA"
          secondaryColor="#E0E1E2"
        >
          <rect
            x="0"
            y="4.8"
            rx="4"
            ry="4"
            width={props.collapsed ? 62 : 220}
            height="32"
          />
          <rect
            x="0"
            y="42"
            rx="4"
            ry="4"
            width={props.collapsed ? 62 : 220}
            height="32"
          />
          <rect
            x="0"
            y="79"
            rx="4"
            ry="4"
            width={props.collapsed ? 62 : 220}
            height="32"
          />
        </ContentLoader>
      ) : (
        items.map(item => (
          <MenuItem
            key={item.key}
            collapsed={props.collapsed}
            icon={item.icon}
            content={renderContentItem(
              item.content,
              item.icon,
              props.collapsed
            )}
            title={item.content}
            onClick={e => item.onClick(e, item)}
            appearance={item.active ? 'default' : 'subtle'}
            full
          />
        ))
      )}
    </MenuContent>
    {footer && (
      <div style={{ padding: '0px 10px 10px 10px' }}>
        <Button
          full
          icon={footer.icon}
          title={footer.content}
          content={props.collapsed ? '' : footer.content}
          onClick={footer.onClick}
          appearance="subtle"
        />
      </div>
    )}
  </Container>
)

Menu.propTypes = {
  /**
   * Set menu as vertical.
   */
  vertical: PropTypes.bool,
  /**
   * Menu size.
   */
  collapsed: PropTypes.bool,
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
   * Menu loading.
   */
  loading: PropTypes.bool,
  /**
   * Menu Header.
   */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Menu.defaultProps = {
  loading: false,
  vertical: false,
  header: null,
  action: null,
  footer: null,
  items: null,
  collapsed: false,
}

export default Menu
