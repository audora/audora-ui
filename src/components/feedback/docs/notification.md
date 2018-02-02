```jsx
initialState = { visible: false }
;<div>
  <Button
    type="primary"
    onClick={() => setState({ visible: true })}
    content="Open"
  />
  <Notification visible={state.visible} />
</div>
```