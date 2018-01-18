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
User avatares em áreas pequenas, como campos de texto de 40px. Para os avatares **square**, use em coisas como menus de exclusão.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="small" name="João" />
  <Avatar size="small" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Medium
Use avatares em fluxos de atividades ou comentários e avatares **square** em tabelas.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="medium" name="João" />
  <Avatar size="medium" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Large
Para títulos de páginas principais, como as configurações de conta de um usuário. 

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="large" name="João" />
  <Avatar size="large" style={{ marginLeft: 10 }} square name="João" />
</div>
```

### Huge
Use em posições proeminentes na página, como em perfis de usuários.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="huge" name="João" />
  <Avatar size="huge" style={{ marginLeft: 10 }} square name="João" />
</div>
```