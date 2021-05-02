import { SortVariant } from './sort'

type LinkClass = '' | 'asc' | 'desc'

const createSortGetter = (asc: SortVariant, desc: SortVariant) => (
  currentSort: SortVariant
): SortVariant => {
  if (currentSort == asc) {
    return 'unsorted'
  }

  return currentSort == desc ? asc : desc
}

const createClassGetter = (asc: SortVariant, desc: SortVariant) => (
  currentSort: SortVariant
): LinkClass => {
  if (currentSort == asc) {
    return 'asc'
  }

  if (currentSort == desc) {
    return 'desc'
  }

  return ''
}

export const getDateSort = createSortGetter('date', 'date-desc')
export const getOperationSort = createSortGetter('operation', 'operation-desc')
export const getAssessmentSort = createSortGetter(
  'assessment',
  'assessment-desc'
)

export const getDateClass = createClassGetter('date', 'date-desc')
export const getOperationClass = createClassGetter(
  'operation',
  'operation-desc'
)
export const getAssessmentClass = createClassGetter(
  'assessment',
  'assessment-desc'
)
