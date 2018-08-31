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