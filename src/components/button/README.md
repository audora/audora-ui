### Primary

```jsx
<div style={{ display: 'flex' }}>
  <Button variant="primary" mr={10}>
    Button
  </Button>
  <Button variant="primary" disabled mr={10}>
    Disabled
  </Button>
</div>
```

### Default

```jsx
<div style={{ display: 'flex' }}>
  <Button mr={10}>Button</Button>
  <Button disabled mr={10}>
    Disabled
  </Button>
</div>
```

### Danger

```jsx
<div style={{ display: 'flex' }}>
  <Button variant="danger" mr={10}>
    Button
  </Button>
  <Button variant="danger" disabled mr={10}>
    Disabled
  </Button>
</div>
```

### Subtle

```jsx
<div style={{ display: 'flex' }}>
  <Button variant="subtle" mr={10}>
    Button
  </Button>
  <Button variant="subtle" disabled mr={10}>
    Disabled
  </Button>
</div>
```

### Disabled

```jsx
<div style={{ display: 'flex' }}>
  <Button variant="default" disabled mr={10}>
    Disabled
  </Button>
  <Button variant="subtle" disabled mr={10}>
    Disabled
  </Button>
  <Button variant="danger" disabled mr={10}>
    Disabled
  </Button>
  <Button variant="primary" disabled>
    Disabled
  </Button>
</div>
```

### Full

```jsx
<Button variant="primary" full mb={10}>Full</Button>
<Button full mb={10}>Full</Button>
<Button variant="danger" full mb={10}>Full</Button>
<Button variant="subtle" full>Full</Button>
```

### Sizes

```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button size="small" mr={10}>Small</Button>
  <Button mr={10}>Medium</Button>
  <Button size="large">Large</Button>
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="danger" size="small" mr={10}>Small</Button>
  <Button variant="danger" mr={10}>Medium</Button>
  <Button variant="danger" size="large">Large</Button>
</div>
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Button variant="primary" size="small" mr={10}>Small</Button>
  <Button variant="primary" mr={10}>Medium</Button>
  <Button variant="primary" size="large">Large</Button>
</div>
<div style={{ display: 'flex' }}>
  <Button variant="subtle" size="small" mr={10}>Small</Button>
  <Button variant="subtle" mr={10}>Medium</Button>
  <Button variant="subtle" size="large">Large</Button>
</div>
```
