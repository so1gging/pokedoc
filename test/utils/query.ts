import { parseQueryParams } from '@/libs/utils/query'

describe('Query Utils', () => {
  test('parseQueryParams', () => {
    expect(parseQueryParams({})).toEqual('')
    expect(parseQueryParams({ param: 123 })).toEqual('param=123')
    expect(parseQueryParams({ param: 123, param2: 133 })).toEqual('param=123&param2=133')
    expect(parseQueryParams({ param: 123, param2: undefined })).toEqual('param=123&param2=undefined')
  })
})
