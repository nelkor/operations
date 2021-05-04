<template>
  <div class="aside-header">
    <h2>Добавление операции</h2>
    <div class="sub">
      <div class="field">
        <IconField />
        <div>
          <div class="thick-title">Поле</div>
          <div class="number">112</div>
        </div>
      </div>

      <div class="culture">
        <div class="name">
          <div class="first-name">Озимая пшеница</div>
          <div class="thick-title">Победа 50</div>
        </div>
        <IconWheat />
      </div>
    </div>
  </div>
</template>

<script>
import IconField from '@ui/icons/IconField.vue'
import IconWheat from '@ui/icons/IconWheat.vue'

export default {
  name: 'AsideHead',
  components: {
    IconField,
    IconWheat,
  },
}
</script>
