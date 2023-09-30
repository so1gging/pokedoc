import { parseQueryParams } from '@/libs/utils/query'

type FetcherType = {
  url: string
  params?: Record<string, any>
}
export default async function getFetcher<T extends Object>({ url, params }: FetcherType) {
  const paramsString = params ? parseQueryParams(params) : undefined
  const res = await fetch(`${url}${paramsString ? `?${paramsString}` : ''}`)
  if (!res.ok) {
    return undefined
  }

  return res.json() as T
}
