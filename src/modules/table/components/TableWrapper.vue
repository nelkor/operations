<template>
  <div class="loader" :class="{ hidden: dataLoaded }">
    <IconLoad />
  </div>

  <OperationsTable :operations="operations" />

  <div v-if="dataLoaded && !operations.length" class="no-table-items">
    Нет операций
  </div>
</template>

<script>
import { operationToRender } from '@operations/operations-mapper'
import { sanitizeUrl, createModeFilter } from '@table/helpers/url'
import { sortOperations } from '@table/helpers/sort'
import IconLoad from '@ui/icons/IconLoad.vue'

import OperationsTable from './OperationsTable.vue'

export default {
  name: 'AppTable',
  components: {
    IconLoad,
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
