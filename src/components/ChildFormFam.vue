<template>
  <div id="child-form-ind">
    <div class="title">
      <h3>Personel Information</h3>
    </div>

    <ValidationProvider
      v-slot="{ valid, errors }"
      name="prenom"
      rules="required|alpha"
    >
      <div class="input">
        <input
          v-model="prenom"
          type="text"
          placeholder="Prenom"
          name="prenom"
        />

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
      name="nom"
      rules="required|alpha"
    >
      <div class="input">
        <input v-model="nom" type="text" placeholder="Nom" />
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
        <date-picker v-model="dateNaissance"></date-picker>
        <i
          :class="{
            'fas fa-exclamation-circle': errors[0],
            'fas fa-check': valid,
          }"
        ></i>
      </div>
    </ValidationProvider>

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
        <date-picker v-model="dateDelivrance" value-type="format"></date-picker>
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
        <date-picker v-model="dateExpiration" value-type="format"></date-picker>
        <i
          :class="{
            'fas fa-exclamation-circle': errors[0],
            'fas fa-check': valid,
          }"
        ></i>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import "@/package/vee-validate.js";
export default {
  name: "FormInd",

  components: { ValidationProvider, DatePicker },

  data() {
    return {
      prenom: "",
      nom: "",
      dateNaissance: "",
      num: "",
      dateDelivrance: "",
      dateExpiration: "",
    };
  },
};
</script>

<style lang="scss" scoped>
#child-form-ind {
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
