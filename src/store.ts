import { createStore } from 'vuex'

import { layout } from '@layout/layout-store'
import { operations } from '@operations/operations-store'

export const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    layout,
    operations,
  },
})
