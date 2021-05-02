<template>
  <div class="table-head">
    <router-link :to="dateLink" class="link date" :class="dateClass">
      <span>Дата</span>
      <IconDrop />
    </router-link>
    <router-link
      :to="operationLink"
      class="link operation"
      :class="operationClass"
    >
      <span>Операция</span>
      <IconDrop />
    </router-link>
    <router-link
      :to="assessmentLink"
      class="link assessment"
      :class="assessmentClass"
    >
      <span>Оценка</span>
      <IconDrop />
    </router-link>
  </div>

  <TableRow
    v-for="operation in operations"
    :key="operation.id"
    :operation="operation"
  />
</template>

<script>
import IconDrop from '@ui/icons/IconDrop.vue'
import TableRow from '@table/components/TableRow.vue'

import {
  getDateSort,
  getOperationSort,
  getAssessmentSort,
  getDateClass,
  getOperationClass,
  getAssessmentClass,
} from '../helpers/links'

export default {
  name: 'OperationsTable',
  components: {
    IconDrop,
    TableRow,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    },
  },
  computed: {
    mode() {
      return this.$route.params.mode
    },
    sort() {
      return this.$route.params.sort
    },
    dateLink() {
      return {
        name: 'table',
        params: { mode: this.mode, sort: getDateSort(this.sort) },
      }
    },
    operationLink() {
      return {
        name: 'table',
        params: { mode: this.mode, sort: getOperationSort(this.sort) },
      }
    },
    assessmentLink() {
      return {
        name: 'table',
        params: { mode: this.mode, sort: getAssessmentSort(this.sort) },
      }
    },
    dateClass() {
      return getDateClass(this.sort)
    },
    operationClass() {
      return getOperationClass(this.sort)
    },
    assessmentClass() {
      return getAssessmentClass(this.sort)
    },
  },
}
</script>
