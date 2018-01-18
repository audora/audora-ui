O hight order `withTheme` é a melhor maneira de usar os temas Aui nos seus próprios componentes React. Ele rastreia atualizações para a configuração do seu tema e re-renderiza seus componentes conforme necessário. Os atributos do tema são passados para seus componentes através de uma propriedade `auiTheme`. Usar isso ou o themer diretamente permite que você compartilhe um tema entre os componentes.

Se você quiser mudar o tema, você precisará importar `themer` e configurá-lo lá.

### decorator
```js static
  import React, { Component } from 'react'
  import { withTheme } from 'aui'

  @withTheme
  class MyComponent extends Component {
    render() {
      <p style={{ color: this.props.auiTheme.color.action }}>
        Hi!
      </p>
    }
  }

  export default MyComponent
```

### functional
```js static
import { withTheme } from 'aui'

const MyComponent = props => {
  return (
    <p style={{ color: props.auiTheme.color.action }}>
      Hi!
    </p>
  )
}

export default withTheme(MyComponent)
```
