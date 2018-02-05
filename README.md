# Audora UI

An UI design language and React-based implementation

## Install
### via yarn
```bash
  yarn add audora-ui
```
### via npm
```bash
  npm install audora-ui --save
```

## Usage

```jsx
import { Button } from 'audora-ui';

const MyComponent = () => (
  <div>
    <Button
      content="Click"
      onClick={() => alert("Button was clicked!")}
      type="primary"
    />
  </div>
);
```
### Theme
```jsx
import { Theme } from 'audora-ui';

const themeConfig = {
  btn: {
    border: {
      radius: '30px'
    },
    bg: {
      primary: 'grey'
    }
  }
};

const MyApplication = () => (
  <Theme config={themeConfig}>
    <Button
      content="Click"
      onClick={() => alert("Button was clicked!")}
      type="primary"
    />
  </Theme>
);
```

## Development

Clone the repo:
```bash
git clone git@github.com:audora/audora-ui.git
```
Then install dependencies:
```bash
cd ./audora-ui
yarn
```
or
```bash
cd ./audora-ui
npm install
```
Run project:
```bash
yarn start
```
or
```bash
npm start
```


## Contributing
Please read our [CONTRIBUTING.md](https://github.com/audora/audora-ui/blob/master/CONTRIBUTING.md)
