## Margin e Padding

Todos os componentes do Audora UI usam a lib [styled-system](https://github.com/jxnblk/styled-system) para prover [espaços](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space-responsive) responsivos com base em uma escala de espaçamento global (**theme.space**). Os suportes de margem e preenchimento ajudam a promover a consistência no layout sem a necessidade de adicionar declarações personalizadas de margem e preenchimento em um aplicativo. Os suportes de margem e preenchimento usam uma sintaxe abreviada, semelhante a outras abordagens OOCSS e muitas bibliotecas CSS.

```jsx
<Box p={3} mx={2} my={4} color="white" bg="primary.0" borderRadius={10}>
  Audora
</Box>
```

- **m**: margin
- **mt**: margin-top
- **mr**: margin-right
- **mb**: margin-bottom
- **ml**: margin-left
- **mx**: margin-left e margin-right
- **my**: margin-top e margin-bottom
- **p** : padding
- **pt**: padding-top
- **pr**: padding-right
- **pb**: padding-bottom
- **pl**: padding-left
- **px**: padding-left e padding-right
- **py**: padding-top e padding-bottom

## Font Size

O fontSize prop pode pegar valores de uma escala tipográfica definida em seu tema como uma matriz **theme.fontSizes**.

## With

O **with** prop pode definir larguras fixas ou baseadas em porcentagem em um elemento.

O **with** prop aceita number, string ou array, onde:

- Os números entre 0 e 1 são convertidos em larguras baseadas em porcentagem (por exemplo, **1/2** se torna **50%**)
- Números maiores que 1 são convertidos em pixels
- As strings podem ser usadas para outros valores de CSS (por exemplo, **50vw** ou **30em**)
- Arrays podem ser usados ​​para estilos responsivos

## Responsive Styles 

Todos os componentes aceitam arrays como valores para definir estilos responsivos pela primeira vez em dispositivos móveis. O primeiro valor não está no escopo de uma consulta de mídia e se aplica a todos os pontos de interrupção. Cada valor após o primeiro corresponde a uma consulta de mídia derivada de **theme.breakpoints**.

Veja a documentação do [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md) para mais informações.