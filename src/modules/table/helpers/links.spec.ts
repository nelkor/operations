import { getDateSort, getAssessmentClass } from './links'

describe('links', () => {
  it('should return the correct sorting rules', () => {
    expect(getDateSort('unsorted')).toBe('date-desc')
    expect(getDateSort('date-desc')).toBe('date')
    expect(getDateSort('date')).toBe('unsorted')
  })

  it('should return the correct class name', () => {
    expect(getAssessmentClass('unsorted')).toBe('')
    expect(getAssessmentClass('assessment-desc')).toBe('desc')
    expect(getAssessmentClass('assessment')).toBe('asc')
  })

  it('other sorting rules should not be confusing', () => {
    expect(getDateSort('operation')).toBe('date-desc')
    expect(getDateSort('operation-desc')).toBe('date-desc')

    expect(getAssessmentClass('date')).toBe('')
    expect(getAssessmentClass('date-desc')).toBe('')
  })
})
