import { Module } from 'vuex'

import { Operation } from '@operations/operations-types'

import { getOperations, saveOperation } from './field-operations'

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
    addOperation(state, operation: Operation) {
      state.operations.push(operation)
    },
    updateOperation(state, { index, operation }) {
      state.operations.splice(index, 1, operation)
    },
  },
  actions: {
    async loadOperations(ctx) {
      const operations = await getOperations()

      ctx.commit('setOperations', operations)
    },
    async saveOperation(ctx, operation: Operation) {
      const saved = await saveOperation(operation)
      const index = ctx.state.operations.findIndex(op => op.id == saved.id)

      if (index == -1) {
        ctx.commit('addOperation', saved)
      } else {
        ctx.commit('updateOperation', { index, operation: saved })
      }
    },
    takeForEditing(ctx, id) {
      ctx.commit('setEdit', id)
      ctx.commit('layout/setAppAsideOpen', true, { root: true })
    },
  },
}
