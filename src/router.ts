import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { defaultUrl } from '@table/helpers/url'
import TableWrapper from '@table/components/TableWrapper.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/:mode/:sort',
    name: 'table',
    component: TableWrapper,
  },

  // unrecognized path
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'table', params: defaultUrl },
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
