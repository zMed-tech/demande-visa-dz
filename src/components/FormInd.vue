<template>
  <div id="form-ind">
    <ValidationObserver ref="validation" v-slot="{}">
      <div class="title">
        <h3>Personel Information</h3>
      </div>

      <ValidationProvider
        v-slot="{ valid, errors }"
        name="name"
        rules="required|alpha"
      >
        <div class="input">
          <input v-model="name" type="text" placeholder="Prenom" />

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
        name="lastName"
        rules="required|alpha"
      >
        <div class="input">
          <input v-model="lastName" type="text" placeholder="Nom" />
          <i
            :class="{
              'fas fa-exclamation-circle': errors[0],
              'fas fa-check': valid,
            }"
          ></i>
        </div>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        name="dateNaissance"
        rules="required"
      >
        <div class="input date">
          <label>Date De Naissance</label>
          <date-picker
            v-model="dateNaissance"
            value-type="format"
          ></date-picker>
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

      <div class="input sel">
        <label>Type</label>
        <select v-model="typeVisa">
          <option value="Touristique">Touristique</option>
          <option value="Medicale">Medicale</option>
        </select>
      </div>

      <div class="title">
        <h3>Passeport Information</h3>
      </div>

      <ValidationProvider
        v-slot="{ valid, errors }"
        name="num"
        rules="required|integer"
      >
        <div class="input">
          <input v-model="num" type="text" placeholder="Numero" />
          <i
            :class="{
              'fas fa-exclamation-circle': errors[0],
              'fas fa-check': valid,
            }"
          ></i>
        </div>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        name="dateDelivrance"
        rules="required"
      >
        <div class="input date">
          <label>Date De Delivrance</label>
          <date-picker
            v-model="dateDelivrance"
            value-type="format"
          ></date-picker>
          <i
            :class="{
              'fas fa-exclamation-circle': errors[0],
              'fas fa-check': valid,
            }"
          ></i>
        </div>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        name="dateExpiration"
        rules="required"
      >
        <div class="input date">
          <label>Date D'Expiration</label>
          <date-picker
            v-model="dateExpiration"
            value-type="format"
          ></date-picker>
          <i
            :class="{
              'fas fa-exclamation-circle': errors[0],
              'fas fa-check': valid,
            }"
          ></i>
        </div>
      </ValidationProvider>

      <div class="btn">
        <button @click="confirm">Confirm</button>
        <button @click="cancel">Cancel</button>
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
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";

import "@/package/vee-validate.js";
export default {
  name: "FormInd",

  components: { ValidationObserver, ValidationProvider, DatePicker },

  props: {
    visa: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      name: "",
      lastName: "",
      dateNaissance: "",
      tel: "",
      email: "",
      num: "",
      typeVisa: "Touristique",
      dateDelivrance: "",
      dateExpiration: "",
      panding: false,
      check: false,
      error: false,
    };
  },

  methods: {
    async confirm() {
      let valid = await this.$refs.validation.validate();
      if (valid) {
        this.panding = true;
        this.check = false;
        this.error = false;
        let obj = {
          code: "dzbjadz6d5zadzjkfdnzfe5zfezfdzadazd6z4ad1azd",
          country: this.visa,
          name: this.name,
          lastName: this.lastName,
          dateNaissance: this.dateNaissance,
          tel: this.tel,
          email: this.email,
          typeVisa: this.typeVisa,
          numPas: this.num,
          dateDelivrance: this.dateDelivrance,
          dateExpiration: this.dateExpiration,
        };
        let { data } = await axios.post("/ind", obj);
        this.panding = false;
        if (data == "success") {
          this.check = true;
        } else {
          this.error = true;
        }
      }
    },
    cancel() {
      this.prenom = "";
      this.nom = "";
      this.dateNaissance = "";
      this.tel = "";
      this.email = "";
      this.num = "";
      this.dateDelivrance = "";
      this.dateExpiration = "";
      this.panding = false;
      this.check = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#form-ind {
  margin-top: $nav-height;
  background: linear-gradient(to bottom, rgb(40, 205, 235), rgb(233, 149, 149));
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

    & label {
      font-size: 0.9rem;
      color: #616161;
    }
  }

  & .sel {
    background: linear-gradient(to right, $color-space, $color-primary);
    & select {
      background: linear-gradient(to right, $color-space, $color-primary);
      width: 100%;
      outline: none;
      border: none;
      margin: 0 0.2rem;
    }
  }

  & .date {
    flex-direction: column;

    & label {
      font-size: 0.9rem;
      color: #616161;
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
  }

  & .panding {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
