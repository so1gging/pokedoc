import { parseQueryParams } from '@/libs/utils/query'

type FetcherType = {
  path: string
  params?: Record<string, any>
}

const API_URL = process.env.NEXT_PUBLIC_API_URL
export default async function getFetcher<T extends Object>({ path, params }: FetcherType) {
  const paramsString = params ? '?' + parseQueryParams(params) : ''
  const res = await fetch(`${API_URL}${path}${paramsString}`)

  if (!res.ok) {
    return undefined
  }

  return (await res.json()) as Promise<T>
}
