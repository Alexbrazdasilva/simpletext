<template>
  <div
    contenteditable
    :data-placeholder="placeholder"
    ref="blockText"
    @input="editText"
    :aria-placeholder="text"
  ></div>
</template>

<script>
export default {
  data: () => ({
    placeholder: "Escreva a partir daqui...",
    text: "",
  }),
  methods: {
    editText({ target }) {
      this.text = target.innerText;
    },
    endEdit() {
      this.$refs.blockText.blur();
    },
  },
  watch: {
    text(e) {
      e.match(/\/[[a-z]|[A-Z]|[0-9]]\/\s/) && console.log("Sim, tem uma barra");
    },
  },
};
</script>

<style lang="sass" scoped>
[contentEditable]:empty:not(:focus):before
  content: attr(data-placeholder)
  cursor: text
  outline: none
  border: none
[contentEditable]:focus-visible
  outline: none
  border: none
</style>
