import { isNotNil } from '@/libs/utils/functions'

describe('functions Utils', () => {
  it('isNotNil', function () {
    expect(isNotNil(null)).toEqual(false)
    expect(isNotNil(null)).toEqual(false)
    expect(isNotNil('test')).toEqual(true)
    expect(isNotNil(123)).toEqual(true)
  })
})
