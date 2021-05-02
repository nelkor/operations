<template>
  <div class="aside-wrapper" :class="{ open: isAppAsideOpen }">
    <div @click="closeAside" class="aside-bg" />
    <IconCross />
    <aside />
  </div>
</template>

<script>
import IconCross from '@ui/icons/IconCross.vue'

export default {
  name: 'AppAside',
  components: {
    IconCross,
  },
  computed: {
    isAppAsideOpen() {
      return this.$store.state.layout.isAppAsideOpen
    },
  },
  methods: {
    closeAside() {
      this.$store.commit('layout/setAppAsideOpen', false)
    },
  },
}
</script>
