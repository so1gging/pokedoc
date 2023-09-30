export const parseQueryParams = (obj: Record<string, any>) => {
  const keys = Object.keys(obj)
  return keys.map((key) => `${key}=${obj[key]}`).join('&')
}
