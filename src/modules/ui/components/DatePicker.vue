<template>
  <div class="date-picker">
    <span class="label">Дата проведения</span>
    <input v-model="innerValue" type="date" />
  </div>
</template>

<script>
import { stringifyYmd } from '@ui/helpers/date-picker'

export default {
  name: 'DatePicker',
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      innerValue: stringifyYmd(this.modelValue),
    }
  },
  watch: {
    innerValue(value) {
      if (this.innerValue === null) {
        return
      }

      this.$emit('update:modelValue', parseInt(value.replaceAll('-', '')))
    },
    modelValue(value) {
      this.innerValue = stringifyYmd(value)
    },
  },
}
</script>
