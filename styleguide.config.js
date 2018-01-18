const path = require('path');
module.exports = {
  getExampleFilename(componentPath) {
    const parts = componentPath.split('/');
    const componentName = parts[parts.length - 1];
    return componentPath.replace(
      `/${componentName}`,
      `/docs/${componentName.replace('.js', '')}.md`
    );
  },
  getComponentPathLine: componentPath => {
    let name = path.basename(componentPath, '.js');

    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace(/[-][a-zA-Z]/g, match =>
      match.split('')[1].toUpperCase()
    );

    return `import { ${name} } from "aui";`;
  },
  highlightTheme: 'pastel-on-dark',
  ignore: ['**/*/*Styles.js', '**/*.spec.js', '**/*/*hexValues.js'],
  sections: [
    {
      name: 'Colors',
      content: 'docs/colors.md'
    },
    {
      name: 'Spacing',
      content: 'docs/spacing.md'
    },
    {
      name: 'Themes',
      content: 'docs/themes.md',
      sections: [
        {
          name: 'Themer',
          content: 'src/styles/themer/docs/themer.md'
        },
        {
          name: 'withTheme HOC',
          content: 'src/styles/themer/docs/withTheme.md'
        }
      ]
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      sections: [
        {
          name: 'General',
          components: 'src/components/general/[a-z]*.js'
        }
      ]
    }
  ],
  showCode: false,
  showUsage: true,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: '1600px'
      }
    },
    ReactComponent: {
      root: {
        marginBottom: '48px',
        backgroundColor: '#fff',
        padding: '16px'
      }
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/wrapper')
  },
  styleguideDir: path.join(__dirname, 'docs'),
  theme: {
    color: {
      base: '#333',
      light: '#999',
      lightest: '#ccc',
      link: '#1f9aff',
      linkHover: '#1e7ece',
      border: '#BDBDBD',
      name: '#FF467E',
      type: '#5FCA44',
      error: '#fff',
      baseBackground: '#fff',
      errorBackground: '#E6003D',
      codeBackground: '#fff',
      sidebarBackground: '#fff'
    },
    fontFamily: {
      base: ['Nunito', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  title: 'Aui'
};
