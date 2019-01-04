### Primary
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="primary" mr={10} />
  <Button content="Disabled" variant="primary" disabled />
</div>
```

### Default
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="default" mr={10} />
  <Button content="Disabled" variant="default" disabled />
</div>
```

### Danger
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Button" variant="danger" mr={10} />
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
  <Button content="Disabled" variant="default" disabled mr={10} />
  <Button content="Disabled" variant="subtle" disabled mr={10} />
  <Button content="Disabled" variant="danger" disabled mr={10} />
  <Button content="Disabled" variant="primary" disabled />
</div>
```

### Full
```jsx
<Button content="Full" variant="primary" full mb={10} />
<Button content="Full" full mb={10} />
<Button content="Full" variant="danger" full mb={10} />
<Button content="Full" variant="subtle" full />
```

### Sizes
```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button content="Small" size="small" mr={10} />
  <Button content="Medium" mr={10} />
  <Button content="Large" size="large" />
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="danger" content="Small" size="small" mr={10} />
  <Button variant="danger" content="Medium" mr={10} />
  <Button variant="danger" content="Large" size="large" />
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="primary" content="Small" size="small" mr={10} />
  <Button variant="primary" content="Medium" mr={10} />
  <Button variant="primary" content="Large" size="large" />
</div>
<div style={{ display: 'flex' }}>
  <Button variant="subtle" content="Small" size="small" mr={10} />
  <Button variant="subtle" content="Medium" mr={10} />
  <Button variant="subtle" content="Large" size="large" />
</div>
```
