<template>
  <div id="contact">
    <TheNavBar @openSlide="openSlideMethode" />
    <transition name="slide" mode="out-in">
      <TheSlideBar v-if="openSlide" />
    </transition>
    <div class="bg-visa"></div>
    <div class="content-contact">
      <div class="contact-input">
        <div class="left-input">
          <div class="input">
            <input type="text" placeholder="Name" />
          </div>
          <div class="input">
            <input type="text" placeholder="Email" />
          </div>
          <div class="input">
            <input type="text" placeholder="Subject" />
          </div>
        </div>

        <div class="right-input">
          <div class="input">
            <textarea cols="22" rows="10" placeholder="Message"></textarea>
          </div>
        </div>
      </div>
      <div class="btn">
        <button>Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheSlideBar from "@/components/TheSlideBar.vue";
import gsap from "gsap";

export default {
  name: "VisaView",

  components: {
    TheNavBar,
    TheSlideBar,
  },

  data() {
    return {
      typeVisa: "ind",
      openSlide: false,
    };
  },

  mounted() {
    gsap.from(".left-input", {
      x: -400,
      opacity: 0,
      duration: 2,
    });

    gsap.from(".right-input", {
      x: 400,
      opacity: 0,
      duration: 2,
    });

    gsap.from(".btn", {
      y: 300,
      opacity: 0,
      duration: 2,
    });
  },

  methods: {
    openSlideMethode(val) {
      this.openSlide = val;
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  min-height: $default-height;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .bg-visa {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, $color-primary, $color-space);
    clip-path: polygon(15% 100%, 0% 0%, 100% 0%, 85% 100%, 15% 100%);
  }

  & .content-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .contact-input {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & .left-input {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;

        & .input {
          margin: 1rem 0;

          & input {
            font-size: 1.2rem;
            color: black;
            padding: 0.5rem 1rem;
            font-weight: bold;
            background: linear-gradient(
              to right,
              $color-secondary,
              rgb(160, 155, 150)
            );
            outline: none;
            border: none;
            border-radius: 2rem;
          }
        }
      }

      & .right-input {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;

        & textarea {
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          font-weight: bold;
          background: linear-gradient(
            to right,
            $color-secondary,
            rgb(160, 155, 150)
          );
          outline: none;
          border: none;
          border-radius: 0.5rem;
        }
      }
    }

    & .btn {
      display: flex;
      justify-content: center;
      margin: 1rem 0;

      & button {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        background: linear-gradient(
          to right,
          $color-secondary,
          rgb(160, 155, 150)
        );
        border-radius: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all ease-in-out 0.7s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media only screen and (max-width: 871px) {
  #contact {
    & .content-contact {
      & .contact-input {
        flex-direction: column;
      }
    }
  }
}
</style>
