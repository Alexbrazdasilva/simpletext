<template>
  <form>
    <text-field
      label="Nome"
      v-model="name"
      :rules="[validity.required, validity.max]"
      :properties="{ outlined: true }"
      @input="validityMax"
    ></text-field>
    <text-field
      v-model="form.name"
      label="Username"
      :readonly="true"
      hint="Gerado a partir do nome inserido no primeiro campo"
      :properties="{ outlined: true, disabled: true, persistentHint: true }"
      @focus.prevent="onfocus"
    ></text-field>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="registerUser">Entrar</v-btn>
    </div>
  </form>
</template>

<script>
import { isEmpty } from "@common/utils/validityUser.js";
import TextField from "@components/TextField.vue";
export default {
  data: () => ({
    name: "",
    username: "Meunome",
    validity: {
      required: (value) => isEmpty(value),
      max: (value) => value.length <= 10 || "Preencha com um nome mais curto",
    },
  }),
  methods: {
    onfocus(e) {
      e.preventDefault();
    },
    registerUser() {
      //
    },
    validityMax({ value, preventDefault }) {
      value.lenght == 10 && preventDefault();
    },
    convertName(name) {
      let separedName = name.replace(/\s/g, "").normalize("NFC").toLowerCase();
      console.clear();
      console.log(separedName);
      return name;
    },
  },
  watch: {
    name(value) {
      this.username = `@${this.convertName(value)}`;
    },
  },
  components: {
    TextField,
  },
};
</script>
