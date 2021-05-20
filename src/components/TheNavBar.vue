<template>
  <div id="the-nav-bar">
    <div class="logo"><img src="@/assets/images/logo.png" alt="Logo" /></div>
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
    </ul>
    <div class="last">Contact</div>
    <div class="hamburger">
      <div class="lines" @click="animateHamburger">
        <div id="line1" class="line"></div>
        <div id="line2" class="line"></div>
        <div id="line3" class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "TheNavBar",

  data() {
    return {
      open: true,
    };
  },

  mounted() {
    gsap.from("#the-nav-bar", {
      y: 200,
      x: 200,
      duration: 1,
      rotate: -20,
      ease: "bounce",
    });
  },

  methods: {
    animateHamburger() {
      if (this.open) {
        gsap.to("#line1", {
          x: -170,
          y: 8,
          rotate: 45,
          duration: 1,
        });

        gsap.to("#line2", {
          opacity: 0,
        });

        gsap.to("#line3", {
          x: -170,
          y: -8,
          rotate: -45,
          duration: 2,
        });

        this.open = false;
        this.$emit("openSlide", true);
      } else {
        gsap.to("#line1", {
          x: 0,
          y: 0,
          rotate: 0,
        });

        gsap.to("#line2", {
          opacity: 1,
        });

        gsap.to("#line3", {
          x: 0,
          y: 0,
          rotate: 0,
        });

        this.open = true;
        this.$emit("openSlide", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#the-nav-bar {
  position: absolute;
  top: 0;
  height: $nav-height;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  & .logo {
    border-radius: 30px;
    overflow: hidden;
    max-width: 200px;

    & img {
      max-width: 200px;
    }
  }

  & .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    & .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      color: $color-secondary;
      font-weight: bold;
      transition: all ease-in-out 0.7s;
      margin: 0 2rem;
      list-style: none;
      font-size: 1rem;

      border-radius: 25px;

      & span {
        margin: 0 1rem;
      }

      &:hover {
        transform: scale(1.2);
      }

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 0%;
        bottom: -5px;
        background-color: $color-space;
        transition: all ease-in-out 0.7s;
      }
    }

    & .router-link-exact-active::before {
      width: 100%;
    }
  }

  & .last {
    background-color: $color-space;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    position: relative;
    transition: all ease-in-out 0.7s;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      background-color: $color-dark;
      width: 0%;
      height: 3px;
      transition: all ease-in-out 0.7s;
    }

    &:hover::before {
      width: 80%;
    }
  }

  & .hamburger {
    display: none;
    & .lines {
      margin: 0.5rem 1rem;
      cursor: pointer;

      & .line {
        width: 30px;
        height: 5px;
        background-color: $color-space;
        margin: 0.2rem;
      }
    }
  }
}

@media only screen and (max-width: 821px) {
  #the-nav-bar {
    & .links {
      display: none;
    }

    & .last {
      display: none;
    }

    & .hamburger {
      display: block;
    }
  }
}
</style>
