<template>
  <container>
    <block-text></block-text>
  </container>
</template>

<script>
export default {
  name: "Home",

  components: {
    Container: () => import("@common/components/Container.vue"),
    BlockText: () => import("@components/BlockText.vue"),
  },
};
</script>
