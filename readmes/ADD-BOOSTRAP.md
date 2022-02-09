yarn add bootstrap

yarn add -D react-script

yarn add sass sass-loader // ya lo hice en el proyecto base

crear directorio src/theme y un main.scss

agregar en main
@import '~bootstrap/scss/bootstrap.scss';

luego
en index.js
import './theme/main.scss';

y en preview.js
import '../src/theme/main.scss';

yarn add -D @storybook/preset-scss

en main.js agregar
addons: ['@storybook/preset-scss'],

necesito agregar webpack 5 porque las dependencias actuales de style loader etc
rompen con webpack 4 y no voy a bajarlas
para un proyecto limpio sin storybook puedo ejecutar
npx sb init --builder webpack5 actualiza el base para empezar directo con webpack 5

upgrade to webpak 5 in storybook based on
https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5

yarn add @storybook/builder-webpack5 @storybook/manager-webpack5 --dev

Then edit your .storybook/main.js config:

module.exports = {
core: {
builder: 'webpack5',
},
};
