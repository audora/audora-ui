These colors are used in every alert message: info, error, success and warning.

```jsx
const colors = {
  Danger: '#F56C6C',
  Info: '#4CB5FF',
  Success: '#67C23A',
  Warning: '#E6A23C',
};

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
  boxSizing: 'border-box',
  textAlign: 'center',
  listStyle: 'none',
};

const colorBg = {
  color: '#fff',
  borderRadius: 4,
  padding: '15px 0'
};

const colorsSwatches = Object.keys(colors).map(name => {
  return (
    <li style={colorWrapStyles}>
      <div
        style={Object.assign({},
          colorBg,
          { backgroundColor: colors[name] }
        )}
      >
        <p style={{ fontWeight: '600', margin: 0 }}>{name}</p>
        <p style={{ fontSize: '12px', margin: 0 }}>{colors[name]}</p>
      </div>
    </li>
  );
});

<ul style={wrapperStyles}>
  { colorsSwatches }
</ul>
```
