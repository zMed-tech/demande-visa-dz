<template>
  <div id="app">
    <RefreshPage v-if="$store.state.refresh" />
    <transition name="slide-view" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
<script>
import RefreshPage from "@/components/RefreshPage.vue";

export default {
  name: "App",
  components: { RefreshPage },
};
</script>

<style lang="scss">
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
