<template>
  <form>
    <text-field
      label="Nome"
      v-model="name"
      :rules="[validity.required, validity.min]"
      :properties="{ outlined: true }"
      :maxlength="10"
    ></text-field>
    <text-field
      label="Username"
      v-model="username"
      :readonly="true"
      hint="Gerado a partir do nome inserido no primeiro campo"
      :properties="{ outlined: true, disabled: true, persistentHint: true }"
      @focus.prevent="onfocus"
    ></text-field>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitForm">Entrar</v-btn>
    </div>
  </form>
</template>

<script>
import { isEmpty, isMin } from "@common/utils/validityUser.js";
import TextField from "@components/TextField.vue";
export default {
  data: () => ({
    name: "",
    username: "Meunome",
    validity: {
      required: (value) => isEmpty(value),
      min: (value) => isMin(value, 2),
    },
  }),
  methods: {
    onfocus(e) {
      e.preventDefault();
    },
    submitForm() {
      const payload = { name: this.name, username: this.username };
      this.$emit("submit", payload);
    },
    convertName: (name) => name.replace(/\s/g, ""),
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
