<template>
  <div id="visa-view">
    <TheNavBar @openSlide="openSlideMethode" />
    <transition name="slide" mode="out-in">
      <TheSlideBar v-if="openSlide" />
    </transition>
    <div class="bg-visa"></div>
    <div class="chose">
      <div class="input">
        <label>Individuel</label>
        <input v-model="typeVisa" type="radio" value="ind" />
      </div>
      <div class="input">
        <label>Familliale</label>
        <input v-model="typeVisa" type="radio" value="fam" />
      </div>
    </div>
    <transition name="slide-visa" mode="out-in">
      <component :is="comp" />
    </transition>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheSlideBar from "@/components/TheSlideBar.vue";
import FormInd from "@/components/FormInd.vue";
import FormFam from "@/components/FormFam.vue";
export default {
  name: "VisaView",

  components: {
    FormInd,
    FormFam,
    TheNavBar,
    TheSlideBar,
  },

  props: {
    visa: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      typeVisa: "ind",
      openSlide: false,
      comp: FormInd,
    };
  },
  watch: {
    typeVisa(value) {
      if (value == "ind") {
        this.comp = FormInd;
      } else {
        this.comp = FormFam;
      }
    },
  },

  methods: {
    openSlideMethode(val) {
      this.openSlide = val;
    },
  },
};
</script>

<style lang="scss" scoped>
#visa-view {
  min-height: $default-height;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .bg-visa {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, $color-primary, $color-space);
    clip-path: polygon(15% 100%, 0% 0%, 100% 0%, 85% 100%, 15% 100%);
  }

  & .chose {
    position: absolute;
    top: 10%;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: space-evenly;

    & .input {
      & label {
        margin: 0 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: $color-secondary;
      }
    }
  }
}

@media only screen and (max-width: 821px) {
  #visa-view {
    & .chose {
      flex-direction: column;
    }
  }
}
</style>
