O Themer permite que você configure e obtenha o tema atual usado por Aui. Ele é usado pelos componentes Aui internamente, mas pode ser usado para componentes externos.

Para obter um valor do Themer:
```js static
import themer from 'aui'

themer.get('colors', 'primary')
```

Para definir um valor no Themer:
```js static
import themer from 'aui'

themer.set('colors', 'primary', '#000')
themer.get('colors', 'primary')
```

Para definir toda a configuração Themer:
```js static
import themer from 'aui'

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

Para pegar a configuração completa do Themer:
```js static
import themer from 'aui'

themer.themeConfig
```