<template>
  <v-text-field
    :readonly="readonly"
    :hint="hint"
    :type="type"
    :placeholder="placeholder"
    :label="label"
    :rules="rules"
    :value="value"
    v-bind="properties"
    @click="$emit('click', $event)"
    @input="$emit('input', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @keypress="$emit('keypress', $event)"
  ></v-text-field>
</template>

<script>
export default {
  name: "text-field",
  props: {
    hint: String,
    placeholder: String,
    label: String,
    rules: Array,
    value: String,
    readonly: {
      default: false,
      type: Boolean,
    },
    type: {
      default: "text",
      type: String,
    },
    properties: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>
