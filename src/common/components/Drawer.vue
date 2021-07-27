<template>
  <div>
    <v-navigation-drawer
      v-bind:value="drawer"
      v-on:input="$emit('updateDrawer', $event)"
      absolute
      dark
      class="light-blue darken-1"
      height="100%"
      temporary
    >
      <v-list-item class="grey lighten-4">
        <v-list-item-content>
          <v-list-item-title class="title light-blue--text"
            >Time</v-list-item-title
          >
          <v-list-item-subtitle class="light-blue--text"
            >To Work</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="item in drawerItens"
          :key="item.title"
          link
          :to="{ path: item.route }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
    drawerItens: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      key: "value",
    };
  },
  mounted() {},
  methods: {
    logout() {
      //
    },
    handleClickOutside() {
      console.log("aquiii");
    },
  },
};
</script>

<style></style>
