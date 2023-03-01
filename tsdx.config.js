const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image');
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      image({ include: ['**/*.png', '**/*.jpg'] }),
      postcss({
        modules: true,
        inject: false,
        extract: true,
      }),
      ...config.plugins,
    ];
    return config;
  },
};
