<template>
  <div id="home">
    <TheNavBar />
    <TheSideBar />
    <div class="bg-home"></div>
    <div class="text">
      Prenez Votre Rendez-Vous <br />

      <span class="typing">{{ text }}</span>
    </div>
    <HomeSvg />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheSideBar from "@/components/TheSideBar.vue";
import HomeSvg from "@/components/HomeSvg.vue";
import gsap from "gsap";

export default {
  name: "Home",
  components: { TheNavBar, TheSideBar, HomeSvg },

  created() {
    setInterval(() => {
      if (this.index == this.words[this.currentWord].length) {
        this.index = 0;
        this.text = "";
        this.currentWord++;

        if (this.currentWord == this.words.length) {
          this.currentWord = 0;
        }
      }

      this.text += this.words[this.currentWord][this.index];
      this.index++;
    }, 500);
  },

  mounted() {
    gsap.from(".text", {
      x: -100,
      opacity: 0,
      duration: 3,
    });

    gsap.from("svg", {
      x: 100,
      opacity: 0,
      duration: 3,
    });
  },

  data() {
    return {
      words: ["BLS", "VFS", "TLS"],
      text: "",
      currentWord: 0,
      index: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes tik {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#home {
  height: $default-height;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  & .svg {
    height: 70%;
    width: 0%;
    border: 1px solid red;
  }

  & .bg-home {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, $color-primary, $color-space);
    clip-path: polygon(0% 50%, 100% 10%, 100% 0%, 0% 0%, 0% 50%);
  }

  & .text {
    font-family: "Pacifico", cursive;

    color: $color-secondary;
    text-align: center;
    font-size: 2rem;

    & .typing {
      font-family: "Satisfy", cursive;
      position: relative;
      font-weight: bold;
      color: $color-accent;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 1.5px;
        background-color: black;
        animation: tik 0.7s ease infinite;
      }
    }
  }
}
</style>
