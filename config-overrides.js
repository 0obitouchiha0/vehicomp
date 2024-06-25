const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: function override(config, env) {
    if (!config.resolve) {
      config.resolve = {};
    }

    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin({ baseUrl: "./" }));
    config.resolve.alias = {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
    return config;
  },
};
