```jsx
initialState = { visible: false }
;<div>
  <Button
    type="primary"
    onClick={() => setState({ visible: true })}
    content="Open"
  />
  <Modal
    visible={state.visible}
    onClose={() => setState({ visible: false })}
    title="Basic Modal"
    content={(
      <Button
        type="primary"
        onClick={() => setState({ visible: false })}
        content="Close"
      />
    )}
  />
</div>
```