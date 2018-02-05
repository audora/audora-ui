```js static
import { Theme } from 'audora-ui';

const themeConfig = {
  color: {
    primary: '#222'
  }
};

const MyApplication = () => (
  <Theme config={themeConfig}>
    <Button
      content="Click"
      onClick={() => alert("Button was clicked!")}
    />
  </Theme>
);
```
or you can use a primary color

```js static
import { Theme } from 'audora-ui';

/*
 * @colors
 *
 * blue
 * green
 * navy
 * red
 */

const MyApplication = () => (
  <Theme color="red">
    <Button
      content="Click"
      onClick={() => alert("Button was clicked!")}
    />
  </Theme>
);
```
