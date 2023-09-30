export const parseQueryParams = (obj: Record<string, any>) => {
  const keys = Object.keys(obj)

  if (keys.length === 0) {
    return undefined
  }

  return keys.map((key) => `${key}=${obj[key]}`).join('&')
}
