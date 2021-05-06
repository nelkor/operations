import { Assessment } from '@operations/operations-types'

export const asideAssessmentDictionary: Record<Assessment, string> = {
  [Assessment.EXCELLENT]: 'Отлично',
  [Assessment.SATISFACTORILY]: 'Удовл.',
  [Assessment.BADLY]: 'Плохо',
}
