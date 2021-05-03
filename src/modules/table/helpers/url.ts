import { router } from '@/router'
import { Operation } from '@operations/operations-types'
import { currentYmd } from '@/modules/general/ymd'

import { compareFunctions } from './sort'

const READY = 'ready'
const PLANNED = 'planned'

export const defaultUrl = {
  mode: READY,
  sort: Object.keys(compareFunctions)[0],
}

export const sanitizeUrl = (mode: string, sort: string): void => {
  const isModeValid = mode == PLANNED || mode == READY

  const isSortValid = Object.keys(compareFunctions).includes(sort)

  if (!isModeValid || !isSortValid) {
    router.replace({ name: 'table', params: defaultUrl }).then()
  }
}

export const createModeFilter = (
  mode: string
): ((operation: Operation) => boolean) => {
  const today = currentYmd()

  return (operation: Operation) =>
    mode == READY ? operation.date < today : operation.date >= today
}
