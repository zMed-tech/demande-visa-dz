module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/variables.scss";
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');`,
      },
    },
  },
};
