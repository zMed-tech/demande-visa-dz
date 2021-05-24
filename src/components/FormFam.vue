<template>
  <div id="form-fam">
    <ValidationObserver ref="validations" v-slot="{}" class="observer">
      <div class="primary">
        <div class="title">
          <h3>Personel Information</h3>
        </div>

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
          name="tel"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="tel" type="text" placeholder="Tel" />
            <i
              :class="{
                'fas fa-exclamation-circle': errors[0],
                'fas fa-check': valid,
              }"
            ></i>
          </div>
        </ValidationProvider>

        <div class="input">
          <label>Membre</label>
          <select v-model="membre" placeholder="Membre">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      <ChildFormFam v-for="(membrer, index) in getMembre" :key="index" />

      <div class="btn">
        <button @click="confirm">Confirm</button>
        <button>Cancel</button>
        <div class="panding">
          <i :class="{ 'fas fa-spinner': panding, 'fas fa-check': check }"></i>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import ChildFormFam from "@/components/ChildFormFam.vue";

import "@/package/vee-validate.js";
export default {
  name: "FormInd",

  components: { ValidationObserver, ValidationProvider, ChildFormFam },

  data() {
    return {
      tel: "",
      email: "",
      membre: "2",
      panding: false,
      check: false,
    };
  },

  computed: {
    getMembre() {
      let membre = [];
      for (let i = 0; i < this.membre; i++) {
        membre.push(i);
      }

      return membre;
    },
  },

  methods: {
    async confirm() {
      let valid = await this.$refs.validations.validate();

      console.log(valid);
    },
  },
};
</script>

<style lang="scss" scoped>
#form-fam {
  & .observer {
    display: grid;

    grid-column-gap: 50px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
  }

  & .primary {
    margin-top: $nav-height;
    background: linear-gradient(
      to bottom,
      rgb(40, 205, 235),
      rgb(233, 149, 149)
    );
    box-shadow: 2px 1px 5px 4px $color-primary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;

    & .title {
      margin: 0.5rem 0;
    }

    & .input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.7rem 0;
      background-color: white;
      border-radius: 8px;

      padding: 0.3rem 0.5rem;

      & input {
        font-size: 0.9rem;
      }

      &:hover {
        border: 1px solid $color-primary;
      }

      & select {
        width: 100%;
        outline: none;
        border: none;
        margin: 0 0.5rem;
      }
    }

    & .date {
      flex-direction: column;

      & label {
        font-size: 0.9rem;
        color: #616161;
      }
    }
  }

  & .btn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem 0;

    & button {
      padding: 0.2rem 0.3rem;
      border-radius: 10px;
      font-size: 0.9rem;
      background: linear-gradient(to right, $color-space, $color-space);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: all ease-in-out 0.7s;

      &:hover {
        transform: scale(1.2);
      }
    }

    & .panding {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media only screen and (max-width: 919px) {
  #form-fam {
    & .observer {
      grid-template-columns: auto auto;
    }
  }

  @media only screen and (max-width: 671px) {
    #form-fam {
      & .observer {
        grid-template-columns: auto;
      }
    }
  }
}
</style>
