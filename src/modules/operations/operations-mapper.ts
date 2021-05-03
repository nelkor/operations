import { rudString } from 'rud'

import {
  Assessment,
  Operation,
  OperationType,
  RenderOperation,
} from '@operations/operations-types'

export const operationsDictionary: Record<OperationType, string> = {
  [OperationType.PLOWING]: 'Вспашка с оборотом пласта',
  [OperationType.BOWLING]: 'Боронование зяби и паров',
  [OperationType.FERTILIZATION]: 'Внесение удобрений',
  [OperationType.WATERING]: 'Полив',
  [OperationType.RIGGING]: 'Прикатывание',
  [OperationType.HARVESTING]: 'Сбор урожая',
}

const assessmentDictionary: Record<Assessment, string> = {
  [Assessment.EXCELLENT]: 'Отлично',
  [Assessment.SATISFACTORILY]: 'Удовлетворительно',
  [Assessment.BADLY]: 'Плохо',
}

const assessmentColorsDictionary: Record<Assessment, string> = {
  [Assessment.EXCELLENT]: 'positive',
  [Assessment.SATISFACTORILY]: 'neutral',
  [Assessment.BADLY]: 'negative',
}

export const operationToRender = (
  operation: Operation
): Readonly<RenderOperation> => ({
  id: operation.id,
  date: rudString(operation.date),
  name: operationsDictionary[operation.type],
  hasAssessment: operation.assessment != undefined,
  assessment:
    operation.assessment == undefined
      ? 'Нет оценки'
      : assessmentDictionary[operation.assessment],
  assessmentColor:
    operation.assessment == undefined
      ? ''
      : assessmentColorsDictionary[operation.assessment],
})
