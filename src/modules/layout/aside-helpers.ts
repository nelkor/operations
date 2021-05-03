import { Assessment } from '@operations/operations-types'

export const asideAssessmentDictionary: Record<Assessment, string> = {
  [Assessment.EXCELLENT]: 'Отлично',
  [Assessment.SATISFACTORILY]: 'Удовл.',
  [Assessment.BADLY]: 'Плохо',
}

export const stringifyYmd = (ymd: number): string => {
  const ymdStr = ymd.toString()

  return `${ymdStr.slice(0, 4)}-${ymdStr.slice(4, 6)}-${ymdStr.slice(6, 8)}`
}
