const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src", "components"),
        "@utils": path.resolve(__dirname, "src", "utils"),
      },
    },
  },
};
