### Primary
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" appearance="primary" style={{ marginRight: 10 }} />
  <Button content="Disabled" appearance="primary" disabled />
</div>
```

### Default
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" appearance="default" style={{ marginRight: 10 }} />
  <Button content="Disabled" appearance="default" disabled />
</div>
```

### Subtle
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Subtle" appearance="subtle" />
  <Button content="Subtle" appearance="subtle" disabled />
</div>
```

### Disabled
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Disabled" appearance="default" disabled style={{ marginRight: 10 }} />
  <Button content="Disabled" appearance="primary" disabled />
</div>
```

### Full
```jsx
<Button content="Full" appearance="primary" full style={{ marginBottom: 10 }} />
<Button content="Full" full style={{ marginBottom: 10 }} />
<Button content="Full" appearance="subtle" full />
```

### Sizes
```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button content="Small" size="small" style={{ marginRight: 10 }} />
  <Button content="Medium" style={{ marginRight: 10 }} />
  <Button content="Large" size="large" />
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button appearance="primary" content="Small" size="small" style={{ marginRight: 10 }} />
  <Button appearance="primary" content="Medium" style={{ marginRight: 10 }} />
  <Button appearance="primary" content="Large" size="large" />
</div>
<div style={{ display: 'flex' }}>
  <Button appearance="subtle" content="Small" size="small" style={{ marginRight: 10 }} />
  <Button appearance="subtle" content="Medium" style={{ marginRight: 10 }} />
  <Button appearance="subtle" content="Large" size="large" />
</div>
```
