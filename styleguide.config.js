const path = require('path')

module.exports = {
  webpackConfig: require('./webpack/config.js'),
  getComponentPathLine: componentPath => {
    let name = path.basename(componentPath, '.jsx')

    name = name.charAt(0).toUpperCase() + name.slice(1)
    name = name.replace(/[-][a-zA-Z]/g, match =>
      match.split('')[1].toUpperCase()
    )

    return `import { ${name} } from "audora-ui";`
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme'),
  },
  styleguideDir: path.join(__dirname, 'docs'),
  sections: [
    {
      name: 'Getting Started',
      content: 'docs/getting-started.md',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Usage',
          content: 'docs/usage.md',
        },
        {
          name: 'Customize Theme',
          content: 'docs/theme.md',
        },
      ],
    },
    {
      name: 'Design',
      sections: [
        {
          name: 'Typography',
          content: 'docs/typography.md',
        },
        {
          name: 'Spacing',
          content: 'docs/spacing.md',
        },
        {
          name: 'Border Radius',
          content: 'docs/border-radius.md',
        },
        {
          name: 'Status Colors',
          content: 'docs/status-colors.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/*.jsx',
    },
  ],
  // components: 'src/components/**/*.jsx',
  ignore: ['**/*.spec.jsx'],
  editorConfig: 'pastel-on-dark',
  showCode: false,
  showUsage: true,
  title: 'Audora UI',
}
