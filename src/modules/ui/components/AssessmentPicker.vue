<template>
  <div class="assessment-picker">
    <button
      v-for="(name, index) in $options.asideAssessmentDictionary"
      :key="index"
      @click="onClick(index)"
      :class="{ active: +index === modelValue }"
    >
      {{ name }}
    </button>
  </div>
</template>

<script>
import { asideAssessmentDictionary } from '@layout/aside-helpers'

export default {
  name: 'AssessmentPicker',
  asideAssessmentDictionary,
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  methods: {
    onClick(index) {
      this.$emit(
        'update:modelValue',
        +index === this.modelValue ? null : +index
      )
    },
  },
}
</script>
