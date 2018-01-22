### Circle

```jsx
<Avatar
  name="João"
/>
```

### Square

```jsx
<Avatar
  square
  img="http://admin.audora.com.br/wwsys/download?d=c7d777a7-5085-41b4-84d4-0dae7e5b1c66"
  name="João"
/>
```

## Size
### Tiny
Use em metadados

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="tiny" name="João" />
  <Avatar size="tiny" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Small
User avatars in small areas such as 40px text fields. For **square** avatars, use on things like drop-down menus.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="small" name="João" />
  <Avatar size="small" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Medium
Use avatars in activity streams or comments and avatars **square** in tables.
```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="medium" name="João" />
  <Avatar size="medium" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Large
For major page titles, such as a user's account settings.
```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="large" name="João" />
  <Avatar size="large" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Huge
Use in prominent positions on the page, as in user profiles.
```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="huge" name="João" />
  <Avatar size="huge" style={{ marginLeft: 10 }} square name="João" />
</div>
```