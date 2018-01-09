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
### X-Small
Use em metadados

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="xsmall" name="João" />
  <Avatar size="xsmall" className="ml-10" square name="João" />
</div>
```

### Small
User avatares em áreas pequenas, como campos de texto de 40px. Para os avatares **square**, use em coisas como menus de exclusão.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="small" name="João" />
  <Avatar size="small" className="ml-10" square name="João" />
</div>
```

### Medium
Use avatares em fluxos de atividades ou comentários e avatares **square** em tabelas.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="medium" name="João" />
  <Avatar size="medium" className="ml-10" square name="João" />
</div>
```

### Large
Para títulos de páginas principais, como as configurações de conta de um usuário. 

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="large" name="João" />
  <Avatar size="large" className="ml-10" square name="João" />
</div>
```

### X-Large
Use em posições proeminentes na página, como em perfis de usuários.

```jsx
<div style={{ display: 'flex', paddingLeft: 8, paddingTop: 8 }}>
  <Avatar size="xlarge" name="João" />
  <Avatar size="xlarge" className="ml-10" square name="João" />
</div>
```