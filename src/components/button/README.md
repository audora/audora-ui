### Primary
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="primary" style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="primary" disabled />
</div>
```

### Default
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="default" style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="default" disabled />
</div>
```

### Danger
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="danger" style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="danger" disabled />
</div>
```

### Subtle
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Subtle" variant="subtle" />
  <Button content="Subtle" variant="subtle" disabled />
</div>
```

### Disabled
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Disabled" variant="default" disabled style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="subtle" disabled style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="danger" disabled style={{ marginRight: 10 }} />
  <Button content="Disabled" variant="primary" disabled />
</div>
```

### Full
```jsx
<Button content="Full" variant="primary" full style={{ marginBottom: 10 }} />
<Button content="Full" full style={{ marginBottom: 10 }} />
<Button content="Full" variant="danger" full style={{ marginBottom: 10 }} />
<Button content="Full" variant="subtle" full />
```

### Sizes
```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button content="Small" size="small" style={{ marginRight: 10 }} />
  <Button content="Medium" style={{ marginRight: 10 }} />
  <Button content="Large" size="large" />
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="danger" content="Small" size="small" style={{ marginRight: 10 }} />
  <Button variant="danger" content="Medium" style={{ marginRight: 10 }} />
  <Button variant="danger" content="Large" size="large" />
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="primary" content="Small" size="small" style={{ marginRight: 10 }} />
  <Button variant="primary" content="Medium" style={{ marginRight: 10 }} />
  <Button variant="primary" content="Large" size="large" />
</div>
<div style={{ display: 'flex' }}>
  <Button variant="subtle" content="Small" size="small" style={{ marginRight: 10 }} />
  <Button variant="subtle" content="Medium" style={{ marginRight: 10 }} />
  <Button variant="subtle" content="Large" size="large" />
</div>
```
