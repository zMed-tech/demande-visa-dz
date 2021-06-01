<template>
  <div id="contact">
    <TheNavBar @openSlide="openSlideMethode" />
    <transition name="slide" mode="out-in">
      <TheSlideBar v-if="openSlide" />
    </transition>
    <div class="bg-visa"></div>
    <div class="content-contact">
      <ValidationObserver ref="validation">
        <div class="contact-input">
          <div class="left-input">
            <ValidationProvider
              v-slot="{ valid, errors }"
              name="name"
              rules="required|alpha"
            >
              <div class="input">
                <input v-model="name" type="text" placeholder="Name" />
                <i
                  :class="{
                    'fas fa-exclamation-circle': errors[0],
                    'fas fa-check': valid,
                  }"
                ></i>
              </div>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ valid, errors }"
              name="email"
              rules="required|email"
            >
              <div class="input">
                <input v-model="email" type="text" placeholder="Email" />
                <i
                  :class="{
                    'fas fa-exclamation-circle': errors[0],
                    'fas fa-check': valid,
                  }"
                ></i>
              </div>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ valid, errors }"
              name="subject"
              rules="required|alpha"
            >
              <div class="input">
                <input v-model="subject" type="text" placeholder="Subject" />
                <i
                  :class="{
                    'fas fa-exclamation-circle': errors[0],
                    'fas fa-check': valid,
                  }"
                ></i>
              </div>
            </ValidationProvider>
          </div>

          <div class="right-input">
            <ValidationProvider
              v-slot="{ valid, errors }"
              name="message"
              rules="required|alpha"
            >
              <div class="input">
                <textarea
                  v-model="message"
                  cols="22"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <i
                  :class="{
                    'fas fa-exclamation-circle': errors[0],
                    'fas fa-check': valid,
                  }"
                ></i>
              </div>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
      <div class="btn">
        <button @click="send">Send</button>
      </div>
      <div class="panding">
        <i
          :class="{
            'fas fa-spinner': panding,
            'fas fa-check': check,
            'fas fa-exclamation-circle': error,
          }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheSlideBar from "@/components/TheSlideBar.vue";
import gsap from "gsap";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "@/package/vee-validate.js";
import axios from "axios";

export default {
  name: "VisaView",

  components: {
    TheNavBar,
    TheSlideBar,
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      typeVisa: "ind",
      openSlide: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      panding: false,
      check: false,
      error: false,
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

    async send() {
      let valid = await this.$refs.validation.validate();
      if (valid) {
        this.panding = true;
        this.error = false;
        this.check = false;

        let obj = {
          email: this.email,
          subject: this.subject,
          message:
            "email : " +
            this.email +
            ", name : " +
            this.name +
            " , message : " +
            this.message,
        };

        let { data } = await axios.post("/contact", obj);

        if (data == "success") {
          this.panding = false;
          this.error = false;
          this.check = true;
        } else {
          this.panding = false;
          this.error = true;
          this.check = false;
        }
      }
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
            background: linear-gradient(to right, white, $color-secondary);
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
          background: linear-gradient(to right, white, $color-secondary);
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
        background: linear-gradient(to right, white, $color-secondary);
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
