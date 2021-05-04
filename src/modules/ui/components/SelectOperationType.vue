<template>
  <label class="select-operation-type">
    <span class="label">Операция</span>
    <span v-if="innerValue === null" class="placeholder select-text">
      Выберите
    </span>
    <select v-model="innerValue" class="select-text">
      <option
        v-for="(name, index) in $options.operationsDictionary"
        :key="index"
        :value="index"
      >
        {{ name }}
      </option>
    </select>
  </label>
</template>

<script>
import { operationsDictionary } from '@operations/operations-mapper'

export default {
  name: 'SelectOperationType',
  operationsDictionary,
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
      if (this.innerValue === null) {
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
