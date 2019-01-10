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
import { Box, Button } from 'audora-ui'

const MyComponent = () => (
  <Box>
    <Button onClick={() => alert('Button was clicked!')} variant="primary">
      Click
    </Button>
  </Box>
)
```

### Theme

```jsx
import { Theme } from 'audora-ui'

const themeConfig = {
  colors: {
    primary: ['#333333', '#222222'],
  },
}

const MyApplication = () => (
  <ThemeProvider theme={themeConfig}>
    <Button
      content="Click"
      onClick={() => alert('Button was clicked!')}
      type="primary"
    />
  </ThemeProvider>
)
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
