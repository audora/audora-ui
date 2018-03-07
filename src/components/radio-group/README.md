```jsx
  <RadioGroup
    items={[
      { name: 'color', value: 'red', label: 'Red' },
      { name: 'color', value: 'blue', label: 'Blue', isSelected: true },
      { name: 'color', value: 'yellow', label: 'Yellow' },
      { name: 'color', value: 'green', label: 'Green' },
    ]}
    label="Pick a color:"
    onChange={(e, data) => console.log(data)}
  />
```