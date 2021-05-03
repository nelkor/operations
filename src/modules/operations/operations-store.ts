import { Module } from 'vuex'

import { Operation } from '@operations/operations-types'

import { getOperations } from './field-operations'

type OperationsState = {
  dataLoaded: boolean
  operations: Operation[]
  edit: string
}

export const operations: Module<OperationsState, void> = {
  namespaced: true,
  state: {
    dataLoaded: false,
    operations: [],
    edit: '',
  },
  mutations: {
    setOperations(state, operations: Operation[]) {
      state.operations = operations
      state.dataLoaded = true
    },
    setEdit(state, id: string) {
      state.edit = id
    },
  },
  actions: {
    async loadOperations(ctx) {
      const operations = await getOperations()

      ctx.commit('setOperations', operations)
    },
    takeForEditing(ctx, id) {
      ctx.commit('setEdit', id)
      ctx.commit('layout/setAppAsideOpen', true, { root: true })
    },
  },
}
