<template>
  <main>
    <div class="title">
      <h1>Операции на поле 112</h1>
      <IconWheat />
      <span>Пшеница озимая</span>
    </div>

    <nav>
      <div class="links">
        <router-link
          class="table-link"
          :to="{ name: 'table', params: { mode: 'planned', sort } }"
          >Запланированные операции</router-link
        >

        <router-link
          class="table-link"
          :to="{ name: 'table', params: { mode: 'ready', sort } }"
          >Выполненные операции</router-link
        >
      </div>

      <PlusButton @click="openAside" text="Добавить операцию" />
    </nav>

    <router-view />
  </main>
</template>

<script>
import IconWheat from '@ui/icons/IconWheat.vue'
import PlusButton from '@ui/components/PlusButton.vue'

export default {
  name: 'AppMain',
  components: {
    IconWheat,
    PlusButton,
  },
  computed: {
    sort() {
      return this.$route.params.sort
    },
  },
  methods: {
    openAside() {
      this.$store.commit('layout/setAppAsideOpen', true)
    },
  },
}
</script>
