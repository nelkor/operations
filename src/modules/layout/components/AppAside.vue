<template>
  <div class="aside-wrapper" :class="{ open: isAppAsideOpen }">
    <div class="aside-bg" @click="closeAside" />
    <IconCross class="close-aside-cross" />
    <aside class="app-aside" :class="{ disabled: saving }">
      <AsideHead :empty="Boolean(operationId)" />

      <div class="main-data">
        <SelectOperationType v-model="operationType" />

        <div class="second-row">
          <DatePicker v-model="date" class="second-row-item" />
          <AreaInput v-model="area" class="second-row-item" />
        </div>
      </div>

      <textarea v-model="comment" placeholder="Комментарий к операции..." />

      <h3>Качество выполнения операции</h3>
      <div class="assessment-picker-wrapper">
        <AssessmentPicker v-model="assessment" />
      </div>

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
import SelectOperationType from '@ui/components/SelectOperationType.vue'
import DatePicker from '@ui/components/DatePicker.vue'
import AreaInput from '@ui/components/AreaInput.vue'
import AssessmentPicker from '@ui/components/AssessmentPicker.vue'

import AsideHead from './AsideHead.vue'

export default {
  name: 'AppAside',
  components: {
    IconCross,
    IconLoad,
    AsideHead,
    SelectOperationType,
    DatePicker,
    AreaInput,
    AssessmentPicker,
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
        date: this.date,
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
        this.date = operation.date
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
}
</script>
