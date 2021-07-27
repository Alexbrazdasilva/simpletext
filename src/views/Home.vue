<template>
  <div>
    <app-bar></app-bar>
    <container><router-view /> </container>
  </div>
</template>

<script>
import AppBar from "@common/components/AppBar.vue";
import Container from "@common/components/Container.vue";

export default {
  name: "Home",
  components: {
    Container,
    AppBar,
  },
};
</script>
