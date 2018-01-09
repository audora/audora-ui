/* global __dirname */

const path = require("path");
const glob = require("glob");

module.exports = {
  title: "Audora UI Kit",
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: "Components",
      components: () => (
        glob.sync(path.resolve(__dirname, "src/components/**/*.@(jsx)")).filter((module) =>
          !(/(__tests__|examples\/)/.test(module))
        )
      ),
    },
  ],

  getExampleFilename: (componentPath) => {
    const parsed = path.parse(componentPath);
    const exampleDir = path.join(parsed.dir, "examples");

    return path.join(exampleDir, parsed.name + ".md");
  },

  getComponentPathLine: (componentPath) => {
    let name = path.basename(componentPath, ".jsx");

    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace(/[-][a-zA-Z]/g, (match) => match.split("")[1].toUpperCase());

    return `import { ${name} } from "@audora/ui";`;
  }
}