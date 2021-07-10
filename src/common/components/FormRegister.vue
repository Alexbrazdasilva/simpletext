<template>
  <form>
    <text-field label="Nome" :properties="{ outlined: true }"></text-field>
    <text-field
      label="Username"
      :readonly="true"
      hint="Gerado a partir do nome inserido no primeiro campo"
      :properties="{ outlined: true, disabled: true, persistentHint: true }"
      @focus.prevent="onfocus"
    ></text-field>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <v-btn color="primary">Entrar</v-btn>
    </div>
  </form>
</template>

<script>
import TextField from "@components/TextField.vue";
export default {
  data: () => ({
    //
  }),
  methods: {
    onfocus(e) {
      e.preventDefault();
    },
  },
  components: {
    TextField,
  },
};
</script>
