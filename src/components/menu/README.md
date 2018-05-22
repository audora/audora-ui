### Default
```jsx
<Menu
  items={[
    {
      key: 1,
      name: 'item1',
      content: 'Item 1',
      onClick: (e, data) => console.log(e, data),
    },
    {
      key: 2,
      name: 'item2',
      content: 'Item 2',
      active: true,
      onClick: (e, data) => console.log(e, data),
    }
  ]}
/>
```

### Header
```jsx
<Menu
  header={{
    name: 'Menu Header',
    color: 'white',
    background: '#59b47e',
    onClick: () => console.log('Menu Header'),
  }}
  items={[
    {
      key: 1,
      name: 'item1',
      content: 'Item 1',
      onClick: (e, data) => console.log(e, data),
    },
    {
      key: 2,
      name: 'item2',
      content: 'Item 2',
      active: true,
      onClick: (e, data) => console.log(e, data),
    }
  ]}
/>
```

### Action
```jsx
<Menu
  action={{
    content: 'New',
    icon: 'plus',
    onClick: () => console.log('New'),
  }}
  items={[
    {
      key: 1,
      name: 'item1',
      content: 'Item 1',
      onClick: (e, data) => console.log(e, data),
    },
    {
      key: 2,
      name: 'item2',
      content: 'Item 2',
      active: true,
      onClick: (e, data) => console.log(e, data),
    }
  ]}
/>
```

### Footer
```jsx
<Menu
  footer={{
    content: 'Collapse',
    icon: 'chevrons-left',
    onClick: () => console.log('Collapse'),
  }}
  items={[
    {
      key: 1,
      name: 'item1',
      content: 'Item 1',
      onClick: (e, data) => console.log(e, data),
    },
    {
      key: 2,
      name: 'item2',
      content: 'Item 2',
      active: true,
      onClick: (e, data) => console.log(e, data),
    }
  ]}
/>
```

### Minimal
```jsx
<Menu
  header={{
    name: 'Menu Header',
    color: 'white',
    background: '#59b47e',
    onClick: () => console.log('Menu Header'),
  }}
  minimal
  footer={{
    content: 'Collapse',
    icon: 'chevrons-right',
    onClick: () => console.log('Collapse'),
  }}
  action={{
    content: 'New',
    icon: 'plus',
    onClick: () => console.log('New'),
  }}
  items={[
    {
      key: 1,
      name: 'item1',
      content: 'Item 1',
      onClick: (e, data) => console.log(e, data),
    },
    {
      key: 2,
      name: 'item2',
      content: 'Item 2',
      active: true,
      onClick: (e, data) => console.log(e, data),
    }
  ]}
/>
```
