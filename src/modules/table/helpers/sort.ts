import {
  Assessment,
  Operation,
  OperationType,
} from '@operations/operations-types'

export type SortVariant =
  | 'unsorted'
  | 'date'
  | 'operation'
  | 'assessment'
  | 'date-desc'
  | 'operation-desc'
  | 'assessment-desc'

const operationsOrder = {
  [OperationType.PLOWING]: 1,
  [OperationType.BOWLING]: 2,
  [OperationType.FERTILIZATION]: 3,
  [OperationType.WATERING]: 4,
  [OperationType.RIGGING]: 5,
  [OperationType.HARVESTING]: 6,
}

const assessmentOrder = {
  [Assessment.EXCELLENT]: 3,
  [Assessment.SATISFACTORILY]: 2,
  [Assessment.BADLY]: 1,
}

const getAssessmentSortIndex = (operation: Operation) =>
  operation.assessment == undefined ? 0 : assessmentOrder[operation.assessment]

export const compareFunctions: Record<
  SortVariant,
  (a: Operation, b: Operation) => number
> = {
  'unsorted': () => 0,
  'date': (a, b) => a.date - b.date,
  'operation': (a, b) => operationsOrder[a.type] - operationsOrder[b.type],
  'assessment': (a, b) => getAssessmentSortIndex(a) - getAssessmentSortIndex(b),
  'date-desc': (a, b) => b.date - a.date,
  'operation-desc': (a, b) => operationsOrder[b.type] - operationsOrder[a.type],
  'assessment-desc': (a, b) =>
    getAssessmentSortIndex(b) - getAssessmentSortIndex(a),
}

export const sortOperations = (
  operations: Operation[],
  key: SortVariant
): Operation[] => [...operations].sort(compareFunctions[key])
