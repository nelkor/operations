<template>
  <button class="plus-button">
    <IconPlus />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script>
import IconPlus from '@ui/icons/IconPlus.vue'

export default {
  name: 'PlusButton',
  components: {
    IconPlus,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
