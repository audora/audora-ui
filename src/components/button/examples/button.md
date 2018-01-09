
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
Use links para ações secundárias, ações destrutivas, como "Cancelar", ou para desencorajar o uso. Os links devem ser abertos na janela atual, a menos que o usuário possa perder informações, p.ex. Ao preencher um formulário ou o destino é um site externo.

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

```jsx
<div style={{ display: 'flex' }}>
  <Button content="Icon" icon="music" type="primary" />
  <Button icon="anchor" type="primary" className="ml-10" />
  <Button content="anchor" type="primary" className="ml-10" />
</div>
```