import { alias } from './dev-helpers/alias'

const aliasMapper = Object.entries(alias).reduce((acc, [key, value]) => {
  acc[`${key}/(.*)`] = `${value}/$1`

  return acc
}, {} as Record<string, string>)

export default {
  verbose: true,
  moduleNameMapper: {
    '.vue$': '<rootDir>/dev-helpers/empty.ts',
    ...aliasMapper,
  },
}
