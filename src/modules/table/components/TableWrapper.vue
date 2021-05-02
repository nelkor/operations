<template>
  <div class="loader" :class="{ hidden: dataLoaded }">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle r="4" cx="5" cy="5" />
    </svg>
  </div>

  <OperationsTable :operations="operations" />

  <div class="no-table-items" v-if="dataLoaded && !operations.length">
    Нет операций
  </div>
</template>

<script>
import { operationToRender } from '@operations/operations-mapper'
import { sanitizeUrl, createModeFilter } from '@table/helpers/url'
import { sortOperations } from '@table/helpers/sort'

import OperationsTable from './OperationsTable.vue'

export default {
  name: 'AppTable',
  components: {
    OperationsTable,
  },
  computed: {
    mode() {
      return this.$route.params.mode
    },
    sort() {
      return this.$route.params.sort
    },
    dataLoaded() {
      return this.$store.state.operations.dataLoaded
    },
    operations() {
      const modeFilter = createModeFilter(this.mode)

      return sortOperations(
        this.$store.state.operations.operations.filter(modeFilter),
        this.sort
      ).map(operationToRender)
    },
  },
  created() {
    sanitizeUrl(this.mode, this.sort)

    this.$store.dispatch('operations/loadOperations')
  },
}
</script>
