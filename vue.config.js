module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/variables.scss";
        @import "@/assets/style/globalStyle.scss";
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');`,
      },
    },
  },

  pwa: {
    iconPaths: {
      maskicon: null,
      favicon32: "./favicon.png",
      favicon16: "./favicon.png",
      appleTouchIcon: null,
      msTileImage: null,
    },
    // configure the workbox plugin
  },
};
