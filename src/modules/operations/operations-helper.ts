import { Operation, OperationType } from '@operations/operations-types'
import { currentYmd } from '@/modules/general/ymd'

export const createOperation = (): Operation => ({
  id: '',
  type: OperationType.PLOWING,
  date: currentYmd(),
  area: 0,
})
