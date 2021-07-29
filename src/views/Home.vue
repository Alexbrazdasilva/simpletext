<template>
  <div>
    <drawer
      title="Note"
      subTitle="My Notes"
      :drawer="drawer"
      :drawerItens="drawerItens"
      @updateDrawer="updateDrawer"
    />
    <app-bar @open-drawer="handleOpenDrawerEvent"></app-bar>
    <container><router-view /> </container>
  </div>
</template>

<script>
import AppBar from "@common/components/AppBar.vue";
import Drawer from "@common/components/Drawer.vue";
import Container from "@common/components/Container.vue";

export default {
  name: "Home",
  components: {
    Container,
    AppBar,
    Drawer,
  },
  data() {
    return {
      drawer: false,
      drawerItens: [
        {
          title: "Notas",
          icon: "mdi-chart-bar-stacked",
          route: "/dashboard/index",
        },
        {
          title: "Lembretes",
          icon: "mdi-sitemap",
          route: "/dashboard/index",
        },
        {
          title: "Categorias",
          icon: "mdi-account-group",
          route: "/dashboard/users",
        },
      ],
    };
  },
  methods: {
    handleOpenDrawerEvent() {
      this.drawer = true;
    },
    updateDrawer(payload) {
      payload ? "" : (this.drawer = false);
    },
  },
};
</script>
