import { stringifyYmd } from './date-picker'

describe('date-picker', () => {
  it('should stringify correctly', () => {
    expect(stringifyYmd(20210508)).toBe('2021-05-08')
  })
})
