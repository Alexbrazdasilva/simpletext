const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src", "components"),
        "@views": path.resolve(__dirname, "src", "views"),
        "@common": path.resolve(__dirname, "src", "common"),
        "@middlewares": path.resolve(__dirname, "src", "middlewares"),
      },
    },
  },

  transpileDependencies: ["vuetify"],
};
