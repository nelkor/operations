<template>
  <AppAside />
  <AppHeader />
  <AppMain />
</template>

<script>
import AppAside from '@layout/components/AppAside.vue'
import AppHeader from '@layout/components/AppHeader.vue'
import AppMain from '@layout/components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppAside,
    AppHeader,
    AppMain,
  },
}
</script>
