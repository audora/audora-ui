### Input

```jsx
<Input placeholder="Standard input" />
```

### Disabled

```jsx
<Input placeholder="Disabled input" disabled />
```

### Error

```jsx
<Input placeholder="Error input" error />
```

### Full

```jsx
<Input placeholder="Full input" full />
```

### Sizes

```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Input placeholder="Small input" size="small" mr={10} />
  <Input placeholder="Medium input" mr={10} />
  <Input placeholder="Large input" size="large" mr={10} />
</div>
```

### Login

```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Input placeholder="E-mail" defaultValue="email@example.com" mr={10} />
  <Input placeholder="Password" type="password" mr={10} />
  <Button variant="primary">Login</Button>
</div>
```

### Form

```jsx
<div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, width: 300 }}>
  <Input placeholder="First Name" mb={10} full />
  <Input placeholder="Last Name" mb={10} full />
  <Button variant="primary" full>Create</Button>
</div>
```
