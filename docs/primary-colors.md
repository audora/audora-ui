These are the colors that define our brand.

```jsx
const colors = require('../src/theme/color-primary').default;

const wrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 0,
  padding: '15px',
  background: `repeating-linear-gradient( 45deg, ${colors.WHITE}, ${colors.WHITE} 10px, ${colors.GRAY_88} 10px, ${colors.GRAY_88} 20px )`
};

const colorWrapStyles = {
  flex: 1,
  flexBasis: 'calc(25% - 10px)',
  marginRight: 10,
  marginBottom: 10,
  listStyle: 'none',
};

const colorBg = {
  boxSizing: 'border-box',
  color: '#fff',
  flex: 1,
  padding: '10px 0',
  textAlign: 'center',
};

const colorsSwatches = Object.keys(colors).map(name => {
  return (
    <li style={colorWrapStyles}>
      <div
        style={Object.assign({},
          colorBg,
          {
            backgroundColor: colors[name].primary,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{name}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].primary}</p>
      </div>
      <div
        style={Object.assign({},
          colorBg,
          {
            backgroundColor: colors[name].primaryDark
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{`${name}Dark`}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].primaryDark}</p>
      </div>
      <div
        style={Object.assign({},
          colorBg,
          {
            backgroundColor: colors[name].primaryDarker,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
          }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{`${name}Darker`}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name].primaryDarker}</p>
      </div>
    </li>
  );
});

<ul style={wrapperStyles}>
  { colorsSwatches }
</ul>
```
