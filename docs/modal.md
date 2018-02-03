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
    onCancel={() => setState({ visible: false })}
    onOk={() => setState({ visible: false })}
    title="Basic Modal"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</div>
```