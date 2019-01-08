### Input

```jsx
<Input placeholder="Standard input" />
```

### Label

```jsx
<Input label="Username" placeholder="Username" />
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
<Flex>
  <Input placeholder="Small input" size="small" />
  <Input placeholder="Medium input" mx={10} />
  <Input placeholder="Large input" size="large" />
</Flex>
```

### Login

```jsx
<Flex flexDirection="column" width={300} alignItems="flex-end">
  <Input placeholder="Username" mb={10} full />
  <Input placeholder="Password" type="password" full />
  <Link href="#link" my={20}>
    I forgot the password
  </Link>
  <Button variant="primary" full>
    Login
  </Button>
</Flex>
```
