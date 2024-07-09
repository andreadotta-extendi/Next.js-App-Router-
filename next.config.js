const withBuilderDevTools = require("@builder.io/dev-tools/next")();

module.exports = withBuilderDevTools({
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      module: false,
      v8: false,
      perf_hooks: false,
    };
    return config;
  },
});
