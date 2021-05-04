<template>
  <div class="aside-wrapper" :class="{ open: isAppAsideOpen }">
    <div @click="closeAside" class="aside-bg" />
    <IconCross class="close-aside-cross" />
    <aside class="app-aside" :class="{ disabled: saving }">
      <AsideHead />
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

      <div class="filler" />
      <button class="save-button" :disabled="!isOperationValid" @click="save">
        <IconLoad v-if="saving" />
        <span v-else>Сохранить операцию</span>
      </button>
    </aside>
  </div>
</template>

<script>
import IconLoad from '@ui/icons/IconLoad.vue'
import IconCross from '@ui/icons/IconCross.vue'
import { operationsDictionary } from '@operations/operations-mapper'
import { asideAssessmentDictionary } from '@layout/aside-helpers'

import { stringifyYmd } from '../aside-helpers'
import AsideHead from './AsideHead.vue'

export default {
  name: 'AppAside',
  operationsDictionary,
  asideAssessmentDictionary,
  components: {
    IconCross,
    IconLoad,
    AsideHead,
  },
  data() {
    return {
      saving: false,
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
    isOperationValid() {
      return this.operationType != null && this.date && this.area > 0
    },
  },
  methods: {
    closeAside() {
      if (this.saving) {
        return
      }

      this.$store.commit('layout/setAppAsideOpen', false)
    },
    async save() {
      this.saving = true

      await this.$store.dispatch('operations/saveOperation', {
        id: this.operationId,
        type: this.operationType,
        date: parseInt(this.date.replaceAll('-', '')),
        area: this.area,
        comment: this.comment,
        assessment: this.assessment,
      })

      // По окончанию анимации
      setTimeout(() => {
        this.saving = false
      }, 200)

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
