<template>
  <v-app-bar color="#fcb69f" dark>
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Bem-vindo",
    },
  },
  data() {
    return {
      drawer: null,
    };
  },
  mounted() {
    this.drawer = this.openDrawer;
  },
  methods: {
    openDrawer: function () {
      this.$emit("open-drawer");
    },
  },
};
</script>

<style></style>