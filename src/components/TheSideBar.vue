<template>
  <div id="the-side-bar">
    <i class="fab fa-twitter"></i>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-youtube"></i>
    <i class="fab fa-linkedin-in"></i>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "TheSideBar",
  mounted() {
    gsap.from("#the-side-bar", {
      x: -100,
      opacity: 0,
      duration: 2,
      delay: 3,
      ease: "elastic",
    });
  },
};
</script>

<style lang="scss" scoped>
#the-side-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 20%;

  & i {
    cursor: pointer;
    margin: 1rem 1rem;
    transition: all ease-in-out 0.7s;

    &:hover {
      transform: scale(1.5);
    }
  }

  & .fa-twitter {
    color: $color-space;
  }

  & .fa-facebook {
    color: blue;
  }

  & .fa-youtube {
    color: red;
  }
}
</style>
