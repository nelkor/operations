<template>
  <div class="aside-wrapper" :class="{ open: isAppAsideOpen }">
    <div @click="closeAside" class="aside-bg" />
    <IconCross />
    <aside class="app-aside">
      <select v-model="operationType">
        <option
          v-for="(name, index) in $options.operationsDictionary"
          :key="index"
          :value="index"
        >
          {{ name }}
        </option>
      </select>

      <input type="date" v-model="date" />
      <input type="number" v-model="area" step=".1" />
      <textarea v-model="comment" />

      <select v-model="assessment">
        <option
          v-for="(name, index) in $options.asideAssessmentDictionary"
          :key="index"
          :value="index"
        >
          {{ name }}
        </option>
      </select>
    </aside>
  </div>
</template>

<script>
import IconCross from '@ui/icons/IconCross.vue'
import { operationsDictionary } from '@operations/operations-mapper'
import { asideAssessmentDictionary } from '@layout/aside-helpers'

import { stringifyYmd } from '../aside-helpers'

export default {
  name: 'AppAside',
  operationsDictionary,
  asideAssessmentDictionary,
  components: {
    IconCross,
  },
  data() {
    return {
      operationType: null,
      date: null,
      area: null,
      comment: null,
      assessment: null,
    }
  },
  computed: {
    isAppAsideOpen() {
      return this.$store.state.layout.isAppAsideOpen
    },
    operationId() {
      return this.$store.state.operations.edit
    },
  },
  methods: {
    closeAside() {
      this.$store.commit('layout/setAppAsideOpen', false)
    },
    setData() {
      const operation = this.$store.state.operations.operations.find(
        operation => operation.id === this.operationId
      )

      if (operation) {
        this.operationType = operation.type
        this.date = stringifyYmd(operation.date)
        this.area = operation.area
        this.comment = operation.comment
        this.assessment = operation.assessment
      } else {
        this.operationType = null
        this.date = null
        this.area = null
        this.comment = null
        this.assessment = null
      }
    },
  },
  watch: {
    isAppAsideOpen: {
      immediate: true,
      handler(value) {
        if (!value) {
          return
        }

        this.setData()
      },
    },
  },
}
</script>
