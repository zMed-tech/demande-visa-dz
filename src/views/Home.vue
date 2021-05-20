<template>
  <div id="home">
    <TheNavBar />
    <div class="bg-home"></div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  name: "Home",
  components: { TheNavBar },
};
</script>

<style lang="scss" scoped>
#home {
  height: $default-height;
  width: 100%;

  & .bg-home {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, $color-primary, $color-space);
    clip-path: polygon(0% 50%, 100% 10%, 100% 0%, 0% 0%, 0% 50%);
  }
}
</style>
