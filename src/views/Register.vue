<template>
  <div :class="toggleGrid">
    <v-container class="d-flex align-center px-5 full-height mx-width">
      <div class="d-block siginup">
        <h1 class="h1 font-weight-bold primary--text mt-4 mb-1 line-height-1-2">
          Vamos<br />Entrando...
        </h1>
        <p class="caption font-weight-regular">
          O nome será exibido na parte superior da plataforma, além de dar um
          toque mais pessoal...
        </p>
        <form-register></form-register>
      </div>
    </v-container>
    <v-img
      src="https://source.unsplash.com/random"
      class="bg-desktop"
      v-if="isMobile"
    ></v-img>
  </div>
</template>

<script>
import FormRegister from "@common/components/FormRegister.vue";
export default {
  name: "v-register",
  computed: {
    isMobile() {
      const breakpoints = {
        lg: true,
        xl: true,
        md: true,
        sm: false,
      };
      return breakpoints[this.$vuetify.breakpoint.name];
    },
    toggleGrid() {
      return this.isMobile ? "d-grid" : "d-flex";
    },
  },
  methods: {},
  components: {
    FormRegister,
  },
};
</script>
<style lang="sass" scoped>
.d-grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 100vh
  gap: 0px 0px
  grid-auto-flow: row
  grid-template-areas: "login img img"
.siginup
  grid-area: login

.bg-desktop
  grid-area: img

.line-height-1-2
  line-height: 1.2

.full-height
  height: 100vh

.mx-width
  max-width: 440px
</style>
