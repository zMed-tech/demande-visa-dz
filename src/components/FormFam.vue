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

        <div class="input sel">
          <label>Membre</label>
          <select v-model="member" placeholder="Membre">
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

      <!-- Persone 1  -->

      <div v-if="member >= 1" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 1</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom1"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne1.name"
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
          name="nom1"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne1.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance1"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne1.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num1"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne1.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance1"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne1.dateDelivrance"
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
          name="dateExpiration1"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne1.dateExpiration"
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
      </div>

      <!-- Persone 2  -->

      <div v-if="member >= 2" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 2</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom2"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne2.name"
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
          name="nom2"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne2.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance2"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne2.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num2"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne2.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance2"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne2.dateDelivrance"
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
          name="dateExpiration2"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne2.dateExpiration"
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
      </div>

      <!-- Persone 3  -->

      <div v-if="member >= 3" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 3</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom3"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne3.name"
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
          name="nom3"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne3.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance3"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne3.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num3"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne3.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance3"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne3.dateDelivrance"
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
          name="dateExpiration3"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne3.dateExpiration"
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
      </div>

      <!-- Persone 4  -->

      <div v-if="member >= 4" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 4</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom4"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne4.name"
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
          name="nom4"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne4.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance4"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne4.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num4"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne4.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance4"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne4.dateDelivrance"
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
          name="dateExpiration4"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne4.dateExpiration"
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
      </div>

      <!-- Persone 5  -->

      <div v-if="member >= 5" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 5</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom5"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne5.name"
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
          name="nom5"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne5.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance5"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne5.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num5"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne5.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance5"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne5.dateDelivrance"
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
          name="dateExpiration5"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne5.dateExpiration"
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
      </div>

      <!-- Persone 6  -->

      <div v-if="member >= 6" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 6</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom6"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne6.name"
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
          name="nom6"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne6.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance6"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne6.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num6"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne6.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance6"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne6.dateDelivrance"
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
          name="dateExpiration6"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne6.dateExpiration"
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
      </div>

      <!-- Persone 7  -->

      <div v-if="member >= 7" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 7</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom7"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne7.name"
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
          name="nom7"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne7.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance7"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne7.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num7"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne7.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance7"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne7.dateDelivrance"
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
          name="dateExpiration7"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne7.dateExpiration"
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
      </div>

      <!-- Persone 8  -->

      <div v-if="member >= 8" id="child-form-ind">
        <div class="title">
          <h3>Personel Information 8</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="prenom8"
          rules="required|alpha"
        >
          <div class="input">
            <input
              v-model="personne8.name"
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
          name="nom8"
          rules="required|alpha"
        >
          <div class="input">
            <input v-model="personne8.lastName" type="text" placeholder="Nom" />
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
          name="dateNaissance8"
          rules="required"
        >
          <div class="input date">
            <label>Date De Naissance</label>
            <date-picker
              v-model="personne8.dateNaissance"
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

        <div class="title">
          <h3>Passeport Information</h3>
        </div>

        <ValidationProvider
          v-slot="{ valid, errors }"
          name="num8"
          rules="required|integer"
        >
          <div class="input">
            <input v-model="personne8.num" type="text" placeholder="Numero" />
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
          name="dateDelivrance8"
          rules="required"
        >
          <div class="input date">
            <label>Date De Delivrance</label>
            <date-picker
              v-model="personne8.dateDelivrance"
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
          name="dateExpiration8"
          rules="required"
        >
          <div class="input date">
            <label>Date D'Expiration</label>
            <date-picker
              v-model="personne8.dateExpiration"
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
      </div>

      <div class="btn">
        <button @click="confirm">Confirm</button>
        <button>Cancel</button>
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
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "@/package/vee-validate.js";
import axios from "axios";
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
      tel: "",
      email: "",
      member: "2",
      panding: false,
      check: false,
      error: false,
      personne1: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne2: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne3: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne4: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne5: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne6: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne7: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
      personne8: {
        name: "",
        lastName: "",
        dateNaissance: "",
        num: "",
        typeVisa: "Touristique",
        dateDelivrance: "",
        dateExpiration: "",
      },
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
      if (valid) {
        this.panding = true;
        this.check = false;
        this.error = false;

        let obj = {
          code: "ezkfdjzefdazfdezf1ez5f1ezqfzefezfzef564efzf",
          country: this.visa,
          email: this.email,
          tel: this.tel,
          member: this.member,
          personne1: `name : ${this.personne1.name} | lastName : ${this.personne1.lastName} |
           dateNaissance : ${this.personne1.dateNaissance} | num : ${this.personne1.name} | 
           dateDelivrance : ${this.personne1.dateDelivrance} | 
           dateExpiration : ${this.personne1.dateExpiration} `,

          personne2: `name : ${this.personne2.name} | lastName : ${this.personne2.lastName} |
           dateNaissance : ${this.personne2.dateNaissance} | num : ${this.personne2.name} | 
           dateDelivrance : ${this.personne2.dateDelivrance} | 
           dateExpiration : ${this.personne2.dateExpiration} `,

          personne3: `name : ${this.personne3.name} | lastName : ${this.personne3.lastName} |
           dateNaissance : ${this.personne3.dateNaissance} | num : ${this.personne3.name} | 
           dateDelivrance : ${this.personne3.dateDelivrance} | 
           dateExpiration : ${this.personne3.dateExpiration} `,

          personne4: `name : ${this.personne4.name} | lastName : ${this.personne4.lastName} |
           dateNaissance : ${this.personne4.dateNaissance} | num : ${this.personne4.name} | 
           dateDelivrance : ${this.personne4.dateDelivrance} | 
           dateExpiration : ${this.personne4.dateExpiration} `,

          personne5: `name : ${this.personne5.name} | lastName : ${this.personne5.lastName} |
           dateNaissance : ${this.personne5.dateNaissance} | num : ${this.personne5.name} | 
           dateDelivrance : ${this.personne5.dateDelivrance} | 
           dateExpiration : ${this.personne5.dateExpiration} `,

          personne6: `name : ${this.personne6.name} | lastName : ${this.personne6.lastName} |
           dateNaissance : ${this.personne6.dateNaissance} | num : ${this.personne6.name} | 
           dateDelivrance : ${this.personne6.dateDelivrance} | 
           dateExpiration : ${this.personne6.dateExpiration} `,

          personne7: `name : ${this.personne7.name} | lastName : ${this.personne7.lastName} |
           dateNaissance : ${this.personne7.dateNaissance} | num : ${this.personne7.name} | 
           dateDelivrance : ${this.personne7.dateDelivrance} | 
           dateExpiration : ${this.personne7.dateExpiration} `,

          personne8: `name : ${this.personne8.name} | lastName : ${this.personne8.lastName} |
           dateNaissance : ${this.personne8.dateNaissance} | num : ${this.personne8.name} | 
           dateDelivrance : ${this.personne8.dateDelivrance} | 
           dateExpiration : ${this.personne8.dateExpiration} `,
        };

        let { data } = await axios.post("http://localhost:3000/fam", obj);
        this.panding = false;
        if (data == "err") {
          this.error = true;
        } else {
          this.check = true;
        }
      }
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
      }

      & .sel {
        background-color: white;

        & select {
          background-color: white;
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

    & #child-form-ind {
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

    & .btn {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 1rem 0;
      grid-column: 1 / 4;

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
}

@media only screen and (max-width: 919px) {
  #form-fam {
    & .observer {
      grid-template-columns: auto auto;

      & .btn {
        grid-column: 1 / 3;
      }
    }
  }

  @media only screen and (max-width: 671px) {
    #form-fam {
      & .observer {
        grid-template-columns: auto;

        & .btn {
          grid-column: 1 / 2;
        }
      }
    }
  }
}
</style>
