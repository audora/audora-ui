O módulo `spacing` exporta valores que podem ser usados para padding, margin, e positioning (top, left, bottom, right). O uso de valores predefinidos de espaçamento nos ajuda a manter as coisas visualmente consistentes.

Os valores de pixel são uma estratégia base-8 como definida pelo sistema de design.
### Sizes
| propriedade | valor em Px  |
|-------------|--------------|
| XS          | 8px          |
| SM          | 16px         |
| MD          | 24px         |
| LG          | 32px         |
| XL          | 48px         |
| HUGE        | 64px         |

### Exemplo:

```js static
import { spacing } from 'aui'

// se voce precisar referenciar o valor do pixel diretamente
spacing.SM //=> 16

const styles = {
  // Padding/margin para todos os lados
  ...spacing.PADDING_SM,               // => { padding: 16 }
  ...spacing.MARGIN_SM,                // => { margin: 16 }

  // Padding/margin em uma direcao
  ...spacing.PADDING_LEFT_MD,          // => { paddingLeft: 24 }
  ...spacing.MARGIN_TOP_MD,            // => { marginLeft: 24 }

  // Padding/margin em uma dimensão
  ...spacing.PADDING_Y_XL              // => { paddingTop: 48, paddingBottom: 48 }
  ...spacing.MARGIN_X_LG,              // => { marginLeft: 32, marginRight: 32 }

  // Posicionamento
  ...spacing.LEFT_XS                   // => { left: 8 }
  ...spacing.RIGHT_SM,                 // => { right: 16 }
}
```