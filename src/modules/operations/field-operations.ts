import { Operation, OperationType, Assessment } from './operations-types'

const RESPONSE_DELAY = 1000

const operations: Operation[] = [
  {
    id: 'f112-o0',
    type: OperationType.PLOWING,
    date: 20180312,
    area: 48.2,
    comment: 'Отлично вспахали',
    assessment: Assessment.EXCELLENT,
  },
  {
    id: 'f112-o1',
    type: OperationType.FERTILIZATION,
    date: 20180314,
    area: 47.8,
    comment: 'Все прошло нормально',
    assessment: Assessment.SATISFACTORILY,
  },
  {
    id: 'f112-o3',
    type: OperationType.BOWLING,
    date: 20180326,
    area: 48.2,
  },
  {
    id: 'f112-o2',
    type: OperationType.RIGGING,
    date: 20180317,
    area: 47.5,
    assessment: Assessment.BADLY,
  },
  {
    id: 'f112-o4',
    type: OperationType.WATERING,
    date: 20180402,
    area: 48.1,
    comment: 'Знатно полили',
    assessment: Assessment.EXCELLENT,
  },
  {
    id: 'f112-o5',
    type: OperationType.HARVESTING,
    date: 20180620,
    area: 48.0,
  },
]

export const getOperations = (): Promise<Readonly<Readonly<Operation>[]>> =>
  new Promise(resolve => {
    setTimeout(() => resolve(operations), RESPONSE_DELAY)
  })

export const saveOperation = (
  operation: Operation
): Promise<Readonly<Operation>> =>
  new Promise(resolve => {
    setTimeout(() => {
      const operationIndex = operation.id
        ? operations.findIndex(o => o.id == operation.id)
        : -1

      const operationToSave: Operation = { ...operation }

      if (operationIndex == -1) {
        operations.push(operationToSave)
      } else {
        operations.splice(operationIndex, 1, operationToSave)
      }

      resolve(operationToSave)
    }, RESPONSE_DELAY)
  })
