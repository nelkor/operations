import { Module } from 'vuex'

import { Operation } from '@operations/operations-types'

import { getOperations } from './field-operations'

type OperationsState = {
  dataLoaded: boolean
  operations: Operation[]
}

export const operations: Module<OperationsState, void> = {
  namespaced: true,
  state: {
    dataLoaded: false,
    operations: [],
  },
  mutations: {
    setOperations(state, operations) {
      state.operations = operations
      state.dataLoaded = true
    },
  },
  actions: {
    async loadOperations(ctx) {
      const operations = await getOperations()

      ctx.commit('setOperations', operations)
    },
  },
}
