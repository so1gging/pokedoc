import { parseQueryParams } from '@/libs/utils/query'
import axios from 'axios'

type FetcherType = {
  path: string
  params?: Record<string, any>
}

const API_URL = process.env.NEXT_PUBLIC_API_URL
export default async function getFetcher<T extends Object>({ path, params }: FetcherType) {
  const paramsString = params ? '?' + parseQueryParams(params) : ''
  const res = await axios.get(`${API_URL}${path}${paramsString}`)

  if (!res) {
    return undefined
  }

  return (await res.data) as Promise<T>
}
