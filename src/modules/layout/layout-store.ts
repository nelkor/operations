import { Module } from 'vuex'

type LayoutState = {
  isAppAsideOpen: boolean
}

export const layout: Module<LayoutState, void> = {
  namespaced: true,
  state: {
    isAppAsideOpen: false,
  },
  mutations: {
    setAppAsideOpen(state, value: boolean) {
      state.isAppAsideOpen = value
    },
  },
}
