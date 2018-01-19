```jsx
initialState = { visible: false }
;<div>
  <Button
    type="primary"
    onClick={() => setState({ visible: true })}
    content="Open"
  />
  <Modal
    title="Basic Modal"
    visible={state.visible}
    onClose={() => setState({ visible: false })}
  >
    <Button
      type="primary"
      onClick={() => setState({ visible: false })}
      content="Close"
    />
  </Modal>
</div>
```