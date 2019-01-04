### Input

```jsx
<Input placeholder="Standard input" />
```

### Disabled

```jsx
<Input placeholder="Disabled input" disabled />
```

### Full

```jsx
<Input placeholder="Full input" full />
```

### Sizes

```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Input placeholder="Small input" size="small" style={{ marginRight: 10 }} />
  <Input placeholder="Medium input" style={{ marginRight: 10 }} />
  <Input placeholder="Large input" size="large" style={{ marginRight: 10 }} />
</div>
```

### Login

```jsx
<div style={{ display: 'flex', marginBottom: 10 }}>
  <Input placeholder="E-mail" value="email@example.com" style={{ marginRight: 10 }} />
  <Input placeholder="Password" type="password" style={{ marginRight: 10 }} />
  <Button content="Login" variant="primary" />
</div>
```

### Form

```jsx
<div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, width: 300 }}>
  <Input placeholder="First Name" style={{ marginBottom: 10 }} full />
  <Input placeholder="Last Name" style={{ marginBottom: 10 }} full />
  <Button content="Create" variant="primary" full />
</div>
```
