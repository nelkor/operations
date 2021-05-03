import { Module } from 'vuex'

import { Operation } from '@operations/operations-types'
import { createOperation } from '@operations/operations-helper'

import { getOperations } from './field-operations'

type OperationsState = {
  dataLoaded: boolean
  operations: Operation[]
  edit: Operation | null
}

export const operations: Module<OperationsState, void> = {
  namespaced: true,
  state: {
    dataLoaded: false,
    operations: [],
    edit: null,
  },
  mutations: {
    setOperations(state, operations: Operation[]) {
      state.operations = operations
      state.dataLoaded = true
    },
    setEdit(state, operation: Operation) {
      state.edit = operation
    },
  },
  actions: {
    async loadOperations(ctx) {
      const operations = await getOperations()

      ctx.commit('setOperations', operations)
    },
    takeForEditing(ctx, id) {
      const existingOperation = ctx.state.operations.find(op => op.id == id)

      ctx.commit('setEdit', existingOperation || createOperation())
      ctx.commit('layout/setAppAsideOpen', true, { root: true })
    },
  },
}
