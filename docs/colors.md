These are the colors that define our brand.

```jsx
const { colors, fonts } = require('../src/theme/default').default

const wrapperStyles = {
  display: 'flex',
  fontFamily: fonts.sans,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingLeft: 16
}

const colorWrapStyles = {
  flex: 1,
  flexBasis: 'calc(25% - 10px)',
  marginRight: 10,
  marginBottom: 10,
  listStyle: 'none',
}

const colorBg = {
  boxSizing: 'border-box',
  color: '#fff',
  flex: 1,
  padding: '10px 0',
  textAlign: 'center',
}

const colorsMap = {
  default: colors.default,
  primary: colors.primary,
  danger: colors.danger,
}

const colorsSwatches = Object.keys(colorsMap).map(name => {
  return (
    <li style={colorWrapStyles}>
      <div
        style={Object.assign(
          {},
          colorBg,
          name === 'default' ? { color: colors.grey } : {},
          {
            backgroundColor: colors[name].normal,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{name}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].normal}</p>
      </div>
      <div
        style={Object.assign(
          {},
          colorBg,
          name === 'default' ? { color: colors.grey } : {},
          {
            backgroundColor: colors[name].dark,
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{`${name}Dark`}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].dark}</p>
      </div>
      <div
        style={Object.assign(
          {},
          colorBg,
          name === 'default' ? { color: colors.grey } : {},
          {
            backgroundColor: colors[name].darken,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{`${name}Darken`}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].darken}</p>
      </div>
    </li>
  )
})
;<ul style={wrapperStyles}>{colorsSwatches}</ul>
```
