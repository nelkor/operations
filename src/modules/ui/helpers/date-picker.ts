export const stringifyYmd = (ymd: number): string => {
  if (!ymd) {
    return ''
  }

  const ymdStr = ymd.toString()

  return `${ymdStr.slice(0, 4)}-${ymdStr.slice(4, 6)}-${ymdStr.slice(6, 8)}`
}
