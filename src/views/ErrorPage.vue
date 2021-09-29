<template>
  <div id="error-page">
    <h1>Error 404 Page Not Found</h1>

    <div>
      <p>Go to</p>

      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Home' }"
        custom
      >
        <li
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
            'link',
          ]"
          @click="navigate"
        >
          Home
        </li>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#error-page {
  display: flex;
  height: $default-height;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div {
    display: flex;

    & li {
      list-style: none;
      text-decoration: underline;
      color: $color-space;
      cursor: pointer;
      margin: 0 0.5rem;
    }
  }
}
</style>
