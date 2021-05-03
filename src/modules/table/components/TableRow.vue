<template>
  <div class="table-row" @click="onCLick(operation.id)">
    <div class="date">{{ operation.date }}</div>
    <div class="operation">{{ operation.name }}</div>
    <div class="assessment">
      <div class="sign" :class="operation.assessmentColor" />

      <span :class="{ transparent: !operation.hasAssessment }">{{
        operation.assessment
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    operation: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onCLick(id) {
      this.$store.dispatch('operations/takeForEditing', id)
    },
  },
}
</script>
