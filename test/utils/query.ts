import { parseQueryParams } from '@/libs/utils/query'

describe('Query Utils', () => {
  test('parseQueryParams', () => {
    expect(parseQueryParams({})).equal('')
    expect(parseQueryParams({ param: 123 })).equal('param=123')
    expect(parseQueryParams({ param: 123, param2: 133 })).equal('param=123&param2=133')
    expect(parseQueryParams({ param: 123, param2: undefined })).equal('param=123&param2=undefined')
  })
})
