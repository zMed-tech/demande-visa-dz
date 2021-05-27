<template>
  <div id="the-slide-bar">
    <ul class="links">
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
          <i class="fas fa-home"></i>
          Home
        </li>
      </router-link>

      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Visa', params: { visa: 'Spain' } }"
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
          <span
            ><img
              src="@/assets/icons/spain.png"
              alt="Spain"
              width="15px"
              height="15px"
          /></span>
          Espagne
        </li>
      </router-link>

      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Visa', params: { visa: 'France' } }"
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
          <span
            ><img
              src="@/assets/icons/france.png"
              alt="Spain"
              width="15px"
              height="15px"
          /></span>
          France
        </li>
      </router-link>

      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Visa', params: { visa: 'Germany' } }"
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
          <span
            ><img
              src="@/assets/icons/germany.png"
              alt="Spain"
              width="15px"
              height="15px"
          /></span>
          Germany
        </li>
      </router-link>

      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Contact' }"
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
          <i class="fas fa-envelope-open"></i>
          Contact
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSlideBar",
};
</script>

<style lang="scss" scoped>
#the-slide-bar {
  width: 200px;
  height: 100vh;
  box-shadow: -3px 2px 10px 1px $color-dark;
  position: absolute;
  display: flex;
  justify-content: center;

  top: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(to bottom, $color-space, $color-accent);

  & .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;

    & .link {
      margin: 1rem 0;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
      color: $color-secondary;
      cursor: pointer;

      & img,
      i {
        color: $color-accent;
        margin: 0 1rem;
      }
    }
  }
}
</style>
