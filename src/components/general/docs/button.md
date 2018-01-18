
Os botões são classificados por importância de cima para baixo. (Primary > Default > Link)

### Primary
Para chamar a atenção para uma ação em um formulário, ou destacar a chamada mais forte para a ação em uma página. Os botões primários só devem aparecer uma vez por tela (não incluindo o cabeçalho da aplicação ou em um modal). Tenha em mente que nem todas as telas precisam de um botão primário.

```jsx
<Button content="Primary" type="primary" />
```

### Default
O botão padrão para a maioria dos casos de uso.

```jsx
<Button content="Default" />
```

### Link
Use links para ações secundárias, ações destrutivas ou para desencorajar o uso. Os links devem ser abertos na janela atual, a menos que o usuário possa perder informações, p.ex. Ao preencher um formulário ou o destino é um site externo.

```jsx
<Button content="Link" type="link" />
```

### Subtle
Use botão sutil para ações secundárias, ações destrutivas, como "Cancelar" ou "Fechar".

```jsx
<Button content="Subtle" type="subtle" />
```

### Disabled
Use quando outra ação tiver que ser completada antes que o botão seja utilizável, como alterar um valor de campo ou aguardar uma resposta do sistema. Use apenas com os tipos de botão **primary** e **default**.

```jsx
<Button content="Disabled" disabled />
```

### Loading
Use quando estiver esperando o resultado de uma ação. Use apenas com os tipos de botão **primary** e **default**.

```jsx
<Button content="Loading" loading />
```

### Icon
Usa apenas o Icon quando uma ação é muito obvia e usa Icon com Content quando quer auxiliar ao que se trata a ação.
```jsx
<div style={{ display: 'flex' }}>
  <Button content="Icon Left" icon="music" type="primary" />
  <Button content="Icon Right" iconPosition="right" icon="music" type="primary" style={{ marginLeft: 10 }} />
  <Button icon="anchor" type="primary" style={{ marginLeft: 10 }} />
</div>
```

### Sizes

```jsx
<div style={{ display: 'flex' }}>
  <Button content="Tiny" size="tiny" style={{ marginRight: 10 }} />
  <Button content="Small" size="small" style={{ marginRight: 10 }} />
  <Button content="Medium" style={{ marginRight: 10 }} />
  <Button content="Large" size="large" />
</div>
```