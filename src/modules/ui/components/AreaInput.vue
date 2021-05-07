<template>
  <div class="area-input">
    <span class="label">Кол-во га к обработке</span>

    <input
      v-model="innerValue"
      type="number"
      min=".1"
      step=".1"
      placeholder="Задайте"
    />
  </div>
</template>

<script>
export default {
  name: 'AreaInput',
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      innerValue: this.modelValue,
    }
  },
  watch: {
    innerValue(value) {
      if (!value) {
        return
      }

      this.$emit('update:modelValue', +value)
    },
    modelValue(value) {
      this.innerValue = value
    },
  },
}
</script>
