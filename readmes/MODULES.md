Para configurar los imports como no relativos
en un estructura

root --> src --> components

Relativo
import { Button } from "../../components/atoms";

No relativo
import { Button } from "components/atoms";

Se tienen que agregar las siguientes configuraciones

en .eslintrc.js agregar moduleDirectory

settings: {
"import/resolver": {
node: {
extensions: [".js", ".jsx", ".ts", ".tsx"],
paths: ["./src"],
moduleDirectory: ["src", "node_modules"],
},
},
},

en tsconfig.json agregar

"compilerOptions": {
... resto de configuraciones
"baseUrl": ".",
"paths": {
"components/_": ["./src/components/_"],
}
},

en webpack.config.js agregar modules

resolve: {
extensions: [".js", ".ts", ".tsx", ".json"],
modules: [path.resolve(__dirname, "src"), "node_modules"],
},

en main.js de .storybook

const path = require("path");

module.exports = {
... resto de configuraciones
webpackFinal: async (config, { configType }) => {
config.resolve.modules.push(path.resolve(\_\_dirname, "../src"));
return config;
},
};
