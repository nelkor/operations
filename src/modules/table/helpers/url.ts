import { router } from '@/router'
import { Operation } from '@operations/operations-types'

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

const currentYmd = (): number => {
  const now = new Date()

  return +[
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, '0'),
    now.getDate().toString().padStart(2, '0'),
  ].join('')
}

export const createModeFilter = (
  mode: string
): ((operation: Operation) => boolean) => {
  const today = currentYmd()

  return (operation: Operation) =>
    mode == READY ? operation.date < today : operation.date >= today
}
