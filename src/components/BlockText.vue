<template>
  <div
    contenteditable
    :data-placeholder="placeholder"
    ref="blockText"
    @input="editText"
    @click="initWrite"
    :aria-placeholder="text"
  ></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "v-block-text",
  data: () => ({
    placeholder: "Escreva a partir daqui...",
    text: "",
  }),
  methods: {
    editText({ target }) {
      this.text = target.innerText;
    },
    initWrite() {
      this.$refs.blockText.focus();
    },
    endEdit() {
      this.$refs.blockText.blur();
    },
  },
  computed: {
    ...mapState({
      elements: (state) => state.elements,
    }),
  },
  watch: {
    //
  },
};
</script>

<style lang="sass" scoped>
[contentEditable]:empty:not(:focus):before
  content: attr(data-placeholder)
  cursor: text
  outline: none
  border: none
[contentEditable]:focus-visible, [contentEditable]:focus
  outline: none
  border: none
</style>
