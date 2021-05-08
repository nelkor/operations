import {
  Assessment,
  Operation,
  OperationType,
  RenderOperation,
} from '@operations/operations-types'

import { operationToRender } from './operations-mapper'

describe('operations mapper', () => {
  it('should transform correctly', () => {
    const sourceOperation: Operation = {
      id: 'f112-o1',
      type: OperationType.FERTILIZATION,
      date: 20180314,
      area: 47.8,
      comment: 'Все прошло нормально',
      assessment: Assessment.SATISFACTORILY,
    }

    const renderOperation: RenderOperation = {
      id: 'f112-o1',
      name: 'Внесение удобрений',
      date: '14 марта 2018',
      hasAssessment: true,
      assessment: 'Удовлетворительно',
      assessmentColor: 'neutral',
    }

    expect(operationToRender(sourceOperation)).toEqual(renderOperation)
  })
})
