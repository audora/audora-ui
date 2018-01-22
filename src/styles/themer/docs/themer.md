Themer allows you to configure and get the current theme used by Audora UI. It is used by the Audora UI components internally, but can be used for external components.

To get a Themer value:
```js static
import themer from 'audora-ui'

themer.get('colors', 'primary')
```

To set a value in Themer:
```js static
import themer from 'audora-ui'

themer.set('colors', 'primary', '#000')
themer.get('colors', 'primary')
```

To set the entire Themer setting:
```js static
import themer from 'audora-ui'

themer.themeConfig = {
  colors: {
    default: 'white',
    primary: 'red',
    success: 'blue',
    danger: 'orange',
    warning: 'yellow',
  }
}

themer.get('colors', 'primary')
themer.get('colors', 'successs')
```

To get the full configuration of Themer:
```js static
import themer from 'audora-ui'

themer.themeConfig
```