
Buttons are ranked by top-down importance. (Primary> Default> Link)

### Primary
To call attention to an action on a form, or highlight the strongest call to action on a page. The primary buttons should only appear once per screen (not including the application header or in a modal). Keep in mind that not all screens need a primary button.
```jsx
<Button content="Primary" type="primary" />
```

### Default
The default button for most use cases.
```jsx
<Button content="Default" />
```

### Link
Use links to secondary actions, destructive actions or to discourage use. The links must be opened in the current window, unless the user can lose information, eg When filling out a form or the destination is an external site.
```jsx
<Button content="Link" type="link" />
```

### Subtle
Use subtle button for secondary actions, destructive actions such as "Cancel" or "Close".
```jsx
<Button content="Subtle" type="subtle" />
```

### Disabled
Use when another action has to be completed before the button is usable, such as changing a field value or waiting for a system response. Use only with the **primary** and **default** button types.
```jsx
<Button content="Disabled" disabled />
```

### Loading
Use when waiting for the result of an action. Use only with the **primary** and **default** button types.
```jsx
<Button content="Loading" loading />
```

### Icon
Use only the Icon when an action is very obvious and use Icon with Content when you want to help what the action is about.
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